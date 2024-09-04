import fs from 'fs/promises';
import path from 'node:path';

// Перевірте перед запуском функції наявність файлу text.txt в папці src
const projectPath = path.join(process.cwd(), 'src');

(async () => {
  try {
    fs.rename(
      path.join(projectPath, 'text.txt'),
      path.join(projectPath, 'data.txt'),
    );
    console.log('File successfuly renamed');
  } catch (error) {
    console.error('Error', error);
  }
})();
