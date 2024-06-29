const actions = {
  setReady: (state:any) => {
    state.appReady = true
  },
  unsetReady: (state:any) => {
    state.appReady = false
  },
  unsetInitApp: (state:any) => {
    state.appInit = false
  }
}

export default actions