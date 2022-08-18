/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PORT: number;
  readonly VITE_ROUTER_HISTORY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
