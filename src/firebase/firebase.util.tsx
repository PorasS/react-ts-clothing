import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSV5GNotEMJzqpmWYLie0kJbhBM8wiThk",
    authDomain: "react-clothing-db-1601c.firebaseapp.com",
    databaseURL: "https://react-clothing-db-1601c.firebaseio.com",
    projectId: "react-clothing-db-1601c",
    storageBucket: "react-clothing-db-1601c.appspot.com",
    messagingSenderId: "158883474073",
    appId: "1:158883474073:web:f897e381c19d8c5a5f6608",
    measurementId: "G-6P94FTM2QY"
};


export const createUserProfileDocument = async (userAuth: any, displayName: any) => {

    console.log("2ndcall: ", displayName)
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userAuth.uid)
    const snapShot = await userRef.get();
    console.log("createUserProfileDocument: ", snapShot);

    if (!snapShot.exists) {
        const { email } = userAuth;

        const createdAt: Date = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);


export const addCollectionsAndDocuments = async (collectionKey: any, objectToAdd: any) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log("collectionRef: ", collectionRef);

    const batch = firestore.batch();
    objectToAdd.forEach((obj: any) => {
        const docRef = collectionRef.doc();
        batch.set(docRef, obj)
    });


    return await batch.commit();

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});


export const convertcollectionsSnapshotToMap = (collections: any) => {
    const transformedCollection = collections.docs.map((doc: any) => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator: any, collection: any) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;