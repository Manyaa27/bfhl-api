import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serve frontend files

//  POST API
app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));

  res.json({
    operation_code: 1,
    user_id: "manya_yadav_27052004",
    email: "manya@vitstudent.ac.in",
    roll_number: "22BCT0189",
    numbers,
    alphabets,
  });
});

//  Serve a frontend HTML file
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
