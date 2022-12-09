import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'

// init:fireBase:auth
const localUser = ref({
  isLoading: false,
  hasFailed: false,
  user: {}
})
const doAuth = async (goOut=false) => {
  console.log('auth goTime', goOut?'goIn':'goOut')
  const auth = getAuth()
  if (goOut){
    signOut(auth)
    localUser.value.user = {}
    return localUser.value
  }
  const provider = new GoogleAuthProvider()

  localUser.value.isLoading = true
  localUser.value.hasFailed = false
  // localUser.value.localError = null
  console.log('auth TRY')

  try {
    console.log('auth CHECK')
    const result = await signInWithPopup(auth, provider)
    localUser.value.user = result.user
  } catch(error) {
    console.log('auth ERROR', error)
    localUser.value.hasFailed = true
    // localUser.value.localError = error
  } finally {
    localUser.value.isLoading = false
  }
  console.log('auth DONE', localUser.value )
  return localUser.value
}
onAuthStateChanged(getAuth(), user => {
  localUser.value.isLoading = false
  localUser.value.hasFailed = false
  localUser.value.user = user ?? {}
})
// share
export { doAuth, localUser }