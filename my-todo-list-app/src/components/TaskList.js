import React from 'react'
import Checkbox from './Checkbox'

const TaskList = (props) => {

  const { list, setList} = props;


  function onChangeStatus(e){
    const { name, checked } = e.target
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }))
    setList(updateList)
  }

  function onClickRemoveItem(){
    const updateList = list.filter(item => !item.done)
    setList(updateList)
  }

  const chk = list.map(item => (<Checkbox key={item.id} data={item} onChange={onChangeStatus}/>))


  return (
    <div>
      <div className="todo-list">
        {list.length ? chk : "No Taks"}
        {list.length ? (
          <p>
            <button onClick={onClickRemoveItem} className="button blue">Delete all done</button>
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default TaskList