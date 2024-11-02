/*
Possible return values are:

nothing (a simple return or no return at all) - does not block navigation and will move to the next middleware function, if any, or complete the route navigation
return navigateTo('/') - redirects to the given path and will set the redirect code to 302 Found if the redirect happens on the server side
return navigateTo('/', { redirectCode: 301 }) - redirects to the given path and will set the redirect code to 301 Moved Permanently if the redirect happens on the server side
return abortNavigation() - stops the current navigation
return abortNavigation(error) - rejects the current navigation with an error
*/

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (to.path !== '/') {
    return navigateTo('/')
  }
})

