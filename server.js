const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
const cors = require("cors")
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://iCode:LOXmw78dTJLBc5KJ@cluster0.9wfwq.mongodb.net/ecommerce?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Database Connected')
});

//middleware
app.use(cors());
app.use(express.json())


app.get("/", (req, res) => 
res.status(200).send("Hello World") 
);

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
}); 