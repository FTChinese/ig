import { resolve } from "path";
import { promises as fs } from "fs";

/**
 * @description Loads makrdown files
 */
export class JPCCStore {

    private storeDir: string
    private homeContentFile: string

    constructor() {
        this.storeDir = resolve(process.cwd(), "data/jpm/articles");

        this.homeContentFile = resolve(this.storeDir, "home.md");
    }

    async loadHomeContent(): Promise<string> {
        return await fs.readFile(this.homeContentFile, "utf8");
    }

    async loadStory(fileName: string): Promise<string> {
        const absName = resolve(this.storeDir, fileName);

        return fs.readFile(absName, "utf8");
    }
}

export const jpccStore = new JPCCStore();
