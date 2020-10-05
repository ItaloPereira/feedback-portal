import API from '../index';

class CollaboratorService extends API {
  async getCollaborators() {
    return this.get('/collaborator');
  }
}

export default new CollaboratorService();
