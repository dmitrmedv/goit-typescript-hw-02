import axios from "axios";
import { ImageSearchResponse } from "../types";

export default class UnsplashAPI {
  #BASE_KEY: string = "hzXQJDewFev3rtldqLMHSH-OvJ3WMgUC5G0_ok4NYvg";
  #BASE_URL: string = "https://api.unsplash.com/";

  page: number = 1;
  query: string = "";
  per_page: number = 12;

  async fetchImages(): Promise<ImageSearchResponse> {
    const baseSearchParams = new URLSearchParams({
      per_page: this.per_page.toString(),
      client_id: this.#BASE_KEY,
      page: this.page.toString(),
      query: this.query,
    });

    const response = await axios.get<ImageSearchResponse>(
      `${this.#BASE_URL}search/photos/?${baseSearchParams}`
    );
    return response.data;
  }

  changePage(): void {
    this.page += 1;
  }

  resetPage(): void {
    this.page = 1;
  }
}
