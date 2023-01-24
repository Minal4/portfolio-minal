import React, { useState } from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { MdRestoreFromTrash } from "react-icons/md";

const FormField = () => {
    const [inputList, setInputList] = useState([{
        firstName: "",
        lastName: ""
    }])

    const handleOnChange = (e, i) => {
        const { name, value } = e.target;
        let list = [...inputList];
        list[i][name] = value;
        setInputList(list);
    }

    const handleOnRemove = (i) => {
        console.log(i, 'as')
        let list = [...inputList];
        list.splice(i, 1);
        setInputList(list);
    }

    const handleOnAdd = (i) => {
        setInputList([...inputList, { firstName: "", lastName: '' }]);
    }

    return (
        <section className='section form'>
            <div className="container">
                <form>
                    <div className="input-wrapper">
                        {inputList.map((input, i) => {
                            return (
                                <div key={i} className="input-wrap">
                                    <input type="text" placeholder='Firstname' value={input.firstName} name="firstName" className="input-field" onChange={(e) => handleOnChange(e, i)} />
                                    <input type="text" placeholder='Lastname' value={input.lastName} name="lastName" className="input-field" onChange={(e) => handleOnChange(e, i)} />
                                    <div className=''>
                                        <button type='button' onClick={() => handleOnRemove(i)}><MdRestoreFromTrash /></button>
                                        {inputList.length - 1 === i && <button type='button' onClick={() => handleOnAdd(i)}><MdAddCircleOutline /></button>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </form>
            </div>
        </section>
    )
}

export default FormField
