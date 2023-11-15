import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
      <div className="text-center text-white">
        <div className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
          Merhaba, Uygulamama Hoşgeldiniz!
        </div>
        <a
          className="text-lg text-green-200 hover:text-green-300 transition duration-300 ease-in-out hover:underline"
          href="/products"
        >
          Products Listesi İçin
        </a>
        <br />
        <a
          className="text-lg text-blue-200 hover:text-blue-300 transition duration-300 ease-in-out hover:underline"
          href="/users"
        >
          User listesi İçin
        </a>
      </div>
    </div>
  );
};

export default Home;
