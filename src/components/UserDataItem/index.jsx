// import s from './index.module.css';

export default function UserDataItem({ field, value }) {
  return (
    <div>
      <p>{field}</p>
      <p>{value}</p>
      <button type="button">Edit</button>
    </div>
  );
}
