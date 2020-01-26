<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 250px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-route-tab exact to="/challenges/mails" icon="mail" label="Mails"/>
          <q-route-tab exact to="/challenges/alarms" icon="alarm" label="Alarms"/>
          <q-route-tab exact to="/challenges/movies" icon="movie" label="Movies"/>
        </q-tabs>
      </template>

      <template v-slot:after>
        <router-view/>
      </template>
    </q-splitter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'mails',
      splitterModel: 20
    }
  }
}
</script>