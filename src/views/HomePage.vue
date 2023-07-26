<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/home/dashboard">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="help" href="/home/help">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Help</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/home/chat">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Chat</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
