import "./item.css";
import dayjs from 'dayjs';

export default function Item({ item }) {//{ type, value, description, timestamp }) {
  //const item = { timestamp: "30/11", description: "Almoço mãe", value: 3993 };

  const stringValue = item.value.toString().replace(/(\d{2})$/, ",$1");

  return (
    <div className="item">
      <div className="subitem">
        <div className="date">{dayjs(item.timestamp).format('DD/MM')}</div>
        <div className="description">{item.description}</div>
      </div>
      <div className={`value ${item.type === 'expense' ? 'expense' : ''}`}>{stringValue}</div>
    </div>
  );
}
