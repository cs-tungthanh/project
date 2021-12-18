/* eslint-disable @typescript-eslint/no-explicit-any */
export type SimpleInfo = {
    key1: string,
    key2: number,
}

export const DEFAULT_SIMPLE_INFO: SimpleInfo = {
    key1: 'hello',
    key2: 2,
};

export const loadSimpleInfoFile = async (path: string): Promise<SimpleInfo> => {
    try {
        // const fileContent: any = await fs.readFile(path);
        const fileContent: any = {
            k1: 'hello',
            key12: 'xinchao',
        };
        // Fill with default values if not exists
        Object.keys(DEFAULT_SIMPLE_INFO).forEach((key: string) => {
            if (!(key in fileContent)) {
                fileContent[key] = DEFAULT_SIMPLE_INFO[key as keyof typeof DEFAULT_SIMPLE_INFO];
            }
        });
        return fileContent;
    } catch (error) {
        return JSON.parse(JSON.stringify(DEFAULT_SIMPLE_INFO));
    }
};
