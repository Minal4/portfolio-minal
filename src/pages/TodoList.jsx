import { useEffect, useState } from 'react'
import Field from './Field'
import Todo from './Todo'

const TodoList = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || []);
    const [filtered, setFiltered] = useState([]);
    const [check, setCheck] = useState(JSON.parse(localStorage.getItem('check')) || 'all');
    const [modal, setModal] = useState(false);
    const [updateInput, setUpdateInput] = useState('');
    const [itemIndex, setItemIndex] = useState(null);

    const filterFunc = () => {
        switch (check) {
            case 'completed':
                setFiltered(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted':
                setFiltered(todos.filter((todo) => todo.completed === false));
                break;
            default:
                return setFiltered(todos)
        }
    }
    useEffect(() => {
        if (todos !== null) {
            JSON.parse(localStorage.getItem('todo'))
        }
    }, [])

    useEffect(() => {
        filterFunc()
        saveLocal()
    }, [todos, check])

    const saveLocal = () => {
        localStorage.setItem('todo', JSON.stringify(todos))
        localStorage.setItem('check', JSON.stringify(check))
    }

    return (
        <section className='section todo'>
            <div className="container">
                <div className="section__heading"><h2>Todo List</h2></div>
                <Field setInput={setInput} input={input} todos={todos} setTodos={setTodos} setCheck={setCheck} check={check} setFiltered={setFiltered} modal={modal} setModal={setModal} updateInput={updateInput} setUpdateInput={setUpdateInput} itemIndex={itemIndex} />
                <Todo todos={todos} setTodos={setTodos} filtered={filtered} setModal={setModal} modal={modal} setItemIndex={setItemIndex} setUpdateInput={setUpdateInput} />
            </div>
        </section>
    )
}

export default TodoList