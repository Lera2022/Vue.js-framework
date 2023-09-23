Vue.component('some-component', {
    template: '<h1>Hi Component!</h1>'
});
// const app = new Vue({
//     el: '#app',
//     data: {}
// })

Vue.component('article-website', {
    template: `
    <h3>New article</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing
    elit. Nihil obcaecati repellat dolorum commodi aspernatur
    molestias esse cupiditate eius adipisci illo velit, dignissimos,
    optio ipsa nesciunt aliquid nemo nam minima id?</p>
    `
});

Vue.component('some', {
    template: `
    <div>
    <p></p>
    <p></p>
    </div>
    `,
});

Vue.component('article-website', {
    template: `
    <article>
    <h3>New article</h3>
    <p>Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Nihil obcaecati repellat dolorum commodi
    aspernatur molestias esse cupiditate eius adipisci illo velit,
    dignissimos, optio ipsa nesciunt aliquid nemo nam minima id?</p>
    </article>
    `
});

Vue.component('section-website', {
    template: `
    <section>
    <h2>New section</h2>
    <article-website></article-website>
    <article-website></article-website>
    </section>
    `,
});
Vue.component('article-website', {
    template: `
    <article>
    <h2>New article</h2>
    <p>Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Nihil obcaecati repellat dolorum commodi
    aspernatur molestias esse cupiditate eius adipisci illo velit,
    dignissimos, optio ipsa nesciunt aliquid nemo nam minima id?</p>
    </article>
    `
});

Vue.component('some-component', {
    template: '<h2><slot></slot></h2>'
});

Vue.component('some-component', {
    template: '<h2></h2>',
    data() {
        return {
            name: 'Frodo',
        };
    },
});

Vue.component('some-component', {
    template: '<h2>{{ name }}</h2>',
    data() {
        return {
            name: 'Frodo',
        };
    },
});

Vue.component('some-component', {
    template: '<h1>{{ name }}</h1>'
});

Vue.component('some-component', {
    props: ['name'],
    template: '<h2>{{ name }}</h2>',
});

const app = new Vue({
    el: '#app',
    data: {
        name: 'Frodo'
    }
})