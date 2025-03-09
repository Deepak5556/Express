# Express JS Practice

A repository to learn and practice Express.js, covering fundamental concepts, middleware, routing, APIs, authentication, and more. Includes hands-on examples and mini-projects for better understanding.

🔗 Express.js Official Website: [Open](https://expressjs.com/)

# **Installation**

1. `npm install -y`
2. `npm install express`
3. `npm install nodemon`

## app.js

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### **Importing Expresss**

There are two ways to import **express**

1.  ```javascript
    import express from "express";
    ```

    and also add **package.json** and `   "type":"module";`

2.  ```javascript
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

# Controller

In an Express.js application, controllers are responsible for handling business logic and separating route definitions from request processing. They help keep your code clean, modular, and reusable.

# **Connecting to Database** - MangoDB Atlas

### **Create Cluster in MongoDB**

# **Installation**

1.  ```sh
    npm install mongoose
    ```

Create DataBase in MongoDB Atlas And Connect The DB with UR

Create `Lib` directory and create `Db.js` file add bellow connection code in the created js file

# **Connection Code**

```javascript
const { mongoose } = require("mongoose");
const URL = //Replace Your URL Here
  (exports.connectDB = async () => {
    try {
      await mongoose.connect(URL);
      console.log("MongoDB is Running Successfully");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  });
```

## Configaration of .env

To Hide Sensitive Files We Are Using .env

### Install

```sh
npm install dotenv
```

Import in Db.js File

```javascript
const dotenv = require("dotenv");
```

Add `.env` file and add Your MongoDB URL

```Javascript
MONGODB_URI = "YOUR URL HERE"
```

After Creating env File Add `.env` in `.gitignore` file to keep your MongoDB URL Private.

Declare :

```javascript
dotenv.config();
const URL = process.env.MONGODB_URI;
```

### Full Code Of Db.js

```javascript
const { mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URL = process.env.MONGODB_URI;
exports.connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB is Running Successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
```

## Add this in app.js for getting the json by URL Encoder

```js
app.use(express.urlencoded({ extended: true }));
```

## For Validation

Creating Model Folder and `movie.model.js` File For Creatin Schema

Import Schema in `movies.model.js`

```js
import { Schema } from "mongoose";
```

## OR

```js
const { Schema } = require("mongoose");
```

## Adding Schema

```js
const schema = new Schema({
  title: String,
  desc: String,
});
```

## Creating Your Model

```js
const Movies = model("Movie", schema);
```

## Importing Model

```js
const { Schema } = require("mongoose");
```

## Export Model

```js
module.exports = Movies;
```

## Or

```js
module.exports = Movies;
```

# Schema

```js
const schema = new Schema({
  title: String,
  desc: String,
});
```

# Mongoose Validation

```js
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: String,
});
```
