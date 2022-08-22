// Add reviews from google with star rating
const Carousel = () => {
  return (
    <div >

    <div className="sm:hidden lg:visible lg:block lg:carousel">
      <div
        id="slide1"
        class="carousel-center relative p-16 items-center bg-white "
      >
        <div className="card">
          <div class="md:space-x-0 text-center  bg-base-300 shadow-xl">
            <div class="overflow-hidden text-center relative max-w-5  h-56 rounded-lg sm:h-64 md:w-auto lg:w-auto xl:auto 2xl:h-auto ">
              <p className="pb-10 sm:text-sm lg:text-lg p-11 font-bold mx-96 ">
                Great customer service! Took my completely unresponsive Mac in
                on the Friday afternoon, got a phone call about 2 hours later
                with a diagnosis and a quote to repair it. Got the laptop back
                as good as new on the Saturday afternoon. Very reasonable prices
                as well. Would definitely recommend this repair service.
              </p>
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310"/>
                </div>
              </div>

              <h2 className="card-title align-middle justify-center p-2">
                Kevin Josling
              </h2>
            </div>

            <div class="rating flex items-center justify-center p-4">
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
                checked
              />
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Carousel;
