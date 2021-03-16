const BREAKPOINTS = {
  xs: `320px`,
  sm: `768px`,
  lg: `1200px`,
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${BREAKPOINTS[key]}) { ${style} }`
}
