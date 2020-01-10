import React, { Component } from 'react';

import './BackgroundImageWithLoadingSpinner.scss';

import {
  loadImage
} from '../../services/image-loader.service';

import {
  LoadingSpinner
} from '../../components-elements';

import {
  fadeInOutAnimation, makePromiseCancelable
} from '../../helpers';

import { PoseGroup } from 'react-pose';
import { ICancelablePromise } from '../../interfaces';

const FadeInOutAnimation = fadeInOutAnimation();

interface IBackgroundImageWithLoadingSpinnerPropsInterface {
  src: string;
  skipAnimation?: boolean;
}
interface IBackgroundImageWithLoadingSpinnerStateInterface {
  isVisible: boolean;
}

export class BackgroundImageWithLoadingSpinner
extends Component<
  IBackgroundImageWithLoadingSpinnerPropsInterface,
  IBackgroundImageWithLoadingSpinnerStateInterface
> {
  public loadImagePromise: ICancelablePromise<HTMLImageElement> | null = null;

  constructor(props: IBackgroundImageWithLoadingSpinnerPropsInterface) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  public componentDidMount() {
    this.loadImagePromise = makePromiseCancelable(loadImage(this.props.src));
    this.loadImagePromise.promise.then(() => {
      this.setState({
        isVisible: true
      });
    }, () => undefined);
  }

  public componentWillUnmount() {
    if (this.loadImagePromise) {
      this.loadImagePromise.cancel();
    }
  }

  public getBackgroundImageStyle() {
    return { backgroundImage: `url(${this.props.src})` };
  }

  public render() {
    return !this.props.skipAnimation
      ? (
        <PoseGroup>
          {
            this.state.isVisible
              ? <FadeInOutAnimation key='background-image-fade-in-out'
                className='c-background-image-with-loading-spinner'
                style={this.getBackgroundImageStyle()}>
                { this.props.children }
              </FadeInOutAnimation>
              : <FadeInOutAnimation key='loading-spinner-fade-in-out'
                className='c-background-image-with-loading-spinner'>
                <LoadingSpinner />
              </FadeInOutAnimation>
          }
        </PoseGroup>
      )
      : <div className='c-background-image-with-loading-spinner'
          style={this.getBackgroundImageStyle()} />;
  }
}
