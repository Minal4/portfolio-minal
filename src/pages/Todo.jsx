import { AiFillDelete } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const Todo = ({ todos, setTodos, filtered }) => {

    const deleteHandler = (index) => {
        setTodos(todos.filter((item, i) => i !== index));
    }

    const completeHandler = (i) => {
        console.log(i, 'as')
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
                            <div key={todo.id}>
                                <p className={`input-field ${todo.completed === true ? 'completed' : ''}`}>{todo.text} </p>
                                <button className={`btn ${todo.completed === true ? 'clicked' : ''}`} onClick={() => completeHandler(index)} type='submit'><TiTickOutline /></button>
                                <button className='btn' onClick={() => deleteHandler(index)} type='submit' style={{ background: '#d83b3b', color: '#fff' }}> <AiFillDelete /></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo