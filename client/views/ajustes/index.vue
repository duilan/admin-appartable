  <template>
    <div>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <article class="tile is-child box">
            <h4 class="title">Mesas</h4>
            <!-- {{ $data | json }} -->
              <form action="">
                  <label class="label">Numero de Mesas</label>
                  <p class="control">
                      <input v-model="mesas" class="input" type="number" placeholder="Nº Mesas en la sucursal">
                  </p>
                  <p class="has-text-centered ">
                      <a @click="guardarMesas()" class="button is-warning ">
                          <span class="icon is-small">
                              <i class="fa fa-check"></i>
                          </span>
                          <span>Guardar</span>
                      </a>
                  </p>
              </form>
          </article>
        </div>
      </div>
    </div>
  </template>
  <script>
  var urlAPI = '//api.randomuser.me/?results=1&callback=randomuserdata'
  export default {
    name: 'index',
    data: function () {
      return {
        mesas: 30
      }
    },
    created: function () {
      this.getMesas()
    },
    methods: {
      guardarMesas: function () {
        console.log(this.mesas)
        this.getMesas()
      },
      getMesas: function () {
        this.$http.jsonp(urlAPI, {xhr: { withCredentials: false }}).then(respuesta => {
          console.log(respuesta)
          this.mesas = respuesta.data.results[0].location.postcode
        }).catch(err => {
          console.log(err)
        })
      },
      updateMesas: function () {
      }
    }
  }
  </script>
  <style lang="scss">
  .table-responsive {
    display: block;
    width: 100%;
    min-height: .01%;
    overflow-x: auto;
  }
  </style>
