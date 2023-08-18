import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sksIyAW1H18oogovDDllyIsADoSLdNRWa8yEHkjrdIhzcpA8UFO4aPBG73VPih2rrTqkhtnJkcEv4peWKUuJ0JRKkrAhs4kQxKhLOReM1IWs486eLM98pEc6DjXAIay00paVgQ5CxO1XSCMX5dw9G3frikzkpORMGVBTP8GrMgcowaSnsH4I"
})
