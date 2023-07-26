<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home/help"></ion-back-button>
        </ion-buttons>

        <ion-title>New question</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">New question</ion-title>
        </ion-toolbar>
      </ion-header>

      <div style="
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
      ">
        <img style="min-width: 200px;" src="/question.jpg" />
      </div>

      <div class="ion-padding">
        <ion-textarea label="Comments" labelPlacement="stacked"
          value="I didn't know how to do this question, can you help me?"></ion-textarea>

          <br/>

        <ion-button @click="submit" size="small">Submit</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonBackButton, IonSelect, IonSelectOption, IonButton, IonAvatar, IonCard, IonNote, IonTextarea, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';

const router = useIonRouter()

function submit() {
  router.back()
}
</script>
