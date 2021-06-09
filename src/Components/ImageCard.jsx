import React from "react";

const ImageCard = ({ image }) => {
  const { user, webformatURL, downloads, views, likes } = image;
  const tags = image.tags.split(",");
  return (
    <>
      <div className="overflow-hidden rounded-sm shadow-lg bg-blend-color">
        <img src={webformatURL} alt="random" className="w-auto h-auto" />
        <h2 className="font-bold text-purple-500 my-3"> {user}</h2>

        <ul>
          <li>
            <strong> Views: </strong>
            {views}
          </li>
          <li>
            <strong> downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong> Likes: </strong>
            {likes}
          </li>
        </ul>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
