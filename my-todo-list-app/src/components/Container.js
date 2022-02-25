import React, { useState } from 'react'
import TaskList from './TaskList'
import FormTodo from './FormTodo'

const Container = () => {

    const [list, setList] = useState([])

    function handleAddItem(addItem){
        setList([...list, addItem])
    }

    return (
        <div className='Container'>
            Container
            <FormTodo handleAddItem={handleAddItem} />
            <TaskList list={list} setList={setList}/>
        </div>
    )
}

export default Container