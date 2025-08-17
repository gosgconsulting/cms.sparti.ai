// Admin Dashboard Styles for Sparti Builder
export const ADMIN_STYLES = `
/* Admin Dashboard Layout */
.sparti-admin-dashboard {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: #ffffff !important;
  z-index: 2147483647 !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-dashboard {
    background: #111827 !important;
  }
}

.sparti-admin-layout {
  display: flex !important;
  height: 100vh !important;
}

/* Sidebar Styles */
.sparti-admin-sidebar {
  width: 280px !important;
  background: #f9fafb !important;
  border-right: 1px solid #e5e7eb !important;
  display: flex !important;
  flex-direction: column !important;
  flex-shrink: 0 !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-sidebar {
    background: #1f2937 !important;
    border-right-color: #374151 !important;
  }
}

.sparti-admin-sidebar-header {
  padding: 1.5rem !important;
  border-bottom: 1px solid #e5e7eb !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-sidebar-header {
    border-bottom-color: #374151 !important;
  }
}

.sparti-admin-brand {
  display: flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
  font-weight: 600 !important;
  color: #111827 !important;
  font-size: 1.125rem !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-brand {
    color: #f9fafb !important;
  }
}

.sparti-admin-brand-icon {
  font-size: 1.5rem !important;
}

.sparti-admin-brand-text {
  font-size: 1rem !important;
}

/* Navigation Styles */
.sparti-admin-nav {
  flex: 1 !important;
  padding: 1rem !important;
}

.sparti-admin-nav-list {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.25rem !important;
}

.sparti-admin-nav-item {
  display: flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
  padding: 0.75rem 1rem !important;
  border-radius: 0.375rem !important;
  background: transparent !important;
  border: none !important;
  color: #6b7280 !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  width: 100% !important;
  text-align: left !important;
  font-family: inherit !important;
}

.sparti-admin-nav-item:hover {
  background: #f3f4f6 !important;
  color: #374151 !important;
}

.sparti-admin-nav-item.active {
  background: #3b82f6 !important;
  color: #ffffff !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-nav-item {
    color: #9ca3af !important;
  }
  
  .sparti-admin-nav-item:hover {
    background: #374151 !important;
    color: #f3f4f6 !important;
  }
  
  .sparti-admin-nav-item.active {
    background: #3b82f6 !important;
    color: #ffffff !important;
  }
}

.sparti-admin-nav-icon {
  font-size: 1.125rem !important;
  flex-shrink: 0 !important;
}

.sparti-admin-nav-label {
  flex: 1 !important;
}

/* Main Content Area */
.sparti-admin-content {
  flex: 1 !important;
  overflow-y: auto !important;
  background: #ffffff !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-content {
    background: #111827 !important;
  }
}

/* Section Styles */
.sparti-admin-section {
  padding: 2rem !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
}

.sparti-admin-section-header {
  margin-bottom: 2rem !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.5rem !important;
}

.sparti-admin-section-title {
  font-size: 1.875rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin: 0 !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-section-title {
    color: #f9fafb !important;
  }
}

.sparti-admin-section-description {
  color: #6b7280 !important;
  font-size: 1rem !important;
  margin: 0 !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-section-description {
    color: #9ca3af !important;
  }
}

.sparti-admin-section-content {
  background: inherit !important;
}

/* Empty State Styles */
.sparti-admin-empty-state {
  text-align: center !important;
  padding: 4rem 2rem !important;
  background: #f9fafb !important;
  border: 2px dashed #d1d5db !important;
  border-radius: 0.5rem !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-empty-state {
    background: #1f2937 !important;
    border-color: #4b5563 !important;
  }
}

.sparti-admin-empty-icon {
  font-size: 4rem !important;
  margin-bottom: 1rem !important;
  opacity: 0.5 !important;
}

.sparti-admin-empty-title {
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  color: #111827 !important;
  margin: 0 0 0.5rem 0 !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-empty-title {
    color: #f9fafb !important;
  }
}

.sparti-admin-empty-description {
  color: #6b7280 !important;
  margin: 0 0 2rem 0 !important;
  max-width: 400px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-empty-description {
    color: #9ca3af !important;
  }
}

/* Table Styles */
.sparti-admin-table-container {
  background: #ffffff !important;
  border: 1px solid #e5e7eb !important;
  border-radius: 0.5rem !important;
  overflow: hidden !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-table-container {
    background: #1f2937 !important;
    border-color: #374151 !important;
  }
}

.sparti-admin-table {
  width: 100% !important;
  border-collapse: collapse !important;
  font-size: 0.875rem !important;
}

.sparti-admin-table th {
  background: #f9fafb !important;
  padding: 0.75rem 1rem !important;
  text-align: left !important;
  font-weight: 600 !important;
  color: #374151 !important;
  border-bottom: 1px solid #e5e7eb !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-table th {
    background: #111827 !important;
    color: #d1d5db !important;
    border-bottom-color: #374151 !important;
  }
}

.sparti-admin-table td {
  padding: 1rem !important;
  border-bottom: 1px solid #f3f4f6 !important;
  vertical-align: top !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-table td {
    border-bottom-color: #374151 !important;
  }
}

.sparti-admin-table tr:last-child td {
  border-bottom: none !important;
}

/* Page Image Styles */
.sparti-admin-page-image {
  width: 60px !important;
  height: 40px !important;
  border-radius: 0.25rem !important;
  overflow: hidden !important;
  background: #f3f4f6 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.sparti-admin-page-image img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}

.sparti-admin-image-placeholder {
  color: #9ca3af !important;
  font-size: 1.25rem !important;
}

/* Editable Fields */
.sparti-admin-editable {
  border-color: #d1d5db !important;
}

.sparti-admin-editable:focus {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
}

/* Status Badges */
.sparti-admin-status {
  display: inline-flex !important;
  align-items: center !important;
  padding: 0.25rem 0.75rem !important;
  border-radius: 9999px !important;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
  text-transform: capitalize !important;
}

.sparti-admin-status-published,
.sparti-admin-status-active {
  background: #d1fae5 !important;
  color: #065f46 !important;
}

.sparti-admin-status-draft,
.sparti-admin-status-inactive {
  background: #fef3c7 !important;
  color: #92400e !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-status-published,
  .sparti-admin-status-active {
    background: #064e3b !important;
    color: #a7f3d0 !important;
  }
  
  .sparti-admin-status-draft,
  .sparti-admin-status-inactive {
    background: #78350f !important;
    color: #fcd34d !important;
  }
}

/* Actions */
.sparti-admin-actions {
  display: flex !important;
  gap: 0.5rem !important;
}

/* Profile Form Styles */
.sparti-admin-profile-form {
  max-width: 600px !important;
  background: #ffffff !important;
  border: 1px solid #e5e7eb !important;
  border-radius: 0.5rem !important;
  padding: 2rem !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-profile-form {
    background: #1f2937 !important;
    border-color: #374151 !important;
  }
}

.sparti-admin-profile-avatar {
  display: flex !important;
  align-items: center !important;
  gap: 1rem !important;
  margin-bottom: 2rem !important;
  padding-bottom: 2rem !important;
  border-bottom: 1px solid #e5e7eb !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-profile-avatar {
    border-bottom-color: #374151 !important;
  }
}

.sparti-admin-avatar-placeholder {
  width: 80px !important;
  height: 80px !important;
  border-radius: 50% !important;
  background: #f3f4f6 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 2rem !important;
  color: #9ca3af !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-avatar-placeholder {
    background: #374151 !important;
    color: #6b7280 !important;
  }
}

.sparti-admin-profile-fields {
  display: flex !important;
  flex-direction: column !important;
  gap: 1.5rem !important;
  margin-bottom: 2rem !important;
}

.sparti-admin-field-group {
  display: flex !important;
  flex-direction: column !important;
  gap: 0.5rem !important;
}

.sparti-admin-profile-actions {
  display: flex !important;
  gap: 1rem !important;
  padding-top: 2rem !important;
  border-top: 1px solid #e5e7eb !important;
}

@media (prefers-color-scheme: dark) {
  .sparti-admin-profile-actions {
    border-top-color: #374151 !important;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .sparti-admin-sidebar {
    width: 240px !important;
  }
  
  .sparti-admin-section {
    padding: 1rem !important;
  }
  
  .sparti-admin-table-container {
    overflow-x: auto !important;
  }
  
  .sparti-admin-table {
    min-width: 800px !important;
  }
}

@media (max-width: 640px) {
  .sparti-admin-layout {
    flex-direction: column !important;
  }
  
  .sparti-admin-sidebar {
    width: 100% !important;
    height: auto !important;
    flex-shrink: 1 !important;
  }
  
  .sparti-admin-nav {
    padding: 0.5rem !important;
  }
  
  .sparti-admin-nav-list {
    flex-direction: row !important;
    overflow-x: auto !important;
  }
  
  .sparti-admin-nav-item {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
  }
}
`;
