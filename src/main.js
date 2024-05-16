        const darkSwitchIcon = document.querySelector("#dark-switch-icon");
        const darkSwitch = document.querySelector("#dark-switch")
        const darkText = document.querySelector("#dark-text")
        const darkChangeText = document.querySelector("#dark-text-change")
        const html = document.documentElement;
        let isDarkMode = false;

        // Switch theme function
        const toggleTheme = () => {
            isDarkMode = !isDarkMode;
            switchTheme()
        }

        const toDark = () => {
            darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
            darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
            // darkChangeText.innerText = 'Dark'
            darkSwitch.classList.remove('bg-slate-800')
            darkSwitch.classList.add('bg-slate-100')
            localStorage.setItem('data-theme', 'dark')
            html.classList.add('dark')
            darkText.classList.add('-translate-x-7')
            darkText.innerText = 'ON'
        }

        const toLight = () => {
            darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
            // darkChangeText.innerText = 'Light'
            darkSwitch.classList.remove('bg-slate-100')
            darkSwitch.classList.add('bg-slate-800')
            localStorage.removeItem('data-theme')
            html.classList.remove('dark')
            darkText.classList.remove('-translate-x-7')
            darkText.innerText = 'OFF'
            darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
            setTimeout(() => {
                darkSwitchIcon.classList.remove('rotate-[360deg]')
            }, 200)
        }

        const switchTheme = () => {
            isDarkMode ? toDark() : toLight()
            // or
            // if (isDarkMode) {
            //     toDark()
            // } else {
            //     toLight()
            // }
        }


        // If you do reload the webpage,
        // doesn't change you choose theme.
        // This `dataTheme` function save permentaly choose theme.

        const dataTheme = localStorage.getItem('data-theme')

        dataTheme === 'dark' ? toDark() : toLight();
        // or
        // if(dataTheme === 'dark') {
        //     toDark()
        // } else {
        //     toLight()
        // }

        // swiper js
        const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        autoplay: {
            delay: 5000,
          },
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        });

        // scroll reveal
        ScrollReveal().reveal('.headline', {
            delay: 300,
            origin: 'bottom',
            distance: '20px',
            interval: 300,
            scale: 0.85,
            reset: true
        });

