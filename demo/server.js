// Simple HTTP server for demo development
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const DEMO_DIR = __dirname;
const ROOT_DIR = path.join(__dirname, '..');

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Security: prevent directory traversal
    if (pathname.includes('..')) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }
    
    // Default to index.html for demo root
    if (pathname === '/' || pathname === '/demo' || pathname === '/demo/') {
        pathname = '/demo/index.html';
    }
    
    // Determine file path
    let filePath;
    if (pathname.startsWith('/demo/')) {
        filePath = path.join(ROOT_DIR, pathname);
    } else {
        filePath = path.join(ROOT_DIR, pathname);
    }
    
    // Get file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // Try alternative paths for missing files
            if (pathname.endsWith('.js')) {
                // Try .ts extension for TypeScript files
                const tsPath = filePath.replace('.js', '.ts');
                fs.access(tsPath, fs.constants.F_OK, (tsErr) => {
                    if (!tsErr) {
                        serveTypeScriptAsJS(tsPath, res);
                        return;
                    }
                    serve404(res);
                });
                return;
            }
            serve404(res);
            return;
        }
        
        // Serve the file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
            }
            
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache'
            });
            res.end(content);
        });
    });
});

function serveTypeScriptAsJS(tsPath, res) {
    fs.readFile(tsPath, 'utf8', (err, content) => {
        if (err) {
            serve404(res);
            return;
        }
        
        // Basic TypeScript to JavaScript conversion
        // Remove type annotations and interfaces
        let jsContent = content
            .replace(/import\s+type\s+{[^}]+}\s+from\s+[^;]+;/g, '') // Remove type imports
            .replace(/:\s*[A-Za-z<>[\]|&\s]+(?=\s*[=,\)])/g, '') // Remove type annotations
            .replace(/interface\s+\w+\s*{[^}]*}/g, '') // Remove interfaces
            .replace(/type\s+\w+\s*=[^;]+;/g, '') // Remove type aliases
            .replace(/export\s+type\s+/g, 'export ') // Convert export type to export
            .replace(/as\s+[A-Za-z<>[\]|&\s]+/g, ''); // Remove type assertions
        
        res.writeHead(200, { 
            'Content-Type': 'application/javascript',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache'
        });
        res.end(jsContent);
    });
}

function serve404(res) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - Not Found</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                h1 { color: #667eea; }
            </style>
        </head>
        <body>
            <h1>404 - File Not Found</h1>
            <p>The requested file could not be found.</p>
            <a href="/demo/">← Back to Demo</a>
        </body>
        </html>
    `);
}

server.listen(PORT, () => {
    console.log(`🚀 Sparti Builder Demo Server running at:`);
    console.log(`   Local:   http://localhost:${PORT}/demo/`);
    console.log(`   Network: http://localhost:${PORT}/demo/`);
    console.log('');
    console.log('📝 Demo features:');
    console.log('   • Modern landing page design');
    console.log('   • Interactive Sparti Builder integration');
    console.log('   • Click-to-edit functionality');
    console.log('   • Smooth animations and transitions');
    console.log('');
    console.log('🔧 Development mode - files are served with no-cache headers');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down demo server...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});
