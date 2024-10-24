import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getDatabase, Database } from 'firebase/database'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const firebaseConfig = config.public.firebaseConfig

  let app: FirebaseApp
  let database: Database

  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
  } else {
    app = getApps()[0]
  }

  database = getDatabase(app)

  nuxtApp.provide('firebase', app)
  nuxtApp.provide('database', database)
})