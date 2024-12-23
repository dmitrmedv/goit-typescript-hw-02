import axios from "axios";

export default class UnsplashAPI {
  #BASE_KEY = "hzXQJDewFev3rtldqLMHSH-OvJ3WMgUC5G0_ok4NYvg";
  #BASE_URL = "https://api.unsplash.com/";

  page = 1;
  query = "";

  async fetchImages() {
    const baseSearchParams = new URLSearchParams({
      client_id: this.#BASE_KEY,
      page: this.page,
      query: this.query,
    });
    const response = await axios.get(
      `${this.#BASE_URL}search/photos/?${baseSearchParams}`
    );
    return response.data;
  }

  changePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
