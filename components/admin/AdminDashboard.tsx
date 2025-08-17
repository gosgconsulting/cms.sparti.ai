import React, { useState } from 'react';
import { AdminSection } from '../../types/admin';
import { AdminSidebar } from './AdminSidebar';
import { PagesManager } from './PagesManager';
import { FormsManager } from './FormsManager';
import { AccountManager } from './AccountManager';

interface AdminDashboardProps {
  onClose?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState<AdminSection>('pages');

  const renderContent = () => {
    switch (activeSection) {
      case 'pages':
        return <PagesManager />;
      case 'forms':
        return <FormsManager />;
      case 'account':
        return <AccountManager />;
      default:
        return <PagesManager />;
    }
  };

  return (
    <div className="sparti-admin-dashboard">
      <div className="sparti-admin-layout">
        <AdminSidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onClose={onClose}
        />
        <main className="sparti-admin-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
