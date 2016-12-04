<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <div class="wysiwyg">
          <h1>Reservas desde el negocio</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis.</p>
        </div>
      </div>
    </div>
          <back-to-top target=".is-child .wysiwyg">
            <button class="button">UP</button>
          </back-to-top>
  </div>
</template>

<script>
import { BackToTop } from 'vue-bulma-jump'

export default {
  components: {
    BackToTop
  }
}
</script>
