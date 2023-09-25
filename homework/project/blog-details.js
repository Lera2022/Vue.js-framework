Vue.component('blog-details', {
    template: `
    <article>
    <h1>Let’s Get Solution for Building
    Construction Work</h1>
    <img src="img/main__blog-details.jpg" alt="kitchen">
    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.

    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
    <p>The details are not the details. 
They make the design.</p>
    </article>
    `
});

Vue.component('blogs-list', {
    template: `
        <section>
            <h3>Tags</h3>
            <ul>
                <li>Kitchen</li>
                <li>Bedroom</li>
                <li>Building</li>
                <li>Architecture</li>
                <li>Kitchen Planning</li>
                <li>Bedroom</li>
            </ul>
        </section>
    `,
});

Vue.component('blog', {
    template: `
    <article>
    <h2>Design sprints are great</h2>
    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    <img src="img/blog-details.jpg" alt="kitchen">
    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </article>
    `
});

const app = new Vue({
    el: '#app',
    data: {}
})