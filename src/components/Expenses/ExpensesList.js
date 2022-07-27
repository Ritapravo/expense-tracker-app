import React from "react";
import './css/ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2> ;
    }

    const deleteExpenseHandler = (expense) => {
        console.log('In ExpenseList.js');
        console.log(expense);
        props.onDeleteExpense(expense);
    }

    return(
        <ul className="expenses-list">
            {props.items.map((expense)=>(
                <ExpenseItem 
                    key = {expense.id}
                    id = {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                    onDeleteExpense = {deleteExpenseHandler}
                />
            ))}
        </ul>
    )
    
};

export default ExpensesList;
