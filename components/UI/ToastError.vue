<template>
  <div class="toast-error">
    <figure>
      <img src="@/assets/svg/error_toast.svg" alt="" />
    </figure>
    <div class="main">
      <div class="text">
        <h3>Ошибка отправки</h3>
        <p>Проверьте интернет-соединение</p>
      </div>
      <div class="re-submit">
        <button>Попробовать снова</button>
      </div>
    </div>
    <figure>
      <img src="@/assets/svg/close_toast.svg" alt="" @click="handleClose" />
    </figure>
  </div>
</template>

<script lang="ts" setup>
const isToastError = useCookie<boolean>("toast_error");

function handleClose() {
  isToastError.value = false;
}
</script>

<style lang="scss" scoped>
.toast-error {
  background: linear-gradient(95.46deg, #f6743e -6.96%, #d42525 108.25%);
  border-radius: 12px;
  border: 1px solid #f0863a;
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  justify-content: space-between;
  position: relative;
  @media (max-width: 430px) {
    padding: 0.5rem;
  }
  .main {
    display: flex;
    gap: 1rem;
    @media (max-width: 430px) {
      flex-direction: column;
      align-items: center;
    }
    .text {
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: #fff;
      h3 {
        font-weight: 600;
        @media (max-width: 430px) {
          text-align: center;
        }
      }
      p {
        font-size: 14px;
      }
    }

    .re-submit {
      display: flex;
      align-items: center;
      button {
        height: 3rem;
        width: fit-content;
        padding: 0 0.75rem;
        border: 1px solid #ffffff99;
        border-radius: 6px;
        color: #fff;
        background: #00000026;
      }
    }
  }
}
</style>
