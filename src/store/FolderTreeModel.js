import mirror, { actions } from 'mirrorx'

import { db } from '../firebase'

const FolderTreeModel = mirror.model({
  name: 'folderTree',
  initialState: {
    firstTime: false,
    data: null
  },

  // REDUCERS
  reducers: {
    setFolderInit (state, { data }) {
      let newData = data
      if (!state.firstTime) {
        newData.collapsed = true
      }
      return {
        ...state,
        data: newData,
        firstTime: null
      }
    },

    setSelectedFile (state, { selectedFile }) {
      return { ...state, selectedFile }
    },

    collapseFolder (state, { uid }) {
      let newData = Object.assign({}, state.data)
      if (uid === 0) {
        newData.collapsed = !newData.collapsed
      }
      else {
        const recursiveFind = (obj) => {
          let found = false
          let ids = []
          Object.keys(obj).map(id => {
            ids.push(id)
            let child = obj[id]
            if (id == uid) {
              child.collapsed = !child.collapsed
              found = true
              return child
            }
          })
          if (!found) {
            ids.forEach(id => {
              let children = obj[id].child
              if (children) {
                recursiveFind(children)
              }
            })
          }
        }
        recursiveFind(newData.child)
      }
      return {
        ...state,
        data: newData
      }
    },
  },

  // EFFECT
  effects: {
    getFolderUser(userId) {
      db.ref('/folderTree/' + userId)
        .on('value', (snapshot) => {
          actions.folderTree.setFolderInit({ data: snapshot.val() })
        })
    }
  }
})

export default FolderTreeModel