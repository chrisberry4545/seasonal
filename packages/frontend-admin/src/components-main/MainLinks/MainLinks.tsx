import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { mainLinks } from '../../consts';
import './MainLinks.scss';
import { TextMedium, TextHeadingSmall } from '@chrisb-dev/seasonal-shared-frontend-components';
import { LayoutWithTitle } from '../../components-layouts';

const SingleLink: FC<{
  url: string
}> = ({
  children,
  url
}) => (
  <Link className='c-main-links__link' to={`/${url}`}>
    <TextMedium>{children}</TextMedium>
  </Link>
);

export const MainLinks: FC<{}> = () => (
  <Fragment>
    {
      mainLinks.map((group) =>
        <LayoutWithTitle key={group.title} title={group.title}>
          {
            group.pages.map((link) =>
              <div key={link.sectionName} className='c-main-links__section'>
                <TextHeadingSmall className='c-main-links__section-heading'>{ link.sectionName }</TextHeadingSmall>
                <div className='c-main-links__options'>
                  {
                    link.createPageComponent && link.createLinkUrl
                      && (
                        <Fragment>
                          <SingleLink url={link.createLinkUrl}>
                            Create
                          </SingleLink>
                          <TextMedium>
                            -
                          </TextMedium>
                        </Fragment>
                      )
                  }
                  <SingleLink url={link.viewUrl}>
                    View
                  </SingleLink>
                </div>
              </div>
            )
          }
        </LayoutWithTitle>
      )
    }
  </Fragment>
);
