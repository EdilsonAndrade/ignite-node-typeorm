import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../../repository/ISpecificationRepository";

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute({
        name,
        description,
    }: ISpecificationDTO): Promise<Specification> {
        const existSpecification =
            await this.specificationRepository.findByName(name);
        if (existSpecification) {
            throw new Error("Specification already exists");
        }

        return await this.specificationRepository.save({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
