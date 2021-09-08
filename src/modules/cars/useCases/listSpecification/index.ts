import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { SpecificationRepository } from "../../repository/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationRepository
);

const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
);

export { listSpecificationController };
