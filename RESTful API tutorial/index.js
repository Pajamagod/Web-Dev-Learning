const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const userRouter = require('./routes/users')


app.use(bodyParser.json());
app.use("/users", userRouter);

app.get('/', (req, res) => {res.send('Hello from Homepage')})

app.listen(
    PORT,
    () => console.log(`It's alive on ${PORT}`)
)
