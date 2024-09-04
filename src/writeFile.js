import fs from 'fs/promises';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'src', 'text.txt');

(async () => {
  try {
    const text = 'Smth else';
    await fs.writeFile(filePath, text);
    console.log('Text successfuly writed to file');
  } catch (error) {
    console.error('Error', error);
  }
})();
