import mirror, { actions } from 'mirrorx'

const TabModel = mirror.model({
  name: 'tabs',
  
  initialState: {
    selectedTab: null,
    openedTabs: {},
  },

  reducers: {
    openTab (state, { uid }) {
      return {
        ...state,
        openedTabs: {
          ...state.openedTabs,
          [uid]: true
        }
      }
    },
    closeTab (state, { uid }) {
      let newState = Object.assign({}, state)
      delete newState.openedTabs[uid]
      // console.log(newState)
      return {
        ...state,
        openedTabs: newState.openedTabs
      }
    }
  },
})

export default TabModel