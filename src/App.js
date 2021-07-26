import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { id: "e1", title: "Birthday", amount: 5000, date: new Date(2021, 3, 3) },
  { id: "e2", title: "TV", amount: 15000, date: new Date(2021, 5, 7) },
  { id: "e3", title: "Insurance", amount: 2000, date: new Date(2021, 6, 12) },
  { id: "e4", title: "Books", amount: 500, date: new Date(2021, 6, 20) },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // Behind the scenes the JSX is converted to the following form by React, that's the reason why we import React from 'react'.
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { data: expenses })
  // );
  const handleExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onExpense={handleExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
