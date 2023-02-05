import { forwardRef, useEffect, useRef } from 'react';
import { AiFillEdit, AiOutlinePlusSquare } from 'react-icons/ai';

// import db from '../firebase';
// import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";


const Field = forwardRef(({
    input,
    setInput,
    todos,
    setTodos,
    option,
    setOption,
    edit,
    showModal,
    setShowModal,
    updateText,
    setUpdateText
}, ref) => {

    const activeRef = useRef(null);

    useEffect(() => {
        activeRef.current.focus();
    }, [])

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    // useEffect(() => {
    //     fetchPost();
    // }, [])

    // const fetchPost = async () => {

    //     await getDocs(collection(db, "cities")) FIREBASE DATABASE
    //         .then((querySnapshot) => {
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({ ...doc.data().todo }));
    //             setTodos(newData);
    //             console.log(newData, 'todo');
    //         })

    // }

    const clickHandler = async (e) => {
        e.preventDefault();
        // await addDoc(collection(db, "cities"), { REALTIME DATABASE
        //     todo: todos
        // });
        // try {
        //     const docRef = await addDoc(collection(db, "todos"), {
        //         todo: todos,
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }

        if (input !== '') {
            setTodos([...todos, { text: input, completed: false, id: Date.now() }]);
            // await fetch('https://todo-982fa-default-rtdb.firebaseio.com/todo.json', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(todos)
            // });
            setInput('');
        } else {
            return;
        }

        setShowModal(false)
    }
    console.log(todos, 'todos')

    const selectHandler = (e) => {
        setOption(e.target.value);
    }

    const updateHandler = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure??')) {
            let updateData = todos.map((item) => {
                if (item.id === edit) {
                    return { ...item, text: updateText }
                }
                return item;
            })

            setTodos(updateData)

            setShowModal(false)

            activeRef.current.focus()
        }
    }
    return (
        <div className='form-wrap'>
            <form action="" method='POST'>
                <input ref={activeRef} type="text" value={input} onChange={changeHandler} placeholder="Place your Todos.." className='input-field' />
                <button onClick={clickHandler} type='submit' className='btn'> <AiOutlinePlusSquare /></button>
            </form>
            <div className={`modal ${showModal && 'show-modal'}`} >
                <form>
                    <input ref={ref} type="text" value={updateText} onChange={(e) => setUpdateText(e.target.value)} className='input-field' />
                    <button onClick={updateHandler} type='submit' className='btn'> <AiFillEdit /></button>
                </form>
            </div>
            <select onChange={selectHandler} name="todo" value={option ? option : ''}>
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not completed</option>
            </select>
        </div>
    )
})

export default Field