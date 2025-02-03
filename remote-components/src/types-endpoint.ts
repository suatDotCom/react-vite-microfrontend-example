import { Project } from 'ts-morph';
import * as path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';

const project = new Project();

const federationConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../federation.json'), 'utf-8'));

export const getTypeDefinitions = () => {
  try {
    let declarations = '';

    Object.entries(federationConfig.exposes).forEach(([key, value]) => {
      const componentName = key.replace('./', '');
      const componentPath = String(value);
      
      const sourceFile = project.addSourceFileAtPath(
        path.resolve(__dirname, '..', componentPath + '.tsx')
      );
      
      const interfaces = sourceFile.getInterfaces();
      const propsInterface = interfaces.find(i => i.getName().includes('Props'));
      
      if (propsInterface) {
        declarations += `
declare module 'remoteComponents/${componentName}' {
  ${propsInterface.getText()}
  const ${componentName}: React.ComponentType<${propsInterface.getName()}>;
  export default ${componentName};
}
`;
      }
    });

    return declarations.trim();
  } catch (error) {
    console.error('Error generating type definitions:', error);
    return '';
  }
};

const app = express();

// CORS ayarları
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/types', (_req: Request, res: Response) => {
  try {
    const types = getTypeDefinitions();
    res.setHeader('Content-Type', 'text/plain');
    res.send(types);
  } catch (error) {
    console.error('Error serving types:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = Number(process.env.TYPES_PORT) || 3002;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Types endpoint listening at http://${HOST}:${PORT}`);
}); 