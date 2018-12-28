<template>
  <v-speed-dial
    ref="speedDial"
    v-model="buttonFab"
  >
    <v-btn
      class="confirm-delete-activator"
      icon
      slot="activator"
      fab
      v-model="buttonFab"
      @click.stop.prevent="buttonFab = !buttonFab"
      @keydown.up="activatorButtonHandleKeys"
    >
      <v-icon color="red">delete</v-icon>
      <v-icon color="red">close</v-icon>
    </v-btn>
    <v-btn
      fab
      small
      ref="confirm_btn"
      @click.stop.prevent="destroy"
    >
      <v-icon color="green">done</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: 'ConfirmDestroy',
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  methods: {
    destroy() {
      this.$emit('delete');
      this.buttonFab = false;
    },
    activatorButtonHandleKeys() {
      this.$refs.confirm_btn.$el.focus();
    },
    isSameElement(target) {
      return target !== this.$el && !this.$el.contains(target);
    },
    handleClickOutside(event) {
      if (this.isSameElement(event.target)) {
        this.buttonFab = false;
      }
    },
  },
  data: () => ({
    buttonFab: false,
  }),
};
</script>
