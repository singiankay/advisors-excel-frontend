const express = require("express");
const app = express();
const port = process.env.EXPRESS_PORT || 3001;

app.post("/api/auth", (req, res) => {
  // Handle your API logic here
  res.json({ message: "Hello from Express!" });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
