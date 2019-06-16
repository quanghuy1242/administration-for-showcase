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
}