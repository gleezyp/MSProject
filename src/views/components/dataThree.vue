<template>
        <div class="three-left">
            <Map/>
        </div>
        <div class="three-right">
          <Rings/>
        </div>
</template>

<script setup lang="ts">
import Map from '../charts/map.vue';
import Rings from '../charts/rings.vue';

</script>

<style  scoped>
.three{
    display: flex;
}
.three-left{
    flex: 0 1 80%;
}
.three-right{
    flex: 0 1 20%;
}
</style>