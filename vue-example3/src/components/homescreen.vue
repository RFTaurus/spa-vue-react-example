<template>
  <div class="course-nf-cover">
    <main>
      <div class="container">
        <div class="row d-flex align-items-center passthrough">
          <div class="col">
            <h1 class="title">
              Welcome To Our Fantasy World
            </h1>
            <hr class="underline" align="left" />

            <div class="input-container">
              <i class="icon"
                ><span
                  ><img
                    src="https://d3ka6vo0n1gmoz.cloudfront.net/skillify/images/input-icon-name.svg"
                    alt=""/></span
              ></i>
              <input class="input-form" type="text" placeholder="Name" />
            </div>

            <div class="input-container">
              <i class="icon"
                ><span
                  ><img
                    src="https://d3ka6vo0n1gmoz.cloudfront.net/skillify/images/input-icon-email.svg"
                    alt=""/></span
              ></i>
              <input class="input-form" type="email" placeholder="Email" />
            </div>
            <div class="input-container">
              <i class="icon"
                ><span
                  ><img
                    src="https://d3ka6vo0n1gmoz.cloudfront.net/skillify/images/input-icon-password.svg"
                    alt=""/></span
              ></i>
              <input
                class="input-form"
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="input-container">
              <i class="icon"
                ><span
                  ><img
                    src="https://d3ka6vo0n1gmoz.cloudfront.net/skillify/images/input-icon-password.svg"
                    alt=""/></span
              ></i>
              <input
                class="input-form"
                type="password"
                placeholder="Re-type Password"
              />
            </div>

            <button class="btn-form">Sign Up</button>
            <p class="error-text">error</p>
          </div>

          <div class="col">
            <section id="special-section">
              <a
                target="_blank"
                class="text-center"
                href="https://pngimage.net/fantasy-tree-png-1/"
              >
                <button class="btn-video">
                  <img
                    title="Image from PNG Image"
                    src="https://pngimage.net/wp-content/uploads/2018/05/fantasy-tree-png-1.png"
                    alt=""
                  />
                </button>
              </a>
            </section>
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
  data() {
    return {
      login: false,
      status: true
    };
  },
  computed: {
    isLogin() {
      return sessionStorage.Status;
    }
  },
  methods: {
    toLogin() {},
    toLogout() {}
  }
};
</script>
<style scoped>
.title,
.section-title,
.video-title,
.description-title,
.description-section-title,
.video-description-text {
  color: var(--white);
}

.container {
  padding: 220px 0;
}

#special-section {
  text-align: center;
  margin: 0% auto;
}

.btn-video {
  background: none;
  border: none;
  margin: 0% auto;
}
</style>
