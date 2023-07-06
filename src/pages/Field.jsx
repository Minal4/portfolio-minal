import { AiFillEdit, AiOutlinePlusSquare } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Field = ({ inputText, setInputText, setTodos, todos, setOption, option, modal, setModal, updateValue, setUpdateValue, updateIndex }) => {
    const notifyEdit = () => toast("Edit TODO Successfully !!");

    const handleOnClick = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Date.now() }])
        setInputText('')
    }

    const handleOnUpdate = (e) => {
        e.preventDefault()
        setTodos(todos.map((todo) => {
            if (todo.id === updateIndex) {
                return { ...todo, text: updateValue }
            }
            return todo
        })
        )
        notifyEdit()
        setModal(false)
    }
    return (
        <div className='form-wrap'>
            <ToastContainer />
            <form>
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Place your Todoss.." className='input-field' />
                <button type='submit' onClick={handleOnClick} className='btn'> <AiOutlinePlusSquare /></button>
            </form>
            <div className={`modal ${modal && 'show-modal'}`} >
                <form>
                    <input type="text" value={updateValue} onChange={(e) => setUpdateValue(e.target.value)} className='input-field' />
                    <button type='submit' onClick={handleOnUpdate} className='btn'> <AiFillEdit /></button>
                </form>
            </div>
            <select name="todos" value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not completed</option>
            </select>
        </div >
    )
}

export default Field