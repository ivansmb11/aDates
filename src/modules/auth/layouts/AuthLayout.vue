<template>
  <ion-content>
    <ion-router-outlet />
  </ion-content>
</template>

<script>

import { IonContent, IonRouterOutlet } from '@ionic/vue';

export default {
  name: 'AuthLayout',
  components: {
    IonContent,
    IonRouterOutlet
  }
}
</script>

<style scoped>

</style>
