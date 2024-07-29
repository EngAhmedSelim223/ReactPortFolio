import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="itmes bg-slate-900 z-50  fixed w-full py-5">
      <div className="container mx-auto sm:flex flex items-center justify-between">
        <div className="logo">
          <ul>
            <li>
              <Link
                to={"home"}
                className="text-white text-decoration-none ms-4"
              >
                START FRAMEWORK
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav">
          {/* <input className=' hidden'  type="checkbox" name="navIvon" id="navIcon" />
  <label className='text-white fs-3 md:hidden' htmlFor="nanIcon">
  <i className="fa-solid fa-bars"></i>
  </label> */}
          <div className="icons md:hidden  pr-6 cursor-pointer">
            {/* <i onClick={alert(55)} className="fa-solid fa-bars text-white fs-2"></i> */}
          </div>

          <ul className=" hidden md:flex items-center justify-center">
            <li>
              <Link
                to={"about"}
                className="text-white focus text-decoration-none  me-5"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to={"portfolio"}
                className="text-white focus text-decoration-none me-5"
              >
                PORTFOLIO
              </Link>
            </li>

            <li>
              <Link
                to={"contact"}
                className="text-white focus text-decoration-none me-5"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
