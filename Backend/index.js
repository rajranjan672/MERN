const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

// importing routes

 const product = require("./router/product")


//mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/product', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully ')

    },
    error => {
        console.log("couldn't connected to db: " + error)
    }
)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
//   });

// port
const port = 3001;



//middleware

app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(bodyparser.json());


app.use("/Images", express.static("Images"))


//routes
app.use("/api/product", product);


app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("server is running on port "+port)
});