import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){

    const [isEditing,setIsEditing]= useState(false);


    const saveExpenseDataHandler=(enteredExpenseData)=>{
           const expenseData={
               ...enteredExpenseData,
               id: Math.random().toString()
           }
           props.onNewExpenseData(expenseData);
           setIsEditing(false);
    }

    const isEditingHandler=()=>{
        setIsEditing(true);
    }
    const cancelHandler=()=>{
        setIsEditing(false);
    }
   
return (
    <div className="new-expense">
        { isEditing==false ? <button onClick={isEditingHandler}>Add Expense</button> : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelHandler}/> }

    </div>
);
}

export default NewExpense;