import { History, LocationState } from 'history';
import { auth, db } from '../firebase';
import { ErrorInterface, SignupCredentials } from '../shared/interfaces/FormInterfaces';
import { customToast } from './customToast';

type SignUpWithCredentailsInterface = SignupCredentials & {
  history: History<LocationState>;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
};

export const signUpWithCredentails = async ({
  email,
  password,
  name,
  history,
  setError
}: SignUpWithCredentailsInterface): Promise<void> => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    if (auth.currentUser) {
      await auth.currentUser.updateProfile({
        displayName: name
      });
      await db.collection('users').doc(auth.currentUser.uid).set({
        displayName: name,
        id: auth.currentUser.uid,
        headline: ''
      });
      history.push('/feed');
      customToast('success', 'Successfully Signed Up');
    }
  } catch (err) {
    let errorMessage = 'An unknown error occurred';

    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }

    setError({
      isError: true,
      errorText: errorMessage
    });
  }
};
