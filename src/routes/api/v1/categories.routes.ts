import { Router } from "express";
import CreateCategoryController from "../../../modules/cars/useCases/createCategory/CreateCategoryController";
import listCategoryController from "../../../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();

categoriesRouter.post("/", createCategoryController.handle);
categoriesRouter.get("/", async (request, response) => {
    console.log("reload 2");

    return await listCategoryController().handle(request, response);
});

categoriesRouter.get("/:id", async (request, response) => {
    const { id } = request.params;
    return response.json(id);
});
export { categoriesRouter };
