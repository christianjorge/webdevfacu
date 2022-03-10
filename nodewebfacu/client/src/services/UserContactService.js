import http from "../http-common";
const getAll = () => {
  return http.get("/viewlogins");
};
/*const get = id => {
  return http.get(`/tutorials/${id}`);
};*/
const create = data => {
  return http.post("/login", data);
};
const update = (id, data) => {
  return http.patch(`/login/${id}`, data);
};
const remove = id => {
  return http.delete(`/login/${id}`);
};
/*const removeAll = () => {
  return http.delete(`/tutorials`);
};*/

export default {
  getAll,
  create,
  update,
  remove
};