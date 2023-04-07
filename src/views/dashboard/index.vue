<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      中科环光数据雷达平台欢迎您！
    </div>
    <div class="dashboard-map">
      <map-container />
    </div>
  </div>
</template>

<script>
import MapContainer from '@/components/MapContainer/MapContainer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: { MapContainer },
  computed: {
    ...mapGetters(['name']),
    components: {
      MapContainer
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  &-map {
    height: 1000px;
    width: 1600px;
  }
}
</style>
