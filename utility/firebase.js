import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: process.env.FB_API,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: "gamerhub-39ec8",
  storageBucket: "gs://gamerhub-39ec8.appspot.com",
  messagingSenderId: "668807926744",
  appId: process.env.FB_APP_ID,
};
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export { storage };
