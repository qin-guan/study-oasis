<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home/help"></ion-back-button>
        </ion-buttons>

        <ion-title>{{ route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <hr>

      <ion-card>
        <ion-card-content>
          <span>How to solve quadratic equation?</span>
          <div style="margin-top: 1rem; text-align: right">
            <span>Faizal M.</span>
          </div>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonBackButton, IonDatetime, IonDatetimeButton, IonModal, IonItemGroup, IonItemDivider, IonSelect, IonSelectOption, IonButton, IonAvatar, IonCard, IonNote, IonTextarea, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useIonRouter()

function book(idx: string) {
  router.navigate(`/home/dashboard`, 'back', 'pop')
}
</script>
