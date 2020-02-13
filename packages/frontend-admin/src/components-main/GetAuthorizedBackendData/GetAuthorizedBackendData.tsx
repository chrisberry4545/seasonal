import React, { FC, useState, useEffect } from 'react';

export interface IGetAuthorizedBackendDataProps<T> {
  items: T;
}

interface IGetAuthorizedBackendDataState<T> {
  isLoading: boolean;
  items: T | null;
  error: string | null;
}

export function GetAuthorizedBackendData<T>(
  InnerComponent: FC<IGetAuthorizedBackendDataProps<T>>,
  requestDataMethod: () => Promise<T>
): FC<{}> {
  return () => {
    const [state, setState] = useState<IGetAuthorizedBackendDataState<T>>({
      error: null,
      isLoading: true,
      items: null
    });

    useEffect(() => {
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
    }, []);

    return (
      <div>
        {
          state.isLoading
            ? <div>Loading...</div>
            : <div>
              {
                !state.error && state.items
                  ? <InnerComponent items={state.items} />
                  : <div>{state.error}</div>
              }
            </div>
        }
      </div>
    );
  };
}