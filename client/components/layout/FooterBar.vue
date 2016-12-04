<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
<<<<<<< HEAD
        <span> Appartable UPIICSA-Titulación II 2016</span>
=======
        <p class="social">
          <a :href="'https://github.com/' + repository">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </a>
          <a href="https://twitter.com/_fundon">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
        </p>
        <p><span class="icon"><i class="fa fa-code"></i></span> with <span class="icon"><i class="fa fa-heart"></i></span> by <a href="https://github.com/fundon">fundon</a>.</p>
        <p>Code licensed under <a href="https://github.com/fundon/vue-admin/blob/master/LICENSE">{{ license }}</a>.</p>
>>>>>>> origin/master
      </div>
    </div>
  </footer>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.footer {
<<<<<<< HEAD
  right: 5px;
  bottom: 5px;
  padding:0;
  span{
    font-size:.8em;
    color:grey;
=======
  margin-left: 180px;
  
  @include mobile() {
    margin-left: 0;
  }
  
  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
>>>>>>> origin/master
  }
}

</style>
