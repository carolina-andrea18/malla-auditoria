// script.js

const ramos = [
  { id: "algebra", nombre: "Álgebra", abre: ["calculo", "matematicas_financieras", "seminario_de_titulo"] },
  { id: "administracion", nombre: "Administración", abre: ["administracion_para_la_toma_decisiones", "seminario_de_titulo"] },
  { id: "taller_empresas_entorno", nombre: "Taller de Empresas y Entorno Profesional", abre: ["contabilidad_introductoria", "seminario_de_titulo"] },
  { id: "analisis_entorno", nombre: "Análisis del Entorno Empresarial", abre: ["seminario_de_titulo"] },
  { id: "educacion_fisica", nombre: "Educación Física y Salud", abre: ["seminario_de_titulo"] },
  { id: "expresion_oral", nombre: "Expresión Oral y Escrita", abre: ["seminario_de_titulo"] },
  { id: "habilidades_relacionales", nombre: "Habilidades Relacionales del Contador Auditor", abre: ["etica", "seminario_de_titulo"] },
  { id: "contabilidad_introductoria", nombre: "Contabilidad Introductoria", req: ["taller_empresas_entorno"], abre: ["contabilidad_intermedia", "contabilidad_costos", "seminario_de_titulo"] },
  { id: "administracion_para_la_toma_decisiones", nombre: "Administración para la Toma de Decisiones", req: ["administracion"], abre: ["teoria_impositiva", "gestion_personas", "gestion_marketing", "seminario_bachillerato", "seminario_de_titulo"] },
  { id: "calculo", nombre: "Cálculo", req: ["algebra"], abre: ["estadistica", "seminario_de_titulo"] },
  { id: "introduccion_economia", nombre: "Introducción a la Economía", abre: ["microeconomia", "seminario_de_titulo"] },
  { id: "introduccion_erp", nombre: "Introducción a las Tecnologías y ERP", abre: ["seminario_bachillerato", "bases_datos", "seminario_de_titulo"] },
  { id: "ingles_1", nombre: "Comunicación Lengua Inglesa I", abre: ["ingles_2", "seminario_de_titulo"] },
  { id: "etica", nombre: "Ética y Responsabilidad Social Corporativa", req: ["habilidades_relacionales"], abre: ["seminario_de_titulo"] },
  { id: "contabilidad_intermedia", nombre: "Contabilidad Intermedia", req: ["contabilidad_introductoria"], abre: ["contabilidad_avanzada", "seminario_bachillerato", "seminario_de_titulo"] },
  { id: "relaciones_laborales", nombre: "Relaciones Laborales y Comerciales", abre: ["seminario_de_titulo"] },
  { id: "matematicas_financieras", nombre: "Matemáticas Financieras", req: ["algebra"], abre: ["contabilidad_avanzada", "seminario_de_titulo"] },
  { id: "microeconomia", nombre: "Microeconomía", req: ["introduccion_economia"], abre: ["macroeconomia", "seminario_bachillerato", "seminario_de_titulo"] },
  { id: "ofg1", nombre: "OFG1", abre: ["seminario_de_titulo"] },
  { id: "ingles_2", nombre: "Comunicación Lengua Inglesa II", req: ["ingles_1"], abre: ["ingles_3", "seminario_de_titulo"] },
  { id: "ofg2", nombre: "OFG2", abre: ["seminario_de_titulo"] },
  { id: "contabilidad_costos", nombre: "Contabilidad de Costos", req: ["contabilidad_introductoria"], abre: ["contabilidad_gestion", "seminario_de_titulo"] },
  { id: "teoria_impositiva", nombre: "Teoría Impositiva", req: ["administracion_para_la_toma_decisiones"], abre: ["iva", "seminario_de_titulo"] },
  { id: "estadistica", nombre: "Estadística", req: ["calculo"], abre: ["estadistica_auditorial", "seminario_de_titulo"] },
  { id: "macroeconomia", nombre: "Macroeconomía", req: ["microeconomia"], abre: ["seminario_de_titulo"] },
  { id: "seminario_bachillerato", nombre: "Seminario Integrado de Bachillerato para Auditoria", req: ["administracion_para_la_toma_decisiones", "introduccion_erp", "contabilidad_intermedia", "microeconomia"], abre: ["gira_estudios", "seminario_grado", "seminario_de_titulo"] },
  { id: "ingles_3", nombre: "Comunicación Lengua Inglesa III", req: ["ingles_2"], abre: ["ingles_4", "seminario_de_titulo"] },
  { id: "auditoria_general", nombre: "Auditoría General", abre: ["auditoria_estados", "seminario_de_titulo"] },
  { id: "contabilidad_avanzada", nombre: "Contabilidad Avanzada", req: ["contabilidad_intermedia", "matematicas_financieras"], abre: ["contabilidad_sector", "finanzas", "practica_intermedia", "seminario_de_titulo"] },
  { id: "gestion_personas", nombre: "Gestión de Personas y Comportamiento Organizacional", req: ["administracion_para_la_toma_decisiones"], abre: ["seminario_de_titulo"] },
  { id: "estadistica_auditorial", nombre: "Estadística Auditorial", req: ["estadistica"], abre: ["metodos_investigacion", "mercados_financieros", "seminario_de_titulo"] },
  { id: "iva", nombre: "Impuestos a las Ventas y Servicios", req: ["teoria_impositiva"], abre: ["renta", "seminario_de_titulo"] },
  { id: "bases_datos", nombre: "Sistemas de Gestión de Bases de Datos", req: ["introduccion_erp"], abre: ["sistemas_informacion", "seminario_de_titulo"] },
  { id: "ingles_4", nombre: "Comunicación Lengua Inglesa IV", req: ["ingles_3"], abre: ["ingles_5", "seminario_de_titulo"] },
  { id: "auditoria_estados", nombre: "Auditoría de Estados Financieros", req: ["auditoria_general"], abre: ["auditoria_interna", "practica_intermedia", "seminario_de_titulo"] },
  { id: "contabilidad_gestion", nombre: "Contabilidad de Gestión", req: ["contabilidad_costos"], abre: ["planificacion_control", "seminario_de_titulo"] },
  { id: "gestion_marketing", nombre: "Gestión de Marketing y Operaciones", req: ["administracion_para_la_toma_decisiones"], abre: ["negocios_internacionales", "seminario_de_titulo"] },
  { id: "renta", nombre: "Impuesto a la Renta", req: ["iva"], abre: ["auditoria_tributaria", "practica_intermedia", "seminario_de_titulo"] },
  { id: "finanzas", nombre: "Finanzas", req: ["contabilidad_avanzada"], abre: ["planificacion_control", "mercados_financieros", "seminario_de_titulo"] },
  { id: "optativo_1", nombre: "Optativo de Especialización I", abre: ["seminario_de_titulo"] },
  { id: "ingles_5", nombre: "Comunicación Lengua Inglesa V", req: ["ingles_4"], abre: ["seminario_de_titulo"] },
  { id: "auditoria_interna", nombre: "Auditoría Interna", req: ["auditoria_estados"], abre: ["seminario_de_titulo"] },
  { id: "contabilidad_sector", nombre: "Contabilidad de Sectores Específicos", req: ["contabilidad_avanzada"], abre: ["seminario_de_titulo"] },
  { id: "metodos_investigacion", nombre: "Métodos de Investigación", req: ["estadistica_auditorial"], abre: ["seminario_grado", "seminario_de_titulo"] },
  { id: "planificacion_control", nombre: "Planificación Financiero y Control de Gestión", req: ["contabilidad_gestion", "finanzas"], abre: ["seminario_de_titulo"] },
  { id: "auditoria_tributaria", nombre: "Auditoría y Gestión Tributaria", req: ["renta"], abre: ["teoria_impositiva_avanzada", "seminario_de_titulo"] },
  { id: "sistemas_informacion", nombre: "Sistemas de Información", req: ["bases_datos"], abre: ["seminario_de_titulo"] },
  { id: "practica_intermedia", nombre: "Práctica Intermedia", req: ["contabilidad_avanzada", "renta", "auditoria_estados"], abre: ["seminario_de_titulo"] },
  { id: "mercados_financieros", nombre: "Mercados Financieros", req: ["estadistica_auditorial", "finanzas"], abre: ["evaluacion_proyectos", "finanzas_internacionales", "seminario_de_titulo"] },
  { id: "seminario_grado", nombre: "Seminario de Grado", req: ["seminario_bachillerato", "metodos_investigacion"], abre: ["seminario_de_titulo"] },
  { id: "gestion_estrategica", nombre: "Planificación y Gestión Estratégica", abre: ["seminario_de_titulo"] },
  { id: "gira_estudios", nombre: "Gira de Estudios", req: ["seminario_bachillerato"], abre: ["seminario_de_titulo"] },
  { id: "evaluacion_proyectos", nombre: "Preparación y Evaluación de Proyectos", req: ["mercados_financieros"], abre: ["seminario_de_titulo"] },
  { id: "finanzas_internacionales", nombre: "Finanzas Internacionales", req: ["mercados_financieros"], abre: ["seminario_de_titulo"] },
  { id: "negocios_internacionales", nombre: "Negocios Internacionales y Comercio Exterior", req: ["gestion_marketing"], abre: ["seminario_de_titulo"] },
  { id: "consultoria", nombre: "Consultoría Profesional", abre: ["seminario_de_titulo"] },
  { id: "teoria_impositiva_avanzada", nombre: "Teoría Impositiva Avanzada", req: ["auditoria_tributaria"], abre: ["seminario_de_titulo"] },
  { id: "optativo_2", nombre: "Optativo de Profundización I", abre: ["seminario_de_titulo"] },
  { id: "practica_profesional", nombre: "Práctica Profesional" },
  { id: "optativo_3", nombre: "Optativo de Profundización II" },
  { id: "seminario_de_titulo", nombre: "Seminario de Título" }
];

