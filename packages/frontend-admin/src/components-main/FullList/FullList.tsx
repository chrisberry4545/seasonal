import React, { useState } from 'react';
import { TextSmall, TextMedium, BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import { Redirect } from 'react-router-dom';
import './FullList.scss';
import { LayoutWithTitle } from '../../components-layouts';
import { DeleteModal } from '../DeleteModal/DeleteModal';

export interface IFullListProps<T> {
  title: string;
  items: T[] | undefined;
  getItemId: (item: T) => string;
  getItemName: (item: T) => string;
  getItemEditUrl: (item: T) => string;
  deleteItemFunc: (item: T) => Promise<T>;
}

export const FullList = <T extends {}>({
  title,
  items,
  getItemId,
  getItemName,
  getItemEditUrl,
  deleteItemFunc
}: IFullListProps<T>) => {
  const [goToEditLink, setGoToEditLink] = useState<null | string>(null);
  const [
    deleteItemModalId,
    setDeleteItemModalId
  ] = useState<string | null>();

  if (goToEditLink) {
    return <Redirect to={goToEditLink} push={true} />;
  }

  return (
    <div className='c-full-list'>
      <LayoutWithTitle title={title}>
        {
          items && items.map((item) =>
            <div className='c-full-list__item' key={getItemId(item)}>
              <TextMedium className='c-full-list__item-name'>{getItemName(item)}</TextMedium>
              <div className='c-full-list-item__options'>
                <BareButton className='c-full-list-item__edit'
                  onClick={() => setGoToEditLink(getItemEditUrl(item))}>
                  <TextSmall>
                    Edit
                  </TextSmall>
                </BareButton>
                <BareButton
                  onClick={() => setDeleteItemModalId(getItemId(item))}>
                  <TextSmall>
                    Delete
                  </TextSmall>
                </BareButton>
              </div>
              {
                deleteItemModalId
                && deleteItemModalId === getItemId(item)
                && <DeleteModal
                    cancel={() => setDeleteItemModalId(null)}
                    deleteItem={() => deleteItemFunc(item)} />
              }
            </div>
          )
        }
      </LayoutWithTitle>
    </div>
  );
};
