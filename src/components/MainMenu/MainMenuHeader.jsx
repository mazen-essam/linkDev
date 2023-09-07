import logo from "../../assets/images/MicrosoftTeams-image.png";

export default function MainMenuHeader({ active, setActive }) {
   return (
      <nav className="mt-3 row justify-content-between align-items-center">
         <div className="col-lg-2 col-sm-12 align-self-center text-center img_container">
            <div className="img">
               <img src={logo} alt="link-development-logo" />
            </div>
            <button
               className="menu_btn_776"
               onClick={() => {
                  setActive(true);
               }}
            >
               <div className="img align-self-start">
                  <span
                     className="icon-close"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseWidthExample"
                     aria-expanded="false"
                     aria-controls="collapseWidthExample"
                  ></span>
               </div>
            </button>
            <span className="me-3 text-center icon-search align-self-end"></span>
         </div>
         <div className="sign col-lg-4 col-sm-5 text-end">
            <span className="me-3 text-center icon-search align-self-end"></span>
            <select name="" id="" className="me-2 align-self-end">
               <option value="en">EN</option>
               <option value="ar">AR</option>
            </select>

            <button className="btn btn-meun-sign-in p-0 me-3 pe-3 ps-3 sign-menu">
               <a href="#" className="sign_in align-self-start" title="sign in">
                  sign in
               </a>
            </button>
         </div>
      </nav>
   );
}
