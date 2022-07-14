import React from 'react';
import { Link } from 'react-router-dom';
import { createPath, ROUTE } from '../routing';

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to={createPath({ path: ROUTE.USERS })}>Users</Link>
    </nav>
  </div>
);

export default Home;
