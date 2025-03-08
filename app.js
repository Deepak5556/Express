const express = require('express');
const app = express();
const port = 7125;
app.get('/',(req,res) => {
 res.json({message: 'Hello World!'});
});

// app.listen(port,()=>{
//     console.log("port",port);
// })
//or
app.listen(port,()=>{
    console.log(`port:${port}`);
})