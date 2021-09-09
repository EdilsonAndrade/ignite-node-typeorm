import { getRepository, Repository } from "typeorm";
import Category from "../../entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";

interface ICategoryDTO {
    name: string;
    description: string;
}
class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async save({ name, description }: ICategoryDTO): Promise<void> {
        const category = await this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Category> {
        return await this.repository.findOne({
            where: {
                name: name,
            },
        });
    }
}

export default CategoryRepository;
