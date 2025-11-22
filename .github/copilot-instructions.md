# Copilot Instructions for Preact Test App

## Architecture Overview
Preact-based component library with Storybook integration. Components organized in `src/components/` with category subfolders (`layout/`, `app/`). Each component folder contains:
- `Component.tsx`: Main component (use `memo` for optimization)
- `Component.test.tsx`: Unit tests using @testing-library/preact
- `Component.stories.tsx`: Storybook stories
- `index.ts`: Barrel export

Main app in `src/app.tsx` composes components from `src/components/index.ts`.

## Key Patterns
- **Component Structure**: Use `memo` from `preact/compat` for all components. Use `useCallback` for event handlers. Export as named const with `displayName`.
- **Props**: Use TypeScript interfaces for props. Use `className` (not `class`) for consistency.
- **Hooks**: Import from `preact/hooks`. Use `useCallback` for memoized callbacks, `useState` with functional updates.
- **Accessibility**: Always add ARIA labels, semantic HTML (`role`, `aria-label`), and `loading="lazy"` for images.
- **Testing**: Use `renderWithProviders` from `src/test/preact.tsx`. Follow @testing-library patterns with `screen` and `userEvent`.
- **Styling**: BEM methodology with CSS in `src/app.css` or component-specific files. Use CSS custom properties from `src/index.css`.

## TypeScript Configuration
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- React types mapped to Preact via `tsconfig.app.json` paths
- `jsx: "react-jsx"` with `jsxImportSource: "preact"`

## Workflows
- **Development**: `npm run dev` (Vite dev server)
- **Testing**: `npm test` (Vitest), `npm run test:coverage` for coverage
- **Storybook**: `npm run storybook` (port 6006, fallback 6008)
- **Linting**: `npm run lint:fix` (auto-fix ESLint)
- **Type Check**: `npm run type-check` (TypeScript validation)

## Storybook Configuration
- Full-width layout: `.storybook/preview.tsx` uses `layout: 'padded'`
- Custom CSS in `.storybook/preview-head.html` and `.storybook/manager-head.html` for full-width display
- Decorators provide app context with CSS custom properties

## Conventions
- Import components via barrel exports: `import { Counter } from './components'`
- Component naming: PascalCase, folder matches component name
- Constants: Use `src/constants/app.ts` for app metadata
- State management: Local state with hooks; no global state library

## Integration Points
- Preact compat layer (`preact/compat`) for React ecosystem (Storybook, testing library)
- Vite aliases and build-time globals: `__APP_NAME__`, `__APP_VERSION__`
- CSS custom properties: `--pta-color-*` for theming</content>
<parameter name="filePath">/home/prachwal/src/preact/preact-test-app-01/.github/copilot-instructions.md