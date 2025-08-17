# Sparti Builder - Build Documentation for AI Tools

This document provides comprehensive instructions for AI development tools (like Lovable, Replit, etc.) to build, extend, and integrate Sparti Builder's CMS functionality.

## 🎯 Overview

Sparti Builder is a universal visual editor plugin with an integrated CMS dashboard. It works on any React application and provides:
- **Visual Editor**: Click-to-edit functionality for any website element
- **CMS Dashboard**: Admin interface for managing pages, forms, and user accounts
- **Database Ready**: Designed for PostgreSQL/Supabase integration

## 📁 Project Structure

```
sparti-builder/
├── components/           # React components
│   ├── admin/           # CMS admin dashboard components
│   │   ├── AdminDashboard.tsx    # Main dashboard layout
│   │   ├── AdminSidebar.tsx      # Navigation sidebar
│   │   ├── PagesManager.tsx      # Pages management interface
│   │   ├── FormsManager.tsx      # Forms management interface
│   │   └── AccountManager.tsx    # User account management
│   ├── editors/         # Element-specific editors
│   │   ├── ButtonEditor.tsx      # Button editing controls
│   │   ├── TextEditor.tsx        # Text editing controls
│   │   ├── ImageEditor.tsx       # Image editing controls
│   │   ├── LinkEditor.tsx        # Link editing controls
│   │   └── VideoEditor.tsx       # Video editing controls
│   ├── SpartiBuilder.tsx         # Main wrapper component
│   ├── SpartiBuilderProvider.tsx # Context provider
│   ├── SpartiToolbar.tsx         # Top toolbar with CMS button
│   ├── ElementSelector.tsx       # Click-to-select functionality
│   ├── EditingOverlay.tsx        # Visual selection indicators
│   └── ContentEditPanel.tsx     # Right-side editing panel
├── core/                # Core libraries (TypeScript)
│   ├── composer.ts              # Component composition system
│   ├── query.ts                 # DOM manipulation utilities
│   ├── element-detector.ts      # Universal element detection
│   └── preview-player.ts        # Real-time preview system
├── hooks/               # Custom React hooks
│   └── useSpartiEditor.ts       # Main editing hook
├── styles/              # Styling systems
│   ├── admin-styles.ts          # CMS dashboard styles
│   └── sparti-styles.ts         # Visual editor styles
├── types/               # TypeScript definitions
│   ├── admin.ts                 # CMS data types
│   └── index.ts                 # Core types
├── demo/                # Demo implementation
├── references/          # Plugin analysis references
├── visualbuilder.md     # Architecture documentation
├── index.ts            # Main exports
└── README.md           # User documentation
```

## 🚀 Quick Start for AI Tools

### 1. Initial Setup

When building Sparti Builder, follow these steps:

```bash
# 1. Install dependencies (if not already present)
npm install react react-dom lucide-react

# 2. Copy the sparti-builder folder to your project
# 3. Import and use in your React app
```

### 2. Basic Integration

```tsx
import { SpartiBuilder } from './sparti-builder';

function App() {
  return (
    <SpartiBuilder config={{ enabled: true, toolbar: true, autoDetect: true }}>
      <YourAppContent />
    </SpartiBuilder>
  );
}
```

## 🏗️ Component Architecture

### Core Pattern: Provider + Consumer

All components follow this pattern:
1. **SpartiBuilderProvider**: Manages global state
2. **Consumer Components**: Use `useSpartiBuilder()` hook
3. **Style Injection**: Dynamic CSS injection for universal compatibility

### Component Hierarchy

```
SpartiBuilder (Main Wrapper)
├── SpartiBuilderProvider (State Management)
│   ├── SpartiToolbar (Top Navigation)
│   ├── ElementSelector (Click Detection)
│   ├── EditingOverlay (Visual Feedback)
│   ├── ContentEditPanel (Right Panel)
│   └── AdminDashboard (CMS Interface)
│       ├── AdminSidebar (Navigation)
│       ├── PagesManager (Pages CRUD)
│       ├── FormsManager (Forms CRUD)
│       └── AccountManager (User Profile)
```

