const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock registration route
app.post("/api/auth/register", (req, res) => {
  const { fullname, mobile, email } = req.body;
  // Dummy response
  const dummyResponse = {
    success: true,
    user: { fullname, mobile, email },
  };
  res.status(201).json(dummyResponse);
});

// Mock login route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  // Dummy response
  const dummyResponse = {
    success: true,
    token: "dummy-token",
  };
  res.status(200).json(dummyResponse);
});

app.listen(PORT, () => {
  console.log(`Mock server running on port ${PORT}`);
});
