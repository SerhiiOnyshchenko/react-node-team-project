
import React, { useState } from 'react';
import s from './index.module.css';
import { News } from 'components/ContactList/Contact/Contact';

export default function NewsPage(){
  const [news, setNews] = useState([]);



  const handleSubmitInputName = event => {
    event.preventDefault();
    // const nameNormalized = name.toLowerCase();
    // const dobbleName = items.find(
    //   item => item.name.toLowerCase() === nameNormalized
    // );
    // if (dobbleName) {
    //   Notiflix.Notify.failure(`${name} is already in contacts`);
    //   return
    // }
    // dispatch(CreateContact(
    //   {
    //     name,
    //     number,
    //   }));
    // setName('')
    // setNumber('')
  };
  return (
    <div className={s.newsContainer}>
         <h1 className={s.newsTitle}>News</h1>
         <form className={s.form} onSubmit={handleSubmitInputName}>
         <input
            className={s.input}
            // onChange={handleChangeInput}
            // value={number}
            type="tel"
            name="number"
           placeholder='Search'
            required
          />
<button type="submit" className={s.btn}></button>
         </form>
         <ul className={s.newList}>
        {news.map(item => (
          <News
            key={item.id}
            news={item}
          />))
}
    </ul>
         {/* /* <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {status === 'fetch' && items.length === 0 && (<div className={css.Loader}>
            <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}
            />
        </div>)}
        // {userStatus !== 'refreshUser' && <ContactList />  */}
    </div>
)
}
