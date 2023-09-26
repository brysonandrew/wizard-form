interface Window {
  __ANAESCO__?: any;
}

declare module 'message-like-antd';

declare module 'cors-anywhere' {
  type TConfig = {
    handleInitialRequest: () => void; // Function that may handle the request instead, by returning a truthy value.
    getProxyForUrl: (url: string | Url) => void; // Function that specifies the proxy to use
    maxRedirects: 5; // Maximum number of redirects to be followed.
    originBlacklist: string[]; // Requests from these origins will be blocked.
    originWhitelist: string[]; // If non-empty, requests not from an origin in this list will be blocked.
    checkRateLimit: null; // Function that may enforce a rate-limit by returning a non-empty string.
    redirectSameOrigin: false; // Redirect the client to the requested URL for same-origin requests.
    requireHeader: any[]; // Require a header to be set?
    removeHeaders: any[]; // Strip these request headers.
    setHeaders: HeadersInit; // Set these request headers.
    corsMaxAge: number; // If set, an Access-Control-Max-Age header with this value (in seconds) will be added.
    helpFile: string;
  };
  function createServer(
    config: Partial<TConfig>,
  ): { listen: (port: string | number, host: string, callback: () => void) => any };
}
