<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
            <div class="navbar-start">
                <a v-for="link in links" :key="link.title" class="navbar-item" @click="$router.push(link.url)">
                    {{link.title}}
                </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary" @click="goToSite()">
                    <strong>Made by Coforge</strong>
                </a>
                </div>
            </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    name:'Navbar',
    props:['links'],
    methods: {
        goToSite: () => window.open('https://www.coforge.com', '_blank')
    }
}   

</script>
<style scoped>
.navbar-menu {
    background-color: lightcyan;
}
a.navbar-item {
    text-transform:capitalize;
    background-color: lightblue;
    border-radius: 0.5rem;
    }
</style>
