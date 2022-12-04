import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import AlbumRoutes from "./routes/album.router.js";
import PurchaseRoutes from "./routes/purchase.router.js";

const app = express();
dotenv.config();
connect("LAB-CRUD-express-mongoose");
app.use(express.json());

app.use("/albums", AlbumRoutes);
app.use("/purchases", PurchaseRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
