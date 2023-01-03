import React, { useEffect, useState } from 'react'
import './lists-board.css';
import TasksList from './tasks-list'
import AddListForm from './add-list-form'
import API from '../../helper/api';

export default function ListsBoard(){
    
    const [lists, setLists] = useState([]);

    useEffect(() => {
        //console.log(lists);
        API.lists.getListsOfBoard()
            .then(result => {
                setLists(result);  
            });
    }, [])
    
	const addList = list => {
        API.lists.createList(list)
        .then(listRes => {
            setLists([ ...lists, listRes ])
        });
	}

    if(!lists) {
        return <div>Loading...</div>
    }

    return (
        <div>  
            <div className="title">
                <h2> Create your own Kanban Board</h2>
            </div>
            <AddListForm addList={addList}/>
            <div className="list-cards">
                {lists.map(list => <TasksList key={list._id} list={list} /> )}
            </div>
        </div>
    )
}