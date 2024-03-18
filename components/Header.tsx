import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header className='p-5 md:text-sm lg:text-lg xl:text-xl font-light'>
      <div className='flex justify-between items-center text-off-white'>
        <div className='flex flex-row gap-5'>
          <a href='https://www.instagram.com/'>
            <div className='bg-off-white rounded-full w-7 h-7 flex items-center justify-center mb-1.5'>
              <FontAwesomeIcon
                icon={faInstagram}
                className='w-4 h-4 text-light-blue'
              />
            </div>
          </a>
          <a href='https://www.tiktok.com/'>
            <div className='bg-off-white rounded-full w-7 h-7 flex items-center justify-center mb-1.5'>
              <FontAwesomeIcon
                icon={faTiktok}
                className='w-4 h-4 text-light-blue'
              />
            </div>
          </a>
          <a href='https://telegram.me/'>
            <div className='bg-off-white rounded-full w-7 h-7 flex items-center justify-center'>
              <FontAwesomeIcon
                icon={faTelegram}
                className='w-4 h-4 text-light-blue'
              />
            </div>
          </a>
        </div>
        <div className='flex flex-row items-center gap-6'>
          <a href='/selection' className='hover:text-gray-300'>
            selection
          </a>
          <a href='/master-classes' className='hover:text-gray-300'>
            blog
          </a>
          <a href='/order-online' className='hover:text-gray-300'>
            order online
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
