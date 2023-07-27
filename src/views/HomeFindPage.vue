<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home/help"></ion-back-button>
        </ion-buttons>

        <ion-title>Find Oasis</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Find Oasis</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-label>Date</ion-label>
          <ion-datetime-button datetime="datetime"></ion-datetime-button>

          <ion-modal :keep-contents-mounted="true">
            <ion-datetime presentation="date" id="datetime"></ion-datetime>
          </ion-modal>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-list-header>
          <ion-label>Available slots</ion-label>
        </ion-list-header>

        <ion-item-group>
          <ion-item-divider>
            <ion-label>Bishan FSC</ion-label>
          </ion-item-divider>

          <ion-item @click="book(idx.toString())" button v-for="time, idx in [
            '10:30 - 12:30',
            '12:30 - 14:30',
            '14:30 - 16:30',
            '16:30 - 18:30',
            '18:30 - 20:30',
          ]" :key="idx">
            <ion-label>{{ time }}</ion-label>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonBackButton, IonDatetime, IonDatetimeButton, IonModal, IonItemGroup, IonItemDivider, IonSelect, IonSelectOption, IonButton, IonAvatar, IonCard, IonNote, IonTextarea, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';

const router = useIonRouter()

function submit() {
  router.back()
}

function book(idx: string) {
  router.push(`/home/book/${idx}`)
}
</script>
