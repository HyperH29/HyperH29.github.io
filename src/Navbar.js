const Navbar = () => {
  return (
    <div class="navbar bg-info">
      <div class="flex-1">
        <img
          width={300}
          src={require("./images/fullRes_mactech.png")}
          alt="PC Repair"
        />
        {/* <a class="btn btn-ghost normal-case text-xl text-white">Macteca</a> */}
      </div>

      
      <div class="flex-none gap-5 pt-3">
        <button class="hidden sm:hidden lg:block btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Services</button>
        <button class="hidden sm:hidden lg:block btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Reviews</button>
        <button class="hidden sm:hidden lg:block btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Contact</button>
          
      
          {/* We Want these to only appera in mid and sml view */}
        <button class="visible lg:hidden btn btn-square bg-accent-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-10 h-100 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
