export const CAMEL_TO_KEBAB = (string: string): string => {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

export const CALCULATE_PROPORTION = (part: number = 0, total: number = 100) => {
    if (total === 0 || part === 0) {
        return 0;
    }

    return (part / total) * 100;
}
