<template>
  <div id="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'

export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
