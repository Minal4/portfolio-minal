import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const Todo = ({ todos, setTodos, filtered, setModal, setUpdateValue, setUpdatedIndex }) => {
    const delteHandler = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }

    const completeHandler = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const toggleHandler = (id) => {
        setUpdatedIndex(id);
        let newArr = todos.find(todo => {
            return todo.id === id
        })
        setUpdateValue(newArr.text)
        setModal(true)
    }

    return (
        <div className='result-wrapper'>
            <h2>Result Below Here!!</h2>
            <div className='todo-result'>
                {
                    filtered.map(item => {
                        return (
                            <div key={item.id}>
                                <p className={`input-field ${item.completed ? 'completed' : ''}`}>{item.text}</p>
                                <div className="buttons">
                                    <button className='btn' onClick={() => completeHandler(item.id)} type='submit'><TiTickOutline /></button>
                                    <button className='btn' onClick={() => delteHandler(item.id)} type='submit'> <AiFillDelete /></button>
                                    <button className='btn' onClick={() => toggleHandler(item.id)} type='submit'> <AiFillEdit /></button>
                                </div>
                            </div>)
                    })
                }

            </div>
        </div >
    )
}

export default Todo