const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const connectToMongoDB = require("./db");

const mongoUri =
  ""; // write mongo url here

app.use(express.json());
app.use(cors());
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

connectToMongoDB(mongoUri).then(() => {
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
