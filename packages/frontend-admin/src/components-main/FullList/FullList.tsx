import React, { useState } from 'react';
import { FormLayout } from '../../components-layouts';
import { TextHeadingMedium, TextSmall, TextMedium, BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import { Redirect } from 'react-router-dom';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';
import './FullList.scss';

export interface IFullListProps<T> {
  title: string;
  items: T[] | undefined;
  getItemName: (item: T) => string;
  getItemEditUrl: (item: T) => string;
  deleteItemFunc: (item: T) => Promise<T>;
}

export const FullList = <T extends {}>({
  title,
  items,
  getItemName,
  getItemEditUrl,
  deleteItemFunc
}: IFullListProps<T>) => {
  const [goToEditLink, setGoToEditLink] = useState<null | string>(null);

  if (goToEditLink) {
    return <Redirect to={goToEditLink} push={true} />;
  }

  return <FormLayout>
    <TextHeadingMedium className='c-full-list__heading'>{title}</TextHeadingMedium>
    {
      items && items.map((item) =>
        <div className='c-full-list__item' key={getItemEditUrl(item)}>
          <TextMedium className='c-full-list__item-name'>{getItemName(item)}</TextMedium>
          <div className='c-full-list-item__options'>
            <BareButton className='c-full-list-item__edit'
              onClick={() => setGoToEditLink(getItemEditUrl(item))}>
              <TextSmall>
                Edit
              </TextSmall>
            </BareButton>
            <DeleteItemButton deleteItem={() => deleteItemFunc(item)} />
          </div>
        </div>
      )
    }
  </FormLayout>;
};
