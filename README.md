# Sparti Builder - Visual Editor Plugin

A powerful visual content editor plugin that can be integrated into any React application, providing click-to-edit functionality similar to Pinegrow's visual builder.

## Features

✅ **Click-to-Select Elements** - Click any element on the page to select and edit it
✅ **Real-time Content Editing** - Edit text content, colors, and styles instantly
✅ **Visual Selection Indicators** - Clear visual feedback for selected and hovered elements
✅ **Undo/Redo System** - Full history tracking with undo/redo capabilities
✅ **Responsive Design** - Works on desktop and mobile devices
✅ **Plugin Architecture** - Easy to integrate into any Lovable project

## Quick Start

### 1. Installation
The plugin is already included in this project. To use it in other Lovable projects:

```bash
# Copy the sparti-builder folder to your project root
cp -r sparti-builder /path/to/your/project/
```

### 2. Integration
Wrap your app with the SpartiBuilder component:

```tsx
import { SpartiBuilder } from '../sparti-builder';

function App() {
  return (
    <SpartiBuilder config={{ enabled: true, toolbar: true, autoDetect: true }}>
      <YourAppContent />
    </SpartiBuilder>
  );
}
```

### 3. Usage
1. Click the "Edit with Sparti Builder" button in the top toolbar
2. Click on any element to select it
3. Edit content, colors, and styles in the right panel
4. Click "Save" to keep changes or "X" to exit edit mode

## Configuration

```tsx
interface SpartiBuilderConfig {
  enabled?: boolean;     // Enable/disable the plugin
  toolbar?: boolean;     // Show/hide the top toolbar
  autoDetect?: boolean;  // Auto-detect elements on hover
}
```

## Core Components

### SpartiBuilder
Main wrapper component that provides the editing environment.

### SpartiToolbar  
Fixed top toolbar with edit button and controls.

### ElementSelector
Handles click-to-select functionality and element detection.

### ContentEditPanel
Right-side panel for editing selected elements.

### EditingOverlay
Visual indicators for selected and hovered elements.

## Core Libraries

### composer.ts
Component composition system with drag-drop capability (converted from pg.composer.js).

### query.ts  
DOM manipulation and node management system (converted from pg-query.js).

### preview-player.ts
Real-time preview system with event handling (converted from pg.page-view-player.js).

## Hooks

### useSpartiEditor
Custom hook providing editing functionality:

```tsx
const {
  selectedElement,
  isEditing, 
  selectElement,
  updateContent,
  updateStyle,
  undo,
  redo,
  canUndo,
  canRedo
} = useSpartiEditor();
```

## Brand Style Guidelines

Sparti Builder follows a clean, modern design system optimized for professional visual editing tools.

### Design Principles
- **Clarity First**: Clean interfaces that don't distract from content creation
- **Accessibility**: High contrast ratios and keyboard navigation support
- **Consistency**: Unified visual language across all components
- **Performance**: Lightweight styles that don't impact site performance

### Color Palette

#### Primary Colors
- **Primary Blue**: `#3b82f6` - Main action buttons, selections, focus states
- **Primary Blue Hover**: `#2563eb` - Hover states for primary actions
- **Success Green**: `#10b981` - Save actions, success states
- **Success Green Hover**: `#059669` - Hover states for success actions

#### Neutral Colors
- **White**: `#ffffff` - Panel backgrounds, button text
- **Gray 50**: `#f9fafb` - Light backgrounds, panel headers
- **Gray 200**: `#e5e7eb` - Borders, dividers
- **Gray 300**: `#d1d5db` - Input borders, inactive states
- **Gray 500**: `#6b7280` - Secondary text, placeholders
- **Gray 700**: `#374151` - Primary text
- **Gray 900**: `#111827` - Headings, high emphasis text

#### Dark Mode Colors
- **Dark Background**: `#1f2937` - Main dark backgrounds
- **Dark Panel**: `#111827` - Panel backgrounds in dark mode
- **Dark Border**: `#374151` - Borders in dark mode
- **Dark Input**: `#374151` - Input backgrounds in dark mode
- **Dark Border Secondary**: `#4b5563` - Secondary borders in dark mode

### Typography

#### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

#### Font Sizes
- **Large**: `1rem` (16px) - Main headings, toolbar brand
- **Medium**: `0.875rem` (14px) - Body text, form labels, buttons
- **Small**: `0.8125rem` (13px) - Small buttons, secondary text
- **Extra Small**: `0.75rem` (12px) - Element labels, helper text

#### Font Weights
- **Semibold**: `600` - Headings, toolbar brand
- **Medium**: `500` - Labels, buttons, emphasized text
- **Normal**: `400` - Body text, form inputs

### Spacing System

#### Padding/Margin Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.375rem` (6px)
- **md**: `0.5rem` (8px)
- **lg**: `0.75rem` (12px)
- **xl**: `1rem` (16px)
- **2xl**: `1.5rem` (24px)

#### Component Spacing
- **Button Padding**: `0.5rem 1rem` (8px 16px)
- **Small Button Padding**: `0.375rem 0.75rem` (6px 12px)
- **Input Padding**: `0.5rem` (8px) for inputs, `0.75rem` (12px) for textareas
- **Panel Padding**: `1rem` (16px)
- **Section Margin**: `1.5rem` (24px) bottom

### Border Radius
- **Small**: `0.25rem` (4px) - Element labels
- **Medium**: `0.375rem` (6px) - Buttons, inputs, panels
- **Large**: `0.5rem` (8px) - Cards, major containers

