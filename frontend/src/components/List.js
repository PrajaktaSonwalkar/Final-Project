import React from "react";
import {MdEdit, MdDelete} from 'react-icons/md'
import axios from "axios";
import { baseURL } from "../utils/constant";

const List = ({ id, task, setUpdateUI, updateMode }) => {
    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
            console.log(res)
            setUpdateUI((prevState)=> !prevState)
        })
    }
    
    return (
        <li>
            {task}
            <section className="icon-holder">
                <MdEdit className="icon" onClick={()=>{updateMode(id, task)}}/>
                <MdDelete className="icon" onClick={removeTask}/>
            </section>
        </li>
    )
}

export default List;