import React, { FC, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ROUTES } from '../config';
import { mainLinks } from '../consts';
import {
  HomePage,
  LoginPage
} from '../components-pages';
import { MainPageLayout } from '../components-layouts';

export const App: FC<{}> = () => (
  <MainPageLayout>
    <HashRouter>
      <div>
        <Route exact path={`/${ROUTES.LOGIN}`}>
          <LoginPage />
        </Route>
        <Route exact path={`/${ROUTES.HOME}`}>
          <HomePage />
        </Route>

        {
          mainLinks.map((link) =>
            <Fragment key={link.viewUrl}>
              <Route exact path={`/${link.viewUrl}`}
                component={link.viewPageComponent} />
              <Route exact path={`/${link.editLinkUrl}`}
                component={link.editPageComponent} />
              <Route exact path={`/${link.createLinkUrl}`}
                component={link.createPageComponent} />
            </Fragment>
          )
        }
      </div>
    </HashRouter>
  </MainPageLayout>
);
