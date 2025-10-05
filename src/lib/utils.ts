export const resolvePath = (path: string) => {
    const baseURL = import.meta.env.BASE_URL;

    if (baseURL === "/" || baseURL === undefined) {
        return path;
    } else {
        return `${baseURL.replace(/\/$/, "")}${path}`;
    }
};