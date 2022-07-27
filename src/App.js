import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Mobile Cover',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Sim Card',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  }

  const deleteExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    const tempExpenses = expenses.filter((item)=>item.id !== expense.id);
    setExpenses(tempExpenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler}/>
      
    </div>
  );
}

export default App;
