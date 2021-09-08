import { Request, Response } from "express";
import { LoadCategoryUseCase } from "./LoadCategoryUseCase";

class LoadCategoryController {
    constructor(private loadCategoryUseCase: LoadCategoryUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const categories = await this.loadCategoryUseCase.execute(file);
        return response.json(categories);
    }
}

export { LoadCategoryController };
