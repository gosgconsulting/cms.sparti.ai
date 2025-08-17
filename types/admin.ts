// Admin CMS Data Types for Sparti Builder
export interface Page {
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

export interface Form {
  id: string;
  name: string;
  description?: string;
  fields: FormField[];
  submissions: number;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'inactive';
}

export interface FormField {
  id: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  name: string;
  required: boolean;
  placeholder?: string;
  options?: string[]; // For select, checkbox, radio
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: Date;
  lastLogin?: Date;
}

export interface AdminState {
  pages: Page[];
  forms: Form[];
  user: User | null;
  loading: boolean;
  error: string | null;
}

export type AdminSection = 'pages' | 'forms' | 'account';

export interface AdminNavItem {
  id: AdminSection;
  label: string;
  icon: string;
}
