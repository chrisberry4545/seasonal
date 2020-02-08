import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const HomePage: FC<{}> = () => (
  <div>
    <Link to='/recipes'>View recipes</Link>
  </div>
);
