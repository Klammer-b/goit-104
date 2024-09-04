import fs from 'fs';
import path from 'node:path';

// Перевірте перед запуском функції наявність файлу text.txt в папці src
const filePath = path.join(process.cwd(), 'src', 'text.txt');

// Перший варіант
/*
fs.readFile(filePath, (err, fileContent) => {
  console.log(fileContent.toString());
});
*/

// Або можете одразу вказати кодування як аргумент функції
fs.readFile(filePath, 'utf-8', (err, fileContent) => {
  console.log(fileContent);
});
