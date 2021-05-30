<template>
  <transition name="modal-for-tryal" appear>
    <div class="modal__overlay" @click.self="closeModal">
      <v-card class="modal__window">
        <div class="modal__content">
          <slot />
        </div>
      </v-card>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
}
</script>
<style lang="scss" scoped>
.modal {
  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  &__window {
    height: 600px;
    width: 400px;
    overflow: hidden;
    background-color: white;
  }

  &__content {
    height: 100%;
    padding: 30px;
  }
}
</style>
