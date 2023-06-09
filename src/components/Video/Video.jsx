import React from "react";

const Video = () => {
  return (
    <div className="bg-white h-5/6 w-11/12 rounded-3xl">
      <div className="text-black flex flex-col justify-evenly items-center h-full">
        <img
          className="w-64 h-64"
          src="https://codigofacilito.com/assets/svg/upgrade-a945c2f2382a2f704fb10f48be425150fd37294f23dd7f68227a7c4efc4b4fb6.svg"
          alt=""
        />
        <h3>¡Desbloquea vídeos ilimitados! Sube a Premium</h3>
        <p>Necesitas premium para acceder a este contenido. Suscríbete por $480MXN al mes</p>
        <button className="py-4 px-10 bg-yellow-400 text-white rounded-md">Comprar el curso</button>
      </div>
    </div>
  );
};

export default Video;
