/**
 * Sparti Element Editor Module
 * Handles element-specific editing logic and form generation
 */
class SpartiElementEditor {
    constructor(element, type) {
        this.element = element;
        this.type = type;
        this.originalValues = this.captureOriginalValues();
    }

    // Capture original element values for restoration
    captureOriginalValues() {
        return {
            textContent: this.element.textContent.trim(),
            href: this.element.getAttribute('href') || '',
            src: this.element.getAttribute('src') || '',
            alt: this.element.getAttribute('alt') || '',
            color: getComputedStyle(this.element).color,
            backgroundColor: getComputedStyle(this.element).backgroundColor,
            fontSize: getComputedStyle(this.element).fontSize,
            fontWeight: getComputedStyle(this.element).fontWeight
        };
    }

    // Generate HTML for editor form
    generateHTML() {
        let html = '';
        
        // Text content editor
        if (this.hasTextContent()) {
            html += this.generateTextEditor();
        }
        
        // Link-specific editor
        if (this.type === 'link') {
            html += this.generateLinkEditor();
        }
        
        // Image-specific editor
        if (this.type === 'image') {
            html += this.generateImageEditor();
        }
        
        // Style editors
        html += this.generateStyleEditors();
        
        // Typography editors
        html += this.generateTypographyEditors();
        
        // Action buttons
        html += this.generateActionButtons();
        
        return html;
    }

    // Check if element has editable text content
    hasTextContent() {
        return ['text', 'button', 'link', 'brand'].includes(this.type);
    }

    // Generate text content editor
    generateTextEditor() {
        const isMultiline = this.element.tagName.toLowerCase() === 'p' || 
                           this.element.textContent.length > 50;
        
        return `
            <div class="editor-section">
                <label class="editor-label">Text Content</label>
                ${isMultiline ? 
                    `<textarea class="editor-input editor-textarea" id="text-input" placeholder="Enter text content">${this.originalValues.textContent}</textarea>` :
                    `<input type="text" class="editor-input" id="text-input" value="${this.originalValues.textContent}" placeholder="Enter text content">`
                }
            </div>
        `;
    }

    // Generate link editor
    generateLinkEditor() {
        return `
            <div class="editor-section">
                <label class="editor-label">Link URL</label>
                <input type="url" class="editor-input" id="href-input" value="${this.originalValues.href}" placeholder="https://example.com">
            </div>
            <div class="editor-section">
                <label class="editor-label">Open in New Tab</label>
                <label class="editor-checkbox">
                    <input type="checkbox" id="target-input" ${this.element.getAttribute('target') === '_blank' ? 'checked' : ''}>
                    <span>Open link in new tab</span>
                </label>
            </div>
        `;
    }

    // Generate image editor
    generateImageEditor() {
        return `
            <div class="editor-section">
                <label class="editor-label">Image URL</label>
                <input type="url" class="editor-input" id="src-input" value="${this.originalValues.src}" placeholder="https://example.com/image.jpg">
            </div>
            <div class="editor-section">
                <label class="editor-label">Alt Text</label>
                <input type="text" class="editor-input" id="alt-input" value="${this.originalValues.alt}" placeholder="Describe the image">
            </div>
            <div class="editor-section">
                <label class="editor-label">Image Width</label>
                <input type="range" class="editor-input" id="width-input" min="50" max="800" value="${this.element.width || 200}">
                <span class="range-value">${this.element.width || 200}px</span>
            </div>
        `;
    }

    // Generate style editors
    generateStyleEditors() {
        return `
            <div class="editor-section">
                <label class="editor-label">Text Color</label>
                <div class="color-input-group">
                    <input type="color" class="editor-input color-input" id="color-input" value="${this.rgbToHex(this.originalValues.color)}">
                    <input type="text" class="editor-input color-text" value="${this.rgbToHex(this.originalValues.color)}" readonly>
                </div>
            </div>
            <div class="editor-section">
                <label class="editor-label">Background Color</label>
                <div class="color-input-group">
                    <input type="color" class="editor-input color-input" id="bg-color-input" value="${this.rgbToHex(this.originalValues.backgroundColor)}">
                    <input type="text" class="editor-input color-text" value="${this.rgbToHex(this.originalValues.backgroundColor)}" readonly>
                </div>
            </div>
        `;
    }

    // Generate typography editors
    generateTypographyEditors() {
        const currentFontSize = parseInt(this.originalValues.fontSize);
        const currentFontWeight = this.originalValues.fontWeight;
        
        return `
            <div class="editor-section">
                <label class="editor-label">Font Size</label>
                <div class="range-input-group">
                    <input type="range" class="editor-input" id="font-size-input" min="10" max="72" value="${currentFontSize}">
                    <span class="range-value">${currentFontSize}px</span>
                </div>
            </div>
            <div class="editor-section">
                <label class="editor-label">Font Weight</label>
                <select class="editor-input" id="font-weight-input">
                    <option value="300" ${currentFontWeight === '300' ? 'selected' : ''}>Light</option>
                    <option value="400" ${currentFontWeight === '400' ? 'selected' : ''}>Normal</option>
                    <option value="500" ${currentFontWeight === '500' ? 'selected' : ''}>Medium</option>
                    <option value="600" ${currentFontWeight === '600' ? 'selected' : ''}>Semi Bold</option>
                    <option value="700" ${currentFontWeight === '700' ? 'selected' : ''}>Bold</option>
                    <option value="800" ${currentFontWeight === '800' ? 'selected' : ''}>Extra Bold</option>
                </select>
            </div>
        `;
    }

