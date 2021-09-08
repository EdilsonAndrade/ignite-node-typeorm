import Category from "../../model/Category";
import { ICategoryRepository } from "../../repository/ICategoryRepository";

class ListCategoryUseCase {
    categoryRepository: ICategoryRepository;
    constructor(_categoryRepository: ICategoryRepository) {
        this.categoryRepository = _categoryRepository;
    }

    execute(): Category[] {
        return this.categoryRepository.list();
    }
}

export { ListCategoryUseCase };
