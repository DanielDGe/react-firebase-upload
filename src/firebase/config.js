// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { v4 } from "uuid";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD1-i0cr-0XjvS5NBBQDB1LeBbJJko1ys",
    authDomain: "react-firebase-upload-3cb76.firebaseapp.com",
    projectId: "react-firebase-upload-3cb76",
    storageBucket: "react-firebase-upload-3cb76.appspot.com",
    messagingSenderId: "10505171078",
    appId: "1:10505171078:web:1863fff16ad59b70afe107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

/**
 * Upload a file to firebase storage
 * @param {File} file the file to upload
 * @returns {Promise<string>} url of the uploaded file.
 */
export async function uploadFile(file) {

    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)

    return url

}