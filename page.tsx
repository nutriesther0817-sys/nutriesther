import { RegistrationForm } from "@/components/registration-form";

const modules = [
  { number: "01", title: "Bienvenida al Sistema ADN", status: "Disponible al completar tu registro" },
  { number: "02", title: "Próximo contenido", status: "Se añadirá próximamente" },
  { number: "03", title: "Próximo contenido", status: "Se añadirá próximamente" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="NutriFit Esther, inicio">
          <span className="brand-mark">ADN</span>
          <span><strong>NutriFit Esther</strong><small>Adelgazamiento Definitivo y Natural</small></span>
        </a>
        <a className="top-link" href="#registro">Registrarme</a>
      </header>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Curso de inducción · Sistema ADN</p>
          <h1>Comienza tu formación paso a paso.</h1>
          <p className="lead">Conoce las bases del Sistema ADN y avanza por cada módulo a tu ritmo. Para iniciar, completa tu registro con tus datos reales.</p>
          <div className="course-meta" aria-label="Información del curso">
            <span><b>Modalidad</b> En línea</span><span><b>Acceso</b> Por registro</span><span><b>Contenido</b> Progresivo</span>
          </div>
        </div>
        <div className="dna-card" aria-hidden="true">
          <span className="orbit orbit-one" /><span className="orbit orbit-two" />
          <div className="dna-word">A<span>D</span>N</div><p>Aprende · Descubre · Nutre</p>
        </div>
      </section>
      <section className="registration-section" id="registro">
        <div className="section-heading">
          <p className="eyebrow">Primer paso</p><h2>Registro del estudiante</h2>
          <p>Llena todos los campos. Al finalizar, quedarás registrado para comenzar la inducción.</p>
        </div>
        <RegistrationForm />
      </section>
      <section className="modules-section" id="modulos">
        <div className="section-heading compact">
          <p className="eyebrow">Tu recorrido</p><h2>Módulos del curso</h2>
          <p>El programa crecerá poco a poco con nuevas lecciones y actividades.</p>
        </div>
        <div className="module-grid">
          {modules.map((module, index) => (
            <article className={`module-card ${index === 0 ? "featured" : "pending"}`} key={module.number}>
              <span className="module-number">{module.number}</span>
              <div><h3>{module.title}</h3><p>{module.status}</p></div>
              <span className="module-icon" aria-hidden="true">{index === 0 ? "→" : "＋"}</span>
            </article>
          ))}
        </div>
      </section>
      <footer><strong>NutriFit Esther</strong><span>Transforma tu alimentación desde tu ADN.</span></footer>
    </main>
  );
}
