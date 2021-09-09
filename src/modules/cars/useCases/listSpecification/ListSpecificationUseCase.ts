import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repository/ISpecificationRepository";
class ListSpecificationUseCase {
    constructor(private speficitaionRepository: ISpecificationRepository) {}

    execute(): Specification[] {
        return this.speficitaionRepository.list();
    }
}

export { ListSpecificationUseCase };