### Shadows
- **Toolbar Shadow**: `0 4px 12px rgba(0, 0, 0, 0.15)`
- **Panel Shadow**: `-4px 0 12px rgba(0, 0, 0, 0.15)` (right panel)
- **Dropdown Shadow**: `0 4px 12px rgba(0, 0, 0, 0.15)`
- **Focus Shadow**: `0 0 0 2px rgba(59, 130, 246, 0.2)`

### Interactive States

#### Buttons
- **Primary**: Blue background, white text
- **Primary Hover**: Darker blue background
- **Ghost**: Transparent background, gray text, gray border
- **Ghost Hover**: Light gray background
- **Outline**: Transparent background, gray text and border
- **Outline Hover**: Light gray background

#### Form Elements
- **Default**: White background, gray border
- **Focus**: Blue border, blue focus ring
- **Dark Mode**: Dark gray background, darker borders

### Layout Guidelines

#### Z-Index Hierarchy
- **Toolbar**: `2147483647` (highest priority)
- **Edit Panel**: `2147483646`
- **Dropdowns**: `2147483645`
- **Element Labels**: `2147483642`
- **Selection Overlay**: `2147483641`
- **Hover Overlay**: `2147483640`

#### Responsive Breakpoints
- **Mobile**: `max-width: 768px`
  - Toolbar height: `60px`
  - Edit panel: Full width, bottom half of screen
  - Reduced padding and font sizes

#### Panel Dimensions
- **Toolbar Height**: `80px` (desktop), `60px` (mobile)
- **Edit Panel Width**: `320px` (desktop), `100%` (mobile)
- **Edit Panel Height**: `calc(100vh - 80px)` (desktop), `50vh` (mobile)

### Accessibility Features
- **High Contrast Support**: Thicker borders and enhanced contrast ratios
- **Reduced Motion**: Disabled transitions and animations when requested
- **Keyboard Navigation**: Focus indicators and logical tab order
- **Screen Reader Support**: Semantic HTML and ARIA labels

### CSS Class Naming Convention
All Sparti Builder classes use the `sparti-` prefix to avoid conflicts:
- **Components**: `.sparti-toolbar`, `.sparti-edit-panel`
- **Elements**: `.sparti-btn`, `.sparti-edit-input`
- **Modifiers**: `.sparti-btn-primary`, `.sparti-btn-ghost`
- **States**: `.sparti-hover-overlay`, `.sparti-selection-overlay`

### Usage Guidelines
- Always use the predefined color variables and spacing scale
- Maintain consistent border radius across similar components
- Follow the z-index hierarchy to prevent layering issues
- Test all components in both light and dark modes
- Ensure mobile responsiveness for all new components
- Use semantic HTML elements with appropriate ARIA attributes

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+ 
- ✅ Safari 14+
- ✅ Edge 90+

## Development

### File Structure
```
sparti-builder/
├── components/           # React components
│   ├── admin/           # CMS admin components
│   ├── editors/         # Element-specific editors
│   ├── models/          # Component models for parsing
│   ├── SpartiBuilder.tsx
│   ├── SpartiBuilderProvider.tsx  
│   ├── SpartiToolbar.tsx
│   ├── ElementSelector.tsx
│   ├── EditingOverlay.tsx
│   └── ContentEditPanel.tsx
├── core/                # Core libraries (TypeScript)
│   ├── composer.ts
│   ├── query.ts  
│   ├── element-detector.ts
│   └── preview-player.ts
├── hooks/               # Custom hooks
│   └── useSpartiEditor.ts
├── styles/              # Styling systems
│   ├── admin-styles.ts
│   └── sparti-styles.ts
├── types/               # TypeScript definitions
│   ├── admin.ts
│   └── index.ts
├── demo/                # Demo page (excluded from production)
│   ├── index.html
│   ├── styles.css
│   ├── demo.js
│   └── server.js
├── references/          # Plugin analysis references
├── visualbuilder.md     # Architecture documentation
├── index.ts            # Main exports
└── README.md           # This file
```

### Demo Page

A comprehensive demo showcasing Sparti Builder's capabilities is available in the `/demo` folder:

- **Modern Landing Page**: Demonstrates visual editing on a real-world design
- **Interactive Elements**: Click-to-edit functionality with visual feedback
- **Animations**: Smooth transitions and modern UI interactions
- **Video Integration**: Background video and media handling
- **Responsive Design**: Mobile-optimized layout

#### Running the Demo

```bash
# Start the demo server
cd demo
node server.js

# Visit in browser
open http://localhost:3000/demo/
```

**⚠️ Production Exclusion**: Demo files are automatically excluded from production builds via `.gitignore` and should not be deployed to production environments.

## Roadmap

🔄 **Phase 1 Complete**: Foundation & Visual Builder Core
- ✅ Plugin structure and integration
- ✅ Element selection and basic editing
- ✅ Visual overlays and indicators
- ✅ Content editing panel

🎯 **Phase 2**: Enhanced Editing Features
- [ ] Image replacement and upload
- [ ] Advanced styling controls
- [ ] Typography controls
- [ ] Layout editing (margins, padding)

🎯 **Phase 3**: Advanced Features  
- [ ] Component templates
- [ ] Export functionality
- [ ] Multi-device preview
- [ ] Animation editor

## Contributing

1. Make changes in the `sparti-builder/` folder
2. Test across different page layouts
3. Ensure mobile compatibility
4. Update documentation

## License

Part of the Lovable development environment. Contact Lovable for usage rights.