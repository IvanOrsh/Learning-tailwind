const FiltersExample = () => {
  return (
    <div>
      {/* Blur */}
      <div className="blur-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni error
        voluptate repudiandae totam iste ut magnam at assumenda. Culpa dicta
        temporibus saepe. Architecto ducimus officiis sapiente asperiores
        cupiditate repellendus odit!
      </div>
      <div className="blur">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni error
        voluptate repudiandae totam iste ut magnam at assumenda. Culpa dicta
        temporibus saepe. Architecto ducimus officiis sapiente asperiores
        cupiditate repellendus odit!
      </div>
      <img className="blur-xl" src="../../../assets/img/img1.jpg" alt="" />

      {/* Brightness */}
      <img
        className="brightness-50"
        src="../../../assets/img/img2.jpg"
        alt=""
      />
      <img
        className="brightness-75"
        src="../../../assets/img/img2.jpg"
        alt=""
      />
      <img
        className="brightness-100"
        src="../../../assets/img/img2.jpg"
        alt=""
      />
      <img
        className="brightness-150"
        src="../../../assets/img/img2.jpg"
        alt=""
      />
      <img
        className="brightness-200"
        src="../../../assets/img/img2.jpg"
        alt=""
      />

      {/* Contrast */}
      <img className="contrast-0" src="../../../assets/img/img3.jpg" alt="" />
      <img className="contrast-50" src="../../../assets/img/img3.jpg" alt="" />
      <img className="contrast-100" src="../../../assets/img/img3.jpg" alt="" />
      <img className="contrast-150" src="../../../assets/img/img3.jpg" alt="" />
      <img className="contrast-200" src="../../../assets/img/img3.jpg" alt="" />

      {/* Grayscale */}
      <img className="grayscale" src="../../../assets/img/img4.jpg" alt="" />

      {/* Invert */}
      <img className="invert" src="../../../assets/img/img4.jpg" alt="" />

      {/* Sepia */}
      <img className="sepia" src="../../../assets/img/img4.jpg" alt="" />

      {/* Hue rotate */}
      <img
        className="hue-rotate-15"
        src="../../../assets/img/img5.jpg"
        alt=""
      />
      <img
        className="hue-rotate-60"
        src="../../../assets/img/img5.jpg"
        alt=""
      />
      <img
        className="hue-rotate-90"
        src="../../../assets/img/img5.jpg"
        alt=""
      />
      <img
        className="hue-rotate-180"
        src="../../../assets/img/img5.jpg"
        alt=""
      />
    </div>
  );
};

export default FiltersExample;
