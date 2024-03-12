function Hero() {
  return (
    <div className='text-off-white'>
      <div className='flex flex-col items-center md:mt-16 lg:mt-10 xl:mt-6'>
        <h1 className='md:text-7xl lg:text-8xl xl:text-9xl'>amelie</h1>
        <p
          className='md:text-xl lg:text-2xl xl:text-3xl'
          style={{
            fontFamily: 'Nohemi',
            fontWeight: '400',
            marginLeft: '22rem',
          }}
        >
          your favourite cakery
        </p>
      </div>
      <article
        className='absolute right-0 md:mt-60 lg:mt-56 xl:mt-52 2xl:mt-52 2xl:mt-60 md:mr-6 lg:mr-14 xl:mr-24 2xl:mr-40 md:text-sm lg:text-lg xl:text-xl'
        style={{
          width: '28.7%',
          fontFamily: 'Nohemi',
          fontWeight: '200',
        }}
      >
        <p className='md:mb-8 lg:mb-6 xl:mb-14'>
          Step into a world where every bite is a celebration of flavor and
          craftsmanship. Our artisanal cakes are lovingly handcrafted, blending
          the finest ingredients with creative flair.
        </p>
        <p className='md:ml-14 lg:ml-14 xl:ml-16'>
          Dive into our irresistible selection of cupcakes, cookies, and
          pastries, each baked to perfection and adorned with exquisite
          decorations that are almost too beautiful to eat (but too delicious to
          resist!).
        </p>
      </article>
    </div>
  );
}

export default Hero;
