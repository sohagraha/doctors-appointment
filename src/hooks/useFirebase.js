import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth();
    // google 
    const googleProvider = new GoogleAuthProvider();
    //

    const registerUser = (email, password, history, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                // Signed in 
                const user = userCredential.user;
                // ...
                const newUser = { email, displayName: name }
                //send name to firebase after creation.
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                const destination = '/';
                history.replace(destination)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const destination = location?.state?.from || '/';
                history.replace(destination)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    //google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')

                const destination = location?.state?.from || '/';
                history.replace(destination)

            }).catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(IdToken => {
                        setToken(IdToken);
                    })
            } else {
                setUser(user)
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`,)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user?.email])

    const logout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        registerUser,
        loginUser,
        authError,
        signInWithGoogle,
        logout
    }
}
export default useFirebase;