import styles from './index.module.css';
const ItemFrien = props => {
  const { header, time, adress, email, phone, avatar } = props;
  return (
    <div className={styles.padding}>
      <div className={styles.container}>
        <h3>{header}</h3>
        <div className={styles.flex}>
          <div className={styles.image_container}>
            <img
              className={styles.logo}
              alt=""
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80"
            />
          </div>

          <div className={styles.friendData}>
            <h6>Time:</h6>
            <p>{time}</p>
            <h6>Adress:</h6>
            <p>{adress}</p>
            <h6>Email:</h6>
            <p>{email}</p>
            <h6>Phone:</h6>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFrien;
