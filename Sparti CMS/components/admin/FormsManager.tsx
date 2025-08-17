import React, { useState } from 'react';
import { Form } from '../../types/admin';

export const FormsManager: React.FC = () => {
  const [forms] = useState<Form[]>([]); // Empty by default for database integration

  const EmptyState = () => (
    <div className="sparti-admin-empty-state">
      <div className="sparti-admin-empty-icon">📝</div>
      <h3 className="sparti-admin-empty-title">No forms found</h3>
      <p className="sparti-admin-empty-description">
        Create forms to collect data from your website visitors.
      </p>
      <button className="sparti-btn sparti-btn-primary">
        <span>+</span>
        Add Form
      </button>
    </div>
  );

  const FormsTable = () => (
    <div className="sparti-admin-table-container">
      <table className="sparti-admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Fields</th>
            <th>Submissions</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form.id}>
              <td>
                <div className="sparti-admin-form-name">
                  <strong>{form.name}</strong>
                </div>
              </td>
              <td>
                <span className="sparti-admin-form-description">
                  {form.description || 'No description'}
                </span>
              </td>
              <td>
                <span className="sparti-admin-form-fields">
                  {form.fields.length} fields
                </span>
              </td>
              <td>
                <span className="sparti-admin-form-submissions">
                  {form.submissions}
                </span>
              </td>
              <td>
                <span className={`sparti-admin-status sparti-admin-status-${form.status}`}>
                  {form.status}
                </span>
              </td>
              <td>
                <div className="sparti-admin-actions">
                  <button className="sparti-btn sparti-btn-ghost sparti-btn-sm">
                    Edit
                  </button>
                  <button className="sparti-btn sparti-btn-ghost sparti-btn-sm">
                    View
                  </button>
                  <button className="sparti-btn sparti-btn-ghost sparti-btn-sm">
                    Delete
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
        <h2 className="sparti-admin-section-title">Forms</h2>
        <p className="sparti-admin-section-description">
          Manage contact forms, newsletters, and other data collection forms
        </p>
        {forms.length > 0 && (
          <button className="sparti-btn sparti-btn-primary">
            <span>+</span>
            Add Form
          </button>
        )}
      </div>

      <div className="sparti-admin-section-content">
        {forms.length === 0 ? <EmptyState /> : <FormsTable />}
      </div>
    </div>
  );
};
