import * as fs from "fs";
import * as path from "path";
import { PodcastModel } from "../model/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcast.json");

export const repoPodcast = async (
    podcastName?: string): Promise<PodcastModel[]> => {
    const rawdata = fs.readFileSync(pathData, "utf8");
    let jsonFile = JSON.parse(rawdata);

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;

}
