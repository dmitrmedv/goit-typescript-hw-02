import { useEffect, useState } from "react";

import "./App.css";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/SearchBar/SearchBar";
import UnsplashAPI from "./api/Unsplash-api";
import toast, { Toaster } from "react-hot-toast";

const unsplashAPI = new UnsplashAPI();
// const notify = () => {
//   toast.error("Here is your toast.");
// };

function App() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    unsplashAPI.query = query;
    toast.promise(
      unsplashAPI.fetchImages().then(({ results }) => setData(results)),
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

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={onSubmit} />
      {data && <ImageGallery photos={data} />}
    </>
  );
}

export default App;
