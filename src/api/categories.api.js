import api from './api';

export class CategoryAPI {
  static async getCategories() {
    const categories = await api.get('/technologies');
    return categories.data.technologies;
  }

  static async getCategory(nameId) {
    const category = await api.get(`/technologies/${nameId}`);
    return category.data.technology;
  }

  static async addNewTech(tech) {
    try {
      await api.post('/technologies', {
        tech: tech
      })
      alert('Thêm thành công một tech!');
      return true;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      alert('Có lỗi xảy ra!');
      return false;
    }
  }

  static async editTech(tech) {
    try {
      await api.put(`/technologies/${tech.nameId}`, {
        tech: tech
      });
      return true;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      alert('Có lỗi xảy ra!');
      return false;
    }
  }
}