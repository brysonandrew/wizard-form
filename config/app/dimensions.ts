export const resolveRemFromPx = (px: number, base = 16) => `${px / base}rem`;

export const HEADER_HEIGHT_PX = 60;
export const HEADER_HEIGHT_REM = resolveRemFromPx(HEADER_HEIGHT_PX);

export const CONTENT_HEIGHT = `calc(100vh - ${HEADER_HEIGHT_PX}px)`;
export const CONTENT_HEIGHT_AND_PADDING = `calc(100vh - ${HEADER_HEIGHT_PX}px - 1rem)`;

export const NAV_WIDTH_PX = 202;
export const NAV_WIDTH_REM = resolveRemFromPx(NAV_WIDTH_PX);
