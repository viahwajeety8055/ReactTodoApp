import React from 'react'
import './StyleList.css';
import Button from './Button';

export default function StyleList(props) {
    const { id, task, onDelete, onUpdate } = props;

    const deleteItems = () => {
        console.log("Deleted Successfully");
        onDelete(id);
    }

    const updateItems = () => {
        console.log("Item Updated Successfully");
        onUpdate(id);
    }

    return (
        <li>
            <p>{id}</p>
            <p>{task}</p>
            <div className="btn">
                <Button title='Update' clicked={updateItems} />
                <Button title='Delete' clicked={deleteItems} />
            </div>
        </li>
    )
}