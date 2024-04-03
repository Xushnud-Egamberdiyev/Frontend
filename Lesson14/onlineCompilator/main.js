const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/compile', (req, res) => {
    const code = req.body.code;
    const filename = 'temp.cs';
    
    // Write C# code to a file
    require('fs').writeFileSync(filename, code);

    // Compile and execute the C# code
    exec(`csc ${filename} && ${filename.replace('.cs', '.exe')}`, (error, stdout, stderr) => {
        if (error) {
            console.error('Error:', error);
            res.json({ error: stderr });
        } else {
            console.log('Output:', stdout);
            res.json({ result: stdout });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
