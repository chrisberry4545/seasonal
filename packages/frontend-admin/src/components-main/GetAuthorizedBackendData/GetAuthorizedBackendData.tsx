import React, { FC, useState, useEffect } from 'react';

export interface IGetAuthorizedBackendDataProps<T> {
  items: T;
  reload?: () => void;
  updateMethod?: (item: T) => Promise<T>;
}

interface IGetAuthorizedBackendDataState<T> {
  isLoading: boolean;
  items: T | null;
  error: string | null;
}

export function GetAuthorizedBackendData<T>(
  InnerComponent: FC<IGetAuthorizedBackendDataProps<T>>,
  requestDataMethod: () => Promise<T>,
  updateMethod?: (item: T) => Promise<T>
): FC<{}> {
  return () => {
    const [state, setState] = useState<IGetAuthorizedBackendDataState<T>>({
      error: null,
      isLoading: true,
      items: null
    });

    const requestNewData = () => {
      requestDataMethod()
        .then((items) => setState({
          error: null,
          isLoading: false,
          items
        })).catch((error) => setState({
          error: error.message,
          isLoading: false,
          items: null
        }));
    };

    useEffect(requestNewData, []);

    return (
      <div>
        {
          state.isLoading
            ? <div>Loading...</div>
            : <div>
              {
                !state.error && state.items
                  ? <InnerComponent
                      items={state.items}
                      reload={requestNewData}
                      updateMethod={updateMethod}
                    />
                  : <div>{state.error}</div>
              }
            </div>
        }
      </div>
    );
  };
}
