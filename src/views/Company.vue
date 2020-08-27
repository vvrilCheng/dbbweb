<template>
    <div class="w-contaner">
        <Header></Header>
        <div>Company</div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        name: "Company",
        components: {Header}
    }
</script>

<style scoped>
    .w-contaner {
        width: 1110px;
        margin: 0 auto;
        text-align: center;
    }
</style>