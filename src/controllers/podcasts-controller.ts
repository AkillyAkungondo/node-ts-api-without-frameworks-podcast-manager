import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episode-service';
import { FilterPodcastModel } from '../model/filter-podcast-model';

export const getListEpisodes = async (
    req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(content))
}

export const getFilteredEpisodes = async (
    req: IncomingMessage, res: ServerResponse) => {

    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(content.body))
}