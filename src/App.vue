<template>
  <VuetifyLayout>
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
          Demoitem
        </v-list-tile-content>
        <v-list-tile-action>
          <ConfirmDestroy />
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </VuetifyLayout>
</template>

<script>
import VuetifyLayout from '@/VuetifyLayout.vue';

export default {
  name: 'app',
  components: { VuetifyLayout },
};
</script>
