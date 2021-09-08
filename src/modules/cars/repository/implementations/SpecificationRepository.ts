import { Specification } from "../../model/Specification";
import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    specifications: Specification[];

    private static INSTANCE: SpecificationRepository;
    constructor() {
        this.specifications = [];
    }
    public static getInstance() {
        if (!this.INSTANCE) {
            this.INSTANCE = new SpecificationRepository();
        }
        return this.INSTANCE;
    }

    save({ name, description }: ISpecificationDTO): Specification {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });
        this.specifications.push(specification);

        return specification;
    }
    list(): Specification[] {
        return this.specifications;
    }
    findByName(name: string): Specification {
        return this.specifications.find((s) => s.name === name);
    }
}

export { SpecificationRepository };
