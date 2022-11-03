import { getImage, perPage} from "./api/fn";
import { markupImageList, galleryRef } from './markup/markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.js-search-form');
const btnMore = document.querySelector('.load-more');

console.log(btnMore);
let page = 1;
let value = "";

 
const onSubmit = async (e) => {
//    btnMore.classList.remove('.load-more.is-hidden');
    e.preventDefault();
    
    value = e.target.searchQuery.value.trim();
    e.target.searchQuery.value = '';
    if (!value) return;
    page = 1;

    try {
        const data = await getImage(value, page); 
        console.log(data); 
        if (data.hits.length === 0) {
            Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
            return;
        }
        btnMore.classList.remove('is-hidden');
        galleryRef.innerHTML = "";
        markupImageList(data.hits);
        
     }
    catch (error) {
        Notify.warning('Mistake');
    }

    
}

const onLoadMore = async e => {
    
    page +=1
    const { hits, totalHits } = await getImage(value, page) 
    markupImageList(hits);
    if ((page + 1) * perPage > totalHits) {
        Notify.info("We're sorry, but you've reached the end of search results.");
        btnMore.classList.add('is-hidden');
    }
};

formRef.addEventListener('submit', onSubmit);
btnMore.addEventListener('click', onLoadMore)
