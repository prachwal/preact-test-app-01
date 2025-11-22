# SCSS Architecture

Modern SCSS structure with encapsulation, modular design, and single entry point.

## Structure

```text
styles/
├── abstracts/          # Variables, mixins, functions (no CSS output)
│   ├── _colors.scss    # Color maps for light/dark themes
│   ├── _variables.scss # Typography, spacing, breakpoints
│   ├── _mixins.scss    # Reusable mixins
│   └── _index.scss     # Abstracts barrel export
├── base/               # Base styles and resets
│   ├── _reset.scss     # CSS custom properties generation
│   ├── _typography.scss # Typography base styles
│   ├── _layout.scss    # Layout fundamentals
│   ├── _buttons.scss   # Button base styles
│   └── _index.scss     # Base barrel export
├── layout/             # Layout components
│   ├── _header.scss    # Header layout
│   ├── _sidebar.scss   # Sidebar layout
│   ├── _dashboard.scss # Dashboard layout
│   ├── _footer.scss    # Footer layout
│   └── _index.scss     # Layout barrel export
├── components/         # UI components
│   ├── _app.scss       # App component
│   ├── _counter.scss   # Counter component
│   ├── _card.scss      # Card component
│   └── _index.scss     # Components barrel export
├── ui/                 # UI-specific styles
│   ├── _button.scss    # Button UI styles
│   └── _index.scss     # UI barrel export
└── main.scss           # Single entry point

```

## Key Features

### Modern @use/@forward

- Uses `@use` and `@forward` instead of deprecated `@import`
- Proper namespace management
- No global scope pollution

### Color Management

Colors are defined in `abstracts/_colors.scss` using SCSS maps:

```scss
$colors-dark: (
  'background': #242424,
  'surface': #1a1a1a,
  'text': rgba(255, 255, 255, 0.87), // ...
);

$colors-light: (
  'background': #ffffff,
  'surface': #f5f5f7,
  'text': #213547, // ...
);
```

CSS custom properties are generated automatically using the `generate-color-vars` mixin:

```scss
:root {
  @include generate-color-vars($colors-primary);
  @include generate-color-vars($colors-dark);
}
```

### Variable Encapsulation

- SCSS variables (with `!default`) for compile-time configuration
- CSS custom properties for runtime theming
- Clear separation of concerns

### Component Modularity

Each component has its own SCSS file mirroring the TSX structure:

- `_app.scss` → `app.tsx`
- `_counter.scss` → `Counter/Counter.tsx`
- `_header.scss` → `Header/Header.tsx`

### BEM Methodology

```scss
.header {
  &__logos {
    // Header logos styles
  }
}

.footer {
  &__content {
    // Footer content styles
  }

  &__copyright-text {
    // Footer copyright text styles
  }
}
```

## Build Process

### Vite Configuration

- SCSS compilation via Vite
- PostCSS with Autoprefixer
- CSS code splitting
- Asset optimization

```typescript
// vite.config.ts
css: {
  postcss: './postcss.config.js',
},
build: {
  cssCodeSplit: true,
}
```

### PostCSS

Autoprefixer ensures cross-browser compatibility:

```javascript
// postcss.config.js
export default {
  plugins: {
    autoprefixer: {},
  },
};
```

## Usage

### Single Entry Point

Styles are imported once in `main.tsx`:

```typescript
import './styles/main.scss';
```

### No Component Imports

SCSS files are NOT imported in TSX files. All styles are bundled through `main.scss`.

### Accessing Variables

Use CSS custom properties in components:

```tsx
<div style={{ color: 'var(--pta-color-primary)' }}>
```

### Overriding Variables

Override SCSS variables by updating files in `abstracts/`:

```scss
// abstracts/_variables.scss
$spacing-lg: 2.5rem !default; // Can be overridden
```

Override CSS custom properties at runtime:

```css
:root {
  --pta-color-primary: #your-color;
}
```

## Development

### Adding New Colors

1. Add to color maps in `abstracts/_colors.scss`
2. They'll auto-generate as CSS custom properties
3. Use via `var(--pta-color-{name})`

### Adding New Components

1. Create `_component-name.scss` in `components/`
2. Add to `components/_index.scss`: `@forward 'component-name';`
3. Use BEM naming: `.component-name { &__element { } }`

### Adding New Mixins

1. Add to `abstracts/_mixins.scss`
2. Use `@use 'variables' as *;` if you need variables
3. Access via `@include mixin-name()`

### Responsive Design

Use the `respond-to` mixin:

```scss
.component {
  padding: 2rem;

  @include respond-to('sm') {
    padding: 1rem;
  }
}
```

Breakpoints: `xs` (480px), `sm` (768px), `md` (1024px), `lg` (1200px)

## Best Practices

1. **Use `@use` instead of `@import`** for proper encapsulation
2. **Use `@forward` in index files** to create module boundaries
3. **Prefix SCSS partials with underscore** (`_colors.scss`)
4. **Use `!default` for variables** to allow overrides
5. **Generate CSS vars with loops** instead of manual declaration
6. **Keep abstracts output-free** (no CSS generated)
7. **Follow BEM for naming** (`.block__element--modifier`)
8. **Use fluid typography** with `clamp()` for responsiveness
9. **Leverage mixins** for repeated patterns
10. **Single entry point** (`main.scss`) for all imports
