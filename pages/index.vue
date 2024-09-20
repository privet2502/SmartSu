<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import Feedback from "~/components/MainPage/Feedback.vue";
import UIModal from "~/components/MainPage/UIModal.vue";
import ModalFeedback from "~/components/MainPage/ModalFeedback.vue";

const isModal = ref(false);
const isToastSuccess = useCookie<boolean>("toast_success");
const isToastError = useCookie<boolean>("toast_error");

const openModal = () => {
  isModal.value = true;
};

const closeModal = () => {
  isModal.value = false;
};

onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  window.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleEscape);
  });
});
</script>

<template>
  <main class="home-main">
    <section class="inovation">
      <div class="container inovation-layouts">
        <article class="inovation-desc">
          <hgroup>
            <h1>SMART SU</h1>
            <h2><span class="typewriter" ref="cont">Инновационная</span> система учета водоснабжения и водоотведения</h2>
          </hgroup>
          <p>
            Сервис для водоснабжающих организаций и предназначен для сбора, обработки, хранения, и передачи данных о количествах
            потребляемых водных ресурсов, начисления оплаты, анализа данных, формирования отчетов и дальнейшего использования этих данных
            для работы с абонентами.
          </p>
          <div class="consultation-btn" @click="openModal">
            <p>Отправить заявку для получения консультации</p>
            <figure class="block-svg">
              <img src="@/assets/svg/btn-arrow.svg" alt="consultation-btn-arrow" />
            </figure>
          </div>
        </article>
        <figure class="main-image">
          <img src="@/assets/svg/main_image.svg" alt="" />
        </figure>
      </div>
      <img src="@/assets/svg/lines.svg" alt="" class="background-lines" />
    </section>
    <section class="functional-service">
      <figure class="wave">
        <img src="@/assets/svg/Light-Top.svg" alt="" class="wave-img" />
      </figure>
      <!-- <figure class="wave-img">
        <img src="@/assets/svg/image.png" alt="" />
      </figure> -->
      <h2 class="functional-text" id="functional-service">Функционал сервиса</h2>
      <article class="container list">
        <MainPageList />
        <figure class="phone">
          <img src="@/assets/svg/phone_with_circle.png" alt="" />
        </figure>
      </article>
      <article class="container list-right">
        <figure class="screen">
          <img src="../assets/svg/first-screen.png" alt="" class="screen-1" />
        </figure>
        <MainPageListRight />
      </article>

      <h2 class="header-text" id="mobile-app">Мобильное приложение</h2>
      <article class="container list-mobile">
        <MainPageListRightMobile />
        <figure class="tel">
          <img src="@/assets/svg/phone-star.svg" alt="" class="screen-2" />
        </figure>
      </article>
    </section>

    <section class="contact-section" id="contact">
      <Feedback />
      <figure class="bg-wave">
        <img src="@/assets/svg/light-center.svg" alt="" class="wave-img" />
      </figure>
      <figure class="wave">
        <img src="@/assets/svg/light-bottom.svg" alt="" class="wave-img" />
      </figure>
    </section>
  </main>

  <UIModal v-model="isModal">
    <ModalFeedback isHideInfo />
  </UIModal>
  <div class="toast-container">
    <transition name="slide-fade">
      <UIToastSuccess v-if="isToastSuccess" />
    </transition>
    <transition name="slide-fade">
      <UIToastError v-if="isToastError" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "/assets/styles/Home/home";

.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  @media (max-width: 430px) {
    width: 80%;
    right: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .toast-success,
  .toast-error {
    position: relative;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
