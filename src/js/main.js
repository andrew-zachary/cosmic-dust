import alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';

const init = () => {

    // navmenu alpinejs context
    alpine.data('navmenu', () => ({
        'open': false
    }));

    // searchingCategories alpinejs context
    alpine.data('searchingCategories', () => ({

        init() {

            const catsElements = Array.from(this.$refs.cats.querySelectorAll('li'));

            catsElements.forEach( item => {

                if(this.$refs.cats.dataset.selectedCat === item.getAttribute('data-slug')) {
                    item.classList.add('active-link');
                }
        
            });

        },
        
        filterCategories(e) {

            const catsElements = Array.from(this.$refs.cats.querySelectorAll('li'));

            for (const ele of catsElements) {
                if (ele.textContent.includes(e.target.value)) ele.classList.remove('exclude');
                else ele.classList.add('exclude');
            }

        }

    }));

    alpine.plugin(focus);
    alpine.plugin(collapse);

    alpine.start();
};

export default init;