<template>
  <div v-if="isToastVisible" :class="['toast-success', { 'leave-active': isClosing }]" @animationend="handleAnimationEnd">
    <figure>
      <img src="@/assets/svg/success_toast.svg" alt="" />
    </figure>
    <div class="text">
      <h3>Заявка отправлена</h3>
      <p>Наш менеджер свяжется с вами в ближайшее время</p>
    </div>
    <figure>
      <img src="@/assets/svg/close_toast.svg" alt="" @click="handleClose" class="toast-success-close"/>
    </figure>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isToastVisible = ref(true);
const isClosing = ref(false);
const isToastSuccess = useCookie<boolean>("toast_success");

function handleClose() {
  isClosing.value = true;
}

let autoCloseTimer: number | undefined;

onMounted(() => {
  autoCloseTimer = window.setTimeout(() => {
    handleClose();
  }, 5000);
});

onBeforeUnmount(() => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer);
  }
});

function handleAnimationEnd() {
  if (isClosing.value) {
    isToastVisible.value = false;
    isToastSuccess.value = false;
  }
}
</script>

<style lang="scss" scoped>
.toast-success {
  background: linear-gradient(94.77deg, #32bb71 15.3%, #2a9d8f 113.45%);
  border-radius: 12px;
  border: 1px solid #43d590;
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  justify-content: space-between;
  position: relative;
  transform: translateX(100%);
  animation: slideInRight 0.5s forwards;
  @media (max-width: 430px) {
    padding: 0.5rem;
  }

  .text {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #fff;

    h3 {
      font-weight: 600;
    }

    p {
      font-size: 14px;
    }
  }

  &-close {
    cursor: pointer;
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &.leave-active {
    animation: slideOutRight 0.5s forwards;
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
}
</style>
