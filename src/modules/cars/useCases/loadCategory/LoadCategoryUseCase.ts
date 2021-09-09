import csvParse from "csv-parse";
import fs from "fs";
import Category from "../../entities/Category";
import CategoryRepository from "../../repository/implementations/CategoryRepository";

interface ILoadCategories {
    name: string;
    description: string;
}
class LoadCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    private loadCategories(
        file: Express.Multer.File
    ): Promise<ILoadCategories[]> {
        return new Promise((resolv, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: ILoadCategories[] = [];
            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    return resolv(categories);
                });

            return categories;
        });
    }
    async execute(file: Express.Multer.File): Promise<Category[]> {
        const categories = (await this.loadCategories(file)) as Category[];

        categories.forEach((category: ILoadCategories) => {
            const existCategory = this.categoryRepository.findByName(
                category.name
            );
            if (!existCategory) {
                this.categoryRepository.save({
                    ...category,
                });
            }
        });

        return categories;
    }
}

export { LoadCategoryUseCase };
