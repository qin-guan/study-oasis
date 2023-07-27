<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Forums</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Forums</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item button @click="openChat(forum)" v-for="forum in forums">
          <ion-label>{{ forum }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonAvatar, IonCard, IonNote, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';

const router = useIonRouter()

function openChat(subject: string) {
  router.push(`/home/forum/${subject}`)
}

const forums = [
  "English",
  "Mathematics",
  "Additional Mathematics",
  "Biology",
  "Physics",
  "Chemistry",
  'Social Studies',
  'Geography',
  'History',
  'Tamil',
  'Mandarin',
  'Malay'
]
</script>
