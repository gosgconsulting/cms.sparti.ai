// Universal Sparti Builder Plugin - Works on any website
export { SpartiBuilder } from './components/SpartiBuilder';
export { SpartiBuilderProvider, useSpartiBuilder } from './components/SpartiBuilderProvider';
export { UniversalElementDetector } from './core/universal-detector';
export { useSpartiEditor } from './hooks/useSpartiEditor';

// Admin CMS Components
export { AdminDashboard } from './components/admin/AdminDashboard';
export { AdminSidebar } from './components/admin/AdminSidebar';
export { PagesManager } from './components/admin/PagesManager';
export { FormsManager } from './components/admin/FormsManager';
export { AccountManager } from './components/admin/AccountManager';

// Types
export type { SpartiBuilderConfig, ElementData, SpartiElement, ElementType } from './types';
export type { Page, Form, FormField, User, AdminState, AdminSection, AdminNavItem } from './types/admin';