import { HttpLink } from '@apollo/client'
import { config } from '@config'

const { uri } = config.api

export const httpLink = new HttpLink({ uri })
