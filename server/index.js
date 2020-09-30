const express = require('express');
const path = require('path')

const app = express();
const port = 3150;

app.use(express.static(path.resolve(__dirname, '../client/dist')));


app.listen(port, () => console.log(`Pokedex on port: ${port}`))