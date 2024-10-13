import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'พยากรณ์อากาศ', href: '/weather-forecast' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarSimple() {
  return (
    <Disclosure as="nav" className="bg-sky-800">
      <div className="mx-auto px-20 sm:px-20 md:px-20 lg:px-20 xl:px-20 2xl:px-20">
        <div className="relative flex h-16 items-center justify-between">

          {/* ฝั่งซ้าย: Title */}
          <div className="flex items-center">
            <Link
              to={'/'}
              className="text-white text-xl font-bold"
            >
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
                  aria-current={item.current ? 'page' : undefined}
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
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}