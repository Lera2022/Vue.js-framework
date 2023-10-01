<template>
    <header class="header center">
        <a class="logo" href="index.html">
            <img src="img/Logo.svg" alt="Interno Logo">
            <h1 class="heading heading__logo">Interno</h1>
        </a>
        <nav>
            <ul class="nav__header">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="#">Project</a>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    padding-top: 61px;
    padding-bottom: 57px;
}

.logo {
    display: flex;
    gap: 10px;
}

.nav__header {
    display: flex;
    justify-content: space-between;
    width: 243px;
    font-size: 20px;
}
</style>
