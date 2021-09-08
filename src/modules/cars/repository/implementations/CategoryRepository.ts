import Category from "../../model/Category";
import { ICategoryRepository } from "../ICategoryRepository";

interface ICategoryDTO {
    name: string;
    description: string;
}
class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    private static INSTANCE: CategoryRepository;
    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    }

    save({ name, description }: ICategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find((c) => c.name === name);
    }
}

export default CategoryRepository;
