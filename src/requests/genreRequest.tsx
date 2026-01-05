import axiosBase from "axios";

type action = "fetchGenres" | "createTasks";

const api = axiosBase.create({
  baseURL: "http://localhost:8080/api/genres",
  responseType: "json",
});

export const genreRequest: (action: action) => any = async (action: action) => {
  switch (action) {
    case "fetchGenres":
      const fetchGenres = await api.get("/");
      return fetchGenres.data;
    case "createTasks":
      const createGenres = await api.post("/", "Hello World");
      return createGenres.data;
    default:
      return null;
  }
};