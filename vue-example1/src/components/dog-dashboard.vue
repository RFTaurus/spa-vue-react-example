<template>
  <div>
    <page-header title="Dogs dashboard"></page-header>

    <main class="container">
      <div>
        <div v-if="dogs.length === 0">
          There are no dogs!
          <router-link to="/rate-doggos">Rate dogs</router-link>.
        </div>
        <div v-else>
          <div class="row justify-content-center align-items-center">
            <div v-for="dog in dogs" v-bind:key="dog.url">
              <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                <card
                  :thumbLink="
                    'https://static-2.gumroad.com/res/gumroad/1013973583060/asset_previews/2f16390a4d11d78090ef1b459963b22a/retina/forest_20bg.jpg'
                  "
                  :duration="'1 j 40 m'"
                  :videoTitle="
                    'Lettering for Designers: One Drop Cap Letterform at a Time'
                  "
                  :author="'Keyla Hugesome'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { PageHeader,  Card } from "@vue-mf/styleguide";

export default {
  components: {
    PageHeader,
    Card
  },
  data: () => ({
    dogs: JSON.parse(localStorage.getItem("dogs")) || []
  })
};
</script>
<style scoped></style>
