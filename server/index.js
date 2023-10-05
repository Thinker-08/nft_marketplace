const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors);
app.listen(8000, ()=> {
    console.log("Server running at 8000");
})