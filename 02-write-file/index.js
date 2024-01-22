const fs = require('fs');
const line = require('readline');

const createStream = fs.createWriteStream('02-write-file/text.txt', {
  flags: 'a',
  encoding: 'utf-8',
});

console.log('Пожалуйста введите текст (чтобы выйти из программы введите exit:');

const interface = line.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.on('line', (input) => {
  if (input.toLowerCase().trim() === 'exit') {
    console.log('До новых встреч :)');
    process.exit(0);
  } else {
    createStream.write(`${input}\n`);
  }
});

interface.on('close', () => {
  console.log('До новых встреч :)');
  process.exit(0);
});
