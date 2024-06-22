import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    verbose: true,
    transform: {
        "^.+\\.ts?$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: [".ts"],
    moduleFileExtensions: ["ts", "js", "d.ts", "json", "node"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
};

export default config;
