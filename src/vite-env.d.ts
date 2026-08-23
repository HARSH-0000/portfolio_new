/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY?: string
  readonly VITE_NVIDIA_API_KEY?: string
  readonly VITE_NVIDIA_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
