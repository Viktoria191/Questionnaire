import axios from 'axios';

export default class ApiService {
  static async fetchData() {
    try {
      const response = await axios.get(
        'https://opentdb.com/api.php?amount=10&category=18&encode=url3986'
      );
      console.log('response>', response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
    }
  }
}
