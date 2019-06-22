<template>
  <div class="search-box-wrapper">
    <!-- 搜索框 -->
    <v-search-box></v-search-box>
  </div>
</template>

<script>
import searchBox from '../searchBox'
export default {
  components: {
    'v-search-box': searchBox
  }
}
</script>

<style>

</style>
