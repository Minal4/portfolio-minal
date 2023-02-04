import { useEffect, useState } from 'react'
import Field from './Field'
import Todo from './Todo'

const TodoList = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [option, setOption] = useState(JSON.parse(localStorage.getItem('option')) || 'all');
    const [filtered, setFiltered] = useState([]);
    const [edit, setEdit] = useState(null);
    const [updateText, setUpdateText] = useState('');


    const filterFunc = () => {
        switch (option) {
            case 'completed':
                setFiltered(todos.filter((item) => item.completed === true))
                break;
            case 'uncompleted':
                setFiltered(todos.filter((item) => item.completed === false))
                break;
            default:
                return setFiltered(todos);
        }
    }

    useEffect(() => {
        filterFunc();
        saveLocalTodos();
    }, [todos, option])

    useEffect(() => {
        getLocalTodos();
    }, [])

    const saveLocalTodos = () => {
        // if (todos.length !== 0) {
        localStorage.setItem('todos', JSON.stringify(todos))
        localStorage.setItem('option', JSON.stringify(option))
        // }
    }

    const getLocalTodos = () => {
        let check = JSON.parse(localStorage.getItem('todos'))
        let getOption = JSON.parse(localStorage.getItem('option'))
        if (check !== null) {
            setTodos(check);
        }
        if (getOption !== null) {
            setOption(getOption);
        }
    }



    return (
        <section className='section todo'>
            <div className="container">
                <div className="section__heading"><h2>Todo List</h2></div>
                <Field input={input} setInput={setInput} todos={todos} setTodos={setTodos} option={option} setOption={setOption} filtered={filtered} setFiltered={setFiltered} edit={edit} />
                <Todo todos={todos} setTodos={setTodos} input={input} filtered={filtered} edit={edit} setEdit={setEdit} setUpdateText={setUpdateText} updateText={updateText} />
            </div>
        </section>
    )
}

export default TodoList