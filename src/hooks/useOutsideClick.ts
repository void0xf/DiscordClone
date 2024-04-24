import React, { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 * @param ref - React ref object targeting a DOM element
 * @param callback - Function to call on an outside click
 */
export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
