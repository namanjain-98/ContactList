import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, deleteContact, removeAll } from '../actions/index';
import './Contact.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function Contact() {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.contactReducers.list);

    return (
        <>
            <div className="contact-div">


                <h2> Add Your Contacts Here! </h2>
                <br />
                <ListGroup>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <input id="add-contact" type="text" placeholder=" Add Contacts" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        <i id="add-btn" className="fa fa-plus add-btn" onClick={() => dispatch(addContact(inputData), setInputData(''))}></i>
                    </div>

                    <div className="showItems">
                        {
                            list.map((item) => {
                                return (
                                    <div className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                        <h3 class="add-contact">{item.data}</h3>
                                        <i id="add-btn" className="fa fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteContact(item.id))}></i>
                                    </div>
                                )
                            })

                        }
                    </div>

                    <div className="showItems">
                        <button className="list-group-item list-group-item-action active" data-sm-link-text="remove all" onClick={() => dispatch(removeAll())}>
                            <span>Remove All</span>
                        </button>
                    </div>

                </ListGroup>
            </div>


        </>
    )
}
