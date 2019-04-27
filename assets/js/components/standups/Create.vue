<template>
  <div>
    <div class="form-group">
      <label for="name"> Nombre
      <input type="text" class="form-control form-control-lg" name="email" id="email" required>
                      input(type="email" class="form-control form-control-lg" name="email" id="email" required autofocus)
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      standup: {
        name: "",
        attendees: []
      }
    };
  },
  methods: {
    saveStandup(standup) {}
  }
};
</script>
