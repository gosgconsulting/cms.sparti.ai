// Sparti Builder Demo Integration
import { SpartiBuilder } from '../index.js';

// Initialize Sparti Builder when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sparti Builder Demo Loading...');
    
    // Initialize the builder
    initializeSpartiBuilder();
    
    // Add demo interactions
    addDemoInteractions();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Initialize toolbar functionality
    initializeToolbar();
    
    console.log('✨ Sparti Builder Demo Ready!');
});

function initializeSpartiBuilder() {
    // Create Sparti Builder instance
    const spartiBuilder = new SpartiBuilder({
        enabled: true,
        toolbar: true,
        autoDetect: true,
        theme: 'modern',
        animations: true
    });

    // Initialize the builder
    spartiBuilder.init();
}

function addDemoInteractions() {
    initAnimations();
    
    // Add interactive elements
    initInteractivity();
    
    // Initialize demo features
    initDemoFeatures();
}

function initDemoFeatures() {
    // Add "Try Editing" hints
    const editableElements = document.querySelectorAll('[data-editable="true"]');
    editableElements.forEach(element => {
        element.addEventListener('mouseenter', showEditHint);
        element.addEventListener('mouseleave', hideEditHint);
    });

    // Demo video play functionality
    const playButton = document.querySelector('.play-button');
    const videoContainer = document.querySelector('.video-container');
    
    if (playButton && videoContainer) {
        playButton.addEventListener('click', () => {
            // Replace with actual video player or modal
            alert('Demo video would play here. Integration with video player needed.');
        });
    }

    // CTA button actions
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.textContent.includes('Try') || button.textContent.includes('Start')) {
                e.preventDefault();
                activateSpartiBuilder();
            }
        });
    });
}

function showEditHint(e) {
    const element = e.target;
    if (!element.querySelector('.edit-hint')) {
        const hint = document.createElement('div');
        hint.className = 'edit-hint';
        hint.textContent = '✏️ Click to edit';
        hint.style.cssText = `
            position: absolute;
            top: -35px;
            left: 50%;
            transform: translateX(-50%);
            background: #667eea;
            color: white;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
            z-index: 1000;
            pointer-events: none;
            animation: fadeInUp 0.3s ease;
        `;
        element.style.position = 'relative';
        element.appendChild(hint);
    }
}

function hideEditHint(e) {
    const hint = e.target.querySelector('.edit-hint');
    if (hint) {
        hint.remove();
    }
}

function activateSpartiBuilder() {
    // Add visual indication that Sparti Builder is active
    document.body.classList.add('sparti-editing');
    
    // Show success message
    showNotification('🎉 Sparti Builder activated! Click on any element to start editing.', 'success');
    
    // Highlight editable elements
    highlightEditableElements();
}

function highlightEditableElements() {
    const editableElements = document.querySelectorAll('[data-editable="true"]');
    editableElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.outline = '2px solid #667eea';
            element.style.outlineOffset = '4px';
            element.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            }, 2000);
        }, index * 100);
    });
}

