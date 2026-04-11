import { Schema } from 'effect'
import { RoomId, UserId } from './room.js'

export const JoinMessage = Schema.Struct({
  type: Schema.Literal('join'),
  roomId: RoomId,
  userId: UserId,
})

export const LeaveMessage = Schema.Struct({
  type: Schema.Literal('leave'),
  userId: UserId,
})

export const OfferMessage = Schema.Struct({
  type: Schema.Literal('offer'),
  from: UserId,
  target: UserId,
  sdp: Schema.String,
})

export const AnswerMessage = Schema.Struct({
  type: Schema.Literal('answer'),
  from: UserId,
  target: UserId,
  sdp: Schema.String,
})

export const IceCandidateMessage = Schema.Struct({
  type: Schema.Literal('ice-candidate'),
  from: UserId,
  target: UserId,
  candidate: Schema.String,
  sdpMid: Schema.NullOr(Schema.String),
  sdpMLineIndex: Schema.NullOr(Schema.Number),
})

export const RoomStateMessage = Schema.Struct({
  type: Schema.Literal('room-state'),
  roomId: RoomId,
  users: Schema.Array(UserId),
})

export const ErrorMessage = Schema.Struct({
  type: Schema.Literal('error'),
  code: Schema.String,
  message: Schema.String,
})

export const ClientMessage = Schema.Union(
  JoinMessage,
  LeaveMessage,
  OfferMessage,
  AnswerMessage,
  IceCandidateMessage
)

export type ClientMessage = typeof ClientMessage.Type

export const ServerMessage = Schema.Union(
  RoomStateMessage,
  OfferMessage,
  AnswerMessage,
  IceCandidateMessage,
  ErrorMessage
)

export type ServerMessage = typeof ServerMessage.Type
