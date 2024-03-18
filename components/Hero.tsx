function Hero() {
  return (
    <div className='text-off-white'>
      <div className='flex flex-col items-center md:mt-16 lg:mt-10 xl:mt-6'>
        <h1 className='md:text-7xl lg:text-8xl xl:text-8xl'>amelie</h1>
        <p className='md:text-xl lg:text-2xl xl:text-2xl font-normal ml-80'>
          your favourite cakery
        </p>
      </div>
      <article
        className='absolute right-0 md:mt-60 lg:mt-56 xl:mt-40 2xl:mt-52 2xl:mt-60 md:mr-6 lg:mr-14 xl:mr-36 2xl:mr-32 md:text-base lg:text-md xl:text-md font-extralight'
        style={{
          width: '26%',
        }}
      >
        <p>
          A world where every bite is a celebration of flavor and craftsmanship.
          Dive into our irresistible selection of cakes, macaroons, eclairs, and
          cupcakes, cookies, each baked to perfection and adorned with exquisite
          decorations that are almost too beautiful to eat.
        </p>
      </article>
    </div>
  );
}

export default Hero;
