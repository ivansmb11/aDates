<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid fixed>
          <ion-row>
            <ion-col>
              <img
                class="logo"
                src="../../../assets/img/anahuac.svg"
                alt="logo"
              >
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-list>
                <ion-item>
                  <ion-label position="floating">
                    ID o correo electrónico
                  </ion-label>
                  <ion-input required></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">
                    Contraseña
                  </ion-label>
                  <ion-input
                    type="password"
                    required
                  >
                  </ion-input>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button color="anahuac">
                Ingresar
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
    <ion-footer collapse="fade">
      <ion-toolbar>
        <p>¿No tienes una cuenta? <span>Regístrate</span></p>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>

import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonToolbar
} from '@ionic/vue';

export default {
  name: 'LoginView',
  components: {
    IonButton,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonToolbar
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
ion-list {
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}
ion-toolbar {
  text-align: center;
}
ion-toolbar span {
  color: var(--ion-color-anahuac);
  text-decoration: underline;
}
.logo {
  width: 40%;
}
</style>
