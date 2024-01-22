/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'text.txt');
const read = fs.createReadStream(pathFile);

read.on('data', (text) => {
  console.log(text.toString());
});

