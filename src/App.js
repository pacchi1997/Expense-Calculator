import React,{useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./components/ExpenseFolder/Expenses";
import NewExpense from "./components/NewExpenseFolder/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses,setExpenses]= useState(dummyExpenses);

  const newExpenseDataHandler = (newExpenseData) => {
 
    setExpenses((prevState)=>{
      return [newExpenseData,...prevState];
    })
     console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpense onNewExpenseData={newExpenseDataHandler} />
      <Expenses expensesProps={expenses} />
    </div>
  );
}

export default App;
