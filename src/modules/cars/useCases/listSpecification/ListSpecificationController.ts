import { Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
    constructor() {}

    async handle(request, response): Promise<Response> {
        const listSpecificationUseCase = container.resolve(
            ListSpecificationUseCase
        );
        return response.json(await listSpecificationUseCase.execute());
    }
}

export { ListSpecificationController };
