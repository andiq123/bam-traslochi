import { Details } from "../types/details";
import { ErrorResponseModel } from "../types/error";

const baseUrl = "http://localhost:3000/api/";

const requests = {
  get: async <T,>(url: string): Promise<T | ErrorResponseModel> => {
    try {
      const response = await fetch(encodeURI(`${baseUrl}${url}`));
      if (response.status !== 200) {
        return {
          failed: true,
          message: "Error fetching data",
          status: response.status,
        } as ErrorResponseModel;
      }

      const dataJson = (await response.json()) as T;
      return dataJson;
    } catch (error) {
      // console.error(error);
      return {
        status: 500,
        message: "Internal server error",
        failed: true,
      } as ErrorResponseModel;
    }
  },
};

const agent = {
  contact: () => requests.get<Details>("contact"),
  tasks: () => requests.get<any>("tasks"),
};

export default agent;
