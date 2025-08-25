<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-a.color-primario.px-4.mb-5
      .row.m-0.align-items-center.justify-content-center
        .col-lg-9.com.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-4.mb-lg-0.mb-4.my-3.my-lg-0
            p.mb-4 El control de labores en la producción agrícola es un componente fundamental para garantizar la eficiencia, sostenibilidad y rentabilidad del sector agropecuario en Colombia. Este proceso abarca diversas etapas, entre ellas el monitoreo constante de las actividades en campo, el análisis de los resultados obtenidos y la elaboración de informes técnicos que permiten identificar desviaciones y proponer acciones correctivas. Estas prácticas son especialmente relevantes en un país con alta diversidad agroecológica y una fuerte dependencia de la agricultura como motor económico y social.
            p.mb-0 La implementación de un control riguroso permite a los productores y administradores agrícolas detectar a tiempo posibles problemas, optimizar el uso de recursos como el agua, los fertilizantes y la mano de obra, así como mejorar la trazabilidad de las operaciones agrícolas. En un contexto como el colombiano —marcado por variabilidad climática, condiciones edafológicas heterogéneas y retos logísticos—, el monitoreo sistemático se convierte en una herramienta estratégica para reducir pérdidas, anticipar riesgos y mejorar la productividad.
        .col-lg-3.col-md-6.col-9.mb-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    .cajon.color-primario.p-4.mb-4
      p.mb-0 El objetivo principal de este proceso es asegurar que las labores agrícolas se ejecuten conforme a los planes establecidos, y que cualquier desviación sea detectada y corregida oportunamente. De esta forma, el control de labores no solo facilita el cumplimiento de las metas productivas, sino que también promueve una gestión técnica y profesional del agro, alineada con principios de sostenibilidad, eficiencia y adaptación frente al cambio climático.
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.svg', alt='')
      .col-sm-12.col-lg-8.p-4.bg-color-2
          p.mb-0.mcus-2 Este enfoque metodológico y técnico fortalece la capacidad de los actores del sector agropecuario para implementar procesos efectivos de monitoreo y análisis, tomar decisiones fundamentadas y aplicar correctivos a tiempo. Así, se impulsa una cultura de mejora continua que contribuye a la consolidación de sistemas agrícolas más resilientes, competitivos y sostenibles en el contexto colombiano.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
