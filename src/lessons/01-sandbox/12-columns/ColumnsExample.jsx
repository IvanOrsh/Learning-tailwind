const ColumnsExample = () => {
  return (
    <div>
      {/* Columns */}
      <div className="columns-4 gap-1">
        <img className="w-full" src="../../../assets/img/img1.jpg" alt="" />
        <img className="w-full" src="../../../assets/img/img2.jpg" alt="" />
        <img className="w-full" src="../../../assets/img/img3.jpg" alt="" />
        <img className="w-full" src="../../../assets/img/img4.jpg" alt="" />
      </div>

      <div className="columns-xs">
        <img className="w-full" src="../../../assets/img/img1.jpg" alt="" />
        <img className="w-full" src="../../../assets/img/img2.jpg" alt="" />
        <img className="w-full" src="../../../assets/img/img3.jpg" alt="" />
        <img className="w-full" src="../../../assets/img/img4.jpg" alt="" />
      </div>

      {/* Aspect Ratio */}
      <div className="columns-xs">
        <img
          className="aspect-video w-full"
          src="../../../assets/img/img1.jpg"
          alt=""
        />
        <img className="w-full" src="../../../assets/img/img2.jpg" alt="" />
        <img
          className="aspect-square w-full"
          src="../../../assets/img/img3.jpg"
          alt=""
        />
        <img className="w-full" src="../../../assets/img/img4.jpg" alt="" />
      </div>
    </div>
  );
};

export default ColumnsExample;
