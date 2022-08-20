module.exports = class daTubeErr extends Error {
    constructor (msg, code, fn = daTubeErr) {
      super(`${code}: ${msg}`)
      this.code = code
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, fn)
      }
    }
  
    get name () {
      return 'daTubeErr'
    }
  
    static BAD_HANDSHAKE_REPLY (msg = 'Bad handshake reply') {
      return new daTubeErr(msg, 'BAD_HANDSHAKE_REPLY', daTubeErr.BAD_HANDSHAKE_REPLY)
    }
  
    static BAD_HOLEPUNCH_REPLY (msg = 'Bad holepunch reply') {
      return new daTubeErr(msg, 'BAD_HOLEPUNCH_REPLY', daTubeErr.BAD_HOLEPUNCH_REPLY)
    }
  
    static HOLEPUNCH_ABORTED (msg = 'Holepunch aborted') {
      return new daTubeErr(msg, 'HOLEPUNCH_ABORTED', daTubeErr.HOLEPUNCH_ABORTED)
    }
  
    static HOLEPUNCH_INVALID (msg = 'Invalid holepunch payload') {
      return new daTubeErr(msg, 'HOLEPUNCH_INVALID', daTubeErr.HOLEPUNCH_INVALID)
    }
  
    static HOLEPUNCH_PROBE_TIMEOUT (msg = 'Holepunching probe did not finish in time') {
      return new daTubeErr(msg, 'HOLEPUNCH_PROBE_TIMEOUT', daTubeErr.HOLEPUNCH_PROBE_TIMEOUT)
    }
  
    static HOLEPUNCH_DOUBLE_RANDOMIZED_NATS (msg = 'Both remote and local NATs are randomized') {
      return new daTubeErr(msg, 'HOLEPUNCH_DOUBLE_RANDOMIZED_NATS', daTubeErr.HOLEPUNCH_DOUBLE_RANDOMIZED_NATS)
    }
  
    static CANNOT_HOLEPUNCH (msg = 'Cannot holepunch to remote') {
      return new daTubeErr(msg, 'CANNOT_HOLEPUNCH', daTubeErr.CANNOT_HOLEPUNCH)
    }
  
    static REMOTE_NOT_HOLEPUNCHING (msg = 'Remote is not holepunching') {
      return new daTubeErr(msg, 'REMOTE_NOT_HOLEPUNCHING', daTubeErr.REMOTE_NOT_HOLEPUNCHING)
    }
  
    static REMOTE_NOT_HOLEPUNCHABLE (msg = 'Remote is not holepunchable') {
      return new daTubeErr(msg, 'REMOTE_NOT_HOLEPUNCHABLE', daTubeErr.REMOTE_NOT_HOLEPUNCHABLE)
    }
  
    static REMOTE_ABORTED (msg = 'Remote aborted') {
      return new daTubeErr(msg, 'REMOTE_ABORTED', daTubeErr.REMOTE_ABORTED)
    }
  
    static HANDSHAKE_UNFINISHED (msg = 'Handshake did not finish') {
      return new daTubeErr(msg, 'HANDSHAKE_UNFINISHED', daTubeErr.HANDSHAKE_UNFINISHED)
    }
  
    static HANDSHAKE_INVALID (msg = 'Received invalid handshake') {
      return new daTubeErr(msg, 'HANDSHAKE_INVALID', daTubeErr.HANDSHAKE_INVALID)
    }
  
    static ALREADY_LISTENING (msg = 'Already listening') {
      return new daTubeErr(msg, 'ALREADY_LISTENING', daTubeErr.ALREADY_LISTENING)
    }
  
    static NODE_DESTROYED (msg = 'Node destroyed') {
      return new daTubeErr(msg, 'NODE_DESTROYED', daTubeErr.NODE_DESTROYED)
    }
  
    static PEER_CONNECTION_FAILED (msg = 'Could not connect to peer') {
      return new daTubeErr(msg, 'PEER_CONNECTION_FAILED', daTubeErr.PEER_CONNECTION_FAILED)
    }
  
    static PEER_NOT_FOUND (msg = 'Peer not found') {
      return new daTubeErr(msg, 'PEER_NOT_FOUND', daTubeErr.PEER_NOT_FOUND)
    }
  
    static STREAM_NOT_CONNECTED (msg = 'Stream is not connected') {
      return new daTubeErr(msg, 'STREAM_NOT_CONNECTED', daTubeErr.STREAM_DISCONNECTED)
    }
  
    static SERVER_INCOMPATIBLE (msg = 'Server is using an incompatible version') {
      return new daTubeErr(msg, 'SERVER_INCOMPATIBLE', daTubeErr.SERVER_INCOMPATIBLE)
    }
  
    static SERVER_ERROR (msg = 'Server returned an error') {
      return new daTubeErr(msg, 'SERVER_ERROR', daTubeErr.SERVER_ERROR)
    }
  }