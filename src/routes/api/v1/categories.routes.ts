import { Request, Response, Router } from "express";
import createCategoryController from "../../../modules/cars/useCases/createCategory";
import listCategoryController from "../../../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

categoriesRouter.post("/", async (request: Request, response: Response) => {
    return await createCategoryController().handle(request, response);
});
categoriesRouter.get("/", async (request, response) => {
    console.log("reload 2");

    return await listCategoryController().handle(request, response);
});

categoriesRouter.get("/:id", async (request, response) => {
    const { id } = request.params;
    return response.json(id);
});
export { categoriesRouter };
