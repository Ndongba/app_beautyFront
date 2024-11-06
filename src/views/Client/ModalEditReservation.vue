<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <h3>Modifier la Réservation</h3>
      <!-- <label>Nom de la Prestation :</label>
      <input v-model="editedReservation.proprestation.prestation.libelle" type="text" /> -->

      <label>Date Prévue :</label>
      <input v-model="editedReservation.date_prévue" type="date" />

      <label>Heure Prévue :</label>
      <input v-model="editedReservation.heure_prévue" type="time" />

      <div class="modal-actions">
        <button @click="submitUpdate">Mettre à Jour</button>
        <button @click="$emit('close')">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalEditReservation",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    reservationData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedReservation: { ...this.reservationData }
    };
  },
  watch: {
    reservationData(newData) {
      this.editedReservation = { ...newData };
    }
  },
  methods: {
    submitUpdate() {
      this.$emit('update-reservation', this.editedReservation);
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  height: 300px;
}

.modal-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
