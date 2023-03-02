import { AiFillEdit, AiOutlinePlusSquare } from 'react-icons/ai';



const Field = ({ input, setInput, todos, setTodos, setCheck, check, setFiltered, modal, setUpdateInput, updateInput, itemIndex, setModal }) => {
    const changeHandler = (e) => {
        const { value } = e.target;
        setInput(value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (input !== '') {
            setTodos([...todos, { completed: false, text: input, id: Date.now() }])
            setFiltered(todos)
        }

        setInput('')
    }

    const updateHandler = (e) => {
        e.preventDefault()
        setTodos(todos.map((todo) => {
            if (todo.id === itemIndex) {
                return {
                    ...todo, text: updateInput
                }
            }
            return todo
        }))

        setModal(false)
    }

    return (
        <div className='form-wrap'>
            <form>
                <input type="text" placeholder="Place your Todos.." className='input-field' value={input} onChange={changeHandler} />
                <button type='submit' onClick={submitHandler} className='btn'> <AiOutlinePlusSquare /></button>
            </form>
            <div className={`modal ${modal && 'show-modal'}`} >
                <form>
                    <input type="text" value={updateInput} onChange={(e) => setUpdateInput(e.target.value)} className='input-field' />
                    <button type='submit' onClick={updateHandler} className='btn'> <AiFillEdit /></button>
                </form>
            </div>
            <select name="todo" value={check} onChange={(e) => setCheck(e.target.value)}>
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not completed</option>
            </select>
        </div >
    )
}

export default Field