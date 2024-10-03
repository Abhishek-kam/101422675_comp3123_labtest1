const fs = require('fs');
const path = require('path');
const logDir = path.join(__dirname, 'Logs');

function removeLogs() {
    if (fs.existsSync(logDir)) {
        fs.readdirSync(logDir).forEach(file => {
            fs.unlinkSync(path.join(logDir, file));
            console.log(`Deleted: ${file}`);
        });
        fs.rmdirSync(logDir);
        console.log('Logs directory removed');
    }
}

function createLogs() {
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(path.join(logDir, fileName), `This is log file number ${i}`);
        console.log(`Created: ${fileName}`);
    }
}

//removeLogs();
//createLogs();
