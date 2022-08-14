import {FC, useState, useRef, useEffect} from "react";
import {dataAPI} from "../../services/api/data";
import {useParams} from "react-router-dom";
import PopupSample from "./popup/popup";
import ContentsSample from "./contents-sample/contents-sample";
import soundImage from "../../images/player/soundtrack.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import ContentsMobile from "./contents-mobile/contents-mobile";
import samplePageStyles from "./sample-page.module.css";

const SamplePage: FC = () => {

  const [popupOpen, setPopupOpen] = useState(true);
  const [contentsOpen, setContentsOpen] = useState(false);

  const [scrollingUp, setScrollingUp] = useState(false);
  const prevScrollY = useRef(0);


  const mobile = useMediaQuery('(max-width: 767px)');

  const {page} = useParams<{page?: string}>();
  const {isLoading, data} = dataAPI.useGetSampleContentQuery(page);
  if (isLoading || !data || data.length === 0) {
    return null
  }

  const openContents = (): void => {
    setContentsOpen(true)
  };

  const onScroll = (e: any): void => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && scrollingUp) {
      setScrollingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !scrollingUp) {
      setScrollingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(scrollingUp, currentScrollY);
  };

    /*
  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () =>
    document.removeEventListener('scroll', onScroll);
  });
  */

  return (
    <main className={samplePageStyles.main}>
      <div onScroll={onScroll} style={{height: 900, overflowY: "scroll" }}>
        <nav>
          <p className={samplePageStyles.pagesNav}>
              <a href="index.html" className={samplePageStyles.pagesNavLink}>Главная страница</a> /
              <a href="journal-projito.html" className={samplePageStyles.pagesNavLink}
                >Журнал «Прожито»</a
              >
              / Опыт прочтения одного дневника
            </p>
        </nav>
        <div className={samplePageStyles.tag}>
          <p className={samplePageStyles.tagPart}>детство</p>
          <p className={samplePageStyles.tagPart}>&#183;</p>
          <p className={samplePageStyles.tagPart}>опыт читателя</p>
        </div>

        <button type="button" className={samplePageStyles.buttonContens}
          onClick={openContents}>оглавление</button>

        {contentsOpen && (
          <ContentsSample
            openContents={() => setContentsOpen(true)}
            closeContents={() => setContentsOpen(false)}
          />
        )}

        {popupOpen && (
          <PopupSample closePopup={() => setPopupOpen(false)}/>
        )}

        {mobile && scrollingUp && <ContentsMobile />}

        {/*}

        <article className="article" dangerouslySetInnerHTML={{__html: data[0].content}}/>
        */}


        <article className="article">
          <h1>Опыт прочтения одного дневника</h1>
          <h2>Часть один</h2>
          <p>
            В детстве я любила слушать радио. Проводное у нас почему-то не
            работало, но была радиола, которая пластинки уже не проигрывала, зато
            ловила 3-ю программу. Ту самую, где новостей не было совсем, а
            передачи повторялись неисчислимое количество раз. Приходишь из школы,
            дома – никого, в Петропавловске-Камчатском полночь, а по радио идет
            «Театр у микрофона». Все спектакли я знала почти наизусть:
            классические постановки МХАТа и Малого, авангардного «Мартина Идена» с
            Высоцким в заглавной роли, тончайшие спектакли Алексея Баталова по
            Толстому и Куприну. И когда на «Радио Арзамас» услышала курс лекций об
            Александре Афиногенове, мне не надо было объяснять: кто это – его
            пьесу «Машенька» я хорошо помнила. Лекции понравились. Минимальные
            поиски в интернете привели на сайт «Прожито». А потом я попала на
            Лабораторию (был такой доковидный формат, когда волонтеры одновременно
            работали каждый над своим фрагментом неизвестного дневника, а потом
            обсуждали прочитанное). На столе лежала общая тетрадь в коленкоровом
            переплете, купленная у букиниста. Это был второй, после моего,
            дневник, который я держала в руках. И вот, читая страницу за
            страницей, мы узнавали этого человек: старший таксатор Далматовского
            лесничества, бывший офицер эстонской армии, строгий глава семьи
            Клавдий Васильевич Попов. Так я стала волонтером, который помогает
            расшифровывать рукописные дневники <span>«обыкновенных людей»</span>
          </p>
          <blockquote>
            Дневник, о котором дальше пойдет речь, вел сначала подросток, потом
            юноша, который дал себе слово честно записывать все, что с ним
            происходило.
          </blockquote>
          <p>
            Начавшись почти черновиком к сочинению на всем знакомую тему «Как я
            провел это лето», дневник очень скоро становится инструментом
            осмысления. Записи ведутся четыре года, с августа 1937 года по июль
            41-го, и заканчиваются школьным выпускным, ожиданием повестки и
            проводами любимой девушки в эвакуацию. Юра Беневольский погиб в 1944
            году. Ему был 21 год. Перед отправкой на фронт он отдал тетради Сергею
            Михайловичу Вяземскому, отцу своей одноклассницы, с пожеланием дневник
            не читать до возвращения, а в случае гибели - распорядиться по своему
            усмотрению. В 1974 году Сергей Михайлович – известный ленинградский
            историк - все свое выдающееся собрание документов и автографов передал
            в ЦГАЛИ. Дневник Беневольского был переплетен, получил свой
            инвентарный номер и место на полке архива.
          </p>
          <figure className='image'>
            <img
              src={require(`../../images/photo_summer_1938.png`)}
              alt='Рисунки из дневника Вени Аронвальда'
            />
            <figcaption>
              Рисунки из дневника Вени Аронвальда, 1937 год
            </figcaption>
          </figure>
          <p>
            Эти школьные тетради в 12 листов исписаны аккуратным, даже красивым
            почерком. Юра выбрал форму ведения: даты выделены красными чернилами,
            отчерчены широкие поля, которые он заполнял рисунками, сносками и
            фотографиями – и выдерживал ее до конца. Большинство фотографий были
            сделаны аппаратом, который Юра собрал сам. Он с увлечением занимался в
            фотокружке при Доме пионеров. В какой-то момент его пришлось оставить,
            т.к. по мнению мамы страдали уроки. Но благодаря этим снимкам мы видим
            их домашнюю елку, маму за шитьем, Юриного друга, ледоход на Неве. Есть
            и профессиональные фотокарточки: одноклассники, артистки кино, сам
            Юра.
          </p>
          <figure className='video'>
            <iframe src='https://www.youtube.com/embed/kbUP2PAbLTk?controls=0&amp;start=1'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              >
            </iframe>
            <figcaption>
              Лекция о дневнике Юры Беневольского
            </figcaption>
          </figure>
          <p>
            Первая дневниковая запись датирована 30 августа 1937 года. Юра узнает,
            что его друг, Веня Аронвальд, во-первых, остается на второй год, и,
            во-вторых, ведет дневник.<br/>
            «- Дай посмотрю.<br/>
              Засмеялся:<br/>
            - Нет, смотреть можно только одному человеку!<br/>
              - Кому-же?<br/>
            - Мне.<br/>
            </p>
          <figure>
            <div className='player'>
              <div className='player__container'>
                <audio src={require(`../../audio/1564_Rodoman.mp3`)} id='audio'></audio>
                <button
                  type='button'
                  id='button-play'
                  className='player__button-play'
                ></button>
                <button
                  type='button'
                  className='player__button-reverse-anticlockwise'
                ></button>
                <button
                  type='button'
                  className='player__button-reverse-clockwise'
                ></button>
                <img
                  src={soundImage}
                  alt='Звуковая дорожка'
                  className='player__soundtrack'
                />
                <span className='player__time'>15:20</span>
                <button type='button' className='player__button-mute'></button>
              </div>
            </div>
            <figcaption>
              Запись разговора Юры и Вени Аронвальда, 1937 год
            </figcaption>
          </figure>
          <p>
            Но вскоре подростки дают читать друг другу свои дневники. Дружба
            продлиться до самой войны, становясь то теснее, то прохладней.<br/>
            Юра хорошо учится и это видно не по отметкам (их он не приводит), а
            потому, как растет его грамотность. Много читает. Но есть предмет,
            который дается ему с трудом – немецкий язык. В старших классах он
            увлечен героями Джека Лондона. Любит кино и мечтает стать
            кинооператором. А еще влюблен в заслуженную артистку республики Любовь
            Орлову: собирает ее фотографии и не пропускает ни одного фильма.<br/>
            Много и домашних дел: маме помочь, распилить с отцом дрова. Вот только
            атмосфера в доме становится все более напряженной. Однажды Юра,
            зачитавшись, забыл купить хлеба. «Он кричал что я нарочно ему врежу́ и
            т.д.. Наконец он приказал купить мне горячей булки. Я ушел.<br/>
          </p>
          <figure className='image'>
            <img
              src={require(`../../images/photo_10September_1937.png`)}
              alt='Рисунки из дневника Вени Аронвальда'
            />
            <figcaption>
              Рисунки из дневника Вени Аронвальда, 1937 год
            </figcaption>
          </figure>
          <h2>Часть два</h2>
          <p>
          - Да, днем! А ночью Петербург!!»<br/>
            Многое объясняет фраза, написанная Юрой ранее: «Когда приехал (вернее
            пришел) домой Ната сообщила: А папа пьяный! – Это не новость, отец за
            последние дни часто пьет, и мне опротивел». Вскоре любое упоминание об
            отце исчезает.<br/>
            Теперь на Юре не только домашние заботы: «Сейчас я имею свои деньги. Я
            их самым настоящим образом заработал. Мама мне подыскала урок. И я
            теперь должен каждый 2-ой и 3-ий день шестидневки ездить и давать
            частные уроки одному шалопаю из 5-го класса. 1 час – 4 руб. Мама
            начинает относится ко мне как к юноше, а не ребенку старшего возраста.
            Я теперь довольно свободно могу уйти из дому в любое время».<br/>
          </p>
          <span>
            <p>Факты о Юре:<br/>
            <ul>
              <li>Юра хорошо учится и это видно не по отметкам (их он не приводит), а потому, как растет его грамотность;</li>
              <li>Много читает</li>
              <li>В старших классах он увлечен героями Джека Лондона. Любит кино и мечтает стать кинооператором. А еще влюблен в заслуженную артистку республики Любовь Орлову: собирает ее фотографии и не пропускает ни одного фильма.</li>
            </ul>
            </p>
          </span>
          <p>
          - Да, днем! А ночью Петербург!!»<br/>
            Многое объясняет фраза, написанная Юрой ранее: «Когда приехал (вернее
            пришел) домой Ната сообщила: А папа пьяный! – Это не новость, отец за
            последние дни часто пьет, и мне опротивел». Вскоре любое упоминание об
            отце исчезает.<br/>
            Теперь на Юре не только домашние заботы: «Сейчас я имею свои деньги. Я
            их самым настоящим образом заработал. Мама мне подыскала урок. И я
            теперь должен каждый 2-ой и 3-ий день шестидневки ездить и давать
            частные уроки одному шалопаю из 5-го класса. 1 час – 4 руб. Мама
            начинает относится ко мне как к юноше, а не ребенку старшего возраста.
            Я теперь довольно свободно могу уйти из дому в любое время».<br/>
          </p>
          </article>




      </div>
    </main>
  )
}

export default SamplePage;
