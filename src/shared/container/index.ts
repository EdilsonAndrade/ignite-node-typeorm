import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/cars/repository/ICategoryRepository";
import CategoryRepository from "../../modules/cars/repository/implementations/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/repository/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repository/ISpecificationRepository";

container.register<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);
container.register<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

export default container;
