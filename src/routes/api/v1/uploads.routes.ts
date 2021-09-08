import { Router } from "express";
import multer from "multer";
import { loadCategoryController } from "../../../modules/cars/useCases/loadCategory";

const upload = multer({
    dest: "./temp",
});

const uploadRouter = Router();

uploadRouter.post("/", upload.single("file"), async (request, response) => {
    return await loadCategoryController.handle(request, response);
});

export { uploadRouter };
