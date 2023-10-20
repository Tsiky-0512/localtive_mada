import config from "../config/server.config.json";

export const baseUrl = (path: string) => config.api + path;
