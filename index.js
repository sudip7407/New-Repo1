const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Moumita madam')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
