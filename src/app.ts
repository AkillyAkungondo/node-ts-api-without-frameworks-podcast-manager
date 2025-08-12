import { getListEpisodes, getFilteredEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { httpsMethod } from "./utils/https-methods";
import * as http from 'http';

 export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
       
        const [baseUrl,queryString] = request.url.split("?") ?? ["", ""];

         console.log(`Request received for ${baseUrl} with query: ${queryString}`);

        if (request.method === httpsMethod.GET && baseUrl === Routes.LIST_EPISODES) {
            await getListEpisodes(request, response);
        }

        if (request.method === httpsMethod.GET && baseUrl === Routes.FILTER_EPISODES) {
            await getFilteredEpisodes(request, response);
    }
    }