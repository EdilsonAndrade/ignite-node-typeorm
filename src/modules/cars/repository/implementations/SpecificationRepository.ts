import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async save({
        name,
        description,
    }: ISpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name,
            description,
        });

        return await this.repository.save(specification);
    }
    async list(): Promise<Specification[]> {
        return await this.repository.find();
    }
    async findByName(name: string): Promise<Specification> {
        return await this.repository.findOne({ name });
    }
}

export { SpecificationRepository };
