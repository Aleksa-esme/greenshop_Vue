const newsBlock = {
    props: ['newsBlock'],
    template: `
                <figure class="news_block">
                    <img :src="newsBlock.img" :alt="newsBlock.title">
                    <figcaption class="news_text">
                        <h6 class="news_heading">{{ newsBlock.title }}</h6>
                        <p class="news_p">{{ newsBlock.description }}</p>
                        <button class="button news_button">Find more
                            <svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.666672 4.81714C0.666672 4.56401 0.854774 4.35481 1.09882 4.3217L1.16667 4.31714L11.1667 4.31714C11.4428 4.31714 11.6667 4.541 11.6667 4.81714C11.6667 5.07027 11.4786 5.27947 11.2345 5.31257L11.1667 5.31714L1.16667 5.31714C0.890529 5.31714 0.666672 5.09328 0.666672 4.81714Z"/>
                                <path d="M6.78068 1.15514C6.585 0.960301 6.58431 0.64372 6.77915 0.448038C6.95628 0.270145 7.23402 0.253409 7.43008 0.398224L7.48626 0.446515L11.5196 4.46252C11.698 4.64017 11.7142 4.91891 11.5683 5.11496L11.5196 5.17111L7.48629 9.18778C7.29062 9.38264 6.97404 9.38198 6.77918 9.18632C6.60204 9.00844 6.58648 8.73063 6.73212 8.53519L6.78065 8.47921L10.458 4.81663L6.78068 1.15514Z"/>
                            </svg> 
                        </button>
                    </figcaption>
                </figure>        
    `
}

const news = {
    components: { newsBlock },
    data() {
        return {
            news: []
        }
    },
    mounted () {
        this.$parent.getJson(`/api/news`)
           .then(data => {
               for(let el of data){
                   this.$data.news.push(el);
               }
            });
    },
    template: `
                <section class="news">
                    <newsBlock
                        v-for="newsBlock in news" 
                        :key="newsBlock.id_news"
                        :newsBlock="newsBlock">
                    </newsBlock>
                </section>
    `

};

export default {
    news: news,
    newsBlock: newsBlock
}