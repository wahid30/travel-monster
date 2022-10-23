import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // console.log(photoURL);
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost">
              <img
                className="rounded-full h-[40px] bg-white"
                src="logo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

          <div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li tabIndex={0}>
                  <a>
                    Blogs
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Domestic</a>
                    </li>
                    <li>
                      <a>International</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Destination</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>{user?.email}</p>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/login" className=" justify-between">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <button className="mt-2 btn btn-outline btn-success">
                    Google
                  </button>
                </li>
                <li>
                  <button className=" mt-2 btn btn-info text-black">
                    FaceBook
                  </button>
                </li>
                <li>
                  <button className="mt-2 btn btn-outline">GitHub</button>
                </li>
                <li>
                  <button className="btn mt-2">LogOut</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
