import { Specification } from "../entities/Specification";

export interface ISpecificationDTO {
    name: string;

    description: string;
}

export interface ISpecificationRepository {
    save({ name, description }: ISpecificationDTO): Specification;
    list(): Specification[];
    findByName(name: string): Specification;
}
