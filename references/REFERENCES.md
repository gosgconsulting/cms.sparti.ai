# References and Tech Stack Documentation

This folder contains reference implementations, code borrowed from other applications, and documentation of chosen tech stack practices for the Sparti CMS project.

## Tech Stack Choices

### Frontend Framework
- **React 18+** with TypeScript
- **Hooks-based architecture** for state management
- **CSS-in-JS** with styled-components approach

### Core Technologies
- **TypeScript** for type safety and better developer experience
- **DOM Manipulation** using native browser APIs
- **Event System** for real-time editing feedback

### Architecture Patterns
- **Component Composition** pattern for flexible UI building
- **Provider Pattern** for global state management
- **Hook Pattern** for reusable logic
- **Plugin Architecture** for extensibility

## Reference Implementations

### Visual Editor Patterns
- Click-to-select element detection
- Real-time content editing with visual feedback
- Undo/redo system implementation
- Responsive design patterns

### CMS Architecture
- Component-based content management
- Admin dashboard patterns
- User authentication and authorization
- Content versioning and history

## Code Sources and Attribution

*Document any code borrowed from other applications here*

### External Libraries Referenced
- React ecosystem best practices
- TypeScript configuration patterns
- Modern CSS techniques

## Best Practices Established

### File Organization
- Separate core CMS from demo/development files
- Component-based folder structure
- Clear separation of concerns

### Naming Conventions
- PascalCase for React components
- camelCase for functions and variables
- kebab-case for CSS classes with `sparti-` prefix

### Code Quality
- TypeScript strict mode enabled
- Consistent import/export patterns
- Comprehensive type definitions

## Integration Guidelines

### For New Websites
1. Copy the `Sparti CMS/` folder to your project
2. Import the main SpartiCMS component
3. Wrap your application with the provider
4. Configure based on your needs

### Customization Patterns
- Theme customization through CSS variables
- Component override patterns
- Plugin extension points

## Performance Considerations

### Optimization Strategies
- Lazy loading for admin components
- Efficient DOM manipulation
- Minimal bundle size impact
- Tree-shaking friendly exports

### Browser Compatibility
- Modern browser support (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Progressive enhancement approach
- Graceful degradation for older browsers
