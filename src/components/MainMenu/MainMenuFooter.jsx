import SocialLinks from "./SocialLinks";

export default function MainMenuFooter() {
   return (
      <section className="pt-4 mb-4 nav_footer">
         <div className="row justify-content-between">
            <div className="col-lg-5 col-sm-3 col-md-3 contact">
               <p>
                  <span>
                     <a target="_blank" title="contactUS" href="#">
                        Contact Us
                     </a>
                  </span>
                  <span>|</span>
                  <span>
                     <a target="_blank" title="privacy policy" href="#">
                        Privacy Policy
                     </a>
                  </span>
                  <span>|</span>
                  <span>
                     <a target="_blank" title="Terms and Conditions" href="#">
                        Terms and Conditions
                     </a>
                  </span>
               </p>
               <select name="" id="" className="me-2 align-self-end">
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
               </select>
            </div>
            <SocialLinks></SocialLinks>
         </div>
      </section>
   );
}
