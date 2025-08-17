// Universal Sparti Builder Plugin - Works on any website
import React, { ReactNode, useEffect } from 'react';
import { SpartiBuilderProvider, useSpartiBuilder } from './SpartiBuilderProvider';
import { SpartiToolbar } from './SpartiToolbar';
import { EditingOverlay } from './EditingOverlay';
import { ElementSelector } from './ElementSelector';
import { ContentEditPanel } from './ContentEditPanel';
import { AdminDashboard } from './admin/AdminDashboard';
import { SpartiBuilderConfig } from '../types';
import { UniversalElementDetector } from '../core/universal-detector';
import { SpartiStyleManager } from '../styles/sparti-styles';
import { ADMIN_STYLES } from '../styles/admin-styles';

interface SpartiBuilderProps {
  children: ReactNode;
  config?: SpartiBuilderConfig;
}

// Internal component to handle admin state
const SpartiBuilderContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAdminOpen, closeAdmin } = useSpartiBuilder();

  useEffect(() => {
    // Inject admin styles when admin is open
    if (isAdminOpen) {
      const styleElement = document.createElement('style');
      styleElement.id = 'sparti-admin-styles';
      styleElement.textContent = ADMIN_STYLES;
      document.head.appendChild(styleElement);
    }

    return () => {
      // Clean up admin styles
      const existingStyle = document.getElementById('sparti-admin-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isAdminOpen]);

  if (isAdminOpen) {
    return <AdminDashboard onClose={closeAdmin} />;
  }

  return (
    <div className="sparti-builder-wrapper">
      <SpartiToolbar />
      <div className="sparti-content-area">
        <ElementSelector>
          {children}
        </ElementSelector>
        <EditingOverlay />
        <ContentEditPanel />
      </div>
    </div>
  );
};

export const SpartiBuilder: React.FC<SpartiBuilderProps> = ({ 
  children, 
  config = { enabled: true, toolbar: true, autoDetect: true }
}) => {
  
  useEffect(() => {
    // Initialize universal compatibility
    const framework = UniversalElementDetector.detectFramework();
    console.log(`Sparti Builder initialized on ${framework} framework`);
    
    // Inject CSS styles directly into DOM for universal compatibility
    SpartiStyleManager.injectStyles();

    // Cleanup on unmount
    return () => {
      SpartiStyleManager.removeStyles();
    };
  }, []);

  if (!config.enabled) {
    return <>{children}</>;
  }

  return (
    <SpartiBuilderProvider config={config}>
      <SpartiBuilderContent>
        {children}
      </SpartiBuilderContent>
    </SpartiBuilderProvider>
  );
};