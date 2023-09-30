import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expanded, setExpanded] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpanded(false);
  };
  const expandHandler = () => {
    setExpanded(true);
  };
  const hideHandler = () => {
    setExpanded(false);
  };
  return (
    <div className="new-expense">
      {!expanded && <button onClick={expandHandler}>Add new expense</button>}
      {expanded && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
