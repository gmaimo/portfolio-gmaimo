//navbar toggle button and nav menu responsive actions
const toggleButton = document.getElementById('toggleButton');
const navbarLinks = document.getElementById('navbarLinks');
const menuBtn = document.querySelector('.menu-btn');

const itemMenu = document.querySelectorAll('.nav-link');

// alternate between show and hide menu when receiving an event
function toggleNav() {
    navbarLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
};

// hide or show nav menu on mobile when clicking the hamburger/cross menu btn
toggleButton.addEventListener('click', () => {
    toggleNav();
});

//hide nav menu on mobile when clicking on a link
itemMenu.forEach(item => {
    item.addEventListener('click', function () {
        toggleNav();
    })
});

//show flags
let flag = 0; // 0 = spain flag;   1 = english flag
const languages = document.querySelectorAll('.flag');
const spanish = document.querySelector('.spanish');
const english = document.querySelector('.english');

for (let i = 0; i < languages.length; i++) {
    languages[i].addEventListener('click', function () {
        if (flag === 0) {
            spanish.classList.remove('hidden');
            english.classList.add('hidden');
            flag = 1;
        } else if (flag === 1) {
            spanish.classList.add('hidden');
            english.classList.remove('hidden');
            flag = 0;
        }
    });
};

//change website theme
const checkbox = document.getElementById('checkbox');
const box = document.getElementById('main');
const btnTheme = document.querySelectorAll('.btn-clear');
const cardTheme = document.querySelectorAll('.card-clear');
const cardListTheme = document.querySelectorAll('.card-list-clear');
const inputTheme = document.querySelectorAll('.input-clear');
const formFocus = document.querySelectorAll('.form-clear');
const altTextTheme = document.querySelectorAll('.font-alt-clear');
const navTheme = document.querySelector('.nav-clear');
const navItemTheme = document.querySelectorAll('.item-clear');
const TitleTheme = document.querySelectorAll(".title-clear");
const modalBox = document.querySelectorAll(".modal-clear");
const cardBg = document.querySelectorAll(".portfolio-card-clear");
const modalWeb = document.querySelectorAll(".modal-btn-web-clear");
const modalCode = document.querySelectorAll(".modal-btn-code-clear");
const footTheme = document.querySelectorAll('.dl-clear');
const footLink = document.querySelectorAll(".foot-clear");

//to change bg and border of box on main section 
function toggleBackground() {
    if (box.classList.contains('box-clear')) {
        box.classList.add('box-dark');
        box.classList.remove('box-clear');
    } else if (box.classList.contains('box-dark')) {
        box.classList.add('box-clear');
        box.classList.remove('box-dark');
    }
};

//to change bg of navabar links on mobile nav screen
function toggleNavBarLinks() {
    if (navbarLinks.classList.contains('links-clear')) {
        navbarLinks.classList.add('links-dark');
        navbarLinks.classList.remove('links-clear');
    } else if (navbarLinks.classList.contains('links-dark')) {
        navbarLinks.classList.add('links-clear');
        navbarLinks.classList.remove('links-dark');
    }
};

//to change style of buttons
function toggleBtn() {
    btnTheme.forEach(btn => {
        if (btn.classList.contains('btn-clear')) {
            btn.classList.add('btn-dark');
            btn.classList.remove('btn-clear');
        } else if (btn.classList.contains('btn-dark')) {
            btn.classList.add('btn-clear');
            btn.classList.remove('btn-dark');
        }
    })
};

//to change bg of cards
function toggleCard() {
    cardTheme.forEach(card => {
        if (card.classList.contains('card-clear')) {
            card.classList.add('card-dark');
            card.classList.remove('card-clear');
        } else if (card.classList.contains('card-dark')) {
            card.classList.add('card-clear');
            card.classList.remove('card-dark');
        }
    })

    cardListTheme.forEach(card => {
        if (card.classList.contains('card-list-clear')) {
            card.classList.add('card-list-dark');
            card.classList.remove('card-list-clear');
        } else if (card.classList.contains('card-list-dark')) {
            card.classList.add('card-list-clear');
            card.classList.remove('card-list-dark');
        }
    })

    cardBg.forEach(card => {
        if (card.classList.contains('portfolio-card-clear')) {
            card.classList.add('portfolio-card-dark');
            card.classList.remove('portfolio-card-clear');
        } else if (card.classList.contains('portfolio-card-dark')) {
            card.classList.add('portfolio-card-clear');
            card.classList.remove('portfolio-card-dark');
        }
    })
};

//to change style of inputs
function toggleInput() {
    inputTheme.forEach(input => {
        if (input.classList.contains('input-clear')) {
            input.classList.add('input-dark');
            input.classList.remove('input-clear');
        } else if (input.classList.contains('input-dark')) {
            input.classList.add('input-clear');
            input.classList.remove('input-dark');
        }
    })

    formFocus.forEach(input => {
        if (input.classList.contains('form-clear')) {
            input.classList.add('form-dark');
            input.classList.remove('form-clear');
        } else if (input.classList.contains('form-dark')) {
            input.classList.add('form-clear');
            input.classList.remove('form-dark');
        }
    })
};

