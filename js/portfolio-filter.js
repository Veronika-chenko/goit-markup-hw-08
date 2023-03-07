(() => {
    const refs = {
        btnList: [...document.querySelectorAll('.works-button')],
        workItems: [...document.querySelectorAll('.works-item')],
    };

    let currentBtn = document.querySelector('.works-button.current')
    
    for (const btn of refs.btnList) {
        const btnType = btn.dataset.type;
    
        btn.addEventListener('click', () => {
            if(currentBtn === btn) return;

            currentBtn.classList.remove('current');
            currentBtn = btn;
            currentBtn.classList.add('current');

            if(btnType === 'all') {
                for(const item of refs.workItems) {
                    item.classList.remove('is-hidden');
                };
                return;
            }

            for(const item of refs.workItems) {
                const intemType = item.classList.contains(btnType);

                if(intemType) {
                    item.classList.remove('is-hidden');
                } else {
                    item.classList.add('is-hidden');
                };
            };
        });
    };
})();


