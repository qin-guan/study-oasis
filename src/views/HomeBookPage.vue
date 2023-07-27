<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home/help"></ion-back-button>
        </ion-buttons>

        <ion-title>Book Oasis</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Book Oasis</ion-title>
        </ion-toolbar>
      </ion-header>


      <ion-item>
        <ion-label>Date</ion-label>
        <ion-note>21 July 2023</ion-note>
      </ion-item>

      <ion-item>
        <ion-label>Time</ion-label>
        <ion-note>10:30pm - 12:30pm</ion-note>
      </ion-item>

      <div class="ion-padding" style="margin-top: 1rem">
        <ion-button @click="book" expand="block" size="small">Confirm</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonBackButton, IonDatetime, IonDatetimeButton, IonModal, IonItemGroup, IonItemDivider, IonSelect, IonSelectOption, IonButton, IonAvatar, IonCard, IonNote, IonTextarea, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';

const router = useIonRouter()

function book(idx: string) {
  router.navigate(`/home/dashboard`, 'back', 'pop')
}
</script>
