import MainMenuFooter from './MainMenuFooter';
import MainMenuHeader from './MainMenuHeader';
import MainMenuList from './MainMenuList';
export default function MainMenu({ active, setActive }) {
   let over = document.getElementsByTagName("body")[0];
   if (active == false) {
      over.style["overflow"] = "Hidden";
   } else if (active == true) {
      over.style["overflow"] = "visible";
   }
   return (
      <div id="MainManu_cont">
         <main
            className="collapse collapse-horizontal"
            id="collapseWidthExample"
         >
            <section className="menu-main">
               <div className="container pt-4 d-flex justify-content-between align-content-between flex-column">
                  <MainMenuHeader active={active} setActive={setActive} />
                  <MainMenuList />
                  <MainMenuFooter />
               </div>
            </section>
            <button
               className="close p-2 py-1"
               id="close_menu"
               data-bs-toggle="collapse"
               data-bs-target="#collapseWidthExample"
               aria-expanded="false"
               aria-controls="collapseWidthExample"
               onClick={() => {
                  setActive(true);
               }}
            >
               <a href="">
                  <div className="img align-self-start">
                     <span className="icon-close"></span>
                  </div>
                  <p className="mb-0 text-white">close</p>
               </a>
            </button>
         </main>
         <p>
            {active ? (
               <button
                  className="btn p-1 open_menu"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                  onClick={() => {
                     setActive(false);
                  }}
               >
                  <span className="icon-menu"></span>
                  <br />
                  open
               </button>
            ) : (
               <button
                  className="hide_open_menu"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
               >
                  <span className="icon-menu"></span>
                  <br />
                  open
               </button>
            )}
         </p>
         <p>
            {active ? (
               <button
                  className="open_menu_responsive"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                  onClick={() => {
                     setActive(false);
                  }}
               >
                  <span className="icon-menu"></span>
               </button>
            ) : (
               <button
                  className="hide_open_menu"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
               >
                  <span className="icon-menu"></span>
               </button>
            )}
         </p>
      </div>
   );
}
