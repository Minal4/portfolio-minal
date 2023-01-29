import { useEffect, useState } from 'react'
import Field from './Field'
import Todo from './Todo'

const TodoList = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [option, setOption] = useState('all');
    const [filtered, setFiltered] = useState([]);

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
        getLocalTodos();
    }, [])

    useEffect(() => {
        filterFunc();
        saveLocalTodos();
    }, [todos, option])

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let check = JSON.parse(localStorage.getItem('todos'))
            setTodos(check);
        }
    }



    return (
        <section className='section todo'>
            <div className="container">
                <div className="section__heading"><h2>Todo List</h2></div>
                <Field input={input} setInput={setInput} todos={todos} setTodos={setTodos} option={option} setOption={setOption} filtered={filtered} setFiltered={setFiltered} />
                <Todo todos={todos} setTodos={setTodos} input={input} filtered={filtered} />
            </div>
        </section>
    )
}

export default TodoList