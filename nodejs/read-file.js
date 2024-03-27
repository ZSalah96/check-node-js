// read-file.js
const fs = require('fs');

// Crée le fichier welcome.txt avec le contenu "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Lit et affiche le contenu du fichier welcome.txt
const content = fs.readFileSync('welcome.txt', 'utf-8');
console.log(content);
