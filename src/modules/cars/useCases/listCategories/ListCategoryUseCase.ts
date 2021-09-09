import Category from "../../entities/Category";
import { ICategoryRepository } from "../../repository/ICategoryRepository";

class ListCategoryUseCase {
    categoryRepository: ICategoryRepository;
    constructor(_categoryRepository: ICategoryRepository) {
        this.categoryRepository = _categoryRepository;
    }

    async execute(): Promise<Category[]> {
        return await this.categoryRepository.list();
    }
}

export { ListCategoryUseCase };
