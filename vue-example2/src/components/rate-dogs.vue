<template>
  <div class="">
    <page-header title="Rate doggos"></page-header>

    <main class="passthrough">
      <div class="content container">
        <div class="card">
          <div v-if="currentDogUrl">
            <img :src="currentDogUrl" alt="dog photo" />
          </div>
          <div class="actions">
            <select v-model="rating" @input="newRating">
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="14.5">14.5</option>
              <option value="15">15</option>
            </select>
          </div>
          <div class="actions">
            <select v-model="status" @input="newStatus">
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
          <div style="text-align: center;">
            <button
              class="btn-primary"
              @click="submit()"
              style="margin-top: 32px;"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { PageHeader } from "@vue-mf/styleguide";
export default {
  components: {
    PageHeader
  },
  data: () => ({
    currentDogUrl: null,
    rating: "10",
    status: true
  }),
  created() {
    this.newDog();
  },
  methods: {
    newDog() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(json => {
          this.currentDogUrl = json.message;
          this.rating = "10";
          this.status = true;
        });
    },

    newRating(evt) {
      this.rating = evt.target.value;
      console.log("Check Rating : ", this.rating)
    },

    newStatus(evt) {
      this.status = evt.target.value;
      console.log("Check Status : ", this.status)
    },

    submit() {
      const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
      dogs.push({
        url: this.currentDogUrl,
        rating: Number(this.rating),
        status: Boolean(this.status)
      });
      localStorage.setItem("dogs", JSON.stringify(dogs));
      this.newDog();
    }

  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  order: 0;
}

.card {
  margin-top: 1.6rem;
  padding: 3.2rem;
  background-color: white;
  border-radius: 0.5rem;
  max-width: 75%;
}

.card img {
  max-width: 100%;
}

.actions {
  margin-top: 1.6rem;
  display: flex;
  justify-content: center;
}
</style>
