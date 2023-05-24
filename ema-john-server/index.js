const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000;


// middleWARE
app.use(cors())
app.use(express.json())


app.get("/", (req, res)=> {
res.send('jhon is busy on shopping')
})

app.listen(port, ()=>{
  console.log(`app is running on port: ${port}`)
})









