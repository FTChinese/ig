import { resolve } from "path";
import { readFileSync } from "fs";
import toml from "toml";

class Viper {
    filePath: string;
    fileName: string;
    config: any;

    setConfigPath(p: string): Viper {
        this.filePath = p;
        return this;
    }

    setConfiName(name: string): Viper {
        this.fileName = this.fileName;
        return this;
    }

    readInConfig() {
        const configFile = resolve(this.filePath, this.fileName);
        this.config = toml.parse(readFileSync(configFile, "utf-8"));
        return this;
    }

    getConfig() {
        return this.config;
    }
}

export const viper = new Viper();
export const isProduction = process.env.NODE_ENV == "production";
