const loginCheck = (username, password) => {
  if (username === 'gleason' && password === '123') {
    return true
  }
  return false
}

module.exports = {
  loginCheck
}