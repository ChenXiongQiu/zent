// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

declare var InstallTrigger: unknown;

const isFirefox = typeof InstallTrigger !== 'undefined';

export default isFirefox;
