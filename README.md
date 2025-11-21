# Preact Test Application

A modern, lightweight frontend application built with Preact, TypeScript, and Vite. This project serves as a test bed for exploring Preact capabilities and best practices.

## Features

- **Lightweight Framework**: Built with Preact (3kB core) for optimal performance
- **Type Safety**: Full TypeScript integration with strict type checking
- **Modern Build Tool**: Powered by Vite for fast development and optimized builds
- **Documentation**: Automated API documentation generation with TSDoc
- **Code Quality**: ESLint and Prettier for consistent code standards
- **Testing**: Vitest for unit tests and Playwright for E2E testing

## Tech Stack

- **Frontend**: Preact X
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: SCSS with CSS modules
- **Documentation**: TSDoc with Markdown theme
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier
- **Testing**: Vitest + Playwright

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd preact-test-app-01

# Install dependencies
npm install

# Start development server
npm run dev

# Generate documentation
npm run docs:generate
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking

# Testing
npm test             # Run unit tests
npm run test:ui      # Run tests with UI
npx playwright test  # Run E2E tests

# Documentation
npm run docs:generate    # Generate API documentation
npm run docs:serve       # Serve documentation locally
npm run docs:clean       # Clean documentation directory
npm run docs:watch       # Watch for changes and regenerate docs
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── index.ts        # Component exports
├── hooks/              # Custom Preact hooks
│   └── index.ts        # Hook exports
├── pages/              # Page-level components
│   ├── App/            # Main application page
│   └── index.ts        # Page exports
├── styles/             # Global styles and theming
│   ├── _colors.scss    # Color definitions
│   ├── _themes.scss    # CSS custom properties
│   ├── global.scss     # Global styles
│   └── index.ts        # Styles exports
├── types/              # TypeScript type definitions
│   ├── types.ts        # Application types
│   └── index.ts        # Types exports
├── utils/              # Utility functions
├── app.tsx             # Main app component
└── main.tsx            # Application entry point
```

## Documentation

This project includes comprehensive API documentation generated with TSDoc. The documentation includes:

- Component API reference
- Hook documentation
- Type definitions
- Usage examples

### Generating Documentation

```bash
# Generate documentation
npm run docs:generate

# Serve documentation locally
npm run docs:serve

# Watch for changes
npm run docs:watch
```

The generated documentation will be available in the `docs/` directory.

## Development Guidelines

### Code Style

- Follow TypeScript strict mode guidelines
- Use Preact functional components with hooks
- Implement proper accessibility attributes
- Use CSS modules for component styling
- Follow the established naming conventions

### Documentation

All public APIs should be documented using TSDoc comments:

```typescript
/**
 * Component description
 * 
 * @remarks
 * Additional details about the component
 * 
 * @example
 * ```tsx
 * <Component prop="value" />
 * ```
 * 
 * @param props - Component properties
 * @returns Rendered component
 */
export const Component: ComponentType<Props> = (props) => {
  // Implementation
};
```

### Preact Patterns

- Use `h` and `Fragment` from `preact` for JSX
- Leverage Preact hooks for state management
- Implement proper error boundaries
- Use memoization for performance optimization

## Contributing

1. Follow the established code style and patterns
2. Ensure all tests pass
3. Update documentation for any public API changes
4. Use conventional commit messages
5. Add TSDoc comments for new public APIs

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Resources

- [Preact Documentation](https://preactjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TSDoc](https://typedoc.org/guides/doccomments/)
- [Preact Testing Library](https://testing-library.com/docs/preact-testing-library/intro/)

## Performance

This application is optimized for performance with:

- Code splitting with dynamic imports
- Lazy loading of non-critical components
- Optimized bundle sizes with Preact's lightweight nature
- Efficient state management with Preact hooks
- CSS module scoping to prevent style conflicts