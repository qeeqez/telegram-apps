import type {StateEvents} from '@/classes/State/types.js';

/**
 * FullScreen internal state.
 */
export interface FullScreenState {
  isFullScreen: boolean;
}

/**
 * FullScreen trackable events.
 */
export type FullScreenEvents = StateEvents<FullScreenState>;

/**
 * FullScreen event name.
 */
export type FullScreenEventName = keyof FullScreenEvents;

/**
 * FullScreen event listener.
 */
export type FullScreenEventListener<E extends FullScreenEventName> =
  FullScreenEvents[E];
