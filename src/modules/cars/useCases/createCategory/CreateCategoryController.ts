import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
class CreateCategoryService {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
        try {
            const createCategoryUseCase = container.resolve(
                CreateCategoryUseCase
            );
            await createCategoryUseCase.execute({ name, description });

            return response.status(201).send();
        } catch (error) {
            return response
                .status(400)
                .json({ error: error.message, code: error.code });
        }
    }
}

export default CreateCategoryService;
