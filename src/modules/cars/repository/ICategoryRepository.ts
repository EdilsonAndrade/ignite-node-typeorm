import Category from "../entities/Category";

export interface ICategoryDTO {
    name: string;

    description: string;
}

export interface ICategoryRepository {
    save({ name, description }: ICategoryDTO): Promise<void>;
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
}
