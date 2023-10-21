import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.VUE_APP_apiKey,
	authDomain: process.env.VUE_APP_authDomain,
	projectId: process.env.VUE_APP_projectId,
	storageBucket: process.env.VUE_APP_storageBucket,
	messagingSenderId: process.env.VUE_APP_messagingSenderId,
	appId: process.env.VUE_APP_appId,
	measurementId: process.env.VUE_APP_measurementId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage(app);
