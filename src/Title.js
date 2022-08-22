const Title = () => {
  return (
    <section className="hero">
      <div
        class="hero min-h-max max-h-min w-full p-10 px-0 py-10 m-16 bg-base-100 "
        // style={{
        //   "background-image":
        //     'url("https://www.computerbeing.co.uk/wp-content/uploads/2021/04/PC-Laptop-Repair.jpg")'
        //      ,

        // }}
      >
        <img
          src="https://www.computerbeing.co.uk/wp-content/uploads/2021/04/PC-Laptop-Repair.jpg"
          class="opacity-100 w-full no bg-repeat-x"
          alt="Repair"
        />
        <div class="hero-overlay bg-opacity-90 rounded-xl h-80 sm:min-w-max md:w-3/5 lg:w-1/2 "></div>
        <div class="hero-content text-center text-neutral-content ">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold font-serif">Hello there!</h1>
            <p class="mb-6 font-san font-bold">
              Macteca is the go-to repair shop for all your Apple, PC, and
              Android devices. From screen replacements to water damage repairs,
              our skilled technicians will have your device back to you in no
              time.
            </p>
            <button class="btn btn-info">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Title;
