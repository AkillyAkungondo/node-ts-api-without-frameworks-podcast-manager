import { repoPodcast } from "../repositories/podcast-repository";


export const serviceListEpisodes = async () => {
    const data = await repoPodcast();

    return data;
}