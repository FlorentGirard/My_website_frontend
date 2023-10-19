<i18n>
  {
    "en": {
      "placeholder": {
      "message": "Your message...",
      "name": "your lastname...",
      "firstname": "your firstname...",
      "email": "Your email...",
      "phone": "Your phone number..."
      
    },
    "requiredFieldMessage" : "This field is required! Please fill it in.", "send": "send", 
    },
    "fr": {
      "placeholder": {
      "message": "Votre message...",
      "name": "Votre nom...",
      "firstname": "Votre prenom...",
      "email": "Votre email...",
      "phone": "Votre Téléphone..."
      
      },
      "requiredFieldMessage" : "Ce champs est obligatoire! Veuillez le renseigner.", "send": "Envoyer"
      },
  }
</i18n>

<template>
  <div>
    <span v-if="messageUser">{{ messageUser }}</span>
    <FormKit
      id="myForm"
      type="form"
      submit-label="Register"
      :actions="false"
      :incomplete-message="false"
      :classes="{ form: '$reset mainForm__form' }"
      @submit="sendEmail"
    >
      <FormKit
        type="textarea"
        name="message"
        validation="required"
        :validation-messages="{
          required: t('requiredFieldMessage'),
        }"
        rows="10"
        :placeholder="t('placeholder.message')"
        :classes="{
          input: '$reset mainForm__input mainForm__input--textarea',
          outer: '$reset mainForm__outer mainForm__outer--textarea',
          message: 'message-error message-error--mainForm',
        }"
      />
      <div class="form__blockRight">
        <FormKit
          type="text"
          name="name"
          :placeholder="t('placeholder.name')"
          validation="required|length:3"
          validation-visibility="blur"
          :validation-messages="{
            length: 'Ce champ doit contenir au minimum 3 caractéres',
            required: t('requiredFieldMessage'),
          }"
          :classes="{
            outer: 'mainForm__outer',
            input: 'mainForm__input',
            message: 'message-error message-error--mainForm',
          }"
        />
        <FormKit
          type="text"
          name="lastname"
          :placeholder="t('placeholder.firstname')"
          validation="required|length:3"
          validation-visibility="blur"
          :validation-messages="{
            length: 'Ce champ doit contenir au minimum 3 caractéres',
            required: t('requiredFieldMessage'),
          }"
          :classes="{
            outer: 'mainForm__outer',
            input: 'mainForm__input',
            message: 'message-error message-error--mainForm',
          }"
        />
        <FormKit
          type="email"
          name="email"
          validation="required|email"
          validation-visibility="blur"
          :validation-messages="{
            email: 'Veuillez respecter le format email: john@gmail.com',
            required: t('requiredFieldMessage'),
          }"
          :placeholder="t('placeholder.email')"
          :classes="{
            outer: 'mainForm__outer',
            input: ' mainForm__input',
            message: 'message-error message-error--mainForm',
          }"
        />
        <div class="form__flex">
          <FormKit
            type="tel"
            name="phone"
            validation="required"
            validation-visibility="blur"
            :validation-messages="{
              required: t('requiredFieldMessage'),
            }"
            :placeholder="t('placeholder.phone')"
            :classes="{
              outer: 'mainForm__outer',
              input: ' mainForm__input',
              message: 'message-error message-error--mainForm ',
            }"
          />
          <FormKit
            type="submit"
            label="Envoyer"
            :classes="{
              wrapper: 'mainForm__wrapperButton',
              input: ' mainForm__button',
            }"
          >
            <span> {{ t('send') }}</span>
            <img
              v-if="!isMobile"
              src="/picture/svg/send.svg"
              alt=""
              width="18"
              height="18"
            />
          </FormKit>
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { reset } from '@formkit/core'
const { t } = useI18n()

const messageUser = ref('')
const config = useRuntimeConfig()
const { isMobile } = useDevice()

const sendEmail = async (value: any) => {
  try {
    const response = await useFetch(`${config.public.server}/mail/send`, {
      method: 'post',
      body: value,
    })

    if (
      !response.error ||
      response.error.value === null ||
      response.error.value === undefined
    ) {
      messageUser.value = 'Votre message a été envoyé avec succès !'
      reset('myForm')
    } else {
      messageUser.value = response.error.value?.data.message
    }
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire', error)
  }
}
</script>

<style lang="scss">
.mainForm__outer {
  border-bottom: 1px solid $colorMain;
  height: 70px;
  position: relative;

  &--textarea {
    min-height: 276px;
    padding-top: $gutter * 2.6;
    box-sizing: border-box;
  }
}

.mainForm__input {
  color: $colorMain;
  padding-left: $gutter * 3;
  height: 70px;

  &::placeholder {
    color: rgba($colorMain, 0.5);
  }
}

.mainForm__wrapperButton {
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid $colorMain;
  font-size: $fontSize * 1.5;
}

@media screen and (min-width: 1024px) {
  .mainForm__form {
    width: calc(100% - 2px);
    display: flex;
    align-items: flex-start;
    font-size: $fontSize * 1.8;
  }

  .mainForm__outer {
    height: 100px;
    width: calc(100% + 2px);
    &--textarea {
      width: 50%;
      min-height: 504px;
      border-right: 1px solid $colorMain;
      border-bottom: none;
    }
  }

  .mainForm__input {
    height: 100px;
  }

  .mainForm__wrapperButton {
    height: 100px;
    font-size: $fontSize * 1.8;
    width: calc(100% + 2px);
    border-color: red;
    border-bottom: 0;
    display: block;
  }

  .mainForm__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 $gutter * 4;
    text-transform: uppercase;
  }

  .form__blockRight {
    width: 50%;
  }
}
</style>
