import axiosBase from "axios";

type action = "fetchTasks" | "createTasks";

const api = axiosBase.create({
  baseURL: "http://localhost:8080/api/tasks",
  responseType: "json",
});

export const taskRequest: (action: action) => any = async (action: action) => {
  switch (action) {
    case "fetchTasks":
      const fetchTasks = await api.get("/");
      return fetchTasks.data;
    case "createTasks":
      const createTasks = await api.post("/", "Hello World");
      return createTasks.data;
    default:
      return null;
  }
};