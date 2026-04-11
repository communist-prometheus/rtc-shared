import { Schema } from 'effect'

export const RoomId = Schema.String.pipe(Schema.brand('RoomId'))

export type RoomId = typeof RoomId.Type

export const UserId = Schema.String.pipe(Schema.brand('UserId'))

export type UserId = typeof UserId.Type

export const RoomConfig = Schema.Struct({
  roomId: RoomId,
  maxUsers: Schema.optionalWith(
    Schema.Number.pipe(Schema.int(), Schema.positive()),
    { default: () => 10 }
  ),
  destroyTimeoutMs: Schema.optionalWith(
    Schema.Number.pipe(Schema.positive()),
    { default: () => 300_000 }
  ),
})

export type RoomConfig = typeof RoomConfig.Type

export const RoomUser = Schema.Struct({
  userId: UserId,
  joinedAt: Schema.Number,
})

export type RoomUser = typeof RoomUser.Type

export const RoomState = Schema.Struct({
  roomId: RoomId,
  users: Schema.Array(RoomUser),
  createdAt: Schema.Number,
})

export type RoomState = typeof RoomState.Type
