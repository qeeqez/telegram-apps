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
    version,
    addCleanup
  }) => {

    // Otherwise, FullScreen instance will be created using zero values.
    const fullScreen = new FullScreen(state.isFullScreen, version, postEvent);

    // Listen to the viewport external changes and actualize local instance.
    addCleanup(fullScreen.listen());
    addCleanup(fullScreen.listen_error());

    return fullScreen;
  },
);

