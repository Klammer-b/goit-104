import path from 'node:path';

const workDir = path.join(process.cwd(), 'src', 'some_file.txt');

console.log(workDir);

console.log(path.parse(workDir));

