<template>
  <div>
    <div class="d-flex">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">Welcome To Fantasy World</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link
                  to="/"
                  class="nav-link"
                  active-class="active-nav-link"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/react"
                  class="nav-link"
                  active-class="active-nav-link"
                  >React</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/vue"
                  class="nav-link"
                  active-class="active-nav-link"
                  >Vue</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Router View For Page -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Barlow&display=swap");

.navbar {
  font-size: 1em;
  width: 100%;
  max-width: 100vw;
}

.navbar-dark .navbar-nav .nav-link {
  color: var(--white);
  font-weight: bold;
}

.navbar-dark .navbar-nav .active-nav-link {
  color: var(--active-link);
}

.bg-navbar {
  background-color: var(--navbar-dark);
}

li {
  padding: 0 30px;
}

.btn-signup {
  margin-left: 16px;
}
</style>
