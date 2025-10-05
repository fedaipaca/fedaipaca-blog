export const resolvePath = (path: string) => {
    const baseURL = import.meta.env.BASE_URL;

    if (baseURL === "/" || baseURL === undefined) {
        return path;
    } else {
        // we have a base url here like `/fedaipaca.com`
        // we need to return `/fedaipaca.com/path`
        // and we need to be sure the return path does not end with a slash
        return `${baseURL}${path}`.replace(/\/+$/, "");
    }
};