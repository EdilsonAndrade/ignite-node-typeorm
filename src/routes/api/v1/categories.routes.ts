import { Request, Response, Router } from "express";
import { createCategoryController } from "../../../modules/cars/useCases/createCategory";
import { listCategoryController } from "../../../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

categoriesRouter.post("/", (request: Request, response: Response) => {
    return createCategoryController.handle(request, response);
});
categoriesRouter.get("/", (request, response) => {
    console.log("reload 2");

    return listCategoryController.handle(request, response);
});

categoriesRouter.get("/:id", (request, response) => {
    const { id } = request.params;
    return response.json(id);
});
export { categoriesRouter };
