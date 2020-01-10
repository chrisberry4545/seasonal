import posed from 'react-pose';

import {
  DEFAULT_ANIMATION_TIME
} from './animations.const';

export const fadeInOutAnimation = ({
  enterDelay = 0,
  exitDelay = 0,
  enterDuration = DEFAULT_ANIMATION_TIME,
  exitDuration = DEFAULT_ANIMATION_TIME,
  type = 'div'
} = {}) => posed[type]({
  enter: {
    delay: enterDelay,
    opacity: 1,
    transition: {
      duration: enterDuration
    }
  },
  exit: {
    delay: exitDelay,
    opacity: 0,
    transition: {
      duration: exitDuration
    }
  }
});
