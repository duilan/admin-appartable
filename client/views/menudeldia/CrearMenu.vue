<template>
  <div>
    <!-- <pre>
      {{$data}}
    </pre> -->
    <div class="tile is-ancestor">
      <div class="tile is-parent is-5">
        <article class="tile is-child box">
          <h1 class="title">Regristrar Insumo</h1>
          <div class="is-block">
            <div class="notification is-danger" v-if="!isValid">
              <ul>
                <li v-show="!rulesValid.name">Escriba un <b>nombre</b></li>
                <li v-show="!rulesValid.category">Eliga una <b>categoria</b></li>
                <li v-show="!rulesValid.price">El <b>precio</b> debe ser mayor a 0</li>
                <li v-show="!rulesValid.description">Escriba una <b>descripción</b></li>
              </ul>
            </div>
            <form @submit.prevent="addInsumo" method="POST">
              <div class="control">
                  <label class="label">Nombre</label>
                  <input v-model="insumo.name" class="input" type="text" placeholder="Nombre">
              </div>
              <div class="control">
                <label class="label">Categoria</label>
                <p class="select is-fullwidth">
                  <select v-model="insumo.category">
                    <option v-for="option in insumo.catergoryOptions" v-bind:value="option.value">
                        {{ option.text }}
                      </option
                  </select>
                </p>
              </div>
              <div class="control">
                  <label class="label">Precio</label>
                  <input v-model.number="insumo.price" class="input" type="number" placeholder="0.00">
              </div>
              <div class="control is-expanded webkit-centered">
                <label class="label">Fotografia</label>
                <img class="image is-128x128" :src="insumo.photo" style="">
                <div class="fileUpload button is-outlined is-primary is-small">
                  <span>Seleccionar</span>
                  <file-base64 class="upload" :multiple="false" :done="getFiles"></file-base64>
                </div>
              </div>
              <div class="control">
                <label class="label">Descripción</label>
                <textarea v-model="insumo.description" class="textarea" placeholder="Descripcion del insumo"></textarea>
              </div>
              <div class="has-text-centered">
                    <button :disabled="!isValid" type="submit" class="button is-warning ">
                        <span class="icon is-small">
                            <i class="fa fa-check"></i>
                        </span>
                        <span>Guardar</span>
                    </button>
              </div>
            </form>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-7">
        <article class="tile is-child box">
          <h1 class="title">Modificar Insumo</h1>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
                <tr>
                  <th></th>
                  <th>Nombre</th>
                  <th>categoria</th>
                  <th>Precio</th>
                  <th>descripcion</th>
                  <th colspan="3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sushi</td>
                  <td>Platillo</td>
                  <td>$ 10.15</td>
                  <td>Lorem ipsum dolor sit amet</td>
                  <td>
                      <span class="is-icon is-small"><i class="fa fa-photo"></i></span>
                  </td>
                  <td>
                      <span class="is-icon is-small"><i class="fa fa-edit"></i></span>
                  </td>
                  <td>
                      <span class="is-icon is-small"><i class="fa fa-trash-o"></i></span>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sushi</td>
                  <td>Platillo</td>
                  <td>$ 10.15</td>
                  <td>Lorem ipsum dolor sit amet</td>
                  <td>
                      <span class="is-icon is-small"><i class="fa fa-photo"></i></span>
                  </td>
                  <td>
                      <span class="is-icon is-small"><i class="fa fa-edit"></i></span>
                  </td>
                  <td>
                      <span class="is-icon is-small"><i class="fa fa-trash-o"></i></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
  </div>
</template>
<script>
import fileBase64 from 'vue-file-base64'

export default {
  components: {
    fileBase64
  },
  data () {
    return {
      insumo: {
        name: '',
        category: '',
        price: '',
        photo: '',
        description: '',
        catergoryOptions: [
          { text: 'Platillo', value: 'platillo' },
          { text: 'Postre', value: 'postre' },
          { text: 'Bedida', value: 'bebida' }
        ]
      }
    }
  },
  created: function () {
    // CARGA DATOS EN TABLA
  },
  methods: {
    // METODO PARA GUARDAR INSUMO NUEVO
    addInsumo: function () {
      console.log('HTTP POST REGISTRAR INSUMO')
    },
    getFiles: function (files) {
      this.insumo.photo = files.base64
    }
  },

  computed: {
    // REGLAS DE VALIDACION
    rulesValid: function () {
      return {
        name: !!this.insumo.name.trim(),
        category: !!this.insumo.category,
        price: !!this.insumo.price,
        description: !!this.insumo.description.trim()
      }
    },
    // VALIDACION DE TODOS LOS CAMPOS
    isValid: function () {
      var valid = this.rulesValid
      return Object.keys(valid).every(function (key) {
        return valid[key]
      })
    }
  }
}
</script>
<style lang="scss">
</style>
