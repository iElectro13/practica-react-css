import React, { useState } from 'react'

const FormTodo = (props) => {
    const [description, setDescription] = useState("")
    const { handleAddItem } = props;
    

    function handleSubmit(e){
        e.preventDefault()
        handleAddItem({
            done: false,
            id: new Date().toString(),
            description
        })
        setDescription("")
    }
    

    return (
        <div className='form-container'>
            <form action="" onSubmit={handleSubmit}>
                <div className="todo-list">
                    <div className="file-input">
                        <input type="text" className="text" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <button type="submit" className="button pink" disabled={description ? "" : "disabled"}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default FormTodo