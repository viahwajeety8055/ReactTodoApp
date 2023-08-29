import { React, useState, useEffect } from 'react'
import Button from './Button'
import './Layout.css'
import StyleList from './StyleList';
import axios from 'axios';
import Create from './Create';

export default function Layout() {

    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(true);
    const [udpate, setUpdate] = useState(false);
    const [item, setItem] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/todos/all')
            .then(function (response) {
                setItems(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [items]);

    const deleteItems = (id) => {
        axios.delete(`http://localhost:5000/api/v1/todos/delete/${id}`)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const updateItems = (id) => {
        setUpdate(true);
        setItem(id);
        setVisible(false);
        console.log(id)
    }

    const createItem = (id, task) => {
        const data = { id, task };
        axios.post('http://localhost:5000/api/v1/todos/create', data)
            .then(function (response) {
                console.log(response);
                setVisible(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const updateItem = (id, task) => {
        console.log("Welcome to world")
        const data = { id, task };
        axios.put(`http://localhost:5000/api/v1/todos/update/${id}`, data)
            .then(function (response) {
                console.log(response)
                setVisible(true);
                setUpdate(false);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className='view-expense'>
            <Button title='Create' clicked={() => setVisible(false)} />
            <ul className='expense-list'>
                {visible ? (
                    items.map(item => (
                        <StyleList
                            key={item.id}
                            id={item.id}
                            task={item.task}
                            onDelete={() => deleteItems(item.id)}
                            onUpdate={() => updateItems(item.id)}
                        />
                    ))
                ) : (
                    udpate ? (<Create onUpdate={updateItem} checkUpdate={item} />) :
                        (<Create onCreate={updateItem} />)
                )}
            </ul>
        </div>
    )
}