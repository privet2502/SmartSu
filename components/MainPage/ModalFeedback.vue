<script setup lang="ts">
const isModal = ref(false);

const props = defineProps({
  isHideInfo: Boolean,
});

const object = ref({
  name: null,
  surname: null,
  tel: null,
  email: null,
  comment: null,
  choosen: "call",
});

const loading = ref(false);
const isToastSuccess = useCookie<boolean>("toast_success");
const isToastError = useCookie<boolean>("toast_error");
isToastSuccess.value = false;
isToastError.value = false;

const sendEmail = async () => {
  loading.value = true;
  try {
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object.value),
    });

    isToastSuccess.value = true;
    object.value = {
      name: null,
      surname: null,
      tel: null,
      email: null,
      comment: null,
      choosen: null,
    };
  } catch (error) {
    console.error("Ошибка отправки заявки:", error);
    isToastError.value = true;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <article class="block container">
    <address class="address" :class="{ mobileHide: isHideInfo }">
      <div class="header">
        <h2>Контактная информация</h2>
        <p>Заполните форму, и наша команда свяжется с вами в ближайшее время</p>
      </div>
      <ul>
        <li>
          <figure>
            <img src="@/assets/svg/phone-contact.svg" alt="phone" />
          </figure>
          <a href="tel:+7 (771) 765-29-86">+7 (771) 765-29-86</a>
        </li>
        <li>
          <figure>
            <img src="@/assets/svg/phone-contact.svg" alt="phone" />
          </figure>
          <p><a href="tel:+7 (727) 313-24-03">+7 (727) 313-24-03</a> вн. 202</p>
        </li>
        <li>
          <figure>
            <img src="@/assets/svg/mail.svg" alt="mail" />
          </figure>
          <a href="mailto:smartsu@adata.kz">smartsu@adata.kz</a>
        </li>
        <li>
          <figure>
            <img src="@/assets/svg/address.svg" alt="address" />
          </figure>
          <p>Казахстан, Алматы, ул. Ходжанова, 79</p>
        </li>
      </ul>
      <div class="circle-large">
        <div class="circle-small"></div>
      </div>
    </address>
    <form action="submit" class="form" @submit.prevent="sendEmail()">
      <div class="form-input">
        <div class="form-input-item">
          <label for="name">Имя</label>
          <input type="text" placeholder="" id="name" v-model="object.name" required />
        </div>
        <div class="form-input-item">
          <label for="surname">Фамилия</label>
          <input type="text" placeholder="" id="surname" v-model="object.surname" />
        </div>
        <div class="form-input-item">
          <label for="email">Почта</label>
          <input type="email" placeholder="" id="email" v-model="object.email" required />
        </div>
        <div class="form-input-item">
          <label for="tel">Мобильный телефон</label>
          <input type="tel" placeholder="+7 (XXX) XXX-XX-XX" id="tel" v-model="object.tel" v-mask="'+7 (###) ### ## ##'" required />
        </div>
      </div>
      <div class="form-radio">
        <h3>Какой способ связи вы предпочитаете?</h3>
        <div class="form-radio-layouts">
          <div class="form-radio-item">
            <input type="radio" name="contact" id="call_1" value="call" v-model="object.choosen" />
            <label for="call_1">
              <span class="custom-radio" v-if="object.choosen !== 'call'"></span>
              <img src="@/assets/svg/checked.svg" alt="" v-else />
              Телефонный звонок
            </label>
          </div>
          <div class="form-radio-item">
            <input type="radio" name="contact" id="whatsapp_1" value="whatsapp" v-model="object.choosen" />
            <label for="whatsapp_1">
              <span class="custom-radio" v-if="object.choosen !== 'whatsapp'"></span>
              <img src="@/assets/svg/checked.svg" alt="" v-else />
              Сообщение WhatsApp
            </label>
          </div>
        </div>
      </div>
      <div class="input-textarea">
        <div class="input-textarea-item">
          <label for="">Комментарий (необязательно)</label>
          <textarea placeholder="" v-model="object.comment" />
        </div>
      </div>
      <button class="consultation-btn" type="submit" :disabled="loading">
        <span v-if="loading">Отправка...</span>
        <span v-else>Отправить заявку для получения консультации</span>
        <figure class="block-svg">
          <img src="@/assets/svg/btn-arrow.svg" alt="consultation-btn-arrow" />
        </figure>
      </button>
    </form>
  </article>
</template>

<style lang="scss" scoped>
.block {
  height: 670px;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 40px 10px 10px;
  box-shadow: 0px 18px 88px -4px #18274b24, 0px 8px 28px -6px #18274b1f;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 40px;
  position: relative;
  z-index: 40;
  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 0;
    height: auto;
    width: 100%;
  }
  .address {
    background-color: #011c2b;
    grid-column: span 3;
    padding: 2.5rem;
    font-style: normal;
    color: #fff;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    @media (max-width: 830px) {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .circle-large {
      position: absolute;
      background: #ffffff1f;
      border-radius: 50%;
      width: 269px;
      height: 269px;
      right: -100px;
      bottom: -100px;
      .circle-small {
        position: absolute;
        background-color: #fff9f921;
        border-radius: 50%;
        width: 138px;
        height: 138px;
        top: -30px;
        left: -30px;
      }
    }
    .header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
        font-size: 28px;
        font-weight: 600;
        @media (max-width: 830px) {
          font-size: 1.5rem;
        }
      }
      p {
        color: #c9c9c9;
        @media (max-width: 830px) {
          font-size: 0.9rem;
        }
      }
    }
    ul {
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      display: flex;
      gap: 3rem;
      @media (max-width: 830px) {
        height: auto;
        gap: 1rem;
      }
      li {
        display: flex;
        gap: 1rem;
        a {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .form {
    grid-column: span 4;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    position: relative;
    z-index: 40;
    @media (max-width: 830px) {
      padding: 1rem 0 0;
      gap: 2rem;
    }
    @media (max-width: 830px) {
      gap: 2rem;
    }
    .form-input {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
      @media (max-width: 900px) {
        gap: 2rem;
      }
      @media (max-width: 830px) {
        gap: 0.5rem;
      }
      @media (max-width: 768px) {
        gap: 2rem;
      }
      @media (max-width: 540px) {
        gap: 1rem;
        grid-template-columns: repeat(1, 1fr);
      }
      // row-gap: 4rem;
      .form-input-item {
        display: flex;
        flex-direction: column;
        height: 3.5rem;
        label {
          font-size: 12px;
        }
        input {
          font-size: 14px;
          padding: 0.5rem 0 0.5rem 0;
          height: max-content;
          border: none;
          border-bottom: 1px solid #8d8d8d;
          outline: none;
        }
      }
    }
    .form-radio {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        font-size: 14px;
        font-weight: 600;
      }
      .form-radio-layouts {
        display: flex;
        gap: 1rem;
        @media (max-width: 430px) {
          flex-direction: column;
        }
        .form-radio-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          label {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            @media (max-width: 830px) {
              font-size: 14px;
            }
            .custom-radio {
              width: 13px;
              height: 13px;
              border-radius: 50%;
              background-color: #e0e0e0;
            }
          }
        }
      }
    }
    .input-textarea {
      width: 100%;
      margin-bottom: 3rem;
      .input-textarea-item {
        display: flex;
        flex-direction: column;
        min-height: 3.5rem;
        label {
          font-size: 12px;
        }
        textarea {
          font-size: 14px;
          padding: 0.5rem 0.5rem;
          border: none;
          border-bottom: 1px solid #8d8d8d;
          min-height: 1lh;
          resize: none;
          field-sizing: content;
          line-height: 1.5;
          outline: none;
        }
      }
    }
    .consultation-btn {
      width: fit-content;
      background: linear-gradient(234.07deg, #3a94cf 0%, #354c69 125.68%);
      border-radius: 0.5rem;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      gap: 1rem;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      @media (max-width: 830px) {
        padding: 1rem 1rem;
        width: 100%;
      }
      span {
        color: #fff;
      }
      .block-svg {
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
