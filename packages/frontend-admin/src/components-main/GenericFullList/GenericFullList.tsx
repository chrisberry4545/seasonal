import React, { Component, FC } from 'react';

export interface IGenericFullListInnerProps<T> {
  items: T;
}

interface IGenericFullListState<T> {
  isLoading: boolean;
  items: T | null;
  error?: string;
}

export function GenericFullList<T>(
  InnerComponent: FC<IGenericFullListInnerProps<T>>,
  requestDataMethod: () => Promise<T>
) {
  return class extends Component<
    {}, IGenericFullListState<T>
  > {
    constructor(props: {}) {
      super(props);
      this.state = {
        isLoading: true,
        items: null
      };
    }

    public async componentWillMount() {
      try {
        const items = await requestDataMethod();
        this.setState({
          isLoading: false,
          items
        });
      } catch (error) {
        this.setState({
          error: error.message,
          isLoading: false,
          items: null
        });
      }
    }

    public render() {
      return (
        <div>
          {
            this.state.isLoading
              ? <div>Loading...</div>
              : <div>
                {
                  !this.state.error && this.state.items
                    ? <InnerComponent items={this.state.items} />
                    : <div>{this.state.error}</div>
                }
              </div>
          }
        </div>
      );
    }
  };
}
