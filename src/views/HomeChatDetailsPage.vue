<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home/help"></ion-back-button>
        </ion-buttons>

        <ion-title>Mr Tan</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mr Tan</ion-title>
        </ion-toolbar>
      </ion-header>

      <hr>

      <ion-list lines="none">
        <ion-item>
          <div style="display: flex; flex-direction: column; max-width: 70%">
            <small>Mr Tan</small>
            <div style="border-radius: 10px; background: #047857; padding: 8px; margin-top: 3px;">
              <span>Hey, I've replied to your question! Let me know if you have any other queries!</span>
            </div>
          </div>
        </ion-item>

        <ion-item style="margin-top: 1rem">
          <div style="display: flex; flex-direction: column; align-items: flex-end; text-align: right; width: 100%;">
            <small>Me</small>
            <div style="border-radius: 10px; background: #1d4ed8; padding: 8px; margin-top: 3px;">
              <span>Do I do what is in the brackets first because of BODMAS?</span>
            </div>
          </div>
        </ion-item>

        <ion-item style="margin-top: 1rem">
          <div style="display: flex; flex-direction: column">
            <small>Mr Tan</small>
            <div style="border-radius: 10px; background: #047857; padding: 8px; margin-top: 3px;">
              <span>Yes, that's correct!</span>
            </div>
          </div>
        </ion-item>

        <ion-item style="margin-top: 1rem">
          <div style="display: flex; flex-direction: column; align-items: flex-end; text-align: right; width: 100%">
            <small>Me</small>
            <div style="border-radius: 10px; background: #1d4ed8; padding: 8px; margin-top: 3px;">
              <span>Ah, i see. Thanks!</span>
            </div>
          </div>
        </ion-item>
      </ion-list>

      <div class="ion-padding" style="
        margin-top: 100%;
        display: flex;
        align-items: center;
      ">
        <ion-input style="height: 30px;" aria-label="Message" placeholder="Type a new message..."></ion-input>
        <ion-button size="small">Send</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonInput, IonButtons, IonBackButton, IonDatetime, IonDatetimeButton, IonModal, IonItemGroup, IonItemDivider, IonSelect, IonSelectOption, IonButton, IonAvatar, IonCard, IonNote, IonTextarea, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';

const router = useIonRouter()

function book(idx: string) {
  router.navigate(`/home/dashboard`, 'back', 'pop')
}
</script>
