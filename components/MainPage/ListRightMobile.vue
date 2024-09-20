<template>
  <ul>
    <li>
      <figure>
        <img src="@/assets/svg/settings.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Оперативное управление данными</h3>
        <p>
          Контролер может быстро и легко вносить данные, загружать документы и фотографии, а также обновлять информацию о поверке приборов
          учета.
        </p>
      </div>
    </li>
    <li>
      <figure>
        <img src="@/assets/svg/list.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Гибкость работы приложения</h3>
        <p>
          В приложении предусмотрена возможность работы в онлайн и в офлайн режиме. Отсутствие связи не влияет на работу приложения,
          введенные данные будут сохранены.
        </p>
      </div>
    </li>
    <li>
      <figure>
        <img src="@/assets/svg/loop.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Диспетчерская</h3>
        <p>
          Процесс формирования заявок значительно упрощен: контролер просто указывает проблему в приложении, и система автоматически создает
          заявку.
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  width: 45%;
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
    gap: 24px;
    @media (max-width: 1024px) {
    }
    @media (max-width: 500px) {
      width: 100%;
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
      gap: 8px;
      align-items: flex-start;
      h3 {
        font-size: 20px;
        font-weight: 600;
        @media (max-width: 1024px) {
          text-align: start;
        }
        @media (max-width: 768px) {
          text-align: start;
        }
      }
      p {
        color: #161c2d;
        line-height: 29px;
        @media (max-width: 1024px) {
          text-align: start;
        }
        @media (max-width: 768px) {
          text-align: start;
        }
      }
    }
  }
}
</style>
