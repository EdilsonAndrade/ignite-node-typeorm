import CategoryRepository from "../../repository/implementations/CategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export default (): ListCategoryController => {
    const categoryRepository = new CategoryRepository();

    const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

    const listCategoryController = new ListCategoryController(
        listCategoryUseCase
    );

    return listCategoryController;
};
