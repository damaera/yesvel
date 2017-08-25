import mirror, { actions } from 'mirrorx'

import { auth } from '../firebase'

const FolderTreeModel = mirror.model({
  name: 'auth',
  initialState: {},
  reducers: {
    setAuth (state, payload) {
      return payload
    }
  },
  effects: {
    checkAuthChange() {
      auth.onAuthStateChanged((user) => {
        if (user) {

          actions.folderTree.getFolderUser(user.uid)

          actions.auth.setAuth({
            displayName : user.displayName,
            email : user.email,
            emailVerified : user.emailVerified,
            photoURL : user.photoURL,
            uid : user.uid,
            phoneNumber : user.phoneNumber,
            providerData : user.providerData,
          })
        }
        else {
          actions.auth.setAuth(null)
        }
      })

    }
  }
})

export default FolderTreeModel