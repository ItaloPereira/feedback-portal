import API from '../index';

class CollaboratorService extends API {
  async getCollaborators() {
    return this.get('/collaborator');
  }

  async getCollaborator(id) {
    return this.get(`/collaborator/${id}`);
  }

  async getCollaboratorFeedbacks(id) {
    return this.get(`/collaborator/${id}/feedback`);
  }
}

export default new CollaboratorService();
