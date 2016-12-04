<template>
<div>
  <label class="label">
    <span class="tag is-danger">id_sucursal :Este campo es solo para pruebas</span>
  </label>
  <p class="control has-addons">
    <input v-model="id_sucursal" class="input is-small" type="text" placeholder="id_Sucursal">
    <a @click="getSucursales()" class="button is-info is-small">request</a>
  </p>
  <h1><b>Sucursales de {{ nombre }}</b></h1>
  <div class="columns is-multiline is-mobile" v-if="sucursales.length">
    <div v-for="sucursal in sucursales" class="column is-6-mobile is-3-desktop is-4-tablet ">
      <div class="card">
        <div class="card-image">
          <figure class="image is-1by3" style="border-bottom:1px solid #eee;">
            <img style="padding:0px;height:7em;" :src="sucursal.photo" alt="">
          </figure>
        </div>
        <div class="card-content">
          <div class="content ">
            <p class="title is-6 has-text-centered">
              <b>{{ sucursal.nombre }}</b>
              <br>
              <small>{{ sucursal.encargado }}</small>
              <br>
            </p>
            <div class="description">
              <small>{{ sucursal.description }}</small>
            </div>
            <div class="has-text-right"><small> Mesas: {{ sucursal.tables.length }}</small>
            </div>
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
        No tiene <b>Sucursales</b> registradas. 
        Puede registrar alguna en la seccion 
        'Registrar Sucursal' o dando click<a href="./#/negocio/registro"> Aqui</a>
      </div>
    </article>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      sucursales: [],
      id_sucursal: 1,
      nombre: ''
    }
  },
  created: function () {
    this.$http.get('negocio/1').then(res => {
      console.log(res.data.negocio.sucursales)
      this.sucursales = res.data.negocio.sucursales
      this.nombre = res.data.negocio.fullName
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    getSucursales: function () {
      this.$http.get('negocio/' + this.id_sucursal).then(res => {
        console.log(res.data.negocio.sucursales)
        this.sucursales = res.data.negocio.sucursales
        this.nombre = res.data.negocio.fullName
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="css" scoped>
.title{
  margin-bottom: 0 !important
}
.card{
  width: 100% !important
}
.description{
    overflow: scroll !important;
    max-height: 60px !important;
    text-align: center;
    margin-top: 5px;
}
</style>

