// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
                                

const leftOption = document.querySelector("#pricing-1387 #cs-option1-1387");
        const rightOption = document.querySelector("#pricing-1387 #cs-option2-1387");
        const toggle = document.querySelector("#pricing-1387 .cs-toggle");
        const cardGroup = Array.from(document.querySelectorAll('#pricing-1387 .cs-card-group'))
        // when you click the middle toggle
        toggle.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.toggle("cs-active");
            }
            toggle.classList.toggle("active");
        });       
        // when you click the left button option
        leftOption.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.remove("cs-active");
            }
            toggle.classList.remove("active");
        });    
        // when you click the right button option
        rightOption.addEventListener('click', (e) => { 
            for (const item of cardGroup) {
                item.classList.add("cs-active");
            }
            toggle.classList.add("active");
        });
                                