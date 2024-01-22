const fs = require('fs').promises;
const path = require('path');

const folderSrc = '03-files-in-folder/secret-folder';

async function readFile(folderSrc) {
  try {
    const elements = await fs.readdir(folderSrc, { withFileTypes: true });

    for (const elem of elements) {
      const itemPath = path.join(folderSrc, elem.name);
      if (elem.isFile()) {
        const stat = await fs.stat(itemPath);
        const fileSize = stat.size;
        const sizeInKb = (fileSize / 1024).toFixed(3);
        const extension = path.extname(elem.name).slice(1);
        console.log(`${elem.name} - ${extension} - ${sizeInKb} kb`);
      } else if (elem.isDirectory()) {
        console.log(`Подпапка: ${elem.name}`);
        await readFile(itemPath);
      }
    }
  } catch (err) {
    console.error('Ошибка чтения папки:', err);
  }
}

readFile(folderSrc);
