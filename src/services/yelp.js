import { get } from "axios";

export const search = async (payload) => {
  const baseUrl = "http://localhost:9000/searchRestaurants";
  const response = await get(baseUrl, { params: payload });
  return response.data.data.businesses;
};
