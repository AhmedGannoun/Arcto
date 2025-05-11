const fs = require('fs');
const path = require('path');

// Paths
const sourcePath = path.join(__dirname, '..', '..', 'public', 'arcto.png');
const destinationPath = path.join(__dirname, 'public', 'arcto.png');

// Create public directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
}

// Copy the logo file
try {
  fs.copyFileSync(sourcePath, destinationPath);
  console.log('Logo file copied successfully!');
} catch (error) {
  console.error('Error copying logo file:', error);
}