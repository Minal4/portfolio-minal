import React from 'react'
import { AiOutlinePlusSquare } from 'react-icons/ai';



const Field = ({ input, setInput, todos, setTodos, option, setOption }) => {
    const changeHandler = (e) => {
        setInput(e.target.value);
    }


    const clickHandler = async (e) => {
        e.preventDefault();
        if (input !== '') {
            setTodos([...todos, { text: input, completed: false, id: Math.random() * 2 }]);
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
            <select onChange={selectHandler} name="todo">
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not completed</option>
            </select>
        </div>
    )
}

export default Field