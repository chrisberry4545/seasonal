import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const MainLinks: FC<{}> = () => (
  <div>
    <div>
      <Link to='/countries'>View countries</Link>
    </div>
    <div>
      <Link to='/recipes'>View recipes</Link>
    </div>
  </div>
);
