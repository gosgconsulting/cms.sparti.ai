# Sparti CMS - Visual Content Management System

A powerful visual content management system that can be integrated into any website, providing click-to-edit functionality and real-time content management.

## Overview

Sparti CMS is the core implementation of the Sparti Builder visual editor, designed to be integrated into multiple websites and applications. This package contains all the essential components, hooks, and utilities needed to add visual editing capabilities to any web project.

## Features

✅ **Click-to-Edit Interface** - Click any element to edit content directly on the page
✅ **Real-time Visual Editing** - Instant content updates with visual feedback
✅ **Component-based Architecture** - Modular design for easy integration
✅ **TypeScript Support** - Full type safety and IntelliSense
✅ **Responsive Design** - Works across all device sizes
✅ **Admin Dashboard** - Complete content management interface

## Installation

```bash
# Copy the Sparti CMS folder to your project
cp -r "Sparti CMS" /path/to/your/project/

# Or install as a package (when published)
npm install @sparti/cms
```

## Quick Start

```tsx
import { SpartiCMS } from './Sparti CMS';

function App() {
  return (
    <SpartiCMS config={{ enabled: true, adminMode: false }}>
      <YourWebsiteContent />
    </SpartiCMS>
  );
}
```

## Core Components

### Main Components
- **SpartiCMS** - Main wrapper component
- **SpartiToolbar** - Top editing toolbar
- **ContentEditPanel** - Side panel for content editing
- **ElementSelector** - Click-to-select functionality

### Admin Components
- **AdminDashboard** - Complete admin interface
- **AccountManager** - User and account management
- **AdminSidebar** - Navigation for admin features

### Editor Components
- **ButtonEditor** - Button-specific editing controls
- **ImageEditor** - Image upload and editing
- **TextEditor** - Rich text editing capabilities
- **ContainerEditor** - Layout and container controls

## Core Libraries

- **composer.ts** - Component composition system
- **query.ts** - DOM manipulation utilities
- **element-detector.ts** - Smart element detection
- **preview-player.ts** - Real-time preview system

## Integration Guide

### Basic Integration
```tsx
import { SpartiCMS, useSpartiEditor } from './Sparti CMS';

const { selectElement, updateContent, isEditing } = useSpartiEditor();
```

### Admin Mode
```tsx
<SpartiCMS config={{ 
  enabled: true, 
  adminMode: true,
  toolbar: true 
}}>
  <YourContent />
</SpartiCMS>
```

## File Structure

```
Sparti CMS/
├── components/          # React components
│   ├── admin/          # Admin interface components
│   ├── editors/        # Content editor components
│   ├── models/         # Data models
│   └── *.tsx          # Core UI components
├── core/               # Core functionality
│   ├── composer.ts     # Component system
│   ├── query.ts        # DOM utilities
│   ├── element-detector.ts
│   └── preview-player.ts
├── hooks/              # React hooks
│   └── useSpartiEditor.ts
├── styles/             # Styling system
│   ├── admin-styles.ts
│   └── sparti-styles.ts
├── types/              # TypeScript definitions
├── index.ts           # Main exports
├── types.ts           # Global types
└── README.md          # This file
```

## Configuration

```tsx
interface SpartiCMSConfig {
  enabled: boolean;        // Enable/disable CMS
  adminMode: boolean;      // Admin interface mode
  toolbar: boolean;        // Show editing toolbar
  autoDetect: boolean;     // Auto-detect editable elements
  theme: 'light' | 'dark'; // UI theme
}
```

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## License

Part of the Sparti ecosystem. Contact for usage rights.
