import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const Card = () => {
  return (
    // Group Size
    <div class="grid justify-items-center mx-auto xs:mx-10 md:mx-32 py-24 sm:grid-cols-1 md:grid-cols-1 md:break lg:grid-cols-2 2xl:grid-cols-3 gap-20">
      {/* Card--1 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("screwdriver")}
            style={{ fontSize: "80px" , color: "black"}}
          />
        </figure>
        <div class="card-body items-center  text-center">
          <h2 class="card-title font-bold text-base-300">Screen Repair</h2>
          <p className="font-normal text-base-300">
            We repair can repair phone screens in under 30 minutes.
          </p>
        </div>
      </div>
      {/* Card--2 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("desktop")}
            style={{ fontSize: "80px", color: "black" }}
          />
        </figure>
        <div class="card-body items-center m-2 text-center">
          <h2 class="card-title font-bold text-base-300">Apple Mac</h2>
          <p className="font-normal text-base-300">
            Full range of professional repair & upgrade services for all Apple
            Mac models including: MacBook Air, MacBook, MacBook Pro and iMac.
          </p>
        </div>
      </div>
      {/* Card--3 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("laptop")}
            style={{ fontSize: "80px", color: "black" }}
          />
        </figure>
        <div class="card-body items-center text-center m-2">
          <h2 class="card-title font-bold text-base-300">Laptop & Desktop</h2>
          <p className="font-normal text-base-300">
            Whether your laptop or desktop has dropped or liquid damage we can
            fix it.
          </p>
        </div>
      </div>
      {/* Card--4 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("hard-drive")}
            style={{ fontSize: "80px", color: "black" }}
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-base-300">Disaster Recovery</h2>
          <p className="font-normal m-2 text-base-300">
            Data recovery, data migration, liquid damage repair. Visit us or
            call and we will advise you.
          </p>
        </div>
      </div>
      {/* Card--5 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("screwdriver-wrench")}
            style={{ fontSize: "80px", color: "black"}}
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-base-300">Custom Builds</h2>
          <p className="font-normal m-2 text-base-300">
            If you need a server to be built, a network, install a printer, copy
            or backup some data or design something.
          </p>
        </div>
      </div>
      {/* Card--6 */}
      <div class="card w-96 bg-white shadow-xl">
        <figure class="px-10 pt-10">
          <FontAwesomeIcon
            icon={solid("cart-shopping")}
            style={{ fontSize: "80px", color: "black"}}
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title m-2 font-bold text-base-300">Buy & Sell</h2>
          <p className="font-normal text-base-300">
            We buy and sell phones, laptops, tablets and more.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
