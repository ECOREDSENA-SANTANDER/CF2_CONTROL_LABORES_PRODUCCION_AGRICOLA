<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un organigrama que resume los aspectos clave del proceso de monitoreo de las labores agrícolas. Este proceso debe llevarse a cabo con frecuencia y rigurosidad, teniendo claridad sobre los tipos de monitoreo existentes y los métodos aplicables. Con base en ello, se elabora un plan de monitoreo que servirá como guía para la supervisión del plan de trabajo. Una vez iniciado el monitoreo, los resultados obtenidos deben ser analizados y, si es necesario, se deben implementar acciones correctivas. Todo este proceso debe documentarse adecuadamente para generar un historial de producción útil para la toma de decisiones futuras.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La supervisión de labores agrícolas implica un proceso estructurado en el que el monitoreo desempeña un papel central. Este proceso inicia con la identificación de los tipos y métodos de monitoreo adecuados, seguidos por la elaboración de un plan de monitoreo que permita observar de forma sistemática las condiciones del cultivo. A partir de los datos recolectados, se realiza un análisis de resultados que facilita la toma de medidas correctivas, en caso de ser necesarias. Estas acciones permiten emitir recomendaciones técnicas fundamentadas, que posteriormente se consolidan en la elaboración de informes. Este ciclo garantiza un control técnico continuo y efectivo, promoviendo prácticas agrícolas más eficientes y sostenibles.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
