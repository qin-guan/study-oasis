<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Help</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Help</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list inset>
        <ion-item>
          <ion-label style="font-weight: 500">
            Subject
          </ion-label>

          <select>
            <option>Mathematics</option>
            <option>English</option>
            <option>Chinese</option>
          </select>
        </ion-item>
      </ion-list>


      <ion-card>
        <ion-card-header>
          <ion-card-title>Upload a question</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Take a photo of a question and request for assistance!
        </ion-card-content>

        <ion-button fill="clear" @click="selectPhoto">Select photo</ion-button>
      </ion-card>

      <div class="ion-padding">
        <h2>Your past questions</h2>
      </div>

      <ion-list>
        <ion-item  @click="click(item)" button v-for="item in items">
          <ion-label>{{ item }}</ion-label>
          <ion-note>7:55pm</ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonSelect, IonNavLink, IonSelectOption, IonButton, IonAvatar, IonCard, IonNote, IonItemSliding, IonItemOption, IonItemOptions, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonRouter } from '@ionic/vue';
import { usePhotoGallery } from '@/composables/use-photo-gallery'

const { takePhoto } = usePhotoGallery()

const items = [
  'Quadratic equation??',
  'Math???',
  'Oh no!!',
  'Sad'
]

const router = useIonRouter()

function click(item: string) {
  router.push(`/home/help/${item}`)
}

async function selectPhoto() {
  await takePhoto()
  router.push('/home/help/new')
}
</script>
