import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';

export const MainLinks: FC<{}> = () => (
  <div>
    <div>
      <Link to={`/${ROUTES.COUNTRY}`}>View countries</Link>
    </div>
    <div>
      <Link to={`/${ROUTES.RECIPE}`}>View recipes</Link>
    </div>
  </div>
);
