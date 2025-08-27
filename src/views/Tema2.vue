<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Recomendación técnica
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Como parte esencial del proceso de seguimiento y evaluación en la producción agrícola, la emisión de recomendaciones técnicas basadas en datos recolectados durante el monitoreo resulta clave para la toma de decisiones informadas. Estas recomendaciones permiten corregir desviaciones detectadas, optimizar el uso de recursos y mejorar la eficiencia de las actividades en campo. Para ser efectivas, deben ser claras, realistas y adaptadas a las condiciones específicas del cultivo, la zona agroecológica y los objetivos definidos en el plan de trabajo. Además, deben priorizarse según su impacto técnico y factibilidad de aplicación.
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Análisis de resultados: paso clave para mejorar el desempeño agrícola
      p.mb-3(data-aos="fade-left") El análisis de resultados es una etapa fundamental dentro del plan de monitoreo agrícola. Su propósito es transformar los datos recolectados en información útil para valorar qué tan bien se están cumpliendo las metas, cómo ha sido el rendimiento del equipo y qué tan eficientes han sido las labores ejecutadas.
      p.mb-5(data-aos="fade-left") Este proceso puede comprenderse en tres pasos clave: 
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-11
          LineaTiempoE.color-acento-botones
              .row.justify-content-center.align-items-center(titulo="" subtitulo="")
                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/2.svg', alt='')
                  .col-sm-12.col-lg-8
                      h4 Comparar
                      p.mb-0 Se contrastan los indicadores obtenidos con las metas de desempeño y los datos de referencia definidos previamente. Esto permite determinar si los resultados están dentro de lo esperado, si hay desviaciones o si se superaron los objetivos.
              .row.justify-content-center.align-items-center(titulo="" subtitulo="")
                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/3.svg', alt='')
                  .col-sm-12.col-lg-8
                      h4 Interpretar
                      p.mb-0 Se identifican tendencias, problemas operativos, avances técnicos o condiciones externas que pudieron influir (como el clima o la disponibilidad de recursos). Aquí se analiza tanto lo cuantitativo (rendimiento, insumos, tiempos) como lo cualitativo (observaciones de campo, desempeño humano).
              .row.justify-content-center.align-items-center(titulo="" subtitulo="")
                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t2/4.svg', alt='')
                  .col-sm-12.col-lg-8
                      h4 Decidir
                      p.mb-0 A partir de los hallazgos, se formulan acciones correctivas, se ajustan procedimientos o se registran buenas prácticas para aplicar en futuros ciclos. Así, el análisis no solo corrige errores, sino que impulsa mejoras continuas.
      .cajon.color-secundario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 Este enfoque integral facilita la toma de decisiones basadas en evidencia, lo que mejora la gestión técnica y optimiza el desempeño del sistema productivo.
        p.mb-0 Además, el análisis de resultados fortalece las competencias del equipo responsable del monitoreo, promoviendo una gestión agrícola más eficiente, sostenible y enfocada en la mejora continua.      

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Identificación de necesidades de evaluaciones complementarias
      
      p.mb-3(data-aos="fade-left") Durante el monitoreo agrícola, pueden surgir situaciones que los datos recolectados de forma rutinaria no logran explicar del todo. En estos casos, se recurre a evaluaciones complementarias, cuyo objetivo es obtener información más detallada para comprender mejor lo que está ocurriendo en el sistema productivo.
      p.mb-5(data-aos="fade-left") Estas evaluaciones no se aplican de forma permanente, pero resultan clave cuando se presentan:
      .row.justify-content-center.mb-5.bg-fondo-2.align-items-center.pcus-3(data-aos="fade-left")
        .col-sm-12.col-lg-5
          .bg-color-7.p-4.br-3
            ul.lista-ul.lista-ul--separador.mb-0
              li.d-flex
                i.fas.fa-check.bg-color-4 
                p.mb-0 Anomalías técnicas que no se logran interpretar con los datos disponibles.

              li.d-flex
                i.fas.fa-check.bg-color-4 
                p.mb-0 Desviaciones repetitivas en el cumplimiento de metas.

              li.d-flex
                i.fas.fa-check.bg-color-4 
                p.mb-0 Dudas sobre decisiones agronómicas que requieren mayor sustento.

              li.d-flex
                i.fas.fa-check.bg-color-4 
                p.mb-0 Necesidad de explorar impactos económicos, sociales o ambientales.

            
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png', alt='')  
      p.mb-5(data-aos="fade-left") Según los requerimientos del caso, estas evaluaciones pueden centrarse en distintos ámbitos del sistema productivo, tales como:
      .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima1.p-4.br-1(src='@/assets/curso/temas/t2/6.svg')
            h4.text-center.mb-3 Técnicos
            p.mb-0.text-center Profundización en análisis de suelo, diagnóstico de plagas, evaluación del estado fisiológico del cultivo.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima2.p-4.br-1(src='@/assets/curso/temas/t2/7.svg')
            h4.text-center.mb-3 Económicos
            p.mb-0.text-center Análisis de costos y beneficios, eficiencia en el uso de insumos, rentabilidad de las prácticas implementadas.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima3.p-4.br-1(src='@/assets/curso/temas/t2/8.svg')
            h4.text-center.mb-3 Ambientales
            p.mb-0.text-center Impacto sobre recursos naturales, uso eficiente del agua, manejo sostenible del suelo.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima4.p-4.br-1(src='@/assets/curso/temas/t2/9.svg')
            h4.text-center.mb-3 Sociales
            p.mb-0.text-center Percepción del equipo de trabajo, adopción de nuevas tecnologías, bienestar y condiciones laborales.
      .bg-color-6.p-4.mb-5(data-aos="fade-left")
        p.mb-0 El uso de estas herramientas complementarias permite enriquecer el análisis, afinar las decisiones técnicas y garantizar una gestión agrícola más precisa, contextualizada y orientada a la mejora continua.
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 9.] Ejemplo de identificación de necesidades de evaluaciones complementarias
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="La tabla presenta ejemplos de situaciones detectadas durante el monitoreo agrícola que requieren evaluaciones complementarias. Estas evaluaciones permiten profundizar en el análisis técnico para identificar causas específicas de los problemas, ajustar decisiones y mejorar la gestión productiva. Su aplicación se adapta al tipo de anomalía observada, fortaleciendo la precisión de las intervenciones en campo.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Situación detectada
              th Evaluación complementaria requerida
          tbody
            tr
              td Rendimiento muy por debajo del esperado.
              td Análisis detallado de fertilidad del suelo o calidad de semilla.

            tr
              td Aumento inesperado de plagas o enfermedades.
              td Monitoreo fitosanitario intensivo y diagnóstico entomológico.

            tr
              td Variabilidad en el uso de agua en diferentes sectores del predio.
              td Evaluación de eficiencia del sistema de riego.

            tr
              td Bajo desempeño del personal en tareas específicas.
              td Evaluación de necesidades de capacitación o rediseño de tareas.

            tr
              td Impacto ambiental por uso excesivo de agroquímicos.
              td Estudio de huella química o análisis de residuos.
      
      
      .cajon.color-secundario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 Reconocer a tiempo la necesidad de evaluaciones complementarias permite profundizar el análisis técnico, aplicar medidas correctivas más precisas y fortalecer el manejo integral del sistema agrícola. Asimismo, fomenta una cultura de mejora continua sustentada en la evidencia, lo cual es fundamental para el éxito y la sostenibilidad del plan de trabajo.
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Planes para la comunicación y el uso de la información
      p.mb-3(data-aos="fade-left") Una vez que la información generada a través del monitoreo ha sido recopilada, analizada y validada, es esencial implementar un plan claro de comunicación y uso de los datos. El objetivo es asegurar que los resultados obtenidos se traduzcan en decisiones informadas, mejoras operativas y retroalimentación efectiva para todo el equipo de trabajo.
      p.mb-5(data-aos="fade-left") Este plan debe contemplar:

      .row.justify-content-center(data-aos="fade-left")
            .col-sm-12.col-md-6.col-lg-3
              .tarjeta-numerada.color-primario.px-4.py-4.hcard-2.mb-4
                .tarjeta-numerada__numero
                  .h2 1
                h4.text-center Qué información se va a comunicar
                p.text-center Datos clave, hallazgos relevantes y conclusiones.

            .col-sm-12.col-md-6.col-lg-3
              .tarjeta-numerada.color-secundario.px-4.py-4.hcard-2.mb-4
                .tarjeta-numerada__numero
                  .h2 2
                h4.text-center A quién va dirigid
                p.text-center Productores, técnicos, supervisores, instituciones u otros actores involucrados, según su nivel de responsabilidad.
            .col-sm-12.col-md-6.col-lg-3
              .tarjeta-numerada.color-acento-contenido.px-4.py-4.hcard-2.mb-4
                .tarjeta-numerada__numero
                  .h2 3
                h4.text-center Cuándo y cómo se comunicará
                p.text-center Frecuencia y medios adecuados (reuniones, informes, plataformas digitales, entre otros).

            .col-sm-12.col-md-6.col-lg-3
              .tarjeta-numerada.color-acento-botones.px-4.py-4.hcard-2.mb-4
                .tarjeta-numerada__numero
                  .h2 4
                h4.text-center Cómo se utilizará la información
                p.text-center Para ajustar el plan de trabajo, introducir mejoras técnicas, rediseñar estrategias productivas o tomar decisiones correctivas.

      .bg-color-6.p-4.mb-5(data-aos="fade-left")
        p.mb-0 Una comunicación efectiva no solo fortalece el trabajo en equipo, sino que también convierte los datos en herramientas de gestión que impulsan la eficiencia y sostenibilidad del sistema agrícola.
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 10.] Aspectos para los planes de comunicación
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Presenta los aspectos clave para estructurar un plan de comunicación efectivo en el contexto agrícola. Define la audiencia objetivo, el tipo de información a comunicar, los formatos más adecuados, la frecuencia de entrega, los responsables de transmitir los datos y el uso previsto de la información. Este enfoque asegura que los hallazgos del monitoreo lleguen de forma oportuna y pertinente a todos los actores involucrados, facilitando la toma de decisiones, la implementación de mejoras y la retroalimentación continua.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Aspecto
              th Descripción
          tbody
            tr
              td Audiencia objetivo
              td Personal técnico, operarios de campo, aprendices, coordinadores, aliados.

            tr
              td Tipo de información
              td Indicadores clave, alertas, avances, hallazgos críticos, recomendaciones.

            tr
              td Formatos de presentación
              td Informes escritos, presentaciones orales, boletines, carteleras, aplicaciones.

            tr
              td Frecuencia de comunicación
              td Diaria (informes operativos), semanal (reuniones técnicas), mensual (análisis).

            tr
              td Responsables de comunicar
              td Supervisor de campo, técnico líder, coordinador del plan de trabajo.

            tr
              td Uso previsto de la información
              td Ajustes al cronograma, toma de decisiones, acciones correctivas, capacitación.

      .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 Una comunicación eficiente convierte los datos en acciones concretas, al facilitar el intercambio de aprendizajes, la prevención de errores, la documentación de buenas prácticas y el fortalecimiento del trabajo en equipo. Además, promueve el desarrollo de competencias clave como la gestión de la información, la colaboración efectiva y el liderazgo técnico, fundamentales para una gestión agrícola más estratégica y sostenible.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Medidas correctivas

      .row.justify-content-center.align-items-center.mb-5.bg-color-3(data-aos="fade-left")
        .col-sm-12.col-lg-5.d-none.d-lg-block.pcus-4
          img(src='@/assets/curso/temas/t2/10.png', alt='')
        .col-sm-12.col-lg-7.py-2.px-4
            p.mb-2 Las medidas correctivas son acciones específicas que se implementan como respuesta a desviaciones, errores o fallos detectados durante el monitoreo de las actividades agrícolas. Su propósito es corregir a tiempo los problemas identificados, minimizar sus efectos negativos y asegurar el cumplimiento de los objetivos establecidos en el plan de trabajo.
            p.mb-0 Estas medidas deben ser oportunas, técnicamente viables y adaptadas al contexto del cultivo, al tipo de desviación y a los recursos disponibles. Además, deben registrarse y evaluarse para verificar si fueron efectivas o si requieren ajustes posteriores.
      p.mb-5(data-aos="fade-left") Proceso para la aplicación de medidas correctivas:
      .row.justify-content-center.mb-5.align-items-center(data-aos="fade-left")
        .col-sm-12.col-lg-7.mb-0
          ul.lista-ul.lista-ul--separador.mb-0
            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 #[b Detección del problema:] a través del monitoreo y análisis de resultados.

            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 #[b Análisis de la causa:] identificar si se trata de una falla técnica, humana, climática, organizativa, etc.

            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 #[b Diseño de la acción correctiva:] establecer una solución específica, medible y realista.

            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 #[b Implementación:] aplicar la medida dentro de un plazo definido.

            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 #[b Seguimiento:] verificar si la acción fue eficaz y prevenir la recurrencia.
  
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/11.png', alt='')

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 11.] Ejemplo de medidas correctivas
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Presenta ejemplos de medidas correctivas aplicables ante situaciones críticas detectadas durante el monitoreo agrícola. Cada problema identificado se asocia con una acción específica, un responsable designado y un plazo de ejecución, lo cual permite una respuesta oportuna y organizada. Este enfoque contribuye a mantener la eficiencia operativa del sistema productivo y a prevenir impactos negativos sobre el rendimiento del cultivo.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Problema detectado
              th Medida correctiva propuesta
              th Responsable
              th Plazo de ejecución
          tbody
            tr
              td Retraso en la aplicación de fertilizantes.
              td Reprogramar la labor y reforzar la capacitación del personal operativo.
              td Técnico agrónomo.
              td 24 horas

            tr
              td Baja eficiencia en el uso del agua.
              td Revisar y reparar el sistema de riego por sectores.
              td Encargado de riego.
              td 3 días

            tr
              td Alta infestación de plagas.
              td Aplicar control fitosanitario y aumentar frecuencia del monitoreo.
              td Técnico en sanidad vegetal.
              td 48 horas

            tr
              td Bajo rendimiento en actividades manuales.
              td Redistribuir tareas y ajustar número de jornales por hectárea.
              td Supervisor de campo.
              td 1 semana



      .bg-color-6.p-4.mb-5(data-aos="fade-left")
        p.mb-0 La aplicación sistemática de medidas correctivas contribuye a optimizar el desempeño agrícola, minimizar pérdidas y fortalecer la sostenibilidad del sistema productivo. Asimismo, promueve una toma de decisiones fundamentada en evidencia y fomenta una cultura de mejora continua, responsabilidad técnica y compromiso entre todos los actores involucrados en el proceso.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Elaboración de informes

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/12.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 La elaboración de informes representa la fase final del proceso de monitoreo, en la cual se consolida, organiza y comunica la información recolectada, analizada y procesada durante la ejecución del plan de trabajo agrícola. Estos informes permiten documentar los avances, evaluar el cumplimiento de las metas, respaldar decisiones técnicas y dejar evidencia verificable de las actividades realizadas.
          p.mb-0 Un informe bien estructurado debe presentar la información de manera clara, objetiva, precisa y ordenada, utilizando un lenguaje técnico adecuado. Siempre que sea posible, debe incluir gráficos, tablas, fotografías y recomendaciones. Además, debe facilitar la toma de decisiones correctivas o preventivas y servir como referencia para futuras etapas del proceso productivo.

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 12.] Contenido que debe llevar el informe
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Presenta los componentes esenciales que debe incluir un informe técnico agrícola, desde la introducción hasta los anexos. Cada sección permite organizar y comunicar de forma clara los objetivos, resultados, análisis y acciones correctivas del proceso de monitoreo, facilitando así una gestión eficiente y basada en evidencias.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Sección del informe
              th Contenido descriptivo
          tbody
            tr
              td Introducción
              td Breve descripción del cultivo, plan de trabajo, objetivos del monitoreo.

            tr
              td Metodología de recopilación
              td Técnicas, herramientas, frecuencias y responsables utilizados para recolectar la información.

            tr
              td Resultados obtenidos
              td Presentación de indicadores, metas alcanzadas, desviaciones, gráficos comparativos.

            tr
              td Análisis técnico
              td Interpretación de resultados, causas de problemas, desempeño operativo.

            tr
              td Recomendaciones técnicas
              td Acciones sugeridas para corregir, mejorar o ajustar las labores.

            tr
              td Medidas correctivas aplicadas
              td Acciones implementadas con su seguimiento y resultados.

            tr
              td Conclusiones
              td Resumen general del estado del cultivo y cumplimiento del plan.

            tr
              td Anexos
              td Fotografías, formatos diligenciados, bitácoras, registros, mapas, etc.
      .cajon.color-secundario.p-4.mb-0(data-aos="fade-left")
        p.mb-0 La elaboración sistemática de informes fortalece la gestión agrícola basada en la evidencia, mejora la trazabilidad del proceso productivo y proporciona insumos valiosos para capacitaciones, auditorías técnicas y la toma de decisiones estratégicas. Además, contribuye al desarrollo de competencias técnicas en documentación, análisis crítico y comunicación profesional, esenciales para el fortalecimiento de capacidades en contextos de formación y en el ejercicio técnico del sector agropecuario.
  </template>

<script>
export default {
  name: 'Tema1',
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
