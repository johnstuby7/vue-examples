<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591"></router-link>
      <img
        src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        alt="Naruto Poster" class="featured-img" />
      <div class="detail">
        <h3>Naruto</h3>
        <p>Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming
          the Hokage, the village's leader and strongest ninja.</p>
      </div>
      <router-link />
    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;

      z-index: 1;

      h3 {
        color: #fff;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
