import { initFullScreen } from '@telegram-apps/sdk';

import { createHOC } from '../createHOC.js';
import { createHook } from '../createHook.js';

/**
 * Hook to receive the FullScreen component instance.
 */
export const useFullScreen = createHook(initFullScreen);

/**
 * HOC to pass the FullScreen component instance to the wrapped component.
 */
export const withFullScreen = createHOC(useFullScreen);
