const https = require('https');

https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/qdrant.svg', (res) => {
    res.on('data', (d) => process.stdout.write(d));
});
https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/chroma.svg', (res) => {
    res.on('data', (d) => {
        process.stdout.write('\n\n--- CHROMA ---\n\n');
        process.stdout.write(d);
    });
});
