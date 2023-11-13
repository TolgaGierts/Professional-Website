//FAQ accordion 
const faqContainer = document.querySelector(".faq-content")

faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header')
    if(!groupHeader) return;
    console.log(groupHeader)
    const group = groupHeader.parentElement
    const groupBody = group.querySelector('.faq-group-body')
    const icon = groupHeader.querySelector('i')

    icon.classList.toggle('fa-plus')
    icon.classList.toggle('fa-minus')

    //Toggle body
    groupBody.classList.toggle('open')

    // Close other open FAQ
    const otherGroups = faqContainer.querySelectorAll('.faq-group')
    otherGroups.forEach(otherGroup => {
        if(otherGroup !== group) {
            const otherGroupBody = otherGroup.querySelector('.faq-group-body')
            const icon = otherGroup.querySelector('.faq-group-header i')

            otherGroupBody.classList.remove('open')
            icon.classList.remove('fa-minus')
            icon.classList.add('fa-plus')

        }
    });

})

//  mobile menu

const hamburgerButton = document.querySelector('.hamburger-btn')
const mobileMenu = document.querySelector('.mobile-menu')


hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))