
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import s from './index.module.css';
import Container from 'components/Container';
import News from '../../components/News/index';
import { useSearchParams } from 'react-router-dom';
import getNews from '../../redux/news/news-operations';

export default function NewsPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setinputValue] = useState(searchParams.get('query') ?? '');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const news = useSelector(state => state.news.news);
  // const [news, setNews] = useState();
  // const news = [
  //   {
  //     title:
  //       'В День ветеринара в столиці пройде безкоштовний тренінг з надання першої допомоги тваринам',
  //     url: 'https://www.kmlvm.com.ua/v-den-veterynara-v-stolytsi-projde-bezkoshtovnyj-trening-z-nadannya-pershoyi-dopomogy-tvarynam/',
  //     description:
  //       "В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини», фахівці якого навчать всіх бажаючих навичкам надання першої допомоги братам нашим меншим, які потрапили в біду. Без перебільшення, подібні знання можуть врятувати життя чотирилапим. Тренінг безкоштовний, взяти в ньому участь може будь-хто, дозволяється участь зі своїм домашнім улюбленцем. Після тренінгу учасники зможуть отримати безкоштовну консультацію ветеринара, щодо догляду за тваринами, вакцинації та будь-яких інших питань, пов'язаними зі здоров'ям улюбленця. Дата проведення майстер-класу обрана не випадково. 14 серпня в Україні відзначається День працівників ветеринарної медицини і цього року ми вирішили провести такий потрібний тренінг. Для ветеринара головне – це врятовані брати наші менші, а навчити людей надавати первинну допомогу тваринам значить «інвестувати» у врятовані життя тварин в майбутньому. Початок тренінгу об 11:00. Адреса Тимчасового притулку для тварин «ВДНГ»: вулиця Академіка Глушкова, 1, 16 павільйон.",
  //     date: '2022-08-12',
  //   },
  //   {
  //     title:
  //       'У Телеграмі запрацював чат-бот, що надає безкоштовні консультації щодо догляду за тваринами',
  //     url: 'https://www.kmlvm.com.ua/u-telegrami-zapratsyuvav-chat-bot-shho-nadaye-bezkoshtovni-konsultatsiyi-shhodo-doglyadu-za-tvarynamy/',
  //     description:
  //       'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot. Функціонал бота вже досить широкий, господарі тварин зможуть отримати відповіді на питання щодо вакцинації тварин, їх стерилізацію, дізнатись адреси муніципальних ветеринарних клінік, де можна отримати всі необхідні послуги. Крім того, користувачі боту зможуть отримати консультацію від ветеринарного лікаря, описавши проблему. Ця функція буде доступна з 9:00 до 18:00, однак цілодобово можна буде отримати основну довідкову інформацію з таких питань, як перша допомога при отруєнні тварини, укусу кліща, дізнатись графік профілактичних щеплень, тощо. Наразі бот працює в тестовому режимі, однак в майбутньому його функціонал буде розширюватись.',
  //     date: '2022-07-19',
  //   },
  //   {
  //     title: 'Обережно, кліщі! Як уберегти улюбленця від неприємностей?',
  //     url: 'https://www.kmlvm.com.ua/oberezhno-klishhi-yak-uberegty-ulyublentsya-vid-nepryyemnostej/',
  //     description:
  //       'Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям. Чим небезпечні кліщі? Кліщі переносять збудника паразитарного захворювання крові. Якщо тварина показує ознаки укусу кліщем – слід негайно звернутися до лікаря, зволікання може коштувати життя тварині. Які ознаки укусу кліща? Слід мерщій звернутися до ветеринара, якщо ви помітили що тварина: стала млявою, постійно лежить відмовляється від їжі її сеча стала темного кольору. Захворювання крові, яке виникає після укусу кліща, лікується, проте важливе значення має час. І профілактика, до речі, щоб убезпечити котика чи песика від таких неприємностей, можна використати наступні засоби: краплі на холку, спреї, спеціальні нашийники, пігулки.',
  //     date: '2022-05-04',
  //   },
  //   {
  //     title: 'В столиці запрацював тимчасовий притулок',
  //     url: 'https://www.kmlvm.com.ua/v-stolytsi-zapratsyuvav-tymchasovyj-prytulok-dlya-tvaryn/',
  //     description:
  //       'Завдяки зусиллям столичних служб та волонтерів, у столиці запрацював тимчасовий притулок для тварин “Виставковий центр”, який діє на території 16 павільйону на ВДНГ. Притулок даватиме прихисток тваринам, які залишились без господарів. Привезти тварину до притулку зможе будь-хто, при передачі тварини буде складено акт “прийому-передачі”. Щоб повідомити про тварину, або домовитись про її прилаштування – достатньо подзвонити на нашу гарячу лінію (044) 366-69-99. Розраховний притулок на 100 собак та до 100 котів. Тварини, що потраплятимуть до тимчасового притулку, будуть прилаштовуватись до родин. І, до речі, перші успіхи вже є: Із 31 березня привезли 70 собак і кішок. Уже прилаштовано близько 40 тварин – 31 собака і 9 кішок. На сьогодні у притулку перебувають 25 собак і 5 кішок.',
  //     date: '2022-05-02',
  //   },
  //   {
  //     title:
  //       'Собаки, кішки, як і люди, старіють, і у цей період тварині потрібен особливий догляд',
  //     url: 'https://www.kmlvm.com.ua/sobaky-kishky-yak-i-lyudy-stariyut-i-u-tsej-period-tvaryni-potriben-osoblyvyj-doglyad/',
  //     description:
  //       'Зрілий вік вихованця – велика відповідальність для дбайливого власника. Старіння неможливо зупинити, але як процеси будуть відбуватись саме у вашого вихованця, багато в чому залежить від умов утримання, харчування, фізичних навантажень. За несприятливих факторів воно буде протікати швидше і важче. Так само як і в людей, у тварин починаються порушення функціонування органів і систем. Як правило, у собак і кішок відбуваються подібні процеси. У цей період від власника фактично залежить тривалість життя улюбленця. Перш за все, з приходом старості у тварин порушується робота імунної системи, яка вже не так активно захищає організм від вірусів і хвороб. Знижується не лише загальний, а й клітинний імунітет. Аби підтримати імунну систему тварини, дотримуйтеся таких порад: організуйте збалансоване харчування (без надлишку жирів, адже активності менше) та його режим, регулярно та вчасно робіть необхідні щеплення',
  //     date: '2021-08-11',
  //   },
  //   {
  //     title:
  //       'Чому коти норовлять сунути хвіст в обличчя господаря: кілька причин',
  //     url: 'https://ukr.media/animals/446231/',
  //     description:
  //       "Любителі котів зазвичай досконально знають характер своїх пухнастиків. Одних обов'язково потрібно погладити перед їжею, інші чекають, поки ви відкладете книгу, щоб лягти до вас в ліжко. Але іноді коти поводяться так, що навіть досвідчені кошатники не можуть дати пояснення. Наприклад, чому кіт повертається задом до господаря? На перший погляд здається, ніби це акт неповаги. Все-таки така поведінка котів зовсім не схожа на людські норми пристойності. Однак не судіть строго свого улюбленця, поки не розберетеся в причинах. Розповідаємо, чому кіт повертається задом до господаря. Для цього є кілька причин, інформує Ukr. Media.Ввічлива взаємодія",
  //     date: '2022-08-13',
  //   },
  // ];

  useEffect(() => {
    if (query === '') {
      return;
    }
    // setIsLoading(true);
    dispatch(getNews(query));
    // .then(data => {
    //   setNews(data.results);
    //   // console.log(data.results);
    //   // if (data.results.length === 0) {
    //   //   Notiflix.Notify.failure(
    //   //     'Sorry, there are no news matching your search query. Please try again.'
    //   //   );
    //   // }
    // })
    // .catch(error => {
    //   console.error(error);
    // }).finally(() => {
    //   // setIsLoading(false);
    // });
  }, [dispatch, query]);


  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      // Notiflix.Notify.failure('Enter a query');
      setinputValue('')
      return
    }
    setQuery(inputValue.trim());
    setSearchParams(
      inputValue.trim() !== ''
        ? { query: inputValue.trim() }
        : {}
    );

  };



  const handleChangeInput = event => {
    setinputValue(event.target.value)
  }
  return (
    <Container>
      <div className={s.newsContainer}>
        <h1 className={s.newsTitle}>News</h1>
        <form className={s.form} onSubmit={onSubmit}>
          <input
            className={s.input}
            onChange={handleChangeInput}
            value={inputValue}
            type="tel"
            name="number"
            placeholder='Search'
            required
          />
          <button type="submit" className={s.btn}></button>
        </form>
        <ul className={s.newList}>
          {news.map(item => (
            <News key={item.title} news={item} />
          ))}
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
    </Container>
  );
}
