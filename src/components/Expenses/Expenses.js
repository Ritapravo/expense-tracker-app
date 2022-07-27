import './css/Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    //console.log(props.items);
    const [filteredYear, setFilteredYear] = useState('All');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(filteredExpenses);
    };
    

    const filteredExpenses = props.items.filter((expense) => {
        if(filteredYear==='All')
            return 1;
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const deleteExpenseHandler = (expense) => {
        console.log('In Expenses.js');
        console.log(expense);
        props.onDeleteExpense(expense);
    }
    

    return (
        <Card className='expenses' cls='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} onDeleteExpense={deleteExpenseHandler}/>    
            
        </Card>
    )
}

export default Expenses;





/*    IN PLACE OF ALPHA
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />

            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date} />

            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date} />

            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date} />

 */


    // let expensesContent = <p>No Content Found</p>
    // if(filteredExpenses.length >0){
    //     expensesContent = filteredExpenses.map((expense)=>(
    //         <ExpenseItem 
    //             key = {expense.id}
    //             title = {expense.title}
    //             amount = {expense.amount}
    //             date = {expense.date}
    //         />
    //     ))
    // }