import mirror, { actions } from 'mirrorx'

import { db } from '../firebase'

const TabModel = mirror.model({
  name: 'editor',
  
  initialState: {
    current: null,
    deltas: [],
    changedData: {},
    loading: false,
    hasBeenInitialized: false
  },

  reducers: {
    initLoading (state) {
      return {
        ...state,
        loading: true,
      }
    },
    setFileInit (state, { data }) {

      const newData = Object.keys(data).map(id => {
        return data[id]
      })
      return {
        ...state,
        deltas: newData,
        // loading: false,
        // hasBeenInitialized: true,
      }
    }
  },

  // EFFECT
  effects: {
    getFileInit (uid) {
      actions.editor.initLoading()
      db.ref('/testFile/test')
        .once('value', (snapshot) => {
          const data = snapshot.val()
          if (data) {
            actions.editor.setFileInit({ data })
          }
        })
    },
    pushDeltaToFirebase (deltas) {
      db.ref('/testFile/test')
        .push(deltas.ops)
    }
  }
})

export default TabModel