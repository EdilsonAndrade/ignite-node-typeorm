import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { Request, Response } from "express";

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    handle(request, response): Response {
        return response.json(this.listSpecificationUseCase.execute());
    }
}

export { ListSpecificationController };
