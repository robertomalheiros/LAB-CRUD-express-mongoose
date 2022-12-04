import { Router } from "express";
import AlbumModel from "../models/album.model.js";

const AlbumRoutes = new Router();

AlbumRoutes.post("/", async (req, res) => {
  try {
    const newAlbum = await AlbumModel.create({ ...req.body });
    res.status(200).json(newAlbum);
  } catch (e) {
    console.log(e);
    res.status(500).json("Não foi possível criar o Album");
  }
});

AlbumRoutes.get("/", async (req, res) => {
  try {
    const albums = await AlbumModel.find();
    res.status(200).json(albums);
  } catch (e) {
    console.log(e);
    res.status(500).json("Não foi possível obter a lista de Albums!");
  }
});

AlbumRoutes.get("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const album = await AlbumModel.findById(albumId);
    res.status(200).json(album);
  } catch (e) {
    console.log(e);
    res.status(500).json("Não foi possível encontrar o Album!");
  }
});

AlbumRoutes.put("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const updatedAlbum = await AlbumModel.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedAlbum);
  } catch (e) {
    console.log(e);
    res.status(500).json("Não foi possível editar o Album!");
  }
});

AlbumRoutes.delete("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const result = await AlbumModel.findByIdAndDelete(albumId);
    res.status(204).json();
  } catch (e) {
    console.log(e);
    res.status(500).json("Não foi possível deletar o Album!");
  }
});

export default AlbumRoutes;
