import fs from 'node:fs';
import path from 'node:path';

// Перевірте перед запуском функції наявність файлу text.txt в папці src
const filePath = path.join(process.cwd(), 'src', 'text.txt');

const fileContent = fs.readFileSync(filePath);

console.log(fileContent.toString('utf8'));
