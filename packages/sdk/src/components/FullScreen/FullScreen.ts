import {WithSupportsAndTrackableState} from '@/classes/WithSupportsAndTrackableState.js';
import type {PostEvent} from '@/bridge/methods/postEvent.js';
import type {FullScreenState} from '@/components/FullScreen/types.js';
import {RemoveEventListenerFn} from "@/events/types.js";
import {on} from "@/bridge/events/listening/on.js";

// TODO: Usage.

/**
 * @see API: https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/components/fullscreen
 */
export class FullScreen extends WithSupportsAndTrackableState<FullScreenState,
  | 'requestFullscreen'
  | 'exitFullscreen'> {
  constructor(isFullScreen: boolean, version: string, private readonly postEvent: PostEvent) {
    super({isFullScreen}, version, {
      requestFullscreen: 'web_app_request_fullscreen',
      exitFullscreen: 'web_app_exit_fullscreen',
    });
  }

  private set isFullScreen(value: boolean) {
    this.set('isFullScreen', value);
  }

  /**
   * True, if the app in full screen mode.
   */
  get isFullScreen(): boolean {
    return this.get('isFullScreen');
  }

  /**
   * Starts listening to fullscreen changes and applies them.
   * @returns Function to stop listening.
   */
  listen(): RemoveEventListenerFn {
    return on('fullscreen_changed', (event) => {
      const {is_fullscreen} = event;
      this.set({isFullScreen: is_fullscreen});
    });
  };

  /**
   * Starts listening to fullscreen errors.
   * @returns Function to stop listening.
   */
  listen_error(): RemoveEventListenerFn {
    return on('fullscreen_failed', (event) => {
      const {error} = event;
      // TODO: handle error?
      if (error === 'ALREADY_FULLSCREEN') return;
    });
  };

  /**
   * Enables the full screen mode.
   */
  requestFullscreen(): void {
    this.postEvent('web_app_request_fullscreen');
  }

  /**
   * Exits full screen mode.
   */
  exitFullscreen(): void {
    this.postEvent('web_app_exit_fullscreen');
  }
}
