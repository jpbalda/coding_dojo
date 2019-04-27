<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <h3>Standups</h3>
      <router-link
        :to="{name: 'standups.create'}"
        class="btn btn-sm btn-outline-primary"
        tag="button"
        title="Nuevo"
      >
        <i class="fas fa-plus"></i>
      </router-link>
    </div>
    <div v-if="standups.length === 0">No existen standups creados</div>
    <table v-else class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Creador</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="standup in standups">
          <td>{{ standup.name }}</td>
          <td>{{ standup.creator.email }}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary" @click="deleteStandup(standup)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      standups: []
    };
  },
  created() {
    //TODO: show a loading spinner

    axios
      .get("/api/standups")
      .then(response => (this.standups = response.data.data))
      .catch(error => {
        //TODO: show an error
        console.log(error);
      });
  },
  methods: {
    deleteStandup(standup) {
      if (!confirm("¿Está seguro?")) {
        return;
      }
      axios
        .delete(`/api/standups/${standup._id}`)
        .then(response => {
          const index = this.standups.indexOf(standup);
          this.standups.splice(index, 1);
        })
        .catch(error => {
          //TODO: show an error
          console.log(error);
        });
    }
  }
};
</script>
