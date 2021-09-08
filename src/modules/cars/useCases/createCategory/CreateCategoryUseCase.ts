import {
    ICategoryDTO,
    ICategoryRepository,
} from "../../repository/ICategoryRepository";

class CreateCategoryUsecase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute({ name, description }: ICategoryDTO): void {
        const categoryExists = this.categoryRepository.findByName(name);

        if (categoryExists) {
            throw new Error("Category already exists");
        }

        this.categoryRepository.save({
            name,
            description,
        });
    }
}

export default CreateCategoryUsecase;
