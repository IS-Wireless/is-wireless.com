export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide:{
            isServer: process.server,
      }
    }
  })