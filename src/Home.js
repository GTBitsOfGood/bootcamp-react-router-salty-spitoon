import React from "react";
import Link from "react-router-dom/Link";

const Home = () => (
  <>
    <h1>Welcome to the Salty Spatoon. How tough are ya?</h1>
    <img class="mommas-boy" src="/how-tough.png" alt="Mommas boy" />
    <ul>
      <li>
        <Link to="/weenie">I AM a weenie :'(</Link>
      </li>
      <li>
        <Link to="/superweenie">I'm not a weenie!</Link>
      </li>
      <li>
        <Link to="/spitoon">💪 💪 💪</Link>
      </li>
    </ul>
  </>
);

export default Home;
