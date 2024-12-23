import { useEffect, useState } from "react";

import "./App.css";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { LoadMoreBtn } from "./Components/LoadMoreBtn/LoadMoreBtn";
import UnsplashAPI from "./api/unsplash-api";

const unsplashAPI = new UnsplashAPI();
// const notify = () => {
//   toast.error("Here is your toast.");
// };

function App() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    unsplashAPI.query = query;
    toast.promise(
      unsplashAPI.fetchImages().then((data) => {
        setData(data.results);
        setShowButton(true);
        console.log(data);
      }),
      {
        loading: "Loading",
        success: "Got the data",
        error: "Error when fetching",
      }
    );
  }, [query]);

  const onSubmit = (q: string) => {
    setQuery(q);
  };

  const loadMore = () => {
    unsplashAPI.changePage();
    unsplashAPI
      .fetchImages()
      .then((data) => setData((prev) => [...prev, ...data.results]))
      .catch(console.log);
  };

  return (
    <div className="app">
      <Toaster />
      <SearchBar onSubmit={onSubmit} />
      {data && <ImageGallery photos={data} />}
      {showButton && <LoadMoreBtn loadMore={loadMore} />}
    </div>
  );
}

export default App;
