import axios from "axios";
import { API_KEY_PARAM, BASE_URL } from "../config";

export class TVShowAPI {

  static async fetchPopulars() {
      const reponse = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
      return reponse.data.results[0];
  }

  static async fetchRecommendations(tvShowId) {
    
  }

  static async fetchByTitle(title) {
    
  }
}
