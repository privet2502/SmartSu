<script lang="ts" setup>
const activeOptions = ref([false, false, false, false]);

const toggleOption = (index: number) => {
  activeOptions.value[index] = !activeOptions.value[index];
};
</script>

<template>
  <footer class="footer">
    <section class="container">
      <article class="footer-layouts">
        <div class="footer-logo-col">
          <figure>
            <img src="@/assets/svg/footer-logo.svg" alt="footer-logo" class="footer-logo" />
          </figure>
          <div class="info">
            <a>© Smart Su 2024</a>
            <a href="#"> Все права защищены</a>
          </div>
        </div>
      </article>
      <article class="footer-desc">
        <div class="info">
          <a>Система учета и обработки данных</a>
          <a>Казахстан, Алматы, ул. Ходжанова, 79</a>
          <a href="tel:+77273132403">+7 (727) 313 - 24 - 03</a>
          <a href="mailto:smartsu@adata.kz">smartsu@adata.kz</a>
        </div>
      </article>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/Footer/footer.scss";
</style>
