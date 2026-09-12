import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { href: '#services', label: 'Услуги' },
  { href: '#prices', label: 'Цены' },
  { href: '#studio', label: 'О студии' },
  { href: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Hair Vikki, на главную">
          <span>HAIR VIKKI</span>
          <small>Казань</small>
        </Link>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Основная навигация">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-booking" href={site.links.booking} target="_blank" rel="noreferrer">
            Записаться <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          title={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p className="footer-brand">HAIR VIKKI</p>
        <p>{site.category}<br />Казань, ул. Пушкина, 1А</p>
        <div className="footer-links">
          <a href={site.contact.phoneHref}>{site.contact.phone}</a>
          <a href={site.links.booking} target="_blank" rel="noreferrer">Онлайн-запись <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  )
}
