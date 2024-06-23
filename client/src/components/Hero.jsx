const Hero = () => {
  return (
    <>
      <div className="relative bg-yellow-50">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-0 lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                Enjoy Your Favorite Meals at No Cost - Let&apos;s End Student
                Hunger Together!
              </h1>
              <form action="" className="w-full mt-12">
                <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                  <select
                    className="hidden p-3 rounded-full bg-transparent md:block md:p-4"
                    name="domain"
                    id="domain"
                  >
                    <option value="development">Restaurant</option>
                  </select>
                  <input
                    placeholder="Search Restaurants near you!"
                    className="w-full p-4 rounded-full"
                    type="text"
                  />
                  <button
                    type="button"
                    title="Start buying"
                    className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                  >
                    <span className="hidden text-yellow-900 font-semibold md:block">
                      Search
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 mx-auto text-yellow-900 md:hidden"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </form>
              <p className="mt-8 text-gray-700 lg:w-10/12">
                Our project is dedicated to ending student food insecurity by
                providing students with access to nutritious and delicious meals
                at no cost. We partner with local food vendors and leverage
                community resources to ensure that every student can enjoy their
                favorite dishes without the burden of cost. By addressing the
                critical issue of student hunger, we aim to create a healthier,
                more focused, and successful student community. Join us in our
                mission to make sure no student has to study on an empty
                stomach.
              </p>
            </div>
            <div className="ml-auto -mb-15  lg:w-6/12">
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1818] p-6 h-36">
        <div className="flex flex-col md:flex-row justify-around items-center text-white space-y-6 md:space-y-0">
          <div className="flex flex-row items-center space-x-2 p-2">
            <span className="text-4xl font-bold">15+</span>
            <span className="text-lg">Registered Restaurants</span>
          </div>
          <div className="flex flex-row items-center space-x-2 border-x p-2">
            <span className="text-4xl font-bold">1000+</span>
            <span className="text-lg">Donors</span>
          </div>
          <div className="flex flex-row items-center space-x-2 p-2">
            <span className="text-4xl font-bold">499+</span>
            <span className="text-lg">Students registered</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
