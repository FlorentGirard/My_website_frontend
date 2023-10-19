<template>
    <div class="login">
      <NuxtLink to="/" class="login__close"></NuxtLink>
      <div class="login__container">
        <h2 class="login__title">Se connecter</h2>
  
        <FormKit
          id="myForm"
          type="form"
          submit-label="Register"
          :actions="false"
          :incomplete-message="false"
          @submit="handleSubmit"
        >
          <FormKit
            type="email"
            name="email"
            label="E-mail"
            validation="required|email"
            validation-visibility="blur"
            :validation-messages="{
              email: 'Veuillez respecter le format email: john@gmail.com',
              required: 'Ce champ est obligatoire! Veuillez le renseigner.',
            }"
            :classes="{
              outer: 'altForm__outer',
              input: 'altForm__input ',
              label: 'altForm__label',
              message: 'message-error',
            }"
          />
          <FormKit
            type="password"
            label="Mot de passe"
            name="password"
            validation="required"
            validation-visibility="blur"
            :validation-messages="{
              required: 'Ce champ est obligatoire! Veuillez le renseigner.',
            }"
            :classes="{
              outer: 'altForm__outer',
              input: 'altForm__input ',
              label: 'altForm__label',
              message: 'message-error',
            }"
          />
          <button class="login__forgotPassword">Mot de passe oublié ?</button>
          <FormKit
            type="submit"
            label="Se connecter"
            :classes="{
              wrapper: 'altForm__wrapperButton',
            }"
          />
          <span v-if="messageUser" class="message-error">{{ messageUser }}</span>
        </FormKit>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reset } from '@formkit/core'
  import { IUser } from '~~/types/user'
  
  const config = useRuntimeConfig()
  const messageUser = ref('')
  
  const handleSubmit = async (value: IUser) => {
    try {
      const response = await useFetch(`${config.public.server}/auth/login`, {
        method: 'post',
        body: value,
      })
  
      if (
        !response.error ||
        response.error.value === null ||
        response.error.value === undefined
      ) {
        reset('myForm')
      } else {
        messageUser.value = response.error.value?.data.message
      }
    } catch (error) {
      messageUser.value =
        'Une erreur est survenue lors de la soumisionn du formulaire veuillez ressayer '
    }
  }
  </script>
  
  <style lang="scss" >
  .login__container {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 400px;
  }
  
  .login__close {
    width: 25px;
    height: 25px;
    margin: 50px auto;
    position: absolute;
    top: 60px;
    right: 500px;
    transform: scale(1.3);
    border-radius: 50%;
  
    &::before {
      background-color: $colorMain;
      position: absolute;
      display: block;
      content: '';
      width: 70%;
      height: 5%;
      top: 47%;
      left: 15%;
      transform: rotate(45deg);
    }
  
    &::after {
      background-color: $colorMain;
      position: absolute;
      display: block;
      content: '';
      width: 5%;
      height: 70%;
      left: 47%;
      top: 15%;
      transform: rotate(45deg);
    }
  
    &:hover {
      background-color: $colorMain;
      transition: background 0.3s;
  
      &::before,
      &::after {
        background-color: $colorLight;
        box-shadow: 0px 0px 8px -1px #555;
      }
    }
  }
  
  .login__title {
    font-size: $fontSize * 4.8;
    margin-bottom: $gutter * 8;
    text-align: center;
  }
  
  .login__forgotPassword {
    text-decoration: underline;
    margin: $gutter * 2 0;
    font-size: $fontSize * 1.4;
  }

  .altForm__outer {
    height: 70px;
    margin-bottom: $gutter * 3;
  }
  
  .altForm__input {
    height: 30px;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba($colorMain, 0.5);
    font-size: $fontSize * 1.4;
    color: $colorMain;
  
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  
  .altForm__label {
    display: flex;
    justify-content: center;
    color: rgba($colorMain, 0.5);
    font-size: $fontSize * 1.6;
    word-break: break-word;
  }

  .altForm__wrapperButton {
    background-color: $colorMain;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $colorLight;
    font-size: $fontSize * 1.8;
    margin-bottom: $gutter * 0.5;
  }
  
  </style>
  