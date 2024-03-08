import { FetchDto } from "..";
import { API_BASE_URL } from "../../config/constants";

export function fetchApiGet(request: FetchDto) {
  return fetch(`${API_BASE_URL}${request.url}`, {
    method: "get",
  }).then((res) => res.json());
}
