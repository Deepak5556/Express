# Express JS Practice

A repository to learn and practice Express.js, covering fundamental concepts, middleware, routing, APIs, authentication, and more. Includes hands-on examples and mini-projects for better understanding.

🔗 Express.js Official Website: [Open](https://expressjs.com/)

# **Installation**

1. `npm install -y`
2. `npm install express`
3. `npm install nodemon`

## app.js
```sh
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
```

### **Importing Expresss**

There are two ways to import **express**

1.       ```
         import express from "express";
         ```

    and also add **package.json** and `   "type":"module";`

2.  ```
    const express = require("express");
    ```

## **HTTP Method**

1. Get - Retrieve data from a server (Read operation).
2. Post - Send data to the server to create a resource.
3. Put - Update an existing resource or create one if it doesn’t exist.
4. Delete - Remove a resource from the server.

# Routing

### **1. Get** - Retrieve data from a server (Read operation).

<!-- For Single Data -->

```sh
    router.get("/", (req, res) => {
        res.send("Movie Viewed")
    });
```

<!-- For Json Data

```sh
    router.get("/", (req, res) => {
    res.status(200).json({message: "Movie creaed"})
    });
``` -->

### **2.Post** - Send data to the server to create a resource.

```sh
    router.post("/", (req, res) => {
        res.send("Movie Created")
    });
```

### **3. Put** - Update an existing resource or create one if it doesn’t exist.

```sh
    router.put("/", (req, res) => {
        res.send("Movie Update")
    });
```

### **4. Delete** - Remove a resource from the server.

```sh
    router.delete("/", (req, res) => {
        res.send("Movie Delete")
    });
```
