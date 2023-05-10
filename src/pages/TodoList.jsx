import { useEffect, useState } from 'react'
import Field from './Field'
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || [])
    const [input, setInput] = useState('')
    const [option, setOption] = useState(JSON.parse(localStorage.getItem('option')) || 'all')
    const [filtered, setFiltered] = useState([])
    const [updatedIndex, setUpdatedIndex] = useState(null)
    const [modal, setModal] = useState(false)
    const [updateValue, setUpdateValue] = useState('')

    const filteredOption = () => {
        switch (option) {
            case 'completed':
                setFiltered(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFiltered(todos.filter(todo => todo.completed === false))
                break;
            default: setFiltered(todos)
        }
    }

    localStorage.setItem('todo', JSON.stringify(todos));
    localStorage.setItem('option', JSON.stringify(option));

    useEffect(() => {
        filteredOption()
    }, [todos, option])

    return (
        <section className='section todo'>
            <div className="container">
                <div className="section__heading"><h2>Todo List</h2></div>
                <Field
                    todos={todos}
                    setTodos={setTodos}
                    input={input}
                    setInput={setInput}
                    option={option}
                    modal={modal}
                    setModal={setModal}
                    setOption={setOption}
                    updatedIndex={updatedIndex}
                    setUpdateValue={setUpdateValue}
                    updateValue={updateValue} />
                <Todo
                    todos={todos}
                    setTodos={setTodos}
                    setUpdateValue={setUpdateValue}
                    setUpdatedIndex={setUpdatedIndex}
                    setModal={setModal}
                    filtered={filtered} />
            </div>
        </section>
    )
}

export default TodoList