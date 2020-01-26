<template>
  <q-page padding>
    <div class="row q-pa-md q-gutter-md">
      <div class="col-12 row justify-center">
        <q-btn color="primary" @click="showTextLoading" :loading="visible">Show Text Loading</q-btn>
      </div>
      <div class="col-12 row justify-center">
        <q-card style="max-width: 300px" v-if="visible"></q-card>
        <q-card class="relative-position card-example">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            :duration="{ enter: 200, leave: 200 }"
            @after-leave="showSimulatedReturnData = true"
          >
            <q-card-section v-if="visible">
              <q-item>
                <q-item-section avatar>
                  <q-skeleton type="QAvatar"/>
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    <q-skeleton type="text"/>
                  </q-item-label>
                  <q-item-label caption>
                    <q-skeleton type="text"/>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-skeleton height="150px" square/>

              <q-card-actions align="right" class="q-gutter-md">
                <q-skeleton type="QBtn"/>
                <q-skeleton type="QBtn"/>
              </q-card-actions>
            </q-card-section>
          </transition>

          <!-- <q-card-section > -->
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            :duration="{ enter: 500, leave: 230 }"
            @after-leave="visible = true"
          >
            <!-- <q-card-section>
              
            </q-card-section>-->
            <q-card-section v-if="showSimulatedReturnData">
              <div class="text-h6" v-if="showSimulatedReturnData">Lorem Ipsum</div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent vel magna eu risus laoreet tristique. Nulla ut
              fermentum elit, nec consequat augue. Morbi et dolor nec metus
              tincidunt pellentesque. Nullam non semper ante. Fusce
              pellentesque sagittis felis quis porta. Aenean condimentum neque
              sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis
              dictum interdum eros.
            </q-card-section>
          </transition>
          <!-- </q-card-section> -->
          <!-- <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
          </q-inner-loading>-->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      showSimulatedReturnData: true
    }
  },
  methods: {
    showTextLoading() {
      this.showSimulatedReturnData = false
      setTimeout(() => {
        this.visible = false
      }, 3000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-example {
  width: 288px;
  height: 300px;
}
</style>
