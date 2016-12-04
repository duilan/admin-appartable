<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Atender Reserva</p>
          <p class="subtitle"> <a href="./#/reservacion/remota"><i class="fa fa-qrcode"></i> Atender</a></p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Mesas</p>
          <p class="subtitle">30</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Reservas</p>
          <p class="subtitle">120</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Sucursales</p>
          <p class="subtitle">22</p>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Menu</h4>
          <div class="content">
            
          </div>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Grafica</h4>
          <div class="content">
            <chart :type="'bar'" :data="chartData"></chart>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'

export default {
  components: {
    Chart
  },
  data () {
    return {
      data: [300, 50, 100]
    }
  },
  computed: {
    chartData () {
      return {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          data: this.data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      }
    }
  },
  mounted () {
    this.data.forEach((item, i) => {
      this.data.splice(i, 1, Math.ceil(Math.random() * 1000))
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
