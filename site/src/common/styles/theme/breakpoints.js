import { css } from 'styled-components';

export const breakpointMobile = 520;
export const breakpointExtraSmall = 634;
export const breakpointSmall = 768;
export const breakpointMedium = 1024;
export const breakpointLarge = 1280;

export const breakpointsMap = {
    mobile: breakpointMobile,
    extraSmall: breakpointExtraSmall,
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
