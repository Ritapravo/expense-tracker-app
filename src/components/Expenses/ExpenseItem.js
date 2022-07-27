import React, { useState } from 'react';

import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// import Expenses from './Expenses';

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insaurance';
    // const expenseAmount = 9999;

    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // const year = props.date.getFullYear();

    const [title, setTitle] = useState(props.title);

    // let title = props.title;

    const clickHandler = () => {
        console.log('clicked');
        setTitle('Updated!!');
        console.log(title);
    }
    const deleteHandler = () => {
        console.log('In ExpenseItem.js');
        const expenseData = {
            id: props.id,
            title: props.title,
            amount: props.amount,
            date: props.date,
        }
        console.log(expenseData);
        props.onDeleteExpense(expenseData);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                {/* <h2>{title}</h2> */}
                <div className='expense-item__price'>{props.amount}</div>
            </div>

            <button onClick={deleteHandler}>Delete</button>

            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}


export default ExpenseItem;