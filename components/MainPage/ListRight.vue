<template>
  <ul>
    <li>
      <figure>
        <img src="@/assets/svg/shield.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Аналитика данных</h3>
        <p>Отчеты автоматически преобразуются в легко читаемые диаграммы, что упрощает их анализ и восприятие</p>
      </div>
    </li>
    <li>
      <figure>
        <img src="@/assets/svg/papers.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Начисление оплаты и выписка счетов</h3>
        <p>
          Начисление оплат по нормативам и показаниям счётчиков, в соответствии с тарифами организации, происходит автомати-чески, при этом
          снижается риск человеческих ошибок
        </p>
      </div>
    </li>
    <li>
      <figure>
        <img src="@/assets/svg/search.svg" alt="" />
      </figure>
      <div class="text">
        <h3>Журнал действий</h3>
        <p>
          Вся история действий в системе сохраняется в электронном журнале, что позволяет легко отслеживать и анализировать выполненные
          операции
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  width: 50%;
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
      align-items: center;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
    figure {
      width: fit-content;
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
      h3 {
        font-size: 20px;
        font-weight: 600;
        @media (max-width: 1024px) {
          text-align: start;
        }
      }
      p {
        color: #161c2d;
        line-height: 29px;
        @media (max-width: 1024px) {
          text-align: start;
        }
      }
    }
  }
}
</style>
