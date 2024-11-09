declare interface Window {
  gtag: (
    command: 'consent' | 'config' | 'event',
    action: string,
    params?: any
  ) => void;
}