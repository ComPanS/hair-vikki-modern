import { ArrowDown, ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import { choiceSteps, priceGroups, serviceFamilies, site, trustFacts } from '../content/site'

const imagePath = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`

export function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={imagePath('hair-vikki-hero-bg.png')} alt="" aria-hidden="true" />
        <div className="hero-topline">
          <span>{site.category}</span>
          <span>Казань · Площадь Тукая</span>
        </div>
        <div className="hero-copy">
          <img className="hero-logo" src={imagePath('hair-vikki-logo.jpg')} alt="Hair Vikki" />
          <p className="hero-kicker">Студия здоровых и красивых волос</p>
          <h1 id="hero-title">HAIR<br />VIKKI</h1>
          <p className="hero-description">{site.description}</p>
          <a className="button button-light" href={site.links.booking} target="_blank" rel="noreferrer">
            Онлайн-запись <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <a className="hero-scroll" href="#services" aria-label="Перейти к услугам">
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </section>

      <section className="section services-section" id="services" aria-labelledby="services-title">
        <header className="section-heading services-heading">
          <p className="eyebrow">Направления</p>
          <h2 id="services-title">Работаем с состоянием, формой и текстурой волос</h2>
          <p>Команда мастеров под руководством технолога. Подходящее направление можно определить на бесплатной диагностике.</p>
        </header>
        <ol className="service-index">
          {serviceFamilies.map((service) => (
            <li key={service.number}>
              <span className="index-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </li>
          ))}
        </ol>
        <a className="text-link" href="#prices">Смотреть стоимость <ArrowDown size={17} aria-hidden="true" /></a>
      </section>

      <section className="proof-section" id="studio" aria-labelledby="proof-title">
        <div className="proof-image-wrap">
          <img src={imagePath('hair-result-02.jpg')} alt="Результат ухода за длинными волосами в студии Hair Vikki" />
          <span className="image-caption">Результат начинается с точной диагностики</span>
        </div>
        <div className="proof-content">
          <p className="eyebrow">О студии</p>
          <h2 id="proof-title">Профессиональный уход без случайного выбора процедуры</h2>
          <p className="proof-lede">Hair Vikki специализируется на восстановлении, выпрямлении и сохранении длины. В работе используются премиальные составы, а данные студии в Яндекс Картах подтверждены владельцем.</p>
          <dl className="proof-facts">
            {trustFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section prices-section" id="prices" aria-labelledby="prices-title">
        <header className="section-heading prices-heading">
          <p className="eyebrow">Стоимость</p>
          <h2 id="prices-title">Прайс на основные процедуры</h2>
          <p>Точная процедура подбирается с учетом состояния и задачи. Актуальную стоимость уточняйте при записи.</p>
        </header>
        <div className="price-menu">
          {priceGroups.map((group) => (
            <section className="price-group" key={group.title} aria-labelledby={`price-${group.title}`}>
              <h3 id={`price-${group.title}`}>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.title}>
                    <span>{item.title}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <a className="button button-dark" href={site.links.booking} target="_blank" rel="noreferrer">
          Выбрать время <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </section>

      <section className="choice-section" aria-labelledby="choice-title">
        <div className="choice-intro">
          <p className="eyebrow">С чего начать</p>
          <h2 id="choice-title">Не обязательно знать название процедуры</h2>
        </div>
        <ol className="choice-path">
          {choiceSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-section" id="contacts" aria-labelledby="contacts-title">
        <div className="contact-address">
          <p className="eyebrow">В центре Казани</p>
          <h2 id="contacts-title">Пушкина,<br />1А</h2>
          <p>{site.contact.addressDetails}</p>
          <a className="map-link" href={site.links.maps} target="_blank" rel="noreferrer">
            <MapPin size={18} aria-hidden="true" /> Открыть в Яндекс Картах <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-actions">
          <div className="contact-meta">
            <Clock3 aria-hidden="true" />
            <span>Время работы</span>
            <strong>{site.contact.hours}</strong>
          </div>
          <a href={site.contact.phoneHref}>
            <Phone aria-hidden="true" /><span>Позвонить</span><strong>{site.contact.phone}</strong>
          </a>
          <a href={site.links.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /><span>Написать</span><strong>WhatsApp</strong><ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href={site.links.telegram} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /><span>Новости и окна</span><strong>Telegram</strong><ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}
