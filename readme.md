# 🎧 Podcast Manager

> Uma API REST em Node.js (com TypeScript e sem frameworks) para centralizar e organizar podcasts por categorias, inspirada no estilo da Netflix.

## 📜 Descrição

O **Podcast Manager** é uma aplicação que centraliza diferentes podcasts, separados por categoria, permitindo ao usuário explorar e filtrar episódios de forma prática.

O foco do projeto é implementar a API **sem frameworks**, utilizando apenas módulos nativos do Node.js, explorando ao máximo conceitos de arquitetura e organização de código em TypeScript.

## 🌐 Domínio

Podcasts produzidos em vídeo.

## ✨ Funcionalidades

- **Listar episódios** organizados em seções por categoria:
  - Saúde
  - Fitness
  - Desporto
- **Filtrar episódios** pelo nome do podcast
- Retornar:
  - Nome do podcast
  - Nome do episódio
  - Imagem de capa
  - Link ou ID do vídeo

## ⚙️ Como Funciona

### Exemplo de Implementação

Trecho do roteamento principal:

```typescript
import { getListEpisodes, getFilteredEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { httpsMethod } from "./utils/https-methods";
import * as http from 'http';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, queryString] = request.url.split("?") ?? ["", ""];
    console.log(`Request received for ${baseUrl} with query: ${queryString}`);

    if (request.method === httpsMethod.GET && baseUrl === Routes.LIST_EPISODES) {
        await getListEpisodes(request, response);
    }

    if (request.method === httpsMethod.GET && baseUrl === Routes.FILTER_EPISODES) {
        await getFilteredEpisodes(request, response);
    }
}
```

### 📡 Exemplo de Resposta da API
```json
[
    {
        "podcastName": "Tech Talks",
        "episodeTitle": "Understanding AI",
        "videoId": "12345",
        "categories": ["Technology", "AI"]
    },
    {
        "podcastName": "Health Matters",
        "episodeTitle": "Nutrition Basics",
        "videoId": "67890",
        "categories": ["Health", "Nutrition"]
    },
    {
        "podcastName": "venus",
        "episodeTitle": "Exploring Europe",
        "videoId": "54321",
        "categories": ["Travel", "Europe"]
    },
    {
        "podcastName": "flow",
        "episodeTitle": "Investing for Beginners",
        "videoId": "09876",
        "categories": ["Finance", "Investing"]
    }
]
```

## 🚀 Instalação
## Clone o repositório:

```bash
git clone git@github.com:AkillyAkungondo/node-ts-api-without-frameworks-podcast-manager.git
```
## Instale as dependências:

```bash
npm install
```
▶️ Uso
## Inicie o servidor usando:

```bash
npm start:dev
```
## 📡 Endpoints

| Método | Rota               | Descrição                          |
|--------|--------------------|-----------------------------------|
| GET    | /episodes         | Lista episódios por categoria     |
| GET    | /episodes/filter  | Filtra episódios por nome do podcast |

## 🛠 Tecnologias

### Node.js (módulos nativos HTTP, URL)

### TypeScript

### 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch (git checkout -b minha-feature)
3. Commit suas alterações (git commit -m 'Adiciona nova feature')
4. Faça o push (git push origin minha-feature)
5. Abra um Pull Request

### 📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo.