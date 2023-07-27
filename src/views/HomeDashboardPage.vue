<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Welcome back, Sam</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Welcome back, Sam</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card @click="findOasis">
        <ion-card-header>
          <ion-card-title>Find Oasis</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Find the Oasis closest to your home!
        </ion-card-content>
      </ion-card>

      <ion-list style="margin-top: 2rem;">
        <ion-list-header>Notifications</ion-list-header>
        <ion-item-sliding>
          <ion-item>
            <ion-label>Checked in to Clementi 123 Oasis</ion-label>
            <ion-note>7:55pm</ion-note>
          </ion-item>

          <ion-item-options>
            <ion-item-option>Favorite</ion-item-option>
            <ion-item-option color="danger">Delete</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <ion-label>New message from Mr Tan</ion-label>
            <ion-note>7:30pm</ion-note>
          </ion-item>

          <ion-item-options>
            <ion-item-option>Favorite</ion-item-option>
            <ion-item-option color="danger">Delete</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <ion-list style="margin-top: 1rem;">
        <ion-list-header>Reminders</ion-list-header>
        <ion-item>
          <ion-label>Return book "Hello!"</ion-label>
          <ion-note>Tmr 7pm</ion-note>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonCard, IonNote, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';

const router = useIonRouter()

function findOasis() {
  router.push('/home/find')
}
</script>