## 📋 Building New Components

### 1. Admin Components Pattern

When building new admin components, follow this structure:

```tsx
import React, { useState } from 'react';
import { YourDataType } from '../../types/admin';

export const YourManager: React.FC = () => {
  const [data] = useState<YourDataType[]>([]); // Empty by default

  const EmptyState = () => (
    <div className="sparti-admin-empty-state">
      <div className="sparti-admin-empty-icon">📄</div>
      <h3 className="sparti-admin-empty-title">No items found</h3>
      <p className="sparti-admin-empty-description">
        Description of what this section manages.
      </p>
      <button className="sparti-btn sparti-btn-primary">
        <span>+</span>
        Add Item
      </button>
    </div>
  );

  const DataTable = () => (
    <div className="sparti-admin-table-container">
      <table className="sparti-admin-table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.field}</td>
              <td>
                <input
                  type="text"
                  value={item.editableField}
                  className="sparti-edit-input sparti-admin-editable"
                />
              </td>
              <td>
                <div className="sparti-admin-actions">
                  <button className="sparti-btn sparti-btn-ghost sparti-btn-sm">
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="sparti-admin-section">
      <div className="sparti-admin-section-header">
        <h2 className="sparti-admin-section-title">Section Title</h2>
        <p className="sparti-admin-section-description">
          Section description
        </p>
      </div>
      <div className="sparti-admin-section-content">
        {data.length === 0 ? <EmptyState /> : <DataTable />}
      </div>
    </div>
  );
};
```

### 2. Editor Components Pattern

When building element editors, follow this structure:

```tsx
import React from 'react';
import { ElementData } from '../../types';

interface YourEditorProps {
  element: ElementData;
  onUpdate: (updates: Partial<ElementData>) => void;
}

export const YourEditor: React.FC<YourEditorProps> = ({ element, onUpdate }) => {
  return (
    <div className="sparti-edit-section">
      <label className="sparti-edit-label">
        Field Label
      </label>
      <input
        type="text"
        value={element.content}
        onChange={(e) => onUpdate({ content: e.target.value })}
        className="sparti-edit-input"
      />
    </div>
  );
};
```

## 🎨 Styling Guidelines

### CSS Class Naming Convention

All classes use the `sparti-` prefix:

- **Components**: `.sparti-toolbar`, `.sparti-admin-dashboard`
- **Elements**: `.sparti-btn`, `.sparti-edit-input`
- **Modifiers**: `.sparti-btn-primary`, `.sparti-admin-editable`
- **States**: `.sparti-hover-overlay`, `.active`

### Color System

```css
/* Primary Colors */
--sparti-primary: #3b82f6;
--sparti-primary-hover: #2563eb;
--sparti-success: #10b981;

/* Neutral Colors */
--sparti-white: #ffffff;
--sparti-gray-50: #f9fafb;
--sparti-gray-200: #e5e7eb;
--sparti-gray-500: #6b7280;
--sparti-gray-900: #111827;

/* Dark Mode */
--sparti-dark-bg: #1f2937;
--sparti-dark-panel: #111827;
--sparti-dark-border: #374151;
```

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Mobile-specific styles */
}

/* Small screens */
@media (max-width: 640px) {
  /* Small screen adaptations */
}
```

## 🗄️ Database Integration

### TypeScript Interfaces

All data structures are defined in `types/admin.ts`:

```typescript
interface Page {
  id: string;
  image?: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'published';
}

