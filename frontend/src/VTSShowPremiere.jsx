import React from 'react';


const VTSShowPremiere = () => {
  const premiereMovies = [
    {
      title: "Avengers: Endgame",
      description: "The final battle to save the universe.",
      image: "/avengersendgame.jpg"
    },
    {
      title: "Joker",
      description: "The origin story of a troubled comedian.",
      image: "/joker.jpg"
    },
    {
      title: "The Lion King",
      description: "A young lion prince overcomes adversity.",
      image: "/lion king.jpg"
    },
    {
      title: "Inception",
      description: "A mind-bending thriller exploring dreams within dreams.",
      image: "/inception.jpg"
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space.",
      image: "/interstellar.jpg"
    }
  ];

  return (
    <div className="premiere-section">
      <h2 className="premiere-heading">VTS Show Premiere</h2>
      <div className="premiere-content">
        {premiereMovies.map((movie, index) => (
          <div className="premiere-item" key={index}>
            <img src={movie.image} alt={movie.title} className="premiere-img" />
            <div className="premiere-details">
              <h3 className="premiere-title">{movie.title}</h3>
              <p className="premiere-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VTSShowPremiere;
