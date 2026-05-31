import Image from "next/image";
import React from "react";

const WhySquare = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <Image
            width={300}
            height={300}
            src="https://www.praavahealth.com/media/images/Group_25127.2e16d0ba.fill-844x557-c0.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </div>
  );
};

export default WhySquare;
