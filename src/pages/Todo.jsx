import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const Todo = ({ todos, setTodos, filtered, editHandler }) => {

    const deleteHandler = (index) => {
        setTodos(todos.filter((item, i) => i !== index));
        if (todos.length === 0) {
            let empty = localStorage.setItem('todos', JSON.stringify([]));
            setTodos(empty)
        }
        // const newDeleteData = [...todos];
        // newDeleteData.splice(index, 1);
        // setTodos(newDeleteData);
    }

    const completeHandler = (i) => {
        setTodos(todos.map((item, index) => {
            if (index === i) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className='result-wrapper'>
            <h2>Result Below Here!!</h2>
            <div className='todo-result'>
                {
                    filtered.map((todo, index) => {
                        return (
                            <div key={todo.id} className={` ${todo.completed === true ? 'clicked' : ''}`}>
                                <p className={`input-field ${todo.completed === true ? 'completed' : ''}`}>{todo.text} </p>
                                <div className="buttons">
                                    <button className={`btn ${todo.completed === true ? 'clicked' : ''}`} onClick={() => completeHandler(index)} type='submit'><TiTickOutline /></button>
                                    <button className='btn' onClick={() => deleteHandler(index)} type='submit' style={{ background: '#d83b3b', color: '#fff' }}> <AiFillDelete /></button>
                                    <button className='btn' onClick={() => editHandler(todo.id)} type='submit' style={{ background: '#d83b3b', color: '#fff' }}> <AiFillEdit /></button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Todo