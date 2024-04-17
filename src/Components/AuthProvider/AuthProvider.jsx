import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './../../Firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [looder, useLooder] = useState(true);

    const createUser = (email, password) => {
        looder(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Observe auth 
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observe Auth', currentUser)
            setUser(currentUser)
            useLooder(false);
        });
        return () => {
            unSuscribe();
        }
    }, [])

    //Sign Out

    const logOut = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        looder,
        createUser,
        signIn,
        logOut,
        
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}