    // Generate action buttons
    generateActionButtons() {
        return `
            <div class="editor-actions">
                <button class="editor-btn editor-btn-secondary" id="reset-changes">Reset</button>
                <button class="editor-btn editor-btn-secondary" id="cancel-edit">Cancel</button>
                <button class="editor-btn editor-btn-primary" id="apply-changes">Apply Changes</button>
            </div>
        `;
    }

    // Apply changes to element
    applyChanges() {
        try {
            // Apply text changes
            const textInput = document.getElementById('text-input');
            if (textInput && this.hasTextContent()) {
                this.element.textContent = textInput.value;
            }
            
            // Apply link changes
            if (this.type === 'link') {
                const hrefInput = document.getElementById('href-input');
                const targetInput = document.getElementById('target-input');
                
                if (hrefInput?.value) {
                    this.element.setAttribute('href', hrefInput.value);
                }
                
                if (targetInput?.checked) {
                    this.element.setAttribute('target', '_blank');
                } else {
                    this.element.removeAttribute('target');
                }
            }
            
            // Apply image changes
            if (this.type === 'image') {
                const srcInput = document.getElementById('src-input');
                const altInput = document.getElementById('alt-input');
                const widthInput = document.getElementById('width-input');
                
                if (srcInput?.value) {
                    this.element.setAttribute('src', srcInput.value);
                }
                if (altInput) {
                    this.element.setAttribute('alt', altInput.value);
                }
                if (widthInput) {
                    this.element.style.width = widthInput.value + 'px';
                }
            }
            
            // Apply style changes
            this.applyStyleChanges();
            
            // Apply typography changes
            this.applyTypographyChanges();
            
            return true;
        } catch (error) {
            console.error('Error applying changes:', error);
            return false;
        }
    }

    // Apply style changes
    applyStyleChanges() {
        const colorInput = document.getElementById('color-input');
        const bgColorInput = document.getElementById('bg-color-input');
        
        if (colorInput?.value) {
            this.element.style.color = colorInput.value;
        }
        
        if (bgColorInput?.value && bgColorInput.value !== '#ffffff') {
            this.element.style.backgroundColor = bgColorInput.value;
        }
    }

    // Apply typography changes
    applyTypographyChanges() {
        const fontSizeInput = document.getElementById('font-size-input');
        const fontWeightInput = document.getElementById('font-weight-input');
        
        if (fontSizeInput?.value) {
            this.element.style.fontSize = fontSizeInput.value + 'px';
        }
        
        if (fontWeightInput?.value) {
            this.element.style.fontWeight = fontWeightInput.value;
        }
    }

    // Preview changes without applying permanently
    previewChanges() {
        // Store current styles
        const currentStyles = {
            color: this.element.style.color,
            backgroundColor: this.element.style.backgroundColor,
            fontSize: this.element.style.fontSize,
            fontWeight: this.element.style.fontWeight
        };
        
        // Apply temporary changes
        this.applyChanges();
        
        // Restore after preview timeout
        setTimeout(() => {
            Object.keys(currentStyles).forEach(prop => {
                this.element.style[prop] = currentStyles[prop];
            });
        }, 1000);
    }

    // Reset to original values
    resetToOriginal() {
        this.element.textContent = this.originalValues.textContent;
        this.element.style.color = this.originalValues.color;
        this.element.style.backgroundColor = this.originalValues.backgroundColor;
        this.element.style.fontSize = this.originalValues.fontSize;
        this.element.style.fontWeight = this.originalValues.fontWeight;
        
        if (this.originalValues.href) {
            this.element.setAttribute('href', this.originalValues.href);
        }
        if (this.originalValues.src) {
            this.element.setAttribute('src', this.originalValues.src);
        }
        if (this.originalValues.alt) {
            this.element.setAttribute('alt', this.originalValues.alt);
        }
    }

    // Utility: Convert RGB to Hex
    rgbToHex(rgb) {
        if (!rgb || rgb === 'rgba(0, 0, 0, 0)') return '#ffffff';
        
        const result = rgb.match(/\d+/g);
        if (!result || result.length < 3) return '#ffffff';
        
        const r = parseInt(result[0]);
        const g = parseInt(result[1]);
        const b = parseInt(result[2]);
        
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Get current element data
    getElementData() {
        return {
            type: this.type,
            tagName: this.element.tagName.toLowerCase(),
            textContent: this.element.textContent.trim(),
            attributes: {
                href: this.element.getAttribute('href'),
                src: this.element.getAttribute('src'),
                alt: this.element.getAttribute('alt'),
                target: this.element.getAttribute('target')
            },
            styles: {
                color: this.element.style.color,
                backgroundColor: this.element.style.backgroundColor,
                fontSize: this.element.style.fontSize,
                fontWeight: this.element.style.fontWeight
            }
        };
    }
}

export default SpartiElementEditor;
