# Express JS Practice
 A repository to learn and practice Express.js, covering fundamental concepts, middleware, routing, APIs, authentication, and more. Includes hands-on examples and mini-projects for better understanding.

🔗 Express.js Official Website: [Open](https://expressjs.com/)

### Installation
 1. `npm install -y`
 2.  `npm install express`
 3.  `npm install nodemon`

### app.js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
