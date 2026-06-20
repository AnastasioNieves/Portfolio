const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Envíame un <span>Mensaje</span></h2>
      <div className="contact-container glass">
        <form className="contact-form" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Tu nombre</label>
            <input type="text" id="name" name="name" className="form-control" required placeholder="Ej. Juan Pérez" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Tu correo</label>
            <input type="email" id="email" name="email" className="form-control" required placeholder="juan@ejemplo.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" className="form-control" required placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
