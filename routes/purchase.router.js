import { Router } from "express";
import PurchaseModel from "../models/purchase.model.js";

const PurchaseRoutes = new Router();

PurchaseRoutes.post("/", async (req, res) => {
  try {
    const purchase = await PurchaseModel.create({ ...req.body });
    return res.status(200).json(purchase);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Não foi possível criar a Purchase");
  }
});

PurchaseRoutes.get("/:purchaseId", async (req, res) => {
  try {
    const { purchaseId } = req.params;
    const purchase = await PurchaseModel.findById(purchaseId).populate("album");
    return res.status(200).json(purchase);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Não foi possível encontrar a Purchase.");
  }
});

export default PurchaseRoutes;
