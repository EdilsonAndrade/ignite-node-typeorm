import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationRouter } from "./specifications.routes";
import { uploadRouter } from "./uploads.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);
router.use("/uploads", uploadRouter);
export { router };
