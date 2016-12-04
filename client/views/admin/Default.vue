<template>
<div>
  <div class="columns is-multiline is-mobile" v-if="negocios.length">
    <div v-for="negocio in negocios" class="column is-6-mobile is-2-desktop is-4-tablet ">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3" style="border-bottom:1px solid #eee">
            <img :src="negocio.logo" alt="">
          </figure>
        </div>
        <div class="card-content">
          <div class="content has-text-centered">
          <p class="title is-6 has-text-centered"><b>{{ negocio.smallName }}</b></p>
            <small>{{ negocio.encargado }}</small>
            <br>
            <small> <b>Sucursales: </b> {{ negocio.sucursales.length }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
  <article class="message is-warning">
    <div class="message-header">
        Aviso
      </div>
      <div class="message-body">
        No tiene <b>Negocios</b> registrados. 
        Puede registrar alguno en la seccion 
        'Registrar Negocio' o dando click<a href="./#/admin/registro"> Aqui</a>
      </div>
    </article>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      negocios: []
    }
  },
  created: function () {
    this.$http.get('negocios/').then(res => {
      console.log(res.data.negocios)
      this.negocios = res.data.negocios
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang="css" scoped>
.title{
  margin-bottom: 0 !important
}
</style>

