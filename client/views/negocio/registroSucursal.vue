<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Regristro Sucursal</h1>
          <div class="is-block">
            <form id="formulario" action="">
              <div class="control has-addons">
                  <input v-model='id_negocio' class="input is-small" type="number" placeholder="id negocio ">
                  <label class="label">
                    <span class="tag is-danger">id_negocio: Este campo es solo para pruebas</span>
                  </label>
              </div>
              <div class="control is-horizontal">
                <div class="control is-grouped">
                  <div class="control is-expanded">
                      <label class="label">Nombre Sucursal</label>
                      <input v-model='nombre' class="input" type="text" placeholder="Nombre Sucursal">
                  </div>
                  <div class="control is-expanded">
                      <label class="label">Encargado</label>
                      <input v-model='encargado' class="input" type="text" placeholder="Encargadro">
                  </div>
                  <div class="control">
                    <label class="label">Nº mesas</label>
                    <input v-model='tables' class="input" type="number" placeholder="lng">
                  </div>
                </div>
              </div>
              <div class="control is-horizontal">
                <div class="control is-grouped">
                  <div class="control is-expanded">
                      <label class="label">Usuario</label>
                      <input v-model='usuario' class="input" type="text" placeholder="usuario">
                  </div>
                  <div class="control is-expanded">
                      <label class="label">Contraseña</label>
                      <input v-model='password' class="input" type="password" placeholder="contraseña">
                  </div>
                </div>
              </div>
              <div class="control">
                  <label class="label">Descripción</label>
                  <textarea v-model='description' class="textarea" placeholder="descripcion de la sucrusal">
              </div>
              <div class="control is-horizontal">
                <div class="control is-grouped">
                  <div class="control is-expanded webkit-centered">
                    <label class="label">Fotografia</label>
                    <img class="image img-file-large" :src="photo">
                    <div class="fileUpload button is-outlined is-primary is-small">
                      <span>Seleccionar</span>
                      <file-base64 class="upload" :multiple="false" :done="getFiles"></file-base64>
                    </div>
                  </div>
                  <div class="control is-expanded webkit-centered">
                    <label class="label">Localización</label>
                    MAPA
                    <input v-model='location.lat' class="input" type="text" placeholder="lat">
                    <input v-model='location.long' class="input" type="text" placeholder="lng">
                  </div>
                </div>
              </div>
              <div class="has-text-centered">
                    <a @click='createSucursal()' class="button is-warning ">
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
      <!-- <pre>{{ $data }}</pre> -->
</template>
<script>
import fileBase64 from 'vue-file-base64'
export default {
  components: {
    fileBase64
  },
  data: function () {
    return {
      id_negocio: 1,
      nombre: '',
      encargado: '',
      usuario: '',
      password: '123',
      tables: 1,
      photo: '',
      description: '',
      formatTables: [],
      location: {
        lat: 0,
        long: 0
      }
    }
  },
  methods: {
    getFiles: function (files) {
      this.photo = files.base64
    },
    createSucursal: function () {
      this.generateTables()
      var dataForm = {
        id_negocio: this.id_negocio,
        nombre: this.nombre,
        encargado: this.encargado,
        usuario: this.usuario,
        password: this.password,
        tables: this.formatTables,
        photo: this.photo,
        description: this.description,
        location: {
          lat: this.location.lat,
          long: this.location.long
        }
      }
      console.log(dataForm)
      this.$http.post('registro/sucursal', dataForm).then(res => {
        this.$swal({
          title: 'Listo!',
          text: 'Limpiar el formulario?',
          type: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then(function (e) {
          this.cleanForm()
        }.bind(this), function (e) {})
      }).catch(err => {
        this.$swal('Algo salio mal :(', 'Intenta de nuevo', 'error')
        console.log(err)
      })
    },
    cleanForm: function () {
      document.getElementById('formulario').reset()
    },
    generateTables: function () {
      if (this.tables) {
        for (var i = 1; i <= this.tables; i++) {
          this.formatTables.push({ num_mesa: i, status: false })
        }
      }
    }
  }
}
</script>
<style lang="css" scoped>
</style>