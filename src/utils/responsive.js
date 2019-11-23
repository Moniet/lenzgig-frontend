const breakpoints = [320, 768, 1024]

const landingBreakpoints = [1125, 900, 500]

export const landingBps = landingBreakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)
