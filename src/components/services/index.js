import http from './http-common';

class DataService {
  getAll() {
    return http.get("/todo");
  }
  getItemById(id) {
    return http.get(`/todo/:${id}`);
  }
  updateItemById(id) {
    return http.put(`/todo/:${id}`);
  }
  deleteItemById(id,data) {
    return http.delete(`/todo/:${id}`,data); 
  }
  createNewItem(data) {
      return http.post(`/todo`,data);
  }
}

export default new DataService();
