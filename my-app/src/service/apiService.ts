import axios from 'axios';

export default class ApiService {
  static async fetchData() {
    try {
      const response = await axios.get(
        'https://opentdb.com/api.php?amount=10&category=18'
      );
      console.log('response>', response.data.results);

      return response.data.results;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
    }
  }
}
