<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const header = ref<HTMLElement | null>(null);
const lastScrollTop = ref<number>(0);
const isMenu = ref<boolean>(false);
const isModalOpen = ref<boolean>(false);

const handleScroll = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (!isMenu.value && !isModalOpen.value) {
    if (currentScroll > lastScrollTop.value) {
      if (header.value) header.value.classList.add("hide");
    } else {
      if (header.value) header.value.classList.remove("hide");
    }
  }

  lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleMenu = () => {
  isMenu.value = !isMenu.value;
};

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>


<template>
  <header class="header" ref="header">
    <NuxtLink to="/" class="header-logo" @click.prevent="scrollToTop">
      <img src="@/assets/svg/logo.svg" alt="Logo" />
    </NuxtLink>

    <nav class="header-navigation">
      <ul>
        <li>
          <a href="#functional-service">Функционал сервиса</a>
        </li>
        <li>
          <a href="#mobile-app">Мобильное приложение</a>
        </li>
        <li>
          <a href="#contact">Контактная информация</a>
        </li>
      </ul>
    </nav>

    <div class="menu" @click="toggleMenu" :class="{ active: isMenu }">
      <div class="bar"></div>
    </div>
  </header>

  <div class="menu-nav" v-if="isMenu"></div>

  <nav class="menu-header-navigation" v-if="isMenu">
    <ul>
      <li>
        <a href="#functional-service" @click="toggleMenu">Функционал сервиса</a>
      </li>
      <li>
        <a href="#mobile-app" @click="toggleMenu">Мобильное приложение</a>
      </li>
      <li>
        <a href="#contact" @click="toggleMenu">Контактная информация</a>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>
@import "@/assets/styles/Header/header.scss";
</style>
