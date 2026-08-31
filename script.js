/* ==========================================================
   COREFACT GT
   MAIN JAVASCRIPT
========================================================== */


/* ==========================================================
   PAGE LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("pageLoader");

    setTimeout(() => {

        loader.classList.add("hidden");

        document.body.classList.add(
            "page-loaded"
        );

    }, 500);

});



/* ==========================================================
   HEADER SCROLL EFFECT
========================================================== */

const header =
    document.getElementById("siteHeader");


function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();



/* ==========================================================
   MOBILE NAVIGATION
========================================================== */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileNavigation =
    document.getElementById(
        "mobileNavigation"
    );


function toggleMobileMenu() {

    const isOpen =
        mobileNavigation.classList.contains(
            "active"
        );


    if (isOpen) {

        mobileNavigation.classList.remove(
            "active"
        );

        mobileMenuButton.classList.remove(
            "active"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    } else {

        mobileNavigation.classList.add(
            "active"
        );

        mobileMenuButton.classList.add(
            "active"
        );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "menu-open"
        );

    }

}


mobileMenuButton.addEventListener(
    "click",
    toggleMobileMenu
);



/* ==========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================== */

const mobileLinks =
    mobileNavigation.querySelectorAll(
        "a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            mobileNavigation.classList.remove(
                "active"
            );

            mobileMenuButton.classList.remove(
                "active"
            );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }
    );

});



/* ==========================================================
   ESC KEY CLOSE MENU
========================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            mobileNavigation.classList.contains(
                "active"
            )
        ) {

            mobileNavigation.classList.remove(
                "active"
            );

            mobileMenuButton.classList.remove(
                "active"
            );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);



/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);



/* ==========================================================
   GENERAL SECTION REVEAL
========================================================== */

const animatedElements =
    document.querySelectorAll(
        ".solution-card, " +
        ".framework-step, " +
        ".industry-item, " +
        ".insight-card, " +
        ".insight-small, " +
        ".about-content"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        sectionObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.08
        }
    );


animatedElements.forEach(
    (element) => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, " +
            "transform 0.7s " +
            "cubic-bezier(0.22, 1, 0.36, 1)";

        sectionObserver.observe(
            element
        );

    }
);



/* ==========================================================
   INDUSTRY HOVER INTERACTION
========================================================== */

const industryItems =
    document.querySelectorAll(
        ".industry-item"
    );


industryItems.forEach(
    (item) => {

        item.addEventListener(
            "mouseenter",
            () => {

                item
                    .querySelector(
                        ".industry-arrow"
                    )
                    ?.classList.add(
                        "hovered"
                    );

            }
        );


        item.addEventListener(
            "mouseleave",
            () => {

                item
                    .querySelector(
                        ".industry-arrow"
                    )
                    ?.classList.remove(
                        "hovered"
                    );

            }
        );

    }
);



/* ==========================================================
   SMOOTH ANCHOR SCROLLING
========================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    (link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerOffset = 80;

                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerOffset;


                window.scrollTo(
                    {
                        top:
                            targetPosition,

                        behavior:
                            "smooth"
                    }
                );

            }
        );

    }
);



/* ==========================================================
   PARALLAX HERO VISUAL
========================================================== */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!heroVisual) {

            return;

        }


        if (
            window.innerWidth < 851
        ) {

            return;

        }


        const scrollPosition =
            window.scrollY;


        if (
            scrollPosition > window.innerHeight
        ) {

            return;

        }


        heroVisual.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    },
    {
        passive: true
    }
);



/* ==========================================================
   FRAMEWORK STEP INTERACTION
========================================================== */

const frameworkSteps =
    document.querySelectorAll(
        ".framework-step"
    );


frameworkSteps.forEach(
    (step) => {

        step.addEventListener(
            "mouseenter",
            () => {

                frameworkSteps.forEach(
                    (otherStep) => {

                        otherStep.classList.remove(
                            "active"
                        );

                    }
                );


                step.classList.add(
                    "active"
                );

            }
        );

    }
);



/* ==========================================================
   CURRENT YEAR
========================================================== */

const currentYear =
    new Date().getFullYear();


const footerYear =
    document.querySelector(
        ".footer-bottom span"
    );


if (footerYear) {

    footerYear.textContent =
        `© ${currentYear} COREFACT GT. All rights reserved.`;

}