interface Form {
  id: string;
  name: string;
  description?: string;
  fields: FormField[];
  submissions: number;
  status: 'active' | 'inactive';
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'editor' | 'viewer';
}
```

### Database Connection Pattern

When implementing database functionality:

1. **Create API hooks** in `hooks/` folder
2. **Use React Query** or similar for data fetching
3. **Replace empty state arrays** with actual data
4. **Implement CRUD operations** for each entity

Example API hook:

```typescript
// hooks/usePages.ts
import { useState, useEffect } from 'react';
import { Page } from '../types/admin';

export const usePages = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch pages from your database
    fetchPages().then(setPages).finally(() => setLoading(false));
  }, []);

  const createPage = async (page: Omit<Page, 'id'>) => {
    // API call to create page
  };

  const updatePage = async (id: string, updates: Partial<Page>) => {
    // API call to update page
  };

  return { pages, loading, createPage, updatePage };
};
```

## 🔧 Platform-Specific Instructions

### For Lovable.dev

1. **Install Sparti Builder** by copying the entire `sparti-builder/` folder
2. **Add to your main App component**:
   ```tsx
   import { SpartiBuilder } from './sparti-builder';
   
   function App() {
     return (
       <SpartiBuilder>
         {/* Your existing app content */}
       </SpartiBuilder>
     );
   }
   ```
3. **Database Integration**: Use Lovable's built-in Supabase integration
4. **Styling**: Sparti Builder styles are self-contained and won't conflict

### For Replit

1. **Copy sparti-builder folder** to your project root
2. **Install dependencies**: `npm install react react-dom lucide-react`
3. **Import and wrap** your app with SpartiBuilder
4. **Database**: Use Replit's database or connect to external PostgreSQL

### For Other Platforms

1. **Ensure React 18+** compatibility
2. **Copy the sparti-builder folder** to your project
3. **Install peer dependencies** if not present
4. **Follow the integration pattern** shown above

## 🧪 Testing and Demo

### Running the Demo

```bash
cd demo
node server.js
# Visit http://localhost:3000/demo/
```

The demo showcases:
- Visual editing capabilities
- CMS dashboard functionality
- Responsive design
- Real-world integration example

### Testing New Components

1. **Add to demo page** for visual testing
2. **Test empty states** first
3. **Test with mock data**
4. **Test responsive behavior**
5. **Test dark mode compatibility**

## 🔍 Key Files to Reference

### Must-Read Files

1. **README.md**: User documentation and brand guidelines
2. **types/admin.ts**: All CMS data structures
3. **components/admin/AdminDashboard.tsx**: Main dashboard implementation
4. **styles/admin-styles.ts**: Complete styling system
5. **demo/**: Working implementation example

### Architecture Documentation

1. **visualbuilder.md**: Technical architecture details
2. **core/**: Core functionality implementation
3. **references/**: Analysis of similar plugins

## ⚠️ Important Notes

### Do NOT Modify

- **Core visual editor functionality** (unless specifically requested)
- **Universal compatibility system** in `core/`
- **Existing component interfaces** without updating all consumers

### Always Follow

- **Empty state pattern** for new admin components
- **Sparti CSS class naming** convention
- **TypeScript interfaces** for all data structures
- **Responsive design** principles
- **Dark mode compatibility**

### Database Integration

- All components are **database-agnostic**
- Use **empty arrays by default** for initial state
- Implement **loading states** for better UX
- Follow **CRUD patterns** for data operations

## 🚀 Quick Commands for AI Tools

When an AI tool receives "Build Sparti Builder", follow this sequence:

1. **Read this build.md file completely**
2. **Review README.md for brand guidelines**
3. **Check types/admin.ts for data structures**
4. **Examine demo/ folder for implementation examples**
5. **Follow the integration pattern for your platform**
6. **Test with the provided demo**

## 📞 Support

For questions about implementation:
1. Check the **demo/** folder for working examples
2. Review **README.md** for user-facing documentation
3. Examine **types/** for data structure requirements
4. Reference **styles/** for design system details

---

**Built for universal compatibility and easy integration across all React platforms.**
