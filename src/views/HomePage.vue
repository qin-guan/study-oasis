<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/home/dashboard">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="help" href="/home/help">
          <ion-icon aria-hidden="true" :icon="handLeftOutline" />
          <ion-label>Help</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/home/chat">
          <ion-icon aria-hidden="true" :icon="chatboxOutline" />
          <ion-label>Chat</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="forum" href="/home/forum">
          <ion-icon aria-hidden="true" :icon="newspaperOutline" />
          <ion-label>Forum</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, handLeftOutline, chatbox, home, newspaperOutline, chatboxOutline, homeOutline} from 'ionicons/icons';
</script>