//to change highlited text color
function toggleAltText() {
    altTextTheme.forEach(item => {
        if (item.classList.contains('font-alt-clear')) {
            item.classList.add('font-alt-dark');
            item.classList.remove('font-alt-clear');
        } else if (item.classList.contains('font-alt-dark')) {
            item.classList.add('font-alt-clear');
            item.classList.remove('font-alt-dark');
        }
    })
};

//to change background color of nav
function toggleNavBar() {
    if (navTheme.classList.contains('nav-clear')) {
        navTheme.classList.add('nav-dark');
        navTheme.classList.remove('nav-clear');
    } else if (navTheme.classList.contains('nav-dark')) {
        navTheme.classList.add('nav-clear');
        navTheme.classList.remove('nav-dark');
    }
};

//to change color of list style pseudo element on navbar
function toggleNavItems() {
    navItemTheme.forEach(item => {
        if (item.classList.contains('item-clear')) {
            item.classList.add('item-dark');
            item.classList.remove('item-clear');
        } else if (item.classList.contains('item-dark')) {
            item.classList.add('item-clear');
            item.classList.remove('item-dark');
        }
    })
};

//to change color of decoration line on footer
function toggleFoot() {
    footTheme.forEach(dl => {
        if (dl.classList.contains('dl-clear')) {
            dl.classList.add('dl-dark');
            dl.classList.remove('dl-clear');
        } else if (dl.classList.contains('dl-dark')) {
            dl.classList.add('dl-clear');
            dl.classList.remove('dl-dark');
        }
    })

    footLink.forEach(link => {
        if (link.classList.contains('foot-clear')) {
            link.classList.add('foot-dark');
            link.classList.remove('foot-clear');
        } else if (link.classList.contains('foot-dark')) {
            link.classList.add('foot-clear');
            link.classList.remove('foot-dark');
        }
    })
};

//to change text color of title and h2
function toggleTitles() {
    TitleTheme.forEach(title => {
        if (title.classList.contains('title-clear')) {
            title.classList.add('title-dark');
            title.classList.remove('title-clear');
        } else if (title.classList.contains('title-dark')) {
            title.classList.add('title-clear');
            title.classList.remove('title-dark');
        }
    })
};

//to change styles of modals
function toggleModal() {
    modalBox.forEach(modal => {
        if (modal.classList.contains('modal-clear')) {
            modal.classList.add('modal-dark');
            modal.classList.remove('modal-clear');
        } else if (modal.classList.contains('modal-dark')) {
            modal.classList.add('modal-clear');
            modal.classList.remove('modal-dark');
        }
    })

    modalWeb.forEach(btn => {
        if (btn.classList.contains('modal-btn-web-clear')) {
            btn.classList.add('modal-btn-web-dark');
            btn.classList.remove('modal-btn-web-clear');
        } else if (btn.classList.contains('modal-btn-web-dark')) {
            btn.classList.add('modal-btn-web-clear');
            btn.classList.remove('modal-btn-web-dark');
        }
    })

    modalCode.forEach(btn => {
        if (btn.classList.contains('modal-btn-code-clear')) {
            btn.classList.add('modal-btn-code-dark');
            btn.classList.remove('modal-btn-code-clear');
        } else if (btn.classList.contains('modal-btn-code-dark')) {
            btn.classList.add('modal-btn-code-clear');
            btn.classList.remove('modal-btn-code-dark');
        }
    })
};

canvasSwitch = false;
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    toggleBackground();
    toggleBtn();
    toggleCard();
    toggleInput();
    toggleAltText();
    toggleNavBar();
    toggleNavItems();
    toggleFoot();
    toggleTitles();
    toggleModal();
    (canvasSwitch == true) ? (TagCanvas.textColour = '#9b5468', canvasSwitch = false) : (TagCanvas.textColour = '#0173F7', canvasSwitch = true);

    TagCanvas.Start('myCanvas');
});


//enable hidden navbar on scroll up
const nav = document.querySelector("#navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY <= window.scrollY) {
        nav.classList.add("nav--hidden");
    } else {
        nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});

//estilos canvas tag
window.onload = function () {
    // set colour of text and outline of active tag
    TagCanvas.textColour = '#9b5468';
    TagCanvas.outlineColour = 'transparent';
    TagCanvas.reverse = false;
    TagCanvas.wheelZoom = false;
    TagCanvas.depth = .8;
    TagCanvas.maxSpeed = .04;
    TagCanvas.weight = false;
    TagCanvas.initial = [-.2, .2];
    TagCanvas.noSelect = true;
    TagCanvas.textHeight = 90;
    TagCanvas.weightSize = 1;
    TagCanvas.textFont = 'Roboto'

    TagCanvas.Start('myCanvas');
};

//scroll on top on refresh
history.scrollRestoration = 'manual';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//open modal window
const modalBtns = document.querySelectorAll('[data-target]');
const closeModal = document.querySelectorAll('.modal-btn');
const overlay = document.querySelectorAll('.overlay');

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add("active");
    })
});

closeModal.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.remove("active");
    })
});