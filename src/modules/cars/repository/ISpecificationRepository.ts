import { Specification } from "../entities/Specification";

export interface ISpecificationDTO {
    name: string;

    description: string;
}

export interface ISpecificationRepository {
    save({ name, description }: ISpecificationDTO): Promise<Specification>;
    list(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification>;
}
