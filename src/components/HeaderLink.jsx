
// export interface Props extends astroHTML.JSX.AnchorHTMLAttributes {}

// const { href, class: className, ...props } = Astro.props;

// const { pathname } = Astro.url;
// const isActive = href === pathname || href === pathname.replace(/\/$/, '');

//   <a href={href} class:list={[className, (isActive) && 'bg-teal-800', 'p-2 rounded hover:bg-teal-600 bg-teal-700']} {...props}>
// <slot />
// </a>

export const HeaderLink = ({ children, href, target, ariaLabel }) => {
  return (
    <li className='p-2 w-6/12 rounded opacity-1 bg-teal-600 hover:bg-teal-500 sm:hover:bg-teal-700 sm:bg-teal-700 sm:hover:border-b-2 sm:w-auto flex justify-center'>
      <a href={href} target={target} aria-label={ariaLabel} className='w-full h-full flex justify-center'>
        {children}
      </a>
    </li>
  )
}
