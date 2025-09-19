import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import { useTheme } from '../hooks/useTheme'
const AppWrap = (Component, idName, className = '') => function HOC () {
  const date = new Date()
  const year = date.getFullYear()
  const { mode } = useTheme()
  const containerClassName = ['app__container', mode, className].filter(Boolean).join(' ')
  const isHeaderSection = idName === 'home'
  const isFooterSection = idName === 'contact'
  const headerSocialMedia = isHeaderSection ? <SocialMedia /> : null

  return (
    <div id={idName} className={containerClassName}>
      {!isHeaderSection && <SocialMedia />}
      <div className='app__wrapper app__flex'>
        <Component {...(isHeaderSection ? { socialMedia: headerSocialMedia } : {})} />
        {isFooterSection && (
          <div className='copyright'>
            <p className='p-text copyright-text'>
              ©
              {year} Carlos Hinojosa
            </p>
            <p className='p-text copyright-text'>
              © Todos los derechos reservados
            </p>
          </div>
        )}
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
