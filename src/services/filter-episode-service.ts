import { FilterPodcastModel } from "../model/filter-podcast-model";
import { repoPodcast } from "../repositories/podcast-repository";

export const serviceFilterEpisodes = async (podcastName:
    string | undefined): Promise<FilterPodcastModel> => {


    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    };
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    if (data.length !== 0) {
        responseFormat.statusCode = 200;

    }
    else {
        responseFormat.statusCode = 204;
    }

    responseFormat.body = data;

    return responseFormat;
}