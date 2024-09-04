import fs from 'fs/promises';
import path from 'node:path';

// Перевірте перед запуском функції наявність файлу text.txt в папці src
const filePath = path.join(process.cwd(), 'src', 'text.txt');

(async () => {
  try {
    await fs.unlink(filePath);
    console.log('File successfuly deleted');
  } catch (error) {
    console.error('Error', error);
  }
})();

