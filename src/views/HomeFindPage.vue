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

      <!-- <ion-list>
        <ion-item>
          <ion-label>Date</ion-label>
          <ion-datetime-button datetime="datetime"></ion-datetime-button>

          <ion-modal :keep-contents-mounted="true">
            <ion-datetime presentation="date" id="datetime"></ion-datetime>
          </ion-modal>
        </ion-item>
      </ion-list> -->

      <ion-list>
        <ion-list-header>
          <ion-label>FSC's near you</ion-label>
        </ion-list-header>

        <ion-item-group>
          <ion-item v-for="time, idx in [
            'Bishan FSC',
            'Marymount FSC',
            'Jurong FSC',
            'Shunfu FSC'
          ]" :key="idx">
            <ion-label>{{ time }}</ion-label>
            <ion-note>200m </ion-note>
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
