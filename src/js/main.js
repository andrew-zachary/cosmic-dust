import alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

const init = () => {

    // alpine contexts
    alpine.data('navmenu', () => ({
        'open': false
    }));
    alpine.data('searchingCategories', () => ({
        
        filterCategories(e) {

            const catsElements = Array.from(this.$refs.cats.querySelectorAll('li'));

            for (const ele of catsElements) {
                if (ele.textContent.includes(e.target.value)) ele.classList.remove('exclude');
                else ele.classList.add('exclude');
            }

        }

    }));

    alpine.plugin(collapse);

    alpine.start();
};

export default init;