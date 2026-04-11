import { Schema } from 'effect'

export const IceServerConfig = Schema.Struct({
  urls: Schema.Union(Schema.String, Schema.Array(Schema.String)),
  username: Schema.optional(Schema.String),
  credential: Schema.optional(Schema.String),
})

export type IceServerConfig = typeof IceServerConfig.Type

export const TurnCredentials = Schema.Struct({
  iceServers: Schema.Array(IceServerConfig),
  ttl: Schema.Number,
})

export type TurnCredentials = typeof TurnCredentials.Type

export const CandidateType = Schema.Literal('host', 'srflx', 'prflx', 'relay')

export type CandidateType = typeof CandidateType.Type

export const IceConnectionState = Schema.Literal(
  'new',
  'checking',
  'connected',
  'completed',
  'failed',
  'disconnected',
  'closed'
)

export type IceConnectionState = typeof IceConnectionState.Type
