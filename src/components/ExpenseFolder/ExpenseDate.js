import './ExpenseDate.css';
import Card from '../UI/Card';
function ExpenseDate(props) {
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleDateString("en-US", { month: "short" });
  const year = props.date.toLocaleDateString("en-US", { year: "numeric" });
  return (
    <Card className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
