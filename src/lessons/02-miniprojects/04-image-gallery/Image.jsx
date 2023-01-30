const Image = ({ title, url, likes, shares }) => {
  return (
    <div className="group relative">
      <img src={url} alt={title} className="w-72" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
        <div className="flex w-full justify-between">
          <div className="font-normal">
            <p className="text-sm">{title}</p>
            <p className="text-xs">
              {likes} likes - {shares} Shares
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="../../../assets/img/image-gallery/bookmark.svg"
              alt="bookmark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
