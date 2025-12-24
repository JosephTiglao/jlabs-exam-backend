import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "SECRET_KEY";

const users = [
  {
    id: 1,
    email: "jlabs@gmail.com",
    password: "password123",
  },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

app.listen(8000, () => {
  console.log("Backend running...");
  console.log("http://localhost:8000");
});
