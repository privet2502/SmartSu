<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const modelValue = defineModel<boolean>();

const target = ref(null);

onClickOutside(target, (event) => {
  const clickedElement = event.target as HTMLElement;

  if (clickedElement.closest('input[type="radio"]')) {
    return;
  }

  modelValue.value = false;
});
</script>

<template>
  <div class="modal" :class="{ 'modal-show': modelValue }">
    <img src="@/assets/svg/close.svg" alt="close" class="close-modal" />
    <div class="modal__content" ref="target">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.26);
  z-index: -100;
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &-show {
    z-index: 100;
    opacity: 1;
  }

  &__content {
    position: relative;
    padding: 20px;
    border-radius: 8px;
  }

  .close-modal {
    position: absolute;
    top: 21%;
    right: 23%;
    cursor: pointer;
    width: 40px;
    height: 40px;
    @media (max-width: 2040px) {
      top: 16%;
      right: 13%;
    }
    @media (max-width: 1920px) {
      top: 10%;
      right: 2%;
    }
    @media (max-width: 1440px) {
      top: 16%;
      right: 1%;
    }
    @media (max-width: 935px) {
      top: 19%;
      right: 2%;
    }
    @media (max-width: 525px) {
      top: 10%;
      right: 2%;
    }
    @media (max-width: 525px) {
      top: 7%;
      right: 2%;
    }
    @media (max-width: 375px) {
      top: 6%;
      right: 2%;
    }
  }
}
</style>
