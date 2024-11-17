import { createComponentInitFn } from '@/misc/createComponentInitFn/createComponentInitFn.js';

import { FullScreen } from './FullScreen.js';

/**
 * @returns A new initialized instance of the `SwipeBehavior` class.
 * @see FullScreen
 */
export const initFullScreen = createComponentInitFn(
  'fullScreen',
  ({
    postEvent,
    state = { isFullScreen: true },
    version
  }) => new FullScreen(state.isFullScreen, version, postEvent),
);
