import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

// See: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
import { useIsomorphicLayoutEffect } from '../life-cycles/useIsomorphicLayoutEffect';
type THtmlEventMapKey = keyof HTMLElementEventMap;
type TSvgEventMapKey = keyof SVGElementEventMap | 'endEvent';
type TSvgEventMap = SVGElementEventMap & { endEvent: Event };
// Window Event based useEventListener interface
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K | null,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void;
// Element Event based useEventListener interface
export function useEventListener<
  K extends THtmlEventMapKey,
  T extends HTMLElement = HTMLDivElement
>(
  eventName: K | null,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void;

export function useEventListener<K extends TSvgEventMapKey, T extends SVGElement = SVGSVGElement>(
  eventName: K | null,
  handler: (event: TSvgEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void;
// Document Event based useEventListener interface
export function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K | null,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void;

export function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends THtmlEventMapKey,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH | null,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener) || eventName === null) {
      return;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener, options);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, options]);
}
