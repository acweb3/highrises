import { css } from 'styled-components';

export const breakpointSmall = 520;
export const breakpointMedium = 634;
export const breakpointLarge = 1280;

export const breakpointsMap = {
    small: breakpointSmall,
    medium: breakpointMedium,
    large: breakpointLarge,
};

export const breakpoints = Object.entries(breakpointsMap).reduce(
    (acc, [key, breakpoint]) => ({
        ...acc,
        [key]: (...args) =>
            css`
                @media (min-width: ${breakpoint}px) {
                    ${css(args[0], ...args.slice(1))}
                }
            `,
    }),
    {}
);
