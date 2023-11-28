import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto sticky top-0 z-10">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/prices">Pricing</a>
              </li>
              <li>
                <a href="/contactus">Contact</a>
              </li>

              {/* dropdown start */}
              <li className="dropdown dropdown-hover">
                <a href="/">Services</a>
                <ul className="dropdown-content z-[1] menu  shadow bg-base-100  w-60">
                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">Back ground removal service</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-80">
                      <li>
                        <a href="/clippingpath">
                          Clipping path on white background
                        </a>
                      </li>
                      <li>
                        <a href="/">Clipping path on transparent background</a>
                      </li>
                      <li>
                        <a href="/">multi clipping path services</a>
                      </li>
                      <li>
                        <a href="/">Clipping path with shadow</a>
                      </li>
                      <li>
                        <a href="/">Clipping path with reflection shadow</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">Image masking services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">Layer masking</a>
                      </li>
                      <li>
                        <a href="/">Alpha Channel masking</a>
                      </li>
                      <li>
                        <a href="/">Transparent product masking</a>
                      </li>
                      <li>
                        <a href="/">Translucent masking</a>
                      </li>
                      <li>
                        <a href="/">fur and hair masking</a>
                      </li>
                      <li>
                        <a href="/">fur and hair masking</a>
                      </li>
                      <li>
                        <a href="/">Refined edge masking</a>
                      </li>
                      <li>
                        <a href="/">Color masking</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">Photoshop shadow services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">retained origianl shadow</a>
                      </li>
                      <li>
                        <a href="/">product/natural shadow</a>
                      </li>
                      <li>
                        <a href="/">reflection shadow</a>
                      </li>
                      <li>
                        <a href="/">Drop shadow </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">Ghost mannequin services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">Simple Ghost mannequin/neckjoint</a>
                      </li>
                      <li>
                        <a href="/">Ghost mannequin with wrinkle removal</a>
                      </li>
                      <li>
                        <a href="/">Neck joint and sleeve joint </a>
                      </li>
                      <li>
                        <a href="/">Bottom Joint</a>
                      </li>
                      <li>
                        <a href="/">Bottom Joint</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">Color variants services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">simple change color or color correction</a>
                      </li>
                      <li>
                        <a href="/">complex color change or color correction</a>
                      </li>
                      <li>
                        <a href="/">pattern replacement</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">image retouching services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">Product photo retouching</a>
                      </li>
                      <li>
                        <a href="/">jwelary photo retouching</a>
                      </li>
                      <li>
                        <a href="/">Object removal </a>
                      </li>
                      <li>
                        <a href="/">model photo retouching</a>
                      </li>
                      <li>
                        <a href="/">Glamour retouching</a>
                      </li>
                      <li>
                        <a href="/">Unwanted object removing</a>
                      </li>
                      <li>
                        <a href="/">wedding photo retouching</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">Real state photo editing services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">
                          HDR blending with color and exposure correction
                        </a>
                      </li>
                      <li>
                        <a href="/">environment changing day to dusk</a>
                      </li>
                      <li>
                        <a href="/">TV or window replacement</a>
                      </li>
                      <li>
                        <a href="/">Unwanted object removal </a>
                      </li>
                      <li>
                        <a href="/">sky replacement or sky adding</a>
                      </li>
                      <li>
                        <a href="/">Lawn rerouching</a>
                      </li>
                      <li>
                        <a href="/">Dust and gurbage removal</a>
                      </li>
                      <li>
                        <a href="/">lens distoration removal</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">vector conversion services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">Raster to vector conversion</a>
                      </li>
                      <li>
                        <a href="/">Logo design</a>
                      </li>
                      <li>
                        <a href="/">Vector Line Drawing</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown hoverme dropdown-right">
                    <a href="/">Create image editing services</a>
                    <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                      <li>
                        <a href="/">Image Blending</a>
                      </li>
                      <li>
                        <a href="/">Image composition</a>
                      </li>
                      <li>
                        <a href="/">Image morphing</a>
                      </li>
                      <li>
                        <a href="/">Photo college service</a>
                      </li>
                      <li>
                        <a href="/">Restoration or old photo retouching</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* dropdown end */}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Expert Design International
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl ">
            <li>
              <a href="/">Home</a>
            </li>

            {/* dropdown start */}
            <li className="dropdown dropdown-hover">
              <a href="/">Services</a>
              <ul className="dropdown-content z-[1] menu  shadow bg-base-100  w-60">
                <li className="dropdown hoverme dropdown-right">
                  <a href="/">Back ground removal service</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-80">
                    <li>
                      <a href="/clippingpath">
                        Clipping path on white background
                      </a>
                    </li>
                    <li>
                      <a href="/">Clipping path on transparent background</a>
                    </li>
                    <li>
                      <a href="/">multi clipping path services</a>
                    </li>
                    <li>
                      <a href="/">Clipping path with shadow</a>
                    </li>
                    <li>
                      <a href="/">Clipping path with reflection shadow</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown hoverme dropdown-right">
                  <a href="/">Image masking services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">Layer masking</a>
                    </li>
                    <li>
                      <a href="/">Alpha Channel masking</a>
                    </li>
                    <li>
                      <a href="/">Transparent product masking</a>
                    </li>
                    <li>
                      <a href="/">Translucent masking</a>
                    </li>
                    <li>
                      <a href="/">fur and hair masking</a>
                    </li>
                    <li>
                      <a href="/">fur and hair masking</a>
                    </li>
                    <li>
                      <a href="/">Refined edge masking</a>
                    </li>
                    <li>
                      <a href="/">Color masking</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown hoverme dropdown-right">
                  <a href="/">Photoshop shadow services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">retained origianl shadow</a>
                    </li>
                    <li>
                      <a href="/">product/natural shadow</a>
                    </li>
                    <li>
                      <a href="/">reflection shadow</a>
                    </li>
                    <li>
                      <a href="/">Drop shadow </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown hoverme dropdown-right">
                  <a href="/">Ghost mannequin services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">Simple Ghost mannequin/neckjoint</a>
                    </li>
                    <li>
                      <a href="/">Ghost mannequin with wrinkle removal</a>
                    </li>
                    <li>
                      <a href="/">Neck joint and sleeve joint </a>
                    </li>
                    <li>
                      <a href="/">Bottom Joint</a>
                    </li>
                    <li>
                      <a href="/">Bottom Joint</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown hoverme dropdown-right">
                  <a href="/">Color variants services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">simple change color or color correction</a>
                    </li>
                    <li>
                      <a href="/">complex color change or color correction</a>
                    </li>
                    <li>
                      <a href="/">pattern replacement</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown hoverme dropdown-right">
                  <a href="/">image retouching services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">Product photo retouching</a>
                    </li>
                    <li>
                      <a href="/">jwelary photo retouching</a>
                    </li>
                    <li>
                      <a href="/">Object removal </a>
                    </li>
                    <li>
                      <a href="/">model photo retouching</a>
                    </li>
                    <li>
                      <a href="/">Glamour retouching</a>
                    </li>
                    <li>
                      <a href="/">Unwanted object removing</a>
                    </li>
                    <li>
                      <a href="/">wedding photo retouching</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown hoverme dropdown-right">
                  <a href="/">Real state photo editing services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">
                        HDR blending with color and exposure correction
                      </a>
                    </li>
                    <li>
                      <a href="/">environment changing day to dusk</a>
                    </li>
                    <li>
                      <a href="/">TV or window replacement</a>
                    </li>
                    <li>
                      <a href="/">Unwanted object removal </a>
                    </li>
                    <li>
                      <a href="/">sky replacement or sky adding</a>
                    </li>
                    <li>
                      <a href="/">Lawn rerouching</a>
                    </li>
                    <li>
                      <a href="/">Dust and gurbage removal</a>
                    </li>
                    <li>
                      <a href="/">lens distoration removal</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown hoverme dropdown-right">
                  <a href="/">vector conversion services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">Raster to vector conversion</a>
                    </li>
                    <li>
                      <a href="/">Logo design</a>
                    </li>
                    <li>
                      <a href="/">Vector Line Drawing</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown hoverme dropdown-right">
                  <a href="/">Create image editing services</a>
                  <ul className="hidden display dropdown-content z-[1] ml-1 shadow bg-base-100  w-60">
                    <li>
                      <a href="/">Image Blending</a>
                    </li>
                    <li>
                      <a href="/">Image composition</a>
                    </li>
                    <li>
                      <a href="/">Image morphing</a>
                    </li>
                    <li>
                      <a href="/">Photo college service</a>
                    </li>
                    <li>
                      <a href="/">Restoration or old photo retouching</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* dropdown end  */}

            <li>
              <a href="/prices">Pricing</a>
            </li>
            <li>
              <a href="/contactus">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {/* <button className="btn btn-success">image upload</button> */}
          <button className="btn btn-outline btn-primary">
            Get free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
