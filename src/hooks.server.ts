import type { Handle } from '@sveltejs/kit'
import trpcTransformer from 'trpc-transformer'

export const handle: Handle = async () => {
  console.log(trpcTransformer)
}
