export function matchesMediaQuery(mediaQuery: string) {
  return window.matchMedia("(max-width: 767px)").matches;
}
