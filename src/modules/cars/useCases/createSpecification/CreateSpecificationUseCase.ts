import { Specification } from "../../model/Specification";
import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../../repository/ISpecificationRepository";

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ name, description }: ISpecificationDTO): Specification {
        const existSpecification =
            this.specificationRepository.findByName(name);
        if (existSpecification) {
            throw new Error("Specification already exists");
        }

        return this.specificationRepository.save({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
