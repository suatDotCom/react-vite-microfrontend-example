# React Micro Frontend Component Library

This project is a micro frontend component library developed using React and TypeScript. It provides modern and reusable UI components.

## 🚀 Features

- 🎨 Modern and elegant design
- 📱 Fully responsive design support
- ♿ Accessibility standards compliant
- 🔧 Easily customizable components
- 📦 TypeScript support
- 🎯 Fast development experience with Vite

## 📦 Available Components

### General Components
- **Button**: Buttons in different sizes with Primary, Secondary, and Outline variants
- **Card**: Cards in Default, Elevated, and Outlined styles

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Styled Components
- Storybook (for component documentation)

## 🚀 Installation

1. Clone the project:
\`\`\`bash
git clone [repo-url]
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Start the development server:
\`\`\`bash
# To run only the host application
npm run dev
# or
yarn dev

# To run both host and remote applications simultaneously
npm run dev:all
# or
yarn dev:all
\`\`\`

## 💻 Usage

Detailed examples and usage guides for each component are available on the main page. To integrate components into your project:

\`\`\`typescript
import { Button, Card } from 'remoteComponents/Button';

// Button Usage
<Button variant="primary" size="medium">
  Click
</Button>

// Card Usage
<Card 
  title="Example Card" 
  variant="elevated"
  padding="medium"
>
  Card content
</Card>
\`\`\`

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'feat: Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.





