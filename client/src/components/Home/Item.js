import "./item.css";

export default function Item() {
  const item = { date: "30/11", description: "Almoço mãe", value: 3993 };

  const stringValue = item.value.toString().replace(/(\d{2})$/, ",$1");

  return (
    <div className="item">
      <div className="subitem">
        <div className="date">{item.date}</div>
        <div className="description">{item.description}</div>
      </div>
      <div className="value">{stringValue}</div>
    </div>
  );
}
