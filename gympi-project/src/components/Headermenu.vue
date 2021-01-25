<template>

    <header>
        <h1 class="header-title">Ds.Creator</h1>
    </header>

</template>
<script>

export default {
  name:'Header',
    props: {
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header-title {
    width: 500px;
    text-align: center;
    color: #313131;
    letter-spacing: 3px;
    margin: 5px auto;
    padding: 0 20px 5px;
    font-weight: 400;
    font-size: 250%;
    border: 1px solid #313131;
    border-radius: 5px;
}

@media screen and (max-width:768px){
.header-title {
    width: 95vw;
    margin: 0 auto;
    text-align: center;
    color: #313131;
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 5vw;
    border: none;
    border-radius: 0!important;
    border-bottom: 3px double #313131!important;
}



}

</style>