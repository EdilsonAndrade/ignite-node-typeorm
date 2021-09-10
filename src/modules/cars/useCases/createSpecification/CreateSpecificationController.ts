import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor() {}

    async handle(request: Request, response: Response): Promise<Response> {
        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase
        );
        const { name, description } = request.body;
        return await response.json(
            createSpecificationUseCase.execute({
                name,
                description,
            })
        );
    }
}

export { CreateSpecificationController };
