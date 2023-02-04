import { AiOutlinePlusSquare } from 'react-icons/ai';
// import db from '../firebase';
// import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";


const Field = ({ input, setInput, todos, setTodos, option, setOption, edit }) => {
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
        } else if (todos.id === edit) {
            console.log('matched')
        } else {
            return;
        }
    }

    const selectHandler = (e) => {
        setOption(e.target.value);
    }

    return (
        <div className='form-wrap'>
            <form action="" method='POST'>
                <input type="text" value={input} onChange={changeHandler} className='input-field' />
                <button onClick={clickHandler} type='submit' className='btn'> <AiOutlinePlusSquare /></button>
            </form>
            <select onChange={selectHandler} name="todo" value={option ? option : ''}>
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not completed</option>
            </select>
        </div>
    )
}

export default Field