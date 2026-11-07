declare module 'custom-env' {
  export function env(
    envname?: string | boolean,
    dir?: string | null,
    encoding?: string | null,
    defaultEnvFallback?: boolean
  ): unknown
}
