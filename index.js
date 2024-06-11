import express from "express";
import fileConfig from "./config/fileConfig.js";
import imgRoutes from "./routes/img.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('uploads'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileConfig);
app.use("/", imgRoutes);

app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));
