<template>
  <aside>
    <div class="logo">
      <img src="../assets/vue.svg" alt="Vue">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle">
        <span class="material-icons"></span>
      </button>
    </div>
  </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>