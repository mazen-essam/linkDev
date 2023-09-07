import ConfirmationMessage from "../components/confirmationMessage/ConfirmationMessage";

/**
 * @author [Yousef Gilany]
 * This is a page that shows the confirmation message component. Mainly used for testing purposes.
 * @returns {JSX} - Confirmation page component.
 * @example <ConfirmationPage />
 */
function ConfirmationPage() {
    return (
      <div>
          {/* Please add your components here */}
                    
          <ConfirmationMessage type={"pageNotFound"} />
          
      </div>
    );
  }
  
  export default ConfirmationPage;
  