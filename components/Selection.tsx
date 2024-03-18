import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Selection() {
  const items = [
    {
      name: 'bento cakes',
      imageUrl: 'images/bento-cake.webp',
      link: '/bento-cakes',
    },
    {
      name: 'macaroons',
      imageUrl: 'images/macaroons.webp',
      link: '/macaroons',
    },
    { name: 'eclairs', imageUrl: 'images/eclairs.webp', link: '/eclairs' },
    { name: 'cupcakes', imageUrl: 'images/cupcakes.webp', link: '/cupcakes' },
  ];

  return (
    <div className='bg-off-white flex flex-col items-center py-14'>
      <h2 className='text-center text-5xl text-blue-gray mb-4 px-16 highlighted-heading'>
        our selection
      </h2>
      <div className='flex flex-row md:gap-6 lg:gap-8 xl:gap-16 2xl:gap-20 mx-5 text-pale-blue'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img
              src={item.imageUrl}
              className='md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72'
            />
            <a href={item.link} className='flex flex-row items-end gap-4'>
              {item.name}
              <FontAwesomeIcon
                icon={faArrowRight}
                className='w-5 h-5 text-pale-blue'
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Selection;
