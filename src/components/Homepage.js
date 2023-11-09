import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { uid } from 'uid';
import { set, ref, onValue, remove, update } from 'firebase/database';
import './homepage.css';
import Header from './Header.js';
import LogoutIcon from '@mui/icons-material/Logout';

import FlexboxWithImages from './images/FlexboxWithImages.js';

export default function Homepage() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUidd, setTempUidd] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                // read
                onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
                    setTodos([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map(todo => {
                            setTodos(oldArray => [...oldArray, todo]);
                        });
                    }
                });
            } else if (!user) {
                navigate('/');
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                alert(err.message);
            });
    };

    // add
    const writeToDatabase = () => {
        const uidd = uid();
        set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
            todo: todo,
            uidd: uidd,
        });

        setTodo('');
    };

    // update
    const handleUpdate = todo => {
        setIsEdit(true);
        setTodo(todo.todo);
        setTempUidd(todo.uidd);
    };

    const handleEditConfirm = () => {
        update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
            todo: todo,
            tempUidd: tempUidd,
        });

        setTodo('');
        setIsEdit(false);
    };

    // delete
    const handleDelete = uid => {
        remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
    };

    return (
        <div className='landingPage'>
            <div className='headerArea'>
                <h1>Welcome to YourTodos</h1>
                <p>Add Todos as per your different preferences</p>
                <LogoutIcon onClick={handleSignOut} className='logout-icon' />
            </div>
            <div className='flexboxArea'>
                <FlexboxWithImages />
            </div>
        </div>
    );
}
