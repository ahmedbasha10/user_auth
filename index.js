const express = require("express");
const app = express();
const port = 8000;
const connectToMongoDB = require("./db");

const mongoUri =
  "mongodb+srv://ahmedhassan9124:ahmedhassan@ecommercereactcluster.ugwia3h.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

connectToMongoDB(mongoUri).then(() => {
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
