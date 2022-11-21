import s from './index.module.css';

export default function DropList({ list, onSelect }) {
  return (
    <>
      {list.length > 0 && (
        <ul className={s.DropList}>
          {list.map(item => (
            <li
              key={`${item.city}, ${item.region}`}
              className={s.DropItem}
              onClick={() => onSelect(`${item.city}, ${item.region}`)}
            >
              {item.city}, {item.region}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
