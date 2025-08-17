import React, { useState } from 'react';
import { User } from '../../types/admin';

export const AccountManager: React.FC = () => {
  const [user] = useState<User | null>(null); // Empty by default for database integration

  const ProfileForm = () => (
    <div className="sparti-admin-profile-form">
      <div className="sparti-admin-profile-avatar">
        <div className="sparti-admin-avatar-placeholder">
          <span>👤</span>
        </div>
        <button className="sparti-btn sparti-btn-outline sparti-btn-sm">
          Change Photo
        </button>
      </div>

      <div className="sparti-admin-profile-fields">
        <div className="sparti-admin-field-group">
          <label className="sparti-edit-label">
            Full Name
          </label>
          <input
            type="text"
            className="sparti-edit-input"
            placeholder="Enter your full name"
            defaultValue={user?.name || ''}
          />
        </div>

        <div className="sparti-admin-field-group">
          <label className="sparti-edit-label">
            Email Address
          </label>
          <input
            type="email"
            className="sparti-edit-input"
            placeholder="Enter your email"
            defaultValue={user?.email || ''}
          />
        </div>

        <div className="sparti-admin-field-group">
          <label className="sparti-edit-label">
            Role
          </label>
          <select className="sparti-edit-select" defaultValue={user?.role || 'admin'}>
            <option value="admin">Administrator</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        <div className="sparti-admin-field-group">
          <label className="sparti-edit-label">
            Password
          </label>
          <input
            type="password"
            className="sparti-edit-input"
            placeholder="Enter new password (leave blank to keep current)"
          />
        </div>

        <div className="sparti-admin-field-group">
          <label className="sparti-edit-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="sparti-edit-input"
            placeholder="Confirm new password"
          />
        </div>
      </div>

      <div className="sparti-admin-profile-actions">
        <button className="sparti-btn sparti-btn-success">
          Save Changes
        </button>
        <button className="sparti-btn sparti-btn-outline">
          Cancel
        </button>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="sparti-admin-empty-state">
      <div className="sparti-admin-empty-icon">👤</div>
      <h3 className="sparti-admin-empty-title">Profile not loaded</h3>
      <p className="sparti-admin-empty-description">
        Connect to your database to manage your account settings.
      </p>
    </div>
  );

  return (
    <div className="sparti-admin-section">
      <div className="sparti-admin-section-header">
        <h2 className="sparti-admin-section-title">My Account</h2>
        <p className="sparti-admin-section-description">
          Manage your profile information and account settings
        </p>
      </div>

      <div className="sparti-admin-section-content">
        {user ? <ProfileForm /> : <EmptyState />}
      </div>
    </div>
  );
};
