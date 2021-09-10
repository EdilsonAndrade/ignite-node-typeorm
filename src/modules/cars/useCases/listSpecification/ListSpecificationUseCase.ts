import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repository/ISpecificationRepository";

@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private speficitaionRepository: ISpecificationRepository
    ) {}

    async execute(): Promise<Specification[]> {
        return await this.speficitaionRepository.list();
    }
}

export { ListSpecificationUseCase };
