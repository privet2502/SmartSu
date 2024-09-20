<template>
  <ul>
    <li>
      <figure>
        <img src="@/assets/svg/laptop.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Централизованная база данных</h3>
        <p>
          Единая платформа для хранения и обработки большого объема данных об абонентах и потребляемых ресурсах. Система поддерживает
          импорт, хранение и экспорт информации
        </p>
      </div>
    </li>
    <li>
      <figure>
        <img src="@/assets/svg/key.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Управление системой</h3>
        <p>
          Администратор имеет возможность создавать, редактировать и удалять учетные записи пользователей, а также настраивать и
          корректировать уровни доступа к данным в системе в соответствии с правами пользователя
        </p>
      </div>
    </li>
    <li>
      <figure>
        <img src="@/assets/svg/lock.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Интуитивный дизайн</h3>
        <p>
          Интерфейс разработан с акцентом на простоту и удобство, что позволяет пользователям легко ориентироваться, быстро находить нужные
          разделы и эффективно работать с системой
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  @media (max-width: 1440px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  li {
    display: flex;
    gap: 2rem;
    @media (max-width: 1024px) {
      align-items: center;
    }
    @media (max-width: 930px) {
      align-items: flex-start;
      gap: 24px;
    }
    figure {
      width: fit-content;
      transform: scaleX(-1);
      @media (max-width: 932px) {
        min-width: 5rem;
      }
      img {
        @media (max-width: 932px) {
          width: 100%;
        }
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      @media (max-width: 930px) {
        gap: 8px;
      }
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
      p {
        color: #161c2d;
        line-height: 29px;
      }
    }
  }
}
</style>
