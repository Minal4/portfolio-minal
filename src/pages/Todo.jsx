import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Todo = ({ todos, setTodos, filtered, handleOnEdit }) => {
    const notify = () => toast("Delete TODO Successfully !!");
    const handleOnDelete = (id) => {
        setTodos(todos.filter((todoDelete, i) => {
            return todoDelete.id !== id
        }))
        notify()
    }

    const handleOnCheck = (id) => {
        let checkTodos = todos.map((todo, i) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })

        setTodos(checkTodos)
    }
    return (
        <div className='result-wrapper'>
            {todos.length > 0 &&
                <h2>Result Below Here!!</h2>
            }
            <ToastContainer />
            <div className='todo-result'>
                {
                    filtered.map((todo, i) => {
                        if (todo.text !== '') {
                            return (
                                <div key={todo.id}>
                                    <p className="input-field">{todo.text}</p>
                                    <div className="buttons">
                                        <button className={`btn ${todo.completed === true ? 'completed' : ''}`} onClick={() => handleOnCheck(todo.id)} type='submit'><TiTickOutline /></button>
                                        <button className='btn' onClick={() => handleOnDelete(todo.id)} type='submit'> <AiFillDelete /></button>
                                        <button className='btn' onClick={() => handleOnEdit(todo.id)} type='submit'> <AiFillEdit /></button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div >
    )
}

export default Todo