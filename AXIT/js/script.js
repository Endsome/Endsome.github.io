window.onload = () => {
    let tabs = document.getElementsByClassName('tab')
    let info = document.getElementsByClassName('tabs__gallery')

    document.addEventListener('click', (e) => {
        let el = e.target;
        let isTab = el.classList.contains('tab');

        if (isTab) {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active')
                info[i].classList.remove('active')

                if (el.classList.contains('tab' + (i + 1))) {
                    tabs[i].classList.add('active')
                    info[i].classList.add('active')
                }
            }
        }
    })
}