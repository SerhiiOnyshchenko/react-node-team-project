import s from './index.module.css';

export default function DropList({ list, onSelect }) {
  return (
    <>
      {list.length > 0 && (
        <ul className={s.DropList}>
          {list.map(item =>
            item.city ? (
              <li
                key={item._id}
                className={s.DropItem}
                onClick={() => onSelect(`${item.city}, ${item.region}`)}
              >
                {item.city}, {item.region}
              </li>
            ) : (
              <li
                key={item._id}
                className={s.DropItem}
                onClick={() => onSelect(item.breed)}
              >
                {item.breed}
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
}
