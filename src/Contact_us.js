import Message from "./Message";

const ContactUs = () => {
  return (
    <div className="grid xs:w-full lg:grid-cols-2 gap-x-20 xs:py-10 md:px-16 lg:px-2 lg:gap-5 md:grid-cols-1 gap-16">
      <Message />

      <div className="">
        <div className="flex rounded-t-xl border-darkblue justify-center overflow-auto touch-auto h-3/5 border-8">
          {/* Add a link */}
          <img
            className="object-none max-w-none max-h-none h-[250%] w-[150%] 2xl:h-[150%] 2xl:w-[150%]"
            src={require("./images/Google_maps_loc.png")}
            alt="Location"
          />
        </div>
        <div className="flex justify-items-center outline outline-offset-1 outline-blue-500 rounded-b-xl h-50 bg-base-300 2xl:flex 2xl:justify-items-end">
          <h1 className="text-center text-md text-white 2xl:pl-36 md:px-16 lg:px-1 self-center xl:text-sm py-12 font-bold tracking-normal">
            Visit us: 102B Streatham High Road SW16 1BW
            <p>Tel: 0203 302 88 78 / 07951 519 855</p>
          </h1>
          <button
            type="submit"
            className="btn-md hover:bg-white my-20 mx-10 m-6 btn-info ml-24 font-bold rounded-md"
          >
            Get Directions
          </button>
        </div>
      </div>
      {/* Don't Touch the div below */}
    </div>
  );
};
export default ContactUs;
