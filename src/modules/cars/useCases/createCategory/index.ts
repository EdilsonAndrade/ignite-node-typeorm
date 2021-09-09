import CategoryRepository from "../../repository/implementations/CategoryRepository";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryUsecase from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoryRepository();

    const createCategoryUseCase = new CreateCategoryUsecase(
        categoriesRepository
    );

    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );

    return createCategoryController;
};
