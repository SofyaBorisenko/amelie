import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer
      className='text-off-white flex flex-col items-center'
      style={{
        height: '30rem',
        backgroundImage: `url('/images/footer-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontSize: '1.25rem',
        fontWeight: '300',
      }}
    >
      <div
        className='container mt-40 mr-40 flex flex-col md:flex-row justify-between gap-16'
        style={{ width: '28.125rem' }}
      >
        {/* Column 1: Social Icons */}
        <div className='flex flex-col items-center gap-1'>
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

        {/* Column 2: Menu Items */}
        <div className='w-36 flex flex-col items-start md:text-sm lg:text-lg xl:text-xl gap-2'>
          <a className='text-nowrap' href='/selection'>
            selection
          </a>
          <a className='text-nowrap' href='/blog'>
            blog
          </a>
          <a className='text-nowrap' href='/order-online'>
            order online
          </a>
        </div>

        {/* Column 3: Privacy Policy and Terms of Use */}
        <div className='w-32 flex flex-col items-start md:text-sm lg:text-lg xl:text-xl gap-2'>
          <a className='text-nowrap' href='/privacy-policy'>
            privacy policy
          </a>
          <a className='text-nowrap' href='/terms-of-use'>
            terms of use
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className='text-center mt-36 md:text-sm lg:text-base xl:text-lg'>
        <p className='leading-6'>
          Copyright © 2023 Amelie Cakery LTD.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
