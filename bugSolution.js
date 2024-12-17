```javascript
const fs = require('fs');

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function processFile() {
  try {
    const data = await readFileAsync('./my-file.txt');
    console.log(data);
    //Some code to process the file
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

processFile();
```