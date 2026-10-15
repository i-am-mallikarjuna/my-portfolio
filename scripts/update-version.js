const fs = require('fs');
const path = require('path');

function generateTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

const version = generateTimestamp();
const content = JSON.stringify({ version }, null, 2);
const filePath = path.join(__dirname, '..', 'public', 'version.json');

try {
    fs.writeFileSync(filePath, content);
    console.log(`Successfully updated version.json to: ${version}`);
} catch (error) {
    console.error('Error updating version.json:', error);
    process.exit(1);
}
