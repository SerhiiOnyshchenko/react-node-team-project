import s from './index.module.css';


export default function News({ news }) {
  const dataNormalize = news.date.replace(/(\d{4}).*(\d{2}).*(\d{2})/, '$3/$2/$1')

  return (
    
    <li className={s.container}>
      <div className={s.decor}></div>
      <div className={s.containerTitle}>
        <div className={s.title}>
          {news.title}
        </div>
       <p className={s.text}>{news.description}</p>
       <div className={s.containerDataAndReadMore}>
        <span className={s.data}>{dataNormalize}</span>
        <a className={s.linkNews}  target="_blank" rel="noreferrer"  href={news.url}>Read more</a>
       </div>
      </div>

    </li >
  )
}