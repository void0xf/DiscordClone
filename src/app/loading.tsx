import React from "react";

const loading = () => {
  return (
    <div className="w-screen h-screen items-center flex justify-center bg-LightGray ">
      <div className="w-96">
        <div className="items-center justify-center flex">
          <video
            autoPlay
            loop
            playsInline
            muted
            className="visible max-w-[200px]"
          >
            <img alt="loading discord wumps" src="/LoadingImage.png" />
            <source src="/LoadingVideoTransparent.webm" type="video/webm" />
          </video>
        </div>
        <div className="text-whiteMain">
          <h2 className="font-ggSansBold text-center uppercase text-xs">
            Did you know
          </h2>
          <p className="text-center text-lg max-w-96">
            Hover a GIF and click the star to save it to your favourites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default loading;
