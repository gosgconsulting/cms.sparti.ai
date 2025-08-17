/**
 * Sparti Builder Sidebar Module
 * Handles sidebar panel functionality and element editing
 */
class SpartiSidebar {
    constructor() {
        this.isOpen = false;
        this.currentElement = null;
        this.currentType = null;
        this.elements = this.initializeElements();
        this.bindEvents();
        this.setupEventListeners();
    }

    // Initialize DOM elements
    initializeElements() {
        return {
            sidebar: document.getElementById('sparti-sidebar'),
            elementInfo: document.getElementById('element-info'),
            elementEditor: document.getElementById('element-editor'),
            closeButton: document.getElementById('close-sidebar')
        };
    }

    // Bind event listeners
    bindEvents() {
        this.elements.closeButton?.addEventListener('click', () => this.close());
        
        // Listen for clicks outside sidebar to close
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.elements.sidebar?.contains(e.target)) {
                const isToolbarClick = e.target.closest('.sparti-toolbar');
                const isEditableElement = e.target.closest('[data-editable="true"]');
                
                if (!isToolbarClick && !isEditableElement) {
                    this.close();
                }
            }
        });
    }

    // Setup custom event listeners
    setupEventListeners() {
        document.addEventListener('sparti:openSidebar', (e) => {
            this.open(e.detail.element, e.detail.type);
        });
        
        document.addEventListener('sparti:closeSidebar', () => {
            this.close();
        });
        
        document.addEventListener('sparti:editModeExited', () => {
            this.close();
        });
    }

    // Open sidebar with element editor
    open(element, type) {
        if (!element || !this.elements.sidebar) return;
        
        this.currentElement = element;
        this.currentType = type;
        this.isOpen = true;
        
        // Show sidebar
        this.elements.sidebar.classList.add('open');
        document.body.classList.add('sidebar-open');
        
        // Update element info
        this.updateElementInfo(element);
        
        // Create editor interface
        this.createEditor(element, type);
        
        // Show editor
        if (this.elements.elementEditor) {
            this.elements.elementEditor.style.display = 'block';
        }
        
        // Dispatch event
        document.dispatchEvent(new CustomEvent('sparti:sidebarOpened', {
            detail: { element, type }
        }));
    }

    // Close sidebar
    close() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        
        // Hide sidebar
        this.elements.sidebar?.classList.remove('open');
        document.body.classList.remove('sidebar-open');
        
        // Clear selection
        if (this.currentElement) {
            this.currentElement.classList.remove('selected');
            this.currentElement.style.outline = '';
            this.currentElement.style.outlineOffset = '';
            this.currentElement.style.background = '';
        }
        
        // Reset content
        this.resetContent();
        
        // Clear current references
        this.currentElement = null;
        this.currentType = null;
        
        // Dispatch event
        document.dispatchEvent(new CustomEvent('sparti:sidebarClosed'));
    }

    // Update element information display
    updateElementInfo(element) {
        if (!this.elements.elementInfo) return;
        
        const tagName = element.tagName.toLowerCase();
        const className = element.className ? `.${element.className.split(' ').join('.')}` : '';
        
        this.elements.elementInfo.innerHTML = `
            <div class="element-tag">${tagName}${className}</div>
            <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
                Edit this element's properties below
            </p>
        `;
    }

    // Create editor interface based on element type
    createEditor(element, type) {
        if (!this.elements.elementEditor) return;
        
        const editor = new SpartiElementEditor(element, type);
        const editorHTML = editor.generateHTML();
        
        this.elements.elementEditor.innerHTML = editorHTML;
        
        // Bind editor events
        this.bindEditorEvents(element, type);
    }

    // Bind editor form events
    bindEditorEvents(element, type) {
        const cancelBtn = document.getElementById('cancel-edit');
        const applyBtn = document.getElementById('apply-changes');
        
        cancelBtn?.addEventListener('click', () => this.close());
        applyBtn?.addEventListener('click', () => this.applyChanges(element, type));
        
        // Auto-save on input change (debounced)
        const inputs = this.elements.elementEditor?.querySelectorAll('input, textarea, select');
        inputs?.forEach(input => {
            input.addEventListener('input', this.debounce(() => {
                this.previewChanges(element, type);
            }, 300));
        });
    }

    // Apply changes to element
    applyChanges(element, type) {
        try {
            const editor = new SpartiElementEditor(element, type);
            const success = editor.applyChanges();
            
            if (success) {
                this.showNotification('✅ Element updated successfully!', 'success');
                
                // Dispatch change event
                document.dispatchEvent(new CustomEvent('sparti:elementChanged', {
                    detail: { element, type }
                }));
            } else {
                this.showNotification('❌ Failed to update element', 'error');
            }
        } catch (error) {
            console.error('Error applying changes:', error);
            this.showNotification('❌ Error updating element', 'error');
        }
    }

    // Preview changes without applying
    previewChanges(element, type) {
        try {
            const editor = new SpartiElementEditor(element, type);
            editor.previewChanges();
        } catch (error) {
            console.error('Error previewing changes:', error);
        }
    }

    // Reset sidebar content
    resetContent() {
        if (this.elements.elementInfo) {
            this.elements.elementInfo.innerHTML = '<p class="no-selection">Select an element to edit</p>';
        }
        
        if (this.elements.elementEditor) {
            this.elements.elementEditor.style.display = 'none';
            this.elements.elementEditor.innerHTML = '';
        }
    }

    // Utility: Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#667eea'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${colors[type] || colors.info};
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
            isOpen: this.isOpen,
            currentElement: this.currentElement,
            currentType: this.currentType
        };
    }
}

export default SpartiSidebar;
