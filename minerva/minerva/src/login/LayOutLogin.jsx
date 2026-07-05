
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg";

 export default function LayOutLogin(){
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  

    const formData = new FormData(e.target);

    const datos = {
      username: formData.get("username"),
      contraseña: formData.get("password"),
      recordar: formData.get("remember") === "on",
    };

    navigate('/minerva')

    console.log(datos);
  };

  return (
    <main className="login-wrapper">
      {/* Mitad de la imagen */}
      <section className="login-visual" aria-hidden="true">
        <img
          src={banner}
          alt="Banner Escuela Vista Hermosa"
          className="login-visual__img"
        />

        <div className="login-visual__overlay"></div>

        <div className="login-visual__content">
          <span className="login-visual__badge">
            Portal Administrativo
          </span>

          <h2 className="login-visual__title">
           NUESTRAS INSTALACIONES
          </h2>

          <p className="login-visual__text">
            Portal administrativo:
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="login-form-side">
        <div className="login-card">
          <header className="login-card__header">
            <div className="login-logo">MINERVA</div>

            <h1 className="login-card__title">
              Bienvenido de nuevo
            </h1>

            <p className="login-card__subtitle">
              Inicia sesión
            </p>
          </header>

          <form
            className="login-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="field">
              <label htmlFor="text">
                Usuario
              </label>

              <input
                type="text"
                id="username"
                name="username"
                placeholder="---"
                autoComplete="username"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="password">
                Contraseña
              </label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="login-form__row">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="remember"
                />
                <span>Recordarme</span>
              </label>

              <a
                href="#"
                className="login-form__link"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="btn-login"
            >
              Iniciar sesión
            </button>
          </form>

          <footer className="login-card__footer">
            <Link
              to="/"
              className="login-back"
            >
              ← Volver al sitio principal
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
};

