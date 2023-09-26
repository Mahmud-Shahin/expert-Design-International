import React from "react";

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
                <a href="/">Service</a>
                <ul className="p-2">
                  <li>
                    <a href="/">Back ground removal service</a>
                  </li>
                  <li>
                    <a href="/">Back ground removal service2</a>
                  </li>
                  <li>
                    <a href="/">Back ground removal service</a>
                  </li>
                  <li>
                    <a href="/">Back ground removal service2</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Expert Design International
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="dropdown dropdown-hover ">
              <label>Service</label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60"
              >
                <li className="dropdown dropdown-hover dropdown-right ">
                  <label> Back ground removal service</label>
                  <ul className=" ">
                    <li className="dropdown  dropdown-right ">
                      <a href="/">helolo</a>
                    </li>
                    <li>
                      <a href="/">Gello</a>
                    </li>{" "}
                    <li>
                      <a href="/">dello </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-hover dropdown-right ">
                  <label> Back ground removal service</label>
                  <ul className=" ">
                    <li className="dropdown  dropdown-right ">
                      <a href="/">helolo</a>
                    </li>
                    <li>
                      <a href="/">Gello</a>
                    </li>{" "}
                    <li>
                      <a href="/">dello </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Back ground removal service </a>
                </li>
                <li>
                  <a href="/">Back ground removal service</a>
                </li>
                <li>
                  <a href="/">Back ground removal service </a>
                </li>
                <li>
                  <a href="/">Back ground removal service</a>
                </li>
              </ul>
            </li>

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
