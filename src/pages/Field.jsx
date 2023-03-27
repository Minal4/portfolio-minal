import { AiFillEdit, AiOutlinePlusSquare } from 'react-icons/ai';



const Field = ({ input, setInput, todos, setTodos, option, setOption, setModal, modal, updatedIndex, updateValue, setUpdateValue }) => {

    const addHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, { text: input, completed: false, id: Date.now() }])
        setInput('')
    }

    const editHandler = (e) => {
        e.preventDefault()
        setTodos(todos.map((todo) => {
            console.log(updatedIndex, todo.id)
            if (updatedIndex === todo.id) {
                return { ...todo, text: updateValue }
            }
            return todo
        }))
        setModal(false)
    }
    return (
        <div className='form-wrap'>
            <form>
                <input type="text" placeholder="Place your Todos.." value={input} onChange={(e) => setInput(e.target.value)} className='input-field' />
                <button type='submit' onClick={addHandler} className='btn'> <AiOutlinePlusSquare /></button>
            </form>
            <div className={`modal ${modal && 'show-modal'}`} >
                <form>
                    <input type="text" value={updateValue} onChange={(e) => setUpdateValue(e.target.value)} className='input-field' />
                    <button type='submit' onClick={editHandler} className='btn'> <AiFillEdit /></button>
                </form>
            </div>
            <select name="todo" value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not completed</option>
            </select>
        </div >
    )
}

export default Field