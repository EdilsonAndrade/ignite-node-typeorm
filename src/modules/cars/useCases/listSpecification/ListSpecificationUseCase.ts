import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../../repository/ISpecificationRepository";
import { Specification } from "../../model/Specification";
class ListSpecificationUseCase {
    constructor(private speficitaionRepository: ISpecificationRepository) {}

    execute(): Specification[] {
        return this.speficitaionRepository.list();
    }
}

export { ListSpecificationUseCase };
