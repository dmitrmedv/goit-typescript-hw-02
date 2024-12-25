import { useEffect, useState } from "react";

import "./App.css";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { LoadMoreBtn } from "./Components/LoadMoreBtn/LoadMoreBtn";
import UnsplashAPI from "./api/unsplash-api";
import ImageModal from "./Components/ImageModal/ImageModal";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";

const unsplashAPI = new UnsplashAPI();

function App() {
  const [showError, setError] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setError(false);
    setLoading(true);
    setPhotos([]);
    setShowButton(false);
    unsplashAPI.resetPage();
    unsplashAPI.query = query;

    unsplashAPI
      .fetchImages()
      .then((data) => {
        toast.success(`за вашим запитом знайдено ${data.total} результатів...`);
        setPhotos(data.results);
        if (data.total_pages !== unsplashAPI.page) {
          setShowButton(true);
        }
        console.log(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query]);

  const onSubmit = (q: string) => {
    setQuery(q);
  };

  const loadMore = () => {
    setError(false);
    setShowButton(false);
    setLoading(true);
    unsplashAPI.changePage();
    unsplashAPI
      .fetchImages()
      .then((data) => {
        setPhotos((prev) => [...prev, ...data.results]);
        setShowButton(true);
        if (unsplashAPI.page === data.total_pages) {
          setShowButton(false);
          toast.error("Ви побачили усі результати запиту...");
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <div className="app">
      <Toaster />
      <SearchBar onSubmit={onSubmit} loading={loading} />
      {photos && <ImageGallery photos={photos} />}
      {showButton && <LoadMoreBtn loadMore={loadMore} />}
      {showError && <ErrorMessage />}
    </div>
  );
}

export default App;
