import React from 'react';
import { AdminSection, AdminNavItem } from '../../types/admin';

interface AdminSidebarProps {
  activeSection: AdminSection;
  onSectionChange: (section: AdminSection) => void;
  onClose?: () => void;
}

const navItems: AdminNavItem[] = [
  { id: 'pages', label: 'Pages', icon: '📄' },
  { id: 'forms', label: 'Forms', icon: '📝' },
  { id: 'account', label: 'My Account', icon: '👤' },
];

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeSection,
  onSectionChange,
  onClose
}) => {
  return (
    <aside className="sparti-admin-sidebar">
      <div className="sparti-admin-sidebar-header">
        <div className="sparti-admin-brand">
          <span className="sparti-admin-brand-icon">⚡</span>
          <span className="sparti-admin-brand-text">CMS Dashboard</span>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="sparti-btn sparti-btn-ghost sparti-btn-sm"
            aria-label="Close admin dashboard"
          >
            ✕
          </button>
        )}
      </div>

      <nav className="sparti-admin-nav">
        <ul className="sparti-admin-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`sparti-admin-nav-item ${
                  activeSection === item.id ? 'active' : ''
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="sparti-admin-nav-icon">{item.icon}</span>
                <span className="sparti-admin-nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
