<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Monitoreo
      
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El propósito principal es guiar la implementación de un plan de trabajo, asegurando que se cumplan los objetivos establecidos y detectando cualquier obstáculo que pueda comprometer los resultados esperados. En la agricultura, el monitoreo se convierte en una herramienta clave para mantener el desarrollo saludable de los cultivos y la eficiencia en las labores en campo. Mediante la observación constante y el seguimiento de factores esenciales, (como las condiciones del suelo, la sanidad vegetal, el clima y la utilización de insumos) los productores pueden fundamentar sus decisiones en datos reales, maximizando la productividad y minimizando posibles riesgos.
      
      
      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.titcus-1 Gestión y análisis de datos para el monitoreo de labores agrícolas.
                p.mb-0 Conoce cómo los datos optimizan el trabajo en el campo.Conoce cómo los datos optimizan el trabajo en el campo.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=1vlUxgkzetg" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-video
      
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de monitoreo
      
      p.mb-5(data-aos="fade-left") En el mundo agrícola, ¡monitorear lo que pasa en el campo es clave para tener cultivos sanos y productivos! Existen varios tipos de monitoreo, y cada uno cumple una función importante:
      
      .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima1.p-4.br-1(src='@/assets/curso/temas/t1/3.svg')
            h4.text-center.mb-3 Monitoreo agronómico
            p.mb-0.text-center Se enfoca en cómo crece y se desarrolla el cultivo, ayudando a tomar decisiones sobre riegos, fertilización y cosecha en el momento justo.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima2.p-4.br-1(src='@/assets/curso/temas/t1/4.svg')
            h4.text-center.mb-3 Monitoreo climático
            p.mb-0.text-center Registra el clima (como temperatura, lluvia y viento) para anticiparse a posibles riesgos y planificar mejor las labores agrícolas.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima3.p-4.br-1(src='@/assets/curso/temas/t1/5.svg')
            h4.text-center.mb-3 Monitoreo fitosanitario
            p.mb-0.text-center Permite detectar a tiempo la presencia de plagas o enfermedades, evitando daños graves en los cultivos.
        .col-lg-3.col-md-6.col-10.mb-lg-0.mb-4
          .overflow-hidden.h-100.card-cus.p-3
            .row.justify-content-center.align-items-center.mb-0.d-none.d-lg-block
              .col-6.mb-4.my-4.m-auto
                img.ima4.p-4.br-1(src='@/assets/curso/temas/t1/6.svg')
            h4.text-center.mb-3 Monitoreo de recursos
            p.mb-0.text-center Controla cómo se usan el agua, los fertilizantes y otros insumos, promoviendo una agricultura más eficiente y sostenible.
      
      .cajon.color-secundario.p-4.mb-5
        p.mb-0 Cada uno de estos monitoreos aporta información valiosa para tomar mejores decisiones en el campo. ¡Conocerlos es fundamental para cualquier persona que quiera trabajar en el agro del futuro!
      
      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Monitoreo agronómico
      
      
      .row.justify-content-center.align-items-center.bg-color-3.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-5.d-none.d-lg-block.pcus-1
          img(src='@/assets/curso/temas/t1/7.png', alt='')
        .col-sm-12.col-lg-7.p-4
            p.mb-4 El monitoreo agronómico es un proceso técnico que permite observar, medir y registrar sistemáticamente las condiciones físicas, biológicas y técnicas que influyen en el desarrollo de los cultivos. Su objetivo principal es evaluar de manera continua la respuesta del cultivo frente a las prácticas agrícolas implementadas, con el fin de optimizar el manejo agronómico, prevenir problemas productivos y tomar decisiones fundamentadas en datos reales.
            p.mb-0 Este proceso se lleva a cabo directamente en el campo, de manera periódica, e incluye variables clave como la fenología del cultivo, el estado nutricional, la presencia de plagas y enfermedades, la humedad del suelo, el uso de insumos y la calidad de las labores ejecutadas. Como parte del plan de trabajo agrícola, el monitoreo agronómico permite anticiparse a riesgos, mejorar el rendimiento y reducir costos innecesarios.


      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 1.] Componentes del monitoreo agronómico
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="El monitoreo agronómico permite evaluar el estado del cultivo en aspectos clave como su desarrollo, nutrición, plagas, suelo, clima y labores agrícolas. Cada uno se observa con una frecuencia específica para tomar decisiones oportunas y mejorar el rendimiento del campo.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Área evaluada
              th Aspectos observados
              th Frecuencia recomendada
          tbody
            tr
              td Desarrollo fenológico
              td Etapas del cultivo (germinación, floración, llenado, etc.).
              td Semanal.

            tr
              td Estado nutricional
              td Coloración de hojas, síntomas de deficiencia o exceso.
              td Quincenal / según fase.

            tr
              td Plagas y enfermedades
              td Presencia, tipo, nivel de daño, zonas afectadas.
              td Semanal / umbral crítico.

            tr
              td Condición del suelo
              td Humedad, textura, compactación, materia orgánica.
              td Cada ciclo o por evento.

            tr
              td Condiciones climáticas
              td Temperatura, lluvias, radiación, viento.
              td Diario.

            tr
              td Calidad de labores
              td Eficiencia en siembra, riego, fertilización, cosecha.
              td Después de cada actividad.



      .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-0 El monitoreo agronómico permite ajustar las prácticas de manejo de forma precisa y oportuna, asegurando un desarrollo óptimo del cultivo y reduciendo el riesgo de pérdidas. Además, esta actividad fortalece la capacidad de observación técnica, el pensamiento analítico y la toma de decisiones agronómicas fundamentadas.


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Monitoreo climático


      .bloque-texto-a.color-primario.px-4.py-5.mb-5(data-aos="fade-left")
        .row.m-0.align-items-center.justify-content-center
          .col-lg-9.com.mb-0.mb-lg-0
            .bloque-texto-a__texto.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-4 El monitoreo climático es el seguimiento sistemático de las condiciones atmosféricas que influyen directamente en el desarrollo de los cultivos, como la temperatura, precipitación, humedad relativa, velocidad del viento, radiación solar y eventos extremos. Este tipo de monitoreo permite anticiparse a variaciones climáticas que puedan afectar negativamente la producción agrícola, y facilita la toma de decisiones agronómicas más acertadas.
              p.mb-0 El clima es uno de los factores más determinantes en el rendimiento y sanidad de los cultivos. Por ello, el monitoreo climático se integra como una herramienta clave en los planes de trabajo agrícola, permitiendo ajustar el calendario de labores (siembra, riego, fertilización, cosecha), prevenir pérdidas y adoptar prácticas de adaptación frente al cambio climático.
          .col-lg-3.col-md-6.col-9.mb-0.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/8.png', alt='')


      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 2.] Principales variables a monitorear
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Las variables climáticas como temperatura, precipitación, humedad y radiación solar son claves en el desarrollo del cultivo. Su monitoreo permite prevenir riesgos, optimizar el riego y tomar decisiones agronómicas acertadas.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Variable climática
              th Unidad de medida
              th Importancia agronómica
          tbody
            tr
              td Temperatura
              td °C
              td Influye en la germinación, floración, crecimiento y maduración.

            tr
              td Precipitación
              td Mm
              td Determina la necesidad de riego o riesgo de encharcamiento.

            tr
              td Humedad relativa
              td %
              td Afecta la incidencia de enfermedades y la transpiración vegetal.

            tr
              td Radiación solar
              td W/m² o Lux
              td Relacionada con la fotosíntesis y desarrollo del cultivo.

            tr
              td Velocidad del viento
              td km/h o m/s
              td Puede causar daños mecánicos y afectar la polinización.

            tr
              td Evapotranspiración
              td mm/día
              td Guía para programación del riego.


      p.mb-5(data-aos="fade-left") Estas son algunas fuentes y herramientas utilizadas para el monitoreo climático:
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-6
          .row
            .col-sm-12.col-md-6.col-lg-6
              .tarjeta-numerada.color-primario.p-5.hcard-1.mb-4
                .tarjeta-numerada__numero
                  .h2 1
                p.text-center Estaciones meteorológicas propias o de red pública (IDEAM, apps climáticas).

            .col-sm-12.col-md-6.col-lg-6
              .tarjeta-numerada.color-secundario.p-5.hcard-1.mb-4
                .tarjeta-numerada__numero
                  .h2 2
                p.text-center Sensores automáticos en campo.
          .row
            .col-sm-12.col-md-6.col-lg-6
              .tarjeta-numerada.color-acento-contenido.p-5.hcard-1.mb-4
                .tarjeta-numerada__numero
                  .h2 3
                p.text-center Aplicaciones móviles y plataformas de pronóstico agrícola.

            .col-sm-12.col-md-6.col-lg-6
              .tarjeta-numerada.color-acento-botones.p-5.hcard-1.mb-4
                .tarjeta-numerada__numero
                  .h2 4
                p.text-center Observación directa y registros manuales diarios.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.png', alt='')
      
      
      .bg-color-2.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/10.svg")
          .col
             p.mb-0 El monitoreo climático continuo contribuye a reducir los riesgos asociados al clima, aumentar la eficiencia productiva y fortalecer la sostenibilidad del sistema agrícola. Asimismo, permite capacitar a aprendices y técnicos en el uso de tecnologías aplicadas y en la interpretación de datos climáticos como herramienta clave para la toma de decisiones en la gestión agronómica.
             
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Monitoreo fitosanitario
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-4 Es el proceso de observación, detección y registro sistemático de plagas, enfermedades y malezas que puedan afectar la sanidad y el rendimiento del cultivo. Este tipo de monitoreo tiene como objetivo identificar oportunamente los agentes nocivos, evaluar su nivel de incidencia y determinar si es necesario aplicar medidas de control.
          p.mb-0 El enfoque del monitoreo fitosanitario está basado en principios de manejo integrado, lo que implica observar el cultivo en distintas etapas de su desarrollo, registrar síntomas visibles, cuantificar daños y establecer umbrales de acción. Esto permite minimizar el uso indiscriminado de agroquímicos y favorecer decisiones más sostenibles y efectivas.



      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 3.] Aspectos evaluados en el monitoreo fitosanitario
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="Presenta los principales aspectos a tener en cuenta durante el monitoreo fitosanitario en un cultivo. Se destacan cuatro elementos clave: plagas, enfermedades, malezas y condiciones predisponentes, junto con los parámetros específicos a registrar y la frecuencia recomendada para su evaluación. Este tipo de seguimiento permite detectar oportunamente problemas sanitarios, facilitando la toma de decisiones para el manejo integrado y la protección del cultivo.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Elemento observado
              th Aspectos a registrar
              th Frecuencia recomendada
          tbody
            tr
              td Plagas
              td Presencia, especie, estado de desarrollo, daño visible.
              td Semanal o según cultivo.

            tr
              td Enfermedades
              td Síntomas, localización, intensidad, partes afectadas.
              td Semanal.

            tr
              td Malezas
              td Tipo, densidad, nivel de competencia con el cultivo.
              td Quincenal.

            tr
              td Condiciones predisponentes
              td Exceso de humedad, heridas mecánicas, estrés hídrico.
              td En cada visita de campo.


      p.mb-5(data-aos="fade-left") Métodos utilizados para el monitoreo fitosanitario:
      .row.justify-content-center.cursor-pointer.mb-5(data-aos="fade-left")
        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/12.png", alt="")
            .crd_hover_txt--body
              h4.mb-5 Inspección visual directa
              p.mb-0 Observación sistemática planta por planta o por sectores definidos.

        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/13.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Muestreo por lotes o cuadrantes
              p.mb-0 Evaluación basada en unidades representativas del cultivo.

        .col-sm-12.col-md-6.col-lg-3.mb-cus
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/14.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Fotografías georreferenciadas
              p.mb-0 Captura de imágenes con ubicación GPS para el seguimiento y documentación.

        .col-sm-12.col-md-6.col-lg-3
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/15.png", alt="")
            .crd_hover_txt--body
              h4.mb-3 Registros en hojas o aplicaciones
              p.mb-0 Anotación de datos en formatos físicos o digitales durante el monitoreo.

    
      .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
        p.mb-3 Es fundamental para la implementación oportuna de acciones preventivas y correctivas, tales como el control biológico, cultural o químico, con el fin de evitar pérdidas significativas y preservar la calidad del cultivo.
        p.mb-0 Asimismo, este proceso fomenta en los aprendices del sector agropecuario una actitud responsable frente al uso de productos fitosanitarios y fortalece sus competencias técnicas en el diagnóstico y toma de decisiones en campo.

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Monitoreo de recursos
      
      p.mb-3(data-aos="fade-left") Es un proceso sistemático de seguimiento y control del uso de los recursos físicos, humanos, económicos y tecnológicos empleados durante la ejecución del plan de trabajo agrícola. Su principal objetivo es asegurar una gestión eficiente, responsable y sostenible, minimizando desperdicios, sobrecostos y deficiencias operativas.
      p.mb-5 A través de este monitoreo, es posible:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-sm-12.col-lg-8
          ul.lista-ul.lista-ul--separador
            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 Verificar si los recursos se están utilizando conforme a la planificación establecida.

            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 Identificar desviaciones, pérdidas o ineficiencias en su uso.

            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 Determinar la necesidad de ajustes en la asignación, distribución o aplicación de los recursos.

            li.d-flex
              i.fas.fa-check.bg-color-4
              p.mb-0 Optimizar insumos y mano de obra, lo que contribuye directamente a una mayor rentabilidad del sistema productivo.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/16.png', alt='')
      
      
      p.mb-5(data-aos="fade-left") Este enfoque no solo mejora la toma de decisiones, sino que también fortalece la sostenibilidad del sistema agrícola en el corto y largo plazo.
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 4.] Principales recursos a monitorear en producción agrícola
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
        table(alt="La tabla muestra los recursos clave en la producción agrícola que deben monitorearse, como insumos, mano de obra, maquinaria, agua, energía y recursos económicos. Para cada uno se definen aspectos a controlar y herramientas de verificación como registros, facturas e informes.")
          caption Referencia Tabla - Norma APA
          thead.bg-color-7
            tr
              th Recurso
              th Aspectos a monitorear
              th Instrumento o medio de verificación
          tbody
            tr
              td.fw-bold Insumos agrícolas
              td Cantidad utilizada, frecuencia, dosificación, desperdicio.
              td Registros de aplicación, inventarios, facturas.

            tr
              td.fw-bold Mano de obra
              td Horas trabajadas, eficiencia por tarea, cumplimiento de jornadas.
              td Hojas de control de asistencia, bitácoras.

            tr
              td.fw-bold Maquinaria y equipos
              td Uso, mantenimiento, disponibilidad, fallas.
              td Registros de uso, planillas de mantenimiento.

            tr
              td.fw-bold Agua
              td Volumen utilizado, frecuencia de riego, eficiencia.
              td Medidores, cronogramas de riego.

            tr
              td.fw-bold Energía
              td Consumo en sistemas de bombeo, iluminación, mecanización.
              td Facturas, lecturas de medidores.

            tr
              td.fw-bold Recursos económicos
              td Costos operativos, ejecución presupuestal, desviaciones.
              td Informes contables, presupuestos, facturación.
      
      .cajon.color-secundario.p-4.mb-4
        p.mb-0 Un adecuado monitoreo de recursos permite tomar decisiones fundamentadas para reducir costos, prevenir pérdidas y mejorar la sostenibilidad del sistema productivo. En procesos formativos como los desarrollados por el SENA, esta práctica fortalece la conciencia técnica, económica y ambiental en los aprendices, preparando personal competente en gestión agropecuaria integral.
      
      
      
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Métodos de monitoreo
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/17.png', alt='')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/18.svg', alt='')
        .col-sm-12.col-lg-6
            p.mb-3 En la producción agrícola puede realizarse mediante diversos métodos, según los objetivos del plan de trabajo, los recursos disponibles y la escala de intervención. Estos métodos permiten recolectar, analizar y sistematizar información clave para evaluar el avance, el desempeño y los efectos de las actividades agrícolas.
            p.mb-0 A continuación, se presentan los principales métodos utilizados en el ámbito agropecuario:

      TabsC.color-primario.mb-5(data-aos="fade-left")
        .py-3.py-md-4.bg-color-5.px-3(titulo="Observación directa")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/19.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p Consiste en visitas periódicas a los lotes para observar el estado del cultivo, el suelo, la presencia de plagas y la ejecución de labores.
              p.fw-bold Aplicación principal
              p.mb-0 Monitoreo visual del desarrollo y sanidad del cultivo.
        .py-3.py-md-4.bg-color-5.px-3(titulo="Muestreo en campo")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/20.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p Recolección sistemática de datos en puntos definidos del terreno, siguiendo criterios estadísticos o técnicos.
              p.fw-bold Aplicación principal
              p.mb-0 Análisis de variables agronómicas y fitosanitarias.
        .py-3.py-md-4.bg-color-5.px-3(titulo="Registro y bitácoras")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/21.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p Uso de planillas o herramientas digitales para documentar diariamente actividades, insumos, fechas y responsables.
              p.fw-bold Aplicación principal
              p.mb-0 Control de gestión y trazabilidad de procesos.
        .py-3.py-md-4.bg-color-5.px-3(titulo="Sensores y monitoreo remoto")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/22.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p Incluye sensores de humedad, estaciones meteorológicas, drones e imágenes satelitales para monitoreo automatizado.
              p.fw-bold Aplicación principal
              p.mb-0 Agricultura de precisión y monitoreo a gran escala.
        .py-3.py-md-4.bg-color-5.px-3(titulo="Entrevistas y encuestas")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.col-md-9.col-10.order-lg-1.order-md-2.order-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/23.png', alt='')
            .col-lg-7.order-lg-2.order-md-1.order-1
              p Recolección de información cualitativa mediante interacción directa con productores o trabajadores.
              p.fw-bold Aplicación principal
              p.mb-0 Evaluación social, percepción, impacto y satisfacción.



      
      
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Plan de monitoreo
      
      p.mb-5(data-aos="fade-left") Este instrumento técnico tiene como propósito organizar y orientar el seguimiento de las actividades agrícolas, definiendo de manera clara los aspectos a monitorear, la frecuencia de revisión, los recursos necesarios y los responsables de cada tarea. De esta forma, se garantiza que el plan de trabajo se desarrolle conforme a los objetivos planteados, permitiendo evaluar los resultados con precisión y en el momento adecuado.
      .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.titcus-1 Monitoreo y evaluación del proceso de postcosecha en la producción agrícola
                p.mb-0 Se invita a seguir explorando sobre las buenas prácticas en el control y seguimiento tras la recolección de cultivos.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=WOGUq8Nz2kY" target="_blank")
                  span Ir al sitio
                  i.fas.fa-file-video  

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
