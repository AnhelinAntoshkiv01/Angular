import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  users: `${API}/users`,
  auth: `${API}/auth`,
  cars: `${API}/cars`,
}
