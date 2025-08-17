import React, { useState } from 'react';
import { Page } from '../../types/admin';

export const PagesManager: React.FC = () => {
  const [pages] = useState<Page[]>([]); // Empty by default for database integration

  const EmptyState = () => (
    <div className="sparti-admin-empty-state">
      <div className="sparti-admin-empty-icon">📄</div>
      <h3 className="sparti-admin-empty-title">No pages found</h3>
      <p className="sparti-admin-empty-description">
        Start by creating your first page to manage your website content.
      </p>
      <button className="sparti-btn sparti-btn-primary">
        <span>+</span>
        Add Page
      </button>
    </div>
  );

  const PagesTable = () => (
    <div className="sparti-admin-table-container">
      <table className="sparti-admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Meta Title</th>
            <th>Meta Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page.id}>
              <td>
                <div className="sparti-admin-page-image">
                  {page.image ? (
                    <img src={page.image} alt={page.title} />
                  ) : (
                    <div className="sparti-admin-image-placeholder">📷</div>
                  )}
                </div>
              </td>
              <td>
                <input
                  type="text"
                  value={page.title}
                  className="sparti-edit-input"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={page.slug}
                  className="sparti-edit-input sparti-admin-editable"
                  placeholder="page-slug"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={page.metaTitle}
                  className="sparti-edit-input sparti-admin-editable"
                  placeholder="SEO Title"
                />
              </td>
              <td>
                <textarea
                  value={page.metaDescription}
                  className="sparti-edit-textarea sparti-admin-editable"
                  placeholder="SEO Description"
                  rows={2}
                />
              </td>
              <td>
                <span className={`sparti-admin-status sparti-admin-status-${page.status}`}>
                  {page.status}
                </span>
              </td>
              <td>
                <div className="sparti-admin-actions">
                  <button className="sparti-btn sparti-btn-ghost sparti-btn-sm">
                    Edit
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
        <h2 className="sparti-admin-section-title">Pages</h2>
        <p className="sparti-admin-section-description">
          Manage your website pages and their SEO settings
        </p>
        {pages.length > 0 && (
          <button className="sparti-btn sparti-btn-primary">
            <span>+</span>
            Add Page
          </button>
        )}
      </div>

      <div className="sparti-admin-section-content">
        {pages.length === 0 ? <EmptyState /> : <PagesTable />}
      </div>
    </div>
  );
};