// ... (continuará con lógica de crearRamos, aprobarRamo, reiniciarMalla, etc.)
// script.js

const ramos = [
  // ... (ramos definidos previamente, como ya los tienes cargados)
];

let estado = {};

function cargarEstado() {
  const guardado = localStorage.getItem("estadoMalla");
  if (guardado) estado = JSON.parse(guardado);
}

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function crearRamos() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  let aprobados = 0;

  ramos.forEach((ramo) => {
    if (!estado[ramo.id]) estado[ramo.id] = "bloqueado";

    const requisitos = ramo.req || [];
    const desbloqueado = requisitos.every((req) => estado[req] === "aprobado") || requisitos.length === 0;

    if (estado[ramo.id] !== "aprobado" && desbloqueado) estado[ramo.id] = "desbloqueado";

    if (estado[ramo.id] === "aprobado") aprobados++;

    const div = document.createElement("div");
    div.className = `ramo ${estado[ramo.id]}`;
    div.innerText = ramo.nombre;
    div.setAttribute("data-tooltip", requisitos.length ? "Requiere: " + requisitos.map(id => ramos.find(r => r.id === id).nombre).join(", ") : "Sin requisitos");
    div.onclick = () => aprobarRamo(ramo.id);
    malla.appendChild(div);
  });

  document.getElementById("contador").innerText = `${aprobados} / ${ramos.length} ramos aprobados`;
  guardarEstado();
}

function aprobarRamo(id) {
  if (estado[id] !== "desbloqueado") return;
  estado[id] = "aprobado";

  ramos.forEach((ramo) => {
    if ((ramo.req || []).includes(id)) {
      const requisitos = ramo.req || [];
      const desbloqueado = requisitos.every((req) => estado[req] === "aprobado");
      if (desbloqueado && estado[ramo.id] !== "aprobado") estado[ramo.id] = "desbloqueado";
    }
  });

  crearRamos();
}

function reiniciarMalla() {
  if (confirm("¿Estás segura que quieres reiniciar la malla?")) {
    localStorage.removeItem("estadoMalla");
    estado = {};
    crearRamos();
  }
}

cargarEstado();
crearRamos();

