import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/cars/repository/ICategoryRepository";
import CategoryRepository from "../../modules/cars/repository/implementations/CategoryRepository";

container.register<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

export default container;
