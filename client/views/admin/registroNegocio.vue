<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Regristrar Negocio</h1>
          <div class="is-block">
            <form id="formulario" action="">
              <div class="control is-horizontal">
                <div class="control is-grouped">
                  <p class="control is-expanded">
                    <label class="label">Nombre Completo</label>
                    <input v-model='fullName' class="input" type="text" placeholder="Nombre Completo">
                  </p>
                  <p class="control is-expanded">
                   <label class="label">Nombre Corto</label>
                    <input v-model='smallName' class="input" type="text" placeholder="Nombre Corto">
                  </p>
                  <p class="control">
                    <label class="label">RFC</label>
                    <input v-model='rfc' class="input" type="text" placeholder="RFC">
                  </p>
                </div>
              </div>
              <div class="control is-horizontal">
                <div class="control is-grouped">
                  <p class="control is-expanded">
                    <label class="label">Nombre Enrcagado</label>
                    <input v-model='encargado' class="input" type="text" placeholder="Nombre Encargado">
                  </p>
                  <p class="control is-expanded">
                    <label class="label">Usuario</label>
                    <input v-model='usuario' class="input" type="text" placeholder="Usuario">
                  </p>
                  <p class="control">
                  <label class="label">Contraseña</label>
                    <input v-model='password' class="input" type="password" placeholder="Contraseña">
                  </p>
                </div>
              </div>
              <div class="control is-horizontal">
                <div class="control is-grouped">
                  <div class="control is-expanded webkit-centered">
                    <label class="label">Logotipo</label>
                    <img class="image is-128x128 img-file-circle" :src="logo" style="">
                    <div class="fileUpload button is-outlined is-primary is-small">
                      <span>Seleccionar</span>
                      <file-base64 class="upload" :multiple="false" :done="getFiles"></file-base64>
                    </div>
                  </div>
                  <div class="control is-expanded webkit-centered">
                    <label class="label">Localización</label>
                    MAP
                    <input v-model='location.lat' class="input" type="text" placeholder="lat">
                    <input v-model='location.long' class="input" type="text" placeholder="lng">
                  </div>
                </div>
              </div>
              <div class="has-text-centered">
                <a @click='createNegocio()' class="button is-warning ">
                  <span class="icon is-small">
                    <i class="fa fa-save"></i>
                  </span>
                  <span>Guardar</span>
                </a>
              </div>
            </form>
          </div>
        </article>
      </div>
    </div>
    <!-- <pre>
      {{ $data }}
    </pre> -->
  </div>
</template>

<script>
import fileBase64 from 'vue-file-base64'
export default {
  components: {
    fileBase64
  },
  data: function () {
    return {
      fullName: '',
      smallName: '',
      rfc: '',
      logo: '',
      location: {
        lat: 0,
        long: 0
      },
      encargado: '',
      usuario: '',
      password: '123'
    }
  },
  methods: {
    getFiles: function (files) {
      this.logo = files.base64
    },
    createNegocio: function () {
      var dataForm = {
        fullName: this.fullName,
        smallName: this.smallName,
        rfc: this.rfc,
        logo: this.logo,
        location: {
          lat: this.location.lat,
          long: this.location.long
        },
        encargado: this.encargado,
        usuario: this.usuario,
        password: this.password
      }
      console.log(dataForm)
      this.$http.post('registro/negocio', dataForm).then(res => {
        this.$swal('Listo!', res.data.message, 'success')
        this.cleanForm()
      }).catch(err => {
        this.$swal('Algo salio mal :(', 'Intenta de nuevo', 'error')
        console.log(err)
      })
    },
    cleanForm: function () {
      document.getElementById('formulario').reset()
    }
  },
  computed: {
  }
}
</script>
<style lang="css" >
</style>
