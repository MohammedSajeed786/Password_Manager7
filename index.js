const connectToMongo = require("./db.js");
const express = require("express");
connectToMongo();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
var cors = require("cors");
app.use(cors());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use("/api/auth", require("./routes/auth"));
app.use("/api/passwords", require("./routes/passwords"));

if (process.env.NODE_ENV == "production") {
  
  
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  // console.log(`Password Manager listening on port ${port}`);
});
//5689nk2022