const fs = require('fs');

exports.getResume = () => new Promise((resolve, reject) => {
    fs.readFile('files/resume.json', 'utf8', function (err, data) {
        if (err) reject(err) ;
        resolve(JSON.parse(data));
    });
});