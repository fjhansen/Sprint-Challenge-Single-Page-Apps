import React from "react";


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="morty"
        />
                <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          alt="morty"
        />
              
                <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          alt="morty"
        />
      </header>
    </section>
   
  );
}
