import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';

export const MainLinks: FC<{}> = () => (
  <div>
    <div>
      <Link to={`/${ROUTES.COUNTRY}`}>View countries</Link>
    </div>
    <div>
      <Link to={`/${ROUTES.FOOD}`}>View food</Link>
    </div>
    <div>
      <Link to={`/${ROUTES.FOOD}/${ROUTES.CREATE}`}>Create food</Link>
    </div>
    <div>
      <Link to={`/${ROUTES.RECIPE}`}>View recipes</Link>
    </div>
    <div>
      <Link to={`/${ROUTES.REGION}`}>View regions</Link>
    </div>
    <div>
      <Link to={`/${ROUTES.USER}`}>View users</Link>
    </div>
  </div>
);
