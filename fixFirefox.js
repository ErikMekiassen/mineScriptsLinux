#!/usr/bin/env node
const fs = require('fs');

const getFile = async () => {
 return fs.copyFile('./snap.firefox.firefox', './snap.firefox.firefox', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File copied successfully');
    fs.readFile('./snap.firefox.firefox', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Content of the copied file:');
      }
    });
  }
});   
}
const content = await getFile();
console.log(content)

// systemctl restart snapd.apparmor.service
// await fs.appendFile('./snap.firefox.firefox', content, (err) => {
//   if (err) throw err;
//   console.log('Data appended to file!')})