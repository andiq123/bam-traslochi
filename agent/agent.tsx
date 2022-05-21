import { ContactDetails } from "../types/contactDetails";
import { ErrorResponseModel } from "../types/error";
import { Task } from "../types/task";

const requests = {
  get: async <T,>(url: string): Promise<T | ErrorResponseModel> => {
    try {
      const baseUrl = process.env.URL;
      const response = await fetch(encodeURI(baseUrl + url));

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
      console.log(error);
      return {
        status: 500,
        message: "Internal server error",
        failed: true,
      } as ErrorResponseModel;
    }
  },
};

const agent = {
  contact: requests.get<ContactDetails>("contact"),
  tasks: requests.get<Task[]>("tasks"),
};

export default agent;
