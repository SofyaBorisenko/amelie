function Team() {
  return (
    <div
      className='flex flex-col items-center py-16'
      style={{
        height: '100vh',
        backgroundImage: `url('/images/team.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className='text-center text-5xl text-blue-gray mb-4 px-16 highlighted-heading'>
        meet the team
      </h2>
      <div className='container px-16 pt-12 flex flex-col lg:flex-row items-start justify-between text-off-white font-light lg:text-md'>
        <div className='w-full lg:w-1/4'>
          <div className='flex flex-col'>
            <p className='text-off-white mb-4'>
              Meet the Dynamic Duo of Decadence: Daniel and Holland, the
              masterminds behind the magic at Amelie. Trained in the prestigious
              artistry of patisserie in Switzerland, these talented cake chefs
              bring a fusion of tradition and innovation to every creation.
            </p>
            <p className='text-off-white'>
              Daniel's journey in the culinary world began with a passion for
              precision and a love for all things sweet. Her formal education in
              patisserie at a renowned Swiss institute honed his skills to
              perfection, mastering the delicate balance of flavor, texture, and
              presentation.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4'>
          <div className='text-right flex flex-col'>
            <p className='text-off-white mb-4'>
              Holland, on the other hand, discovered her flair for pastry at an
              early age, spending countless hours in her family's kitchen. Eager
              to refine her talent, she embarked on a culinary odyssey to
              Switzerland, where she immersed herself in the rich heritage of
              European baking techniques.
            </p>
            <p className='text-off-white'>
              Together, Daniel and Holland form a dynamic duo, blending their
              unique perspectives to push the boundaries of creativity and
              craftsmanship. With every cake they create, they strive to not
              only delight the palate but also spark joy in every guest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