function showNotification(message, type = 'info') {
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

function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Observe demo section
    const demoSection = document.querySelector('.demo-section');
    if (demoSection) {
        observer.observe(demoSection);
    }

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

function initInteractivity() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Feature card hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button ripple effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .edit-hint {
        animation: fadeInUp 0.3s ease !important;
    }
`;
document.head.appendChild(style);

// Toolbar functionality
function initializeToolbar() {
    const editToggle = document.getElementById('edit-toggle');
    const saveChanges = document.getElementById('save-changes');
    const exitEdit = document.getElementById('exit-edit');
    const closeSidebar = document.getElementById('close-sidebar');
    
    let isEditMode = false;
    let currentSelectedElement = null;
    
    // Edit toggle functionality
    editToggle.addEventListener('click', () => {
        isEditMode = true;
        enterEditMode();
    });
    
    // Save changes functionality
    saveChanges.addEventListener('click', () => {
        savePageChanges();
    });
    
    // Exit edit functionality
    exitEdit.addEventListener('click', () => {
        isEditMode = false;
        exitEditMode();
    });
    
    // Close sidebar functionality
    closeSidebar.addEventListener('click', () => {
        closeSidebarPanel();
    });
}

function enterEditMode() {
    // Update toolbar buttons
    document.getElementById('edit-toggle').style.display = 'none';
    document.getElementById('save-changes').style.display = 'inline-flex';
    document.getElementById('exit-edit').style.display = 'inline-flex';
    
    // Add edit mode class to body
    document.body.classList.add('sparti-edit-mode');
    
    // Show notification
    showNotification('🎨 Edit mode activated! Click on any element to edit it.', 'success');
    
    // Highlight all editable elements
    highlightEditableElements();
    
    // Add click listeners to editable elements
    addEditListeners();
}

function exitEditMode() {
    // Update toolbar buttons
    document.getElementById('edit-toggle').style.display = 'inline-flex';
    document.getElementById('save-changes').style.display = 'none';
    document.getElementById('exit-edit').style.display = 'none';
    
    // Remove edit mode class
    document.body.classList.remove('sparti-edit-mode');
    
    // Remove edit overlays
    removeEditOverlays();
    
    // Show notification
    showNotification('✅ Edit mode deactivated. Changes saved!', 'info');
}

function addEditListeners() {
    const editableElements = document.querySelectorAll('[data-editable="true"]');
    
    editableElements.forEach(element => {
        element.addEventListener('click', handleElementEdit);
        element.style.cursor = 'pointer';
        
        // Add hover effect in edit mode
        element.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('sparti-edit-mode')) {
                element.style.outline = '2px solid #667eea';
                element.style.outlineOffset = '2px';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (document.body.classList.contains('sparti-edit-mode')) {
                element.style.outline = '';
                element.style.outlineOffset = '';
            }
        });
    });
}

function handleElementEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (!document.body.classList.contains('sparti-edit-mode')) return;
    
    const element = e.currentTarget;
    const elementType = element.getAttribute('data-editable-type') || 'text';
    
    // Create edit overlay
    createEditOverlay(element, elementType);
}

function createEditOverlay(element, type) {
    // Use sidebar instead of modal
    openSidebar(element, type);
}

function removeEditOverlays() {
    const overlays = document.querySelectorAll('.sparti-edit-overlay');
    overlays.forEach(overlay => overlay.remove());
}

function savePageChanges() {
    // In a real implementation, this would save to a backend
    showNotification('💾 Changes saved successfully!', 'success');
    
    // Could implement localStorage saving for demo purposes
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
    console.log('Demo changes saved to localStorage:', pageData);
}

// Sidebar functionality
function openSidebar(element, type) {
    const sidebar = document.getElementById('sparti-sidebar');
    const elementInfo = document.getElementById('element-info');
    const elementEditor = document.getElementById('element-editor');
    
    // Clear previous selection
    document.querySelectorAll('[data-editable="true"].selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Mark current element as selected
    element.classList.add('selected');
    currentSelectedElement = element;
    
    // Show sidebar
    sidebar.classList.add('open');
    document.body.classList.add('sidebar-open');
    
    // Update element info
    const tagName = element.tagName.toLowerCase();
    const className = element.className ? `.${element.className.split(' ').join('.')}` : '';
    
    elementInfo.innerHTML = `
        <div class="element-tag">${tagName}${className}</div>
        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
            Click to edit this element's properties
        </p>
    `;
    
    // Create editor interface
    createSidebarEditor(element, type);
    
    // Show editor
    elementEditor.style.display = 'block';
}

function closeSidebarPanel() {
    const sidebar = document.getElementById('sparti-sidebar');
    const elementEditor = document.getElementById('element-editor');
    const elementInfo = document.getElementById('element-info');
    
    // Hide sidebar
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
    
    // Clear selection
    if (currentSelectedElement) {
        currentSelectedElement.classList.remove('selected');
        currentSelectedElement = null;
    }
    
    // Reset content
    elementInfo.innerHTML = '<p class="no-selection">Select an element to edit</p>';
    elementEditor.style.display = 'none';
    elementEditor.innerHTML = '';
}

function createSidebarEditor(element, type) {
    const elementEditor = document.getElementById('element-editor');
    
    // Get current values
    const currentText = element.textContent.trim();
    const currentHref = element.getAttribute('href') || '';
    const currentSrc = element.getAttribute('src') || '';
    const currentAlt = element.getAttribute('alt') || '';
    
    let editorHTML = '';
    
    // Text content editor
    if (type === 'text' || type === 'button' || type === 'link') {
        editorHTML += `
            <div class="editor-section">
                <label class="editor-label">Text Content</label>
                <textarea class="editor-input editor-textarea" id="text-input">${currentText}</textarea>
            </div>
        `;
    }
    
    // Link-specific editor
    if (type === 'link') {
        editorHTML += `
            <div class="editor-section">
                <label class="editor-label">Link URL</label>
                <input type="url" class="editor-input" id="href-input" value="${currentHref}" placeholder="https://example.com">
            </div>
        `;
    }
    
    // Image-specific editor
    if (type === 'image') {
        editorHTML += `
            <div class="editor-section">
                <label class="editor-label">Image URL</label>
                <input type="url" class="editor-input" id="src-input" value="${currentSrc}" placeholder="https://example.com/image.jpg">
            </div>
            <div class="editor-section">
                <label class="editor-label">Alt Text</label>
                <input type="text" class="editor-input" id="alt-input" value="${currentAlt}" placeholder="Describe the image">
            </div>
        `;
    }
    
    // Style editors
    editorHTML += `
        <div class="editor-section">
            <label class="editor-label">Text Color</label>
            <input type="color" class="editor-input" id="color-input" value="${getComputedStyle(element).color || '#000000'}">
        </div>
        <div class="editor-section">
            <label class="editor-label">Background Color</label>
            <input type="color" class="editor-input" id="bg-color-input" value="${getComputedStyle(element).backgroundColor || '#ffffff'}">
        </div>
    `;
    
    // Action buttons
    editorHTML += `
        <div class="editor-actions">
            <button class="editor-btn editor-btn-secondary" id="cancel-edit">Cancel</button>
            <button class="editor-btn editor-btn-primary" id="apply-changes">Apply Changes</button>
        </div>
    `;
    
    elementEditor.innerHTML = editorHTML;
    
    // Add event listeners
    document.getElementById('cancel-edit').addEventListener('click', () => {
        closeSidebarPanel();
    });
    
    document.getElementById('apply-changes').addEventListener('click', () => {
        applySidebarChanges(element, type);
    });
}

function applySidebarChanges(element, type) {
    // Apply text changes
    const textInput = document.getElementById('text-input');
    if (textInput) {
        element.textContent = textInput.value;
    }
    
    // Apply link changes
    const hrefInput = document.getElementById('href-input');
    if (hrefInput && hrefInput.value) {
        element.setAttribute('href', hrefInput.value);
    }
    
    // Apply image changes
    const srcInput = document.getElementById('src-input');
    const altInput = document.getElementById('alt-input');
    if (srcInput && srcInput.value) {
        element.setAttribute('src', srcInput.value);
    }
    if (altInput) {
        element.setAttribute('alt', altInput.value);
    }
    
    // Apply style changes
    const colorInput = document.getElementById('color-input');
    const bgColorInput = document.getElementById('bg-color-input');
    if (colorInput) {
        element.style.color = colorInput.value;
    }
    if (bgColorInput && bgColorInput.value !== '#ffffff') {
        element.style.backgroundColor = bgColorInput.value;
    }
    
    // Show success message
    showNotification('✅ Element updated successfully!', 'success');
    
    // Keep sidebar open for further editing
}
