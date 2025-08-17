/**
 * Sparti Builder Toolbar Module
 * Handles toolbar functionality and edit mode management
 */
class SpartiToolbar {
    constructor() {
        this.isEditMode = false;
        this.currentSelectedElement = null;
        this.elements = this.initializeElements();
        this.bindEvents();
    }

    // Initialize DOM elements
    initializeElements() {
        return {
            editToggle: document.getElementById('edit-toggle'),
            saveChanges: document.getElementById('save-changes'),
            exitEdit: document.getElementById('exit-edit')
        };
    }

    // Bind event listeners
    bindEvents() {
        this.elements.editToggle?.addEventListener('click', () => this.enterEditMode());
        this.elements.saveChanges?.addEventListener('click', () => this.saveChanges());
        this.elements.exitEdit?.addEventListener('click', () => this.exitEditMode());
    }

    // Enter edit mode
    enterEditMode() {
        this.isEditMode = true;
        this.updateToolbarButtons(true);
        document.body.classList.add('sparti-edit-mode');
        
        // Show notification
        this.showNotification('🎨 Edit mode activated! Click on any element to edit it.', 'success');
        
        // Highlight editable elements
        this.highlightEditableElements();
        
        // Add edit listeners
        this.addEditListeners();
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('sparti:editModeEntered'));
    }

    // Exit edit mode
    exitEditMode() {
        this.isEditMode = false;
        this.updateToolbarButtons(false);
        document.body.classList.remove('sparti-edit-mode');
        
        // Clear selection
        this.clearSelection();
        
        // Close sidebar if open
        document.dispatchEvent(new CustomEvent('sparti:closeSidebar'));
        
        // Show notification
        this.showNotification('✅ Edit mode deactivated. Changes saved!', 'info');
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('sparti:editModeExited'));
    }

    // Update toolbar button visibility
    updateToolbarButtons(editMode) {
        if (this.elements.editToggle) {
            this.elements.editToggle.style.display = editMode ? 'none' : 'inline-flex';
        }
        if (this.elements.saveChanges) {
            this.elements.saveChanges.style.display = editMode ? 'inline-flex' : 'none';
        }
        if (this.elements.exitEdit) {
            this.elements.exitEdit.style.display = editMode ? 'inline-flex' : 'none';
        }
    }

    // Add edit listeners to editable elements
    addEditListeners() {
        const editableElements = document.querySelectorAll('[data-editable="true"]');
        
        editableElements.forEach(element => {
            element.addEventListener('click', (e) => this.handleElementClick(e));
            element.style.cursor = 'pointer';
            
            // Add hover effects
            element.addEventListener('mouseenter', () => this.handleElementHover(element, true));
            element.addEventListener('mouseleave', () => this.handleElementHover(element, false));
        });
    }

    // Handle element click in edit mode
    handleElementClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (!this.isEditMode) return;
        
        const element = e.currentTarget;
        const elementType = element.getAttribute('data-editable-type') || 'text';
        
        // Update selection
        this.setSelectedElement(element);
        
        // Open sidebar editor
        document.dispatchEvent(new CustomEvent('sparti:openSidebar', {
            detail: { element, type: elementType }
        }));
    }

    // Handle element hover effects
    handleElementHover(element, isHovering) {
        if (!this.isEditMode) return;
        
        if (isHovering) {
            element.style.outline = '2px solid #667eea';
            element.style.outlineOffset = '2px';
            element.style.background = 'rgba(102, 126, 234, 0.05)';
        } else {
            if (!element.classList.contains('selected')) {
                element.style.outline = '';
                element.style.outlineOffset = '';
                element.style.background = '';
            }
        }
    }

    // Set selected element
    setSelectedElement(element) {
        // Clear previous selection
        this.clearSelection();
        
        // Set new selection
        element.classList.add('selected');
        this.currentSelectedElement = element;
    }

    // Clear element selection
    clearSelection() {
        document.querySelectorAll('[data-editable="true"].selected').forEach(el => {
            el.classList.remove('selected');
            el.style.outline = '';
            el.style.outlineOffset = '';
            el.style.background = '';
        });
        this.currentSelectedElement = null;
    }

    // Highlight all editable elements briefly
    highlightEditableElements() {
        const editableElements = document.querySelectorAll('[data-editable="true"]');
        editableElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.outline = '2px solid #667eea';
                element.style.outlineOffset = '4px';
                element.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    if (!element.classList.contains('selected')) {
                        element.style.outline = '';
                        element.style.outlineOffset = '';
                    }
                }, 2000);
            }, index * 100);
        });
    }

    // Save page changes
    saveChanges() {
        const pageData = {
            timestamp: new Date().toISOString(),
            elements: []
        };
        
        document.querySelectorAll('[data-editable="true"]').forEach(element => {
            pageData.elements.push({
                selector: element.tagName + (element.className ? '.' + element.className.split(' ').join('.') : ''),
                content: element.textContent.trim(),
                type: element.getAttribute('data-editable-type') || 'text'
            });
        });
        
        localStorage.setItem('sparti-demo-changes', JSON.stringify(pageData));
        this.showNotification('💾 Changes saved successfully!', 'success');
        
        console.log('Demo changes saved to localStorage:', pageData);
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#667eea'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Get current state
    getState() {
        return {
            isEditMode: this.isEditMode,
            currentSelectedElement: this.currentSelectedElement
        };
    }
}

export default SpartiToolbar;
