import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.svg'

const navigation = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'พยากรณ์อากาศ', href: '/weather-forecast' },
]

export default function NavbarSimple() {
  return (
    <Disclosure as="nav" className="bg-sky-800">
      <div className="mx-auto px-5 sm:px-5 md:px-5 lg:px-12 xl:px-12 2xl:px-12">
        <div className="relative flex h-16 items-center justify-between">

          {/* ฝั่งซ้าย: Title */}
          <div className="flex items-center">
            <Link
              to={'/'}
              className="flex items-center text-white text-lg sm:text-xl font-bold"
            >
              {/* เพิ่มโลโก้ */}
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              Boonpa Sky Watcher
            </Link>
          </div>

          {/* Mobile menu button (แสดงเฉพาะหน้าจอขนาดเล็ก) */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* ฝั่งขวา: Links สำหรับหน้าจอขนาดปกติ */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='text-white hover:bg-white hover:text-sky-800 rounded-md px-3 py-2 text-sm font-medium'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu (แสดงเมื่อหน้าจอเล็ก) */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className='text-white hover:bg-white hover:text-sky-800 block rounded-md px-3 py-2 text-sm font-medium'
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}