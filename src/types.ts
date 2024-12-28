export interface Photo {
  id: string;
  urls: {
    full: string;
    regular: string;
    thumb: string;
    small: string;
  };
  description: string;
  alt_description: string;
}

export interface ImageSearchResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}
