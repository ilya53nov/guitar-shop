export default function FooterLinks():JSX.Element {
  return(
    <section className="footer__nav-section footer__nav-section--links">
    <h2 className="footer__nav-title footer__nav-title--links">Информация</h2>
    <ul className="footer__nav-list">
      <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Где купить?</a>
      </li>
      <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Блог</a>
      </li>
      <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Вопрос - ответ</a>
      </li>
      <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Возврат</a>
      </li>
      <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Сервис-центры</a>
      </li>
    </ul>
  </section>
  );
}
