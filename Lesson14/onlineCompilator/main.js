const express = require('express');
const edge = require('edge');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const compileAndRun = edge.func(`
    #r "System.IO.Compression.FileSystem.dll"

    async (input) => {
        try {
            var result = await CSharpScript.EvaluateAsync(input.ToString());
            return new { result };
        } catch (Exception e) {
            return new { error = e.Message };
        }
    }
`);

app.post('/compile', async (req, res) => {
    const { code } = req.body;
    const result = await compileAndRun(code);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
