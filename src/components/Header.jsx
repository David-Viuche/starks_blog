
import { useState } from 'react'
import { SITE_TITLE } from '../consts'
import { HeaderLink } from './HeaderLink'
import { AiOutlineCloseSquare, AiOutlineGithub } from 'react-icons/ai'
import { TfiMenuAlt } from 'react-icons/tfi'

export const Header = () => {
  const [isOpen, setisOpen] = useState(false)

  function handleOnclick () {
    setisOpen(open => !open)
  }

  return (
    <header className='bg-teal-700 text-lg text-white flex flex-col w-full h-auto sm:flex-row sm:justify-around sm:h-auto'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='sm:-m-0'>
          <a href='/' className='p-2 rounded sm:bg-teal-700w-auto'>{SITE_TITLE}</a>
        </h2>
        <div onClick={handleOnclick} className='sm:hidden'>
          {/* <span className={`block relative w-6 h-0.5 mb-2 bg-white transition-transform ${(isOpen) && '  rotate-45 translate-y-2.5'}`} />
          <span className={`block relative w-6 h-0.5 mb-2 bg-white transition-opacity ${(isOpen) && 'opacity-0'}`} />
          <span className={`block relative w-6 h-0.5 bg-white transition-transform ${(isOpen) && ' -rotate-45  -translate-y-2.5'}`} /> */}
          {
             (isOpen)
               ? <AiOutlineCloseSquare className='w-8 h-8' />
               : <TfiMenuAlt className='w-8 h-8' />
          }

        </div>

      </div>
      <nav className={`bg-teal-700 absolute p-5 top-14 inset-x-0 transition transform origin-top-right ${(!isOpen) && 'hidden'} sm:block opacity-95 sm:relative sm:top-0`}>
        <ul className='flex flex-col justify-center items-center gap-5 text-center w-full sm:flex-row'>
          <HeaderLink href='/'>Inicio</HeaderLink>
          <HeaderLink href='/blog'>Blog</HeaderLink>
          <HeaderLink href='/about'>Acerca de</HeaderLink>
          <HeaderLink href='https://github.com/david-viuche' target='_blank'><AiOutlineGithub className='h-8 w-8' /></HeaderLink>
        </ul>
      </nav>
    </header>
  )
}
