import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export function Prueba () {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='lg:w-0 lg:flex-1'>
            <a href='#' className='text-gray-900 font-medium'>
              Mi sitio web
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              className='bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={handleOpen}
            >
              <span className='sr-only'>Open menu</span>
              <FaBars className='h-6 w-6' />
            </button>
          </div>
          <nav className='hidden md:flex space-x-10'>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Inicio
            </a>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Acerca de
            </a>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Servicios
            </a>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Contacto
            </a>
          </nav>
        </div>
      </div>

      <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <a href='#' className='text-gray-900 font-medium'>
                Mi sitio web
              </a>
            </div>
            <div className='-mr-2'>
              <button
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                onClick={handleClose}
              >
                <span className='sr-only'>Close menu</span>
                <FaTimes className='h-6 w-6' />
              </button>
            </div>
          </div>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Inicio
            </a>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Acerca de
            </a>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Servicios
            </a>
            <a href='#' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
