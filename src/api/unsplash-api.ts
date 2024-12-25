import axios from "axios";

export default class UnsplashAPI {
  #BASE_KEY = "hzXQJDewFev3rtldqLMHSH-OvJ3WMgUC5G0_ok4NYvg";
  #BASE_URL = "https://api.unsplash.com/";

  page = 1;
  query = "";
  per_page = 12;

  async fetchImages() {
    const baseSearchParams = new URLSearchParams({
      per_page: this.per_page,
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
