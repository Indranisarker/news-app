import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function SignIn() {
  const{username,password,setUsername,setPassword, handleLogin, user, error} = useContext(AuthContext);
  return (
    <>
    <div className="login-container" style={styles.container}>
      <h1 style={styles.title}>Sign In</h1>
      {error && <p style={styles.error}>{error}</p>}

      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button} onClick={handleLogin}>Sign In</button>
      </form>
      <div style={{ textAlign: "center", marginTop:'40px' }}>
      <h1>Welcome to the Dashboard!</h1>
      <p>{user}, You have successfully logged in.</p>
    </div>
    </div>
   
    </>
  )
}
const styles = {
    container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  form: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#f1061a",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};
