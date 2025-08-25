export default {
  global: {
    Name: 'Supervisión labores agrícolas',
    Description:
      'Este componente formativo ofrece una visión integral sobre la supervisión de las labores agrícolas necesarias para garantizar un adecuado control del cultivo. Aborda aspectos clave como el monitoreo, los tipos de monitoreo y la elaboración del plan de monitoreo, fundamentales para analizar resultados y establecer medidas correctivas de manera oportuna.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métodos de monitoreo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plan de monitoreo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recomendación técnica',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Monitoreo',
      referencia:
        'INTAGRI S.C. (2024). El Monitoreo Herramienta Básica en Los Programas de MIP y MIE en Hortalizas.',
      tipo: 'Artículo',
      link:
        'https://www.intagri.com/articulos/fitosanidad/el-monitoreo-herramienta-basica-en-los-programas-mip-mie',
    },
    {
      tema: 'Monitoreo',
      referencia:
        'Naciones Unidas. (2021). La herramienta ASIS de la FAO ayuda a monitorear las sequías agrícolas y gestionar sus riesgos a nivel de país utilizando datos de EO.',
      tipo: 'Artículo',
      link:
        'https://www.un-spider.org/news-and-events/news/asis-tool-fao-helps-monitor-agricultural-droughts-and-manage-their-risks#:~:text=Con%20el%20ASIS%20global%2C%20la,de%20la%20FAO%20en%20Roma',
    },
    {
      tema: 'Monitoreo',
      referencia:
        'AgroTech. (2023). Importancia del monitoreo y control de Plagas cuarentenarias en AGUACATE HASS.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1nL_0iwjh1c',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de suelo',
      significado: 'estudio técnico de nutrientes para fertilización.',
    },
    {
      termino: 'Bitácora',
      significado: 'registro diario de actividades y datos de campo.',
    },
    {
      termino: 'Estación meteorológica',
      significado: 'equipo para medir variables climáticas.',
    },
    {
      termino: 'Evaluación complementaria',
      significado: 'análisis técnico adicional requerido.',
    },
    {
      termino: 'Humedad del suelo',
      significado: 'nivel de agua en el terreno.',
    },
    {
      termino: 'Muestreo de campo',
      significado: 'recolección sistemática de datos en parcelas.',
    },
    {
      termino: 'Plagas',
      significado: 'organismos que dañan el cultivo.',
    },
    {
      termino: 'Radiación solar',
      significado: 'energía solar importante para fotosíntesis.',
    },
    {
      termino: 'Riego de precisión',
      significado: 'uso eficiente de agua basado en sensores.',
    },
    {
      termino: 'Sensores  IoT',
      significado: 'dispositivos conectados que miden variables en campo.',
    },
    {
      termino: 'Trampas fitosanitarias',
      significado: 'dispositivos para captura de insectos.',
    },
    {
      termino: 'Umbral de acción',
      significado: 'nivel de infestación que requiere intervención.',
    },
    {
      termino: 'Visualización de datos',
      significado: 'presentación gráfica de resultados monitoreados.',
    },
    {
      termino: 'Zona de manejo',
      significado: 'subdivisión del predio según características agronómicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arregocés-Guerra, P., Restrepo-Arias, J. F., Usme Martínez, M., Montoya-Yepes, J. P., & Branch-Bedoya, J. W. (2023). Monitoreo de cultivos bajo invernadero utilizando tecnologías 4.0. Ciencia y Tecnología Agropecuaria, 24(2).',
      link:
        'https://revistacta.agrosavia.co/index.php/revista/article/view/2853',
    },
    {
      referencia:
        'Corporación Colombiana de Investigación Agropecuaria – AGROSAVIA. (2023). Monitoreo de plagas en campo. AGROSAVIA.',
      link:
        'https://repository.agrosavia.co/handle/20.500.12324/38592?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Farmonaut. Guía Definitiva: 9 Buenas Prácticas Agronómicas para Optimizar Cultivos en Colombia.',
      link:
        'https://farmonaut.com/south-america/9-claves-para-optimizar-cultivos-con-buenas-practicas-agronomicas#:~:text=En%20Colombia%2C%20donde%20la%20diversidad%20de%20ecosistemas,proteger%20los%20cultivos%20y%20maximizar%20los%20rendimientos.',
    },
    {
      referencia:
        'Fundación Natura (2024). ¿Qué es agricultura sostenible y cómo se relaciona con el monitoreo climático?',
      link:
        'https://natura.org.co/que-es-agricultura-sostenible-y-como-se-relaciona-con-el-monitoreo-climatico/',
    },
    {
      referencia: 'UPRA (2025). Sistema de monitoreo de cultivos.',
      link:
        'https://upra.gov.co/es-co/Paginas/monitoreo-cultivos.aspx#:~:text=Un%20sistema%20de%20monitoreo%20de%20cultivos%20es%20una%20herramienta%20fundamental,sobre%20la%20extensi%C3%B3n%2C%20rendimiento%20y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora de recursos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
