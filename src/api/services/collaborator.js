import API from '../index';

class CollaboratorService extends API {
  async getCollaborators() {
    return this.get('/collaborator');
  }

  async getCollaborator(collaboratorId) {
    return this.get(`/collaborator/${collaboratorId}`);
  }

  async getCollaboratorFeedbacks(collaboratorId) {
    return this.get(`/collaborator/${collaboratorId}/feedback`);
  }

  async like(collaboratorId, feedbackId, data) {
    return this.put(`/collaborator/${collaboratorId}/feedback/${feedbackId}`, data);
  }
}

export default new CollaboratorService();
