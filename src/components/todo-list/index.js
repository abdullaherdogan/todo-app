import { MdClose,MdDone } from "react-icons/md";
import { useState,useEffect } from "react";
import './index.css'

function List({todoList,setTodoList}) {
    const [filterList,setFilterList] = useState([todoList])
    const mdDone=<MdDone style={{color: "green"}} />
    const filteredList=(statu=undefined)=>{
       return todoList.filter((item)=>{
            if (statu===undefined) {
                return item
            }else{
                return item.isComplete===statu
            }
        })
    }
    useEffect(()=>{
        setFilterList(todoList)
    },[todoList])
    const removeItem = (index)=>{
        setTodoList(todoList.filter((item)=>{
            return item !== todoList[index]
        })
        )
    }
    return (
        <>
            <ul>
                {
                    filterList.map((item,i)=>(
                        <li key={i}><span><button className="btn-check" onClick={()=>{todoList[i].isComplete=!todoList[i].isComplete;setTodoList([...todoList])}}>{item.isComplete===true? mdDone:'' }</button></span> <span className={item.isComplete===true?'itemText checked':'itemText'}>{item.todo}</span> <button onClick={()=>{removeItem(i)}}> <MdClose /></button> </li>
                    ))
                }
            </ul>
            <button onClick={()=>setFilterList(filteredList())}>All</button>
            <button onClick={()=>setFilterList(filteredList(false))}>Active</button>
            <button onClick={()=>setFilterList(filteredList(true))}>Completed</button>
        </>
    )
}

export default List
