import React from 'react'

export const FormLogin = () => {
  return (
    <main className="container text-center d-flex flex-column justify-content-center align-items-center mt-5">
    <form
      id="form"
      className="row bg-body-tertiary g-3 border rounded mt-1 p-5 h-50 w-50 needs-validation"
    >
      <h1>Login</h1>
      <div className="col-12">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          className="form-control"
          name="usuario"
          id="usuario"
          required=""
        />
      </div>
      <div className="col-12">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          required=""
        />
      </div>
      <div className="col-12">
        <button
          type="submit"
          id="btnSubmit"
          className="form-control my-2 btn btn-primary"
        >
          Login
        </button>
        <a href="register.html" className="form-control btn btn-primary">
          Register
        </a>
      </div>
    </form>
  </main>

  )
}
