// const { event } = require("jquery");

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App has been Started...");

        // Confirmation pop up for click on delete button 
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click',(event) => {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list'); // it's like redirecting
                }
            });
        }

    }

    
    window.addEventListener("load", Start);

})();