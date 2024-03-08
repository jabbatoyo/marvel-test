import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`https://gateway.marvel.com/v1/public/characters`, () => {
    return HttpResponse.json(
      {
        code: 200,
        data: {
          count: 50,
          limit: 50,
          offset: 0,
          results: [
            {
              id: 1,
              name: "3-D Man",
              description:
                "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
              thumbnail: {
                extension: "jpg",
                path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              },
            },
            {
              id: 2,
              name: "4-D Woman",
              description:
                "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
              thumbnail: {
                extension: "jpg",
                path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              },
            },
            {
              id: 3,
              name: "5-D Dog",
              description:
                "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias",
              thumbnail: {
                extension: "jpg",
                path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              },
            },
          ],
        },
      },
      { status: 200 }
    );
  }),
];
