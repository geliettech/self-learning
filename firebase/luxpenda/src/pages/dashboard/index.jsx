import { useState } from "react"
import { useAddTransactions } from "../../hooks/useAddTransactions"

const Dashboard = () => {
  const { addTransactions } = useAddTransactions()

  const [description, setDescription] = useState("")
  const [transactionAmount, setTransactionAmount] = useState([])
  const [transactionType, setTransactionType] = useState("expense")

  const handleSubmit = async (e) => {
    e.preventDefault()
    addTransactions({ description, transactionAmount, transactionType })
  }

  return (
    <>
      <div className="expense tracker">
        <div className="container">
          <h1>Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2>$0.00</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>$0.00</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>$0.00</p>
            </div>
          </div>
          <form action="" className="add-transaction" onSubmit={handleSubmit}>
            <input type="text" placeholder="Description" required onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Amount" required onChange={(e) => setTransactionAmount(e.target.value)} />
            <input type="radio" id="expense" value="expense" placeholder="Amount" checked={transactionType === "expense"} onChange={(e) => setTransactionType(e.target.value)} />
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" value="income" placeholder="Amount" checked={transactionType === "income"} onChange={(e) => setTransactionType(e.target.value)} />
            <label htmlFor="income">Income</label>
            <button type="submit">Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
      </div>
    </>
  )
}

export default Dashboard