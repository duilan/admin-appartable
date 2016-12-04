

export default {
  saveNegocio: function (dataForm) {
    console.log('algomas')
    this.$http.post('registro/negocio', dataForm).then(res => {
        swal('Listo!', res.data.message, 'success')
        this.cleanForm()
      }).catch(err => {
        swal(':(', err.data.message, 'error')
      })
  }
}
