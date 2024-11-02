// Giving the event as argument to useRuntimeConfig is optional, but it is recommended to pass it to get the runtime config overwritten by environment variables at runtime for server routes.
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const repo = await $fetch('https://api.github.com/repos/nuxt/nuxt', {
    headers: {
      Authorization: `token ${config.githubToken}`
    }
  })

  return repo
})
