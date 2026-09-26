import { useEffect, useState } from 'react'
import SignalField from './SignalField.jsx'
import { copy, links, loadLang, saveLang } from './i18n.js'

export default function App() {
  const [lang, setLang] = useState(loadLang)
  const [navSolid, setNavSolid] = useState(false)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
  }, [t.htmlLang])

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = (next) => {
    setLang(next)
    saveLang(next)
  }

  return (
    <div className="page">
      <SignalField />
      <div className="veil" aria-hidden="true" />

      <header className={navSolid ? 'nav solid' : 'nav'}>
        <a className="word" href="#top">
          bocchisad
        </a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#work">{t.nav.work}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="lang" role="group" aria-label="Language">
          <button
            type="button"
            aria-pressed={lang === 'en'}
            onClick={() => switchLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            aria-pressed={lang === 'ru'}
            onClick={() => switchLang('ru')}
          >
            RU
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero reveal">
          <p className="kicker">{t.hero.kicker}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="actions">
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">
              {t.hero.ctaGithub}
            </a>
            <a
              className="btn ghost"
              href={links.telegram}
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.ctaTelegram}
            </a>
            <a className="btn ghost" href={links.email}>
              {t.hero.ctaEmail}
            </a>
          </div>
        </section>

        <section className="block about">
          <p className="index">{t.about.index}</p>
          <div>
            <h2>{t.about.title}</h2>
            <p>{t.about.body}</p>
          </div>
        </section>

        <section className="block work" id="work">
          {t.flagships.map((f) => (
            <article key={f.id} className="flagship">
              <div className="flagship-copy">
                <p className="index">{f.index}</p>
                <p className="kicker">{f.kicker}</p>
                <h2>{f.title}</h2>
                <p className="lead slim">{f.lead}</p>
                <h3>{f.problemTitle}</h3>
                <p>{f.problem}</p>
                <h3>{f.pointsTitle}</h3>
                <ol className="points">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ol>
                <a
                  className="project-link"
                  href={f.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {f.hrefLabel}
                </a>
              </div>
              <aside className="plate">
                <p className="plate-label">stack</p>
                <ul className="plate-stack">
                  {f.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </aside>
            </article>
          ))}
        </section>

        <section className="block also">
          <p className="index">{t.also.index}</p>
          <div>
            <h2>{t.also.title}</h2>
            <ul className="also-list">
              {t.also.items.map((item) => (
                <li key={item.name}>
                  <div className="also-head">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                    {item.extra ? (
                      <a
                        className="also-extra"
                        href={item.extra.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.extra.label}
                      </a>
                    ) : null}
                  </div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block stack" id="stack">
          <p className="index">{t.stack.index}</p>
          <div>
            <h2>{t.stack.title}</h2>
            <p className="stack-lead">{t.stack.lead}</p>
            <ul className="chips">
              {t.stack.items.map(([name, desc]) => (
                <li key={name}>
                  <strong>{name}</strong>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block contact" id="contact">
          <p className="index">{t.contact.index}</p>
          <div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.lead}</p>
            <ul className="links">
              <li>
                <a href={links.github} target="_blank" rel="noreferrer">
                  {t.contact.labels.github}
                </a>
              </li>
              <li>
                <a href={links.telegram} target="_blank" rel="noreferrer">
                  {t.contact.labels.telegram}
                </a>
              </li>
              <li>
                <a href={links.email}>{t.contact.labels.email}</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
