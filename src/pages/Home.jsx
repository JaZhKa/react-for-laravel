import useAuthContext from "../context/AuthContext";

function Home() {
  const { user } = useAuthContext();

  return (
    <>
      <h1>Привет, {user?.name}!</h1>
      <div className='flex mt-8 space-x-20'>
        <div className='w-9/12'>
          <article className='mb-8'>
            <h2 className='text-xl font-bold tracking-tight text-justify mb-2'>
              Анонимное приложение для написания постов
            </h2>
            <p className='text-justify tracking-wide'>
              Это приложение позволяет пользователям писать анонимные посты. Оно
              может быть использовано для выражения мнений, которые пользователи
              не хотят связывать со своим именем или личностью.
            </p>
          </article>
          <article className='mb-8'>
            <h2 className='text-xl font-bold tracking-tight text-justify mb-2'>
              Серверная часть
            </h2>
            <p className='text-justify tracking-wide'>
              Серверная часть приложения написана на Laravel. Она предоставляет
              API для создания, чтения, обновления и удаления постов.
            </p>
          </article>
          <article className='mb-8'>
            <h2 className='text-xl font-bold tracking-tight text-justify mb-2'>
              Фронтенд
            </h2>
            <p className='text-justify tracking-wide'>
              Фронтенд приложения написан на React. Он предоставляет
              пользователям интерфейс для создания и просмотра постов.
            </p>
          </article>
          <article className='mb-8'>
            <h2 className='text-xl font-bold tracking-tight text-justify mb-2'>
              Возможности приложения
            </h2>
            <ul className='list-disc list-inside'>
              <li className='text-justify tracking-wide'>
                Пользователи могут создавать анонимные посты с любым
                содержанием.
              </li>
              <li className='text-justify tracking-wide'>
                Посты могут быть отсортированы по дате, популярности или другим
                критериям.
              </li>
              <li className='text-justify tracking-wide'>
                Пользователи могут комментировать посты.
              </li>
            </ul>
          </article>
          <article className='mb-8'>
            <h2 className='text-xl font-bold tracking-tight text-justify mb-2'>
              Применение приложения
            </h2>
            <p className='text-justify tracking-wide font-semibold'>
              Это приложение может быть использовано для различных целей,
              включая:
            </p>
            <ul className='list-disc list-inside'>
              <li className='text-justify tracking-wide'>
                Выражение мнений, которые пользователи не хотят связывать со
                своим именем или личностью.
              </li>
              <li className='text-justify tracking-wide'>
                Обсуждение деликатных тем, которые могут быть неприятны для
                других пользователей.
              </li>
              <li className='text-justify tracking-wide'>
                Создание творческого контента, который не требует идентификации
                автора.
              </li>
            </ul>
          </article>
        </div>
        <div className='w-9/12'>
          <article className='mb-8'>
            <h2 className='text-xl font-bold tracking-tight text-justify mb-2'>
              Безопасность
            </h2>
            <p className='text-justify tracking-wide font-semibold'>
              Приложение использует следующие меры безопасности для защиты
              анонимности пользователей:
            </p>
            <ul className='list-disc list-inside'>
              <li className='text-justify tracking-wide'>
                IP-адреса пользователей маскируются.
              </li>
              <li className='text-justify tracking-wide'>
                Не сохраняются никакие данные, которые могут быть использованы
                для идентификации пользователя.
              </li>
            </ul>
          </article>
          <article className='mb-8'>
            <h2 className='text-xl font-bold tracking-tight text-justify mb-2'>
              Пример использования
            </h2>
            <p className='text-justify tracking-wide'>
              Пользователь может создать пост, в котором он делится своим
              мнением о текущем событии. Он может написать, что он думает о
              политике, обществе или культуре. Он может также написать о личном
              опыте или переживании.
            </p>
            <p className='text-justify tracking-wide'>
              Другие пользователи могут прочитать пост и оставить комментарий.
              Они могут согласиться или не согласиться с мнением автора. Они
              также могут поделиться своими собственными мыслями по данной теме.
            </p>
            <p className='text-justify tracking-wide'>
              Это приложение может быть использовано для создания безопасного
              пространства для выражения мнений и идей.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
