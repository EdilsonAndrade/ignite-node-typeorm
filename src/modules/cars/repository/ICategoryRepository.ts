import Category from "../model/Category";

export interface ICategoryDTO {
    name: string;

    description: string;
}

export interface ICategoryRepository {
    save({ name, description }: ICategoryDTO): void;
    list(): Category[];
    findByName(name: string): Category;
}
