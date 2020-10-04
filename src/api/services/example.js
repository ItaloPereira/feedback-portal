import API from '../index';

class ExampleService extends API {
  async get_() {
    return this.get('/get');
  }

  async post_(data) {
    return this.post('/post', data);
  }

  async put_(data, uid) {
    return this.put(`/put/${uid}`, data);
  }

  async getSpecific_(uid) {
    return this.get(`/get/${uid}`);
  }

  async delete_(uid) {
    return this.delete(`/delete/${uid}`);
  }
}

export default new ExampleService();
