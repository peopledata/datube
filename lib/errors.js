module.exports = class DaTubeErr extends Error {
  constructor (msg, code, fn = DaTubeErr) {
    super(`${code}: ${msg}`)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name () {
    return 'DaTubeErr'
  }

  static BAD_HANDSHAKE_REPLY (msg = 'Bad handshake reply') {
    return new DaTubeErr(msg, 'BAD_HANDSHAKE_REPLY', DaTubeErr.BAD_HANDSHAKE_REPLY)
  }

  static BAD_HOLEPUNCH_REPLY (msg = 'Bad holepunch reply') {
    return new DaTubeErr(msg, 'BAD_HOLEPUNCH_REPLY', DaTubeErr.BAD_HOLEPUNCH_REPLY)
  }

  static HOLEPUNCH_ABORTED (msg = 'Holepunch aborted') {
    return new DaTubeErr(msg, 'HOLEPUNCH_ABORTED', DaTubeErr.HOLEPUNCH_ABORTED)
  }

  static HOLEPUNCH_INVALID (msg = 'Invalid holepunch payload') {
    return new DaTubeErr(msg, 'HOLEPUNCH_INVALID', DaTubeErr.HOLEPUNCH_INVALID)
  }

  static HOLEPUNCH_PROBE_TIMEOUT (msg = 'Holepunching probe did not finish in time') {
    return new DaTubeErr(msg, 'HOLEPUNCH_PROBE_TIMEOUT', DaTubeErr.HOLEPUNCH_PROBE_TIMEOUT)
  }

  static HOLEPUNCH_DOUBLE_RANDOMIZED_NATS (msg = 'Both remote and local NATs are randomized') {
    return new DaTubeErr(msg, 'HOLEPUNCH_DOUBLE_RANDOMIZED_NATS', DaTubeErr.HOLEPUNCH_DOUBLE_RANDOMIZED_NATS)
  }

  static CANNOT_HOLEPUNCH (msg = 'Cannot holepunch to remote') {
    return new DaTubeErr(msg, 'CANNOT_HOLEPUNCH', DaTubeErr.CANNOT_HOLEPUNCH)
  }

  static REMOTE_NOT_HOLEPUNCHING (msg = 'Remote is not holepunching') {
    return new DaTubeErr(msg, 'REMOTE_NOT_HOLEPUNCHING', DaTubeErr.REMOTE_NOT_HOLEPUNCHING)
  }

  static REMOTE_NOT_HOLEPUNCHABLE (msg = 'Remote is not holepunchable') {
    return new DaTubeErr(msg, 'REMOTE_NOT_HOLEPUNCHABLE', DaTubeErr.REMOTE_NOT_HOLEPUNCHABLE)
  }

  static REMOTE_ABORTED (msg = 'Remote aborted') {
    return new DaTubeErr(msg, 'REMOTE_ABORTED', DaTubeErr.REMOTE_ABORTED)
  }

  static HANDSHAKE_UNFINISHED (msg = 'Handshake did not finish') {
    return new DaTubeErr(msg, 'HANDSHAKE_UNFINISHED', DaTubeErr.HANDSHAKE_UNFINISHED)
  }

  static HANDSHAKE_INVALID (msg = 'Received invalid handshake') {
    return new DaTubeErr(msg, 'HANDSHAKE_INVALID', DaTubeErr.HANDSHAKE_INVALID)
  }

  static ALREADY_LISTENING (msg = 'Already listening') {
    return new DaTubeErr(msg, 'ALREADY_LISTENING', DaTubeErr.ALREADY_LISTENING)
  }

  static NODE_DESTROYED (msg = 'Node destroyed') {
    return new DaTubeErr(msg, 'NODE_DESTROYED', DaTubeErr.NODE_DESTROYED)
  }

  static PEER_CONNECTION_FAILED (msg = 'Could not connect to peer') {
    return new DaTubeErr(msg, 'PEER_CONNECTION_FAILED', DaTubeErr.PEER_CONNECTION_FAILED)
  }

  static PEER_NOT_FOUND (msg = 'Peer not found') {
    return new DaTubeErr(msg, 'PEER_NOT_FOUND', DaTubeErr.PEER_NOT_FOUND)
  }

  static STREAM_NOT_CONNECTED (msg = 'Stream is not connected') {
    return new DaTubeErr(msg, 'STREAM_NOT_CONNECTED', DaTubeErr.STREAM_DISCONNECTED)
  }

  static SERVER_INCOMPATIBLE (msg = 'Server is using an incompatible version') {
    return new DaTubeErr(msg, 'SERVER_INCOMPATIBLE', DaTubeErr.SERVER_INCOMPATIBLE)
  }

  static SERVER_ERROR (msg = 'Server returned an error') {
    return new DaTubeErr(msg, 'SERVER_ERROR', DaTubeErr.SERVER_ERROR)
  }
}
