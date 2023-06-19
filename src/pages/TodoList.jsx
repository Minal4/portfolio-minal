import { useEffect, useState } from 'react'
import Field from './Field'
import Todo from './Todo'

const TodoList = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [option, setOption] = useState(JSON.parse(localStorage.getItem('option')) || 'all')
    const [filtered, setFiltered] = useState([])
    const [modal, setModal] = useState(false)
    const [updateIndex, setUpdateIndex] = useState(null)
    const [updateValue, setUpdateValue] = useState('')

    const handleOnEdit = (id) => {
        setUpdateIndex(id)
        let newArr = todos.find((todo, i) => {
            return todo.id === id
        })

        setUpdateValue(newArr.text)

        setModal(!modal)
    }

    const filterOption = () => {
        switch (option) {
            case 'completed':
                setFiltered(todos.filter((todo, i) => {
                    return (todo.completed === true)
                }))
                break;
            case 'uncompleted':
                setFiltered(todos.filter((todo, i) => {
                    return (todo.completed === false)
                }))
                break;

            default:
                setFiltered(todos)
                break;
        }
    }

    useEffect(() => {
        filterOption()
    }, [todos, option])

    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('option', JSON.stringify(option));

    return (
        <section className='section todo'>
            <div className="container">
                <div className="section__heading"><h2>Todo List</h2></div>
                <Field
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    option={option}
                    setOption={setOption}
                    modal={modal}
                    setModal={setModal}
                    setUpdateValue={setUpdateValue}
                    updateValue={updateValue}
                    setUpdateIndex={setUpdateIndex}
                />
                <Todo
                    todos={todos}
                    setTodos={setTodos}
                    filtered={filtered}
                    handleOnEdit={handleOnEdit} />
            </div>
        </section>
    )
}

export default TodoList