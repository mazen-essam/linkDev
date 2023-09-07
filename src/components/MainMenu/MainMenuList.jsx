import { Outlet, Link, BrowserRouter, Routes } from "react-router-dom";

export default function MainMenuList() {
   let titles = [
      "Homepage",
      "Virtual Program",
      "Introduction",
      "About Us",
      "Announcements",
      "Terminology",
      "Video Library",
   ];
   return (
      <div className="links mb-4 align-self-streatch">
         <ul className="list ps-2">
            {titles.map((name) => (
               <li className="list-item">
                  <Link to={name} title={name}>
                     {name}
                  </Link>
               </li>
            ))}
            {/* <Outlet /> */}
         </ul>
      </div>
   );
}
