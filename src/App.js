import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
import Search from "./Components/Search";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto sm:mx-auto">
      <Search searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h3 className="text-center mr-auto text-7xl">Loading</h3>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
