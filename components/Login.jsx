export default function Login() {
  return (
    <>
      <div className="login-container">
        <h1 className="text-gradient">QUPOX</h1>
        <h2>Organize note taking made easy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic amet
          beatae, eligendi eius sit nobis vel fuga nemo
        </p>
        <div className="full-line"></div>
        <h6>Login</h6>
        <div>
          <p>Email</p>
          <input type="text" placeholder="masukin email woy" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" placeholder="rahasia" />
        </div>
        <button className="submit-btn">
          <h6>Submit</h6>
        </button>
        <div className="secondary-btns-container">
          <button className="card-button-secondary">
            <small>Log in</small>
          </button>
          <button className="card-button-secondary">
            <small>Forgot password?</small>
          </button>
        </div>

        <div className="full-line"></div>

        <footer>
          <a href="http://github.com/koreoxy" target="_blank">
            <img
              alt="foter"
              src="https://avatars.githubusercontent.com/u/73381115?v=4"
            />
            <h6>@koreoxy</h6>
            <i className="fa-brands fa-github"></i>
          </a>
        </footer>
      </div>
    </>
  );
}
