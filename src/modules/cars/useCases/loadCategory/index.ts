import CategoryRepository from "../../repository/implementations/CategoryRepository";
import { LoadCategoryController } from "./LoadCategoryController";
import { LoadCategoryUseCase } from "./LoadCategoryUseCase";

export default (): LoadCategoryController => {
    const categoryRepository = new CategoryRepository();
    const loadCategoryUseCase = new LoadCategoryUseCase(categoryRepository);
    const loadCategoryController = new LoadCategoryController(
        loadCategoryUseCase
    );

    return loadCategoryController;
};
