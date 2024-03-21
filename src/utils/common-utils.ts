import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
export async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    // Get the users ID token
    const { idToken, user } = await GoogleSignin.signIn()

    console.log(idToken, user)

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential)
  } catch (err) {
    console.error(err)
  }
}
