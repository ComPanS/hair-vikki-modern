import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="page not-found"><p className="eyebrow">404</p><h1>Страница не найдена</h1><Link className="button button-dark" to="/">Вернуться на главную</Link></section>
}
