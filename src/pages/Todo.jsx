import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const Todo = ({ todos, setTodos, filtered, setModal, modal, setItemIndex, setUpdateInput }) => {

    const deleteHandler = (id) => {
        let delItem = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(delItem)
    }
    const completeHandler = (index) => {
        setTodos(todos.map((todo) => {
            if (todo.id === index) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const editHandler = (id) => {
        setItemIndex(id);
        let updateText = todos.find((todo) => {
            return todo.id === id
        })
        setUpdateInput(updateText.text)
        setModal(true)
    }

    return (
        <div className='result-wrapper'>
            <h2>Result Below Here!!</h2>
            <div className='todo-result'>
                {filtered.map((todo) => {
                    return (
                        <div key={todo.id} className={todo.completed ? 'completed' : ''}>
                            <p className='input-field'>{todo.text} </p>
                            <div className="buttons">
                                <button className='btn' type='submit' onClick={() => completeHandler(todo.id)}><TiTickOutline /></button>
                                <button className='btn' type='submit' onClick={() => deleteHandler(todo.id)}> <AiFillDelete /></button>
                                <button className='btn' type='submit' onClick={() => editHandler(todo.id)}> <AiFillEdit /></button>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div >
    )
}

export default Todo