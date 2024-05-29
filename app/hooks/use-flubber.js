import { useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "flubber";

export function useFlubber(progress, paths) {
  return useTransform(progress, (latest) => {
    const index = Math.floor(latest);
    const nextIndex = (index + 1) % paths.length;
    return interpolate(paths[index], paths[nextIndex])(latest - index);
  });
}

export function getIndex(_, index) {
  return index;
}