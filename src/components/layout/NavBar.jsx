import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import { IoLogoGameControllerB } from 'react-icons/io'

function NavBar() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ]

  const navMap = navigation.map((item) => (
    <NavLink
      key={item.name}
      to={item.href}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md text-base font-medium ${
          isActive
            ? ' bg-base-content text-base-200'
            : 'text-secondary-content hover:bg-primary hover:text-secondary-content'
        }`
      }
      aria-current={item.current ? 'page' : undefined}
    >
      {item.name}
    </NavLink>
  ))

  return (
    <Disclosure as="nav" className="bg-neutral">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bg-neutral-content">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <IoLogoGameControllerB
                    className="block lg:hidden h-8 w-auto text-2xl"
                    alt="Logo"
                  />
                  <IoLogoGameControllerB
                    className="hidden lg:block h-8 w-auto text-3xl"
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">{navMap}</div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">{navMap}</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
