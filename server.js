const express = require("express")
const app = express()

app.use(express.static('.'));

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const presentationPath = process.argv[2]

if (presentationPath == null) {
    throw new Error('No presentation path provided.');
}

app.get('/', function(req, res) {
    res.render('presentation.html', { presentationPath: presentationPath });
});

app.listen(8000, () => console.log(`Presentation ${presentationPath} started.`))
