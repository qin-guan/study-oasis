<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Study Oasis</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Study Oasis</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding">
        <ion-label style="opacity: 0.80;">Register with a local Community Center to get access!</ion-label>

        <div style="margin-top: 5rem;">
          <h2>Login</h2>
          <ion-input labelPlacement="stacked" placeholder="sam@moe.edu.sg" label="Email" type="email"></ion-input>
          <ion-input labelPlacement="stacked" label="Password" hidden></ion-input>
          <ion-button router-direction="root" router-link="/home" type="submit" size="small" style="margin-top: 3rem">Login</ion-button>
        </div>
      </div>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonLabel, IonHeader, IonToolbar, IonTitle, IonPage, IonInput, IonContent, useIonRouter } from '@ionic/vue';
</script>
