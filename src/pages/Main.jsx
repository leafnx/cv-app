import 'styles/Main.css'

function PhotoPlaceholder() {
  return(
    <div className='photo-placeholder'>
      Нет фото
    </div>
  )
}

function Info() {
  return(
    <div className='info'>
      <PhotoPlaceholder />

      <div className='info-text'>
        <h1>Егор Ильин</h1>

        <p>Junior-разработчик. Занимаюсь разработкой на React и NodeJS</p>

        <h4>Ссылки</h4>
        <a href='https://t.me/pshine' target='_blank'>Telegram</a>
        |
        <a href='https://github.com/leafnx/' target='_blank'>GitHub</a>
        |
        <a href='https://codewars.com/users/leafnx' target='_blank'>Codewars</a>
      </div>
    </div>
  )
}

function Experience() {
  return(
    <div className='card bg-blue'>
      <h2>Опыт работы</h2>
      <table className='table'>
        <tbody>
          <tr>
            <td>Сделаем Для Бизнеса</td>
            <td>Разработчик ПО</td>
            <td>2022 - 2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Courses() {
  return(
    <div className='card bg-yellow'>
      <h2>Пройденные курсы</h2>
      <ul className='link-list'>
        <li>
          <a href='https://js.dmitrylavrik.ru/' target='_blank'>
            dmitrylavrik.ru, Javascript - курс js разработки
          </a>
        </li>
        <li>
          <a href='https://www.sql-ex.ru/' target='_blank'>
            sql-ex.ru, SQL
          </a>
        </li>
      </ul>
    </div>
  )
}

function Tutorials() {
  return(
    <div className='card bg-red'>
      <h2>Обучающие видео (YouTube)</h2>
      <ul className='link-list'>
        <li>
          <a href='https://youtu.be/SpCUuyZZTp8' target='_blank'>
            CSS для Начинающих - Практический Курс
          </a>
        </li>
        <li>
          <a href='https://youtu.be/GNrdg3PzpJQ' target='_blank'>
            React JS фундаментальный курс от А до Я
          </a>
        </li>
      </ul>
    </div>
  )
}

function ContactForm() {
  return(
    <div className='contact-form'>
      <h2>Связаться со мной</h2>
      <form action='/'>
        <div className='row'>
          <div className='form-group'>
            <label>Ваше имя:</label>
            <input type='text' id='name' placeholder='Введите ваше имя...' />
          </div>
          
          <div className='form-group'>
            <label>Ваш email:</label>
            <input type='text' id='email' placeholder='Введите email...' />
          </div>
        </div>

        <div className='form-group'>
          <label>Ваше сообщение:</label>
          <textarea id='name' rows='2' />
        </div>

        <button className='btn' type='submit'>Связаться!</button>
      </form>
    </div>
  )
}

export default function Main() {
  return(
    <>
      <Info />
      <Experience />
      <Courses />
      <Tutorials />
      <ContactForm />
    </>
  )
}
