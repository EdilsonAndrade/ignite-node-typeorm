import CategoryRepository from "../../repository/implementations/CategoryRepository";
import { LoadCategoryController } from "./LoadCategoryController";
import { LoadCategoryUseCase } from "./LoadCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const loadCategoryUseCase = new LoadCategoryUseCase(categoryRepository);
const loadCategoryController = new LoadCategoryController(loadCategoryUseCase);

export { loadCategoryController };
