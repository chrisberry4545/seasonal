import React, { FC, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ROUTES } from '../config';
import { mainLinks, IMainLinkPages } from '../consts';
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
          mainLinks.reduce((array, group) => [
            ...array,
            ...group.pages
          ], [] as IMainLinkPages[]).map((link) =>
            <Fragment key={link.viewUrl}>
              {
                link.viewPageComponent
                  && <Route exact path={`/${link.viewUrl}`}
                  component={link.viewPageComponent} />
              }
              {
                link.editPageComponent
                  && <Route exact path={`/${link.editLinkUrl}`}
                  component={link.editPageComponent} />
              }
              {
                link.createPageComponent
                && <Route exact path={`/${link.createLinkUrl}`}
                component={link.createPageComponent} />
              }
            </Fragment>
          )
        }
      </div>
    </HashRouter>
  </MainPageLayout>
);
