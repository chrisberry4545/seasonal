import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { mainLinks } from '../../consts';

export const MainLinks: FC<{}> = () => (
  <div>
    {
      mainLinks.map((link) =>
        <Fragment key={link.viewUrl}>
          <div>
            <Link to={`/${link.viewUrl}`}>
              {link.viewLinkText}
            </Link>
          </div>
          <div>
            <Link to={`/${link.createLinkUrl}`}>
              {link.createLinkText}
            </Link>
          </div>
        </Fragment>
      )
    }
  </div>
);
