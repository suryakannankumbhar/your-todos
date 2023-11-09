import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDMHU1yBCFqOBEtg2lL5c4YGUJRurCfGYk',
    authDomain: 'fitness-todos-413eb.firebaseapp.com',
    databaseURL: 'https://fitness-todos-413eb-default-rtdb.firebaseio.com',
    projectId: 'fitness-todos-413eb',
    storageBucket: 'fitness-todos-413eb.appspot.com',
    messagingSenderId: '335377483087',
    appId: '1:335377483087:web:8da70bc2b7bfc511bf313a',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
