const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const projectRoutes = require("./routes/projects");
const clientRoutes = require("./routes/clients");
const contactRoutes = require("./routes/contact");
const subscriptionRoutes = require("./routes/subscriptions");

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
  });
  

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Serve static files

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/project_management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

module.exports = app;
