process.env.NEXT_PUBLIC_SANITY_PROJECT_ID="egumyvxa"
process.env.NEXT_PUBLIC_SANITY_DATASET="production"

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-26'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET|| 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET ra'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID|| 'egumyvxa',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
