import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

const REMOTE_TYPES_URL = process.env.REMOTE_TYPES_URL || 'http://localhost:3002/types';

const generateTypeDefinitions = async () => {
  try {
    const response = await axios.get(REMOTE_TYPES_URL);
    const declarations = response.data;

    fs.writeFileSync(
      path.resolve(__dirname, '../src/declarations.d.ts'),
      declarations
    );

    console.log('Type definitions generated successfully!');
  } catch (error) {
    console.error('Error generating type definitions:', error);
    process.exit(1);
  }
};

generateTypeDefinitions(); 