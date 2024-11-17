import { initFullScreen } from '@telegram-apps/sdk';

import { createHOCs } from '../createHOCs.js';
import { createHooks } from '../createHooks.js';

export const [useFullScreenRaw, useFullScreen] = createHooks(initFullScreen);

export const [withFullScreenRaw, withFullScreen] = createHOCs(
  useFullScreenRaw,
  useFullScreen,
);
