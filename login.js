import jwt from "jsonwebtoken";

const SECRET_KEY = "SECRET_KEY";

const users = [
  {
    id: 1,
    email: "jlabs@gmail.com",
    password: "password123",
  },
];

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

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
}
