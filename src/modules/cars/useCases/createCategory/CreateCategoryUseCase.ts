import {
    ICategoryDTO,
    ICategoryRepository,
} from "../../repository/ICategoryRepository";

class CreateCategoryUsecase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute({ name, description }: ICategoryDTO): Promise<void> {
        const categoryExists = await this.categoryRepository.findByName(name);

        if (categoryExists) {
            throw new Error("Category already exists");
        }

        await this.categoryRepository.save({
            name,
            description,
        });
    }
}

export default CreateCategoryUsecase;
