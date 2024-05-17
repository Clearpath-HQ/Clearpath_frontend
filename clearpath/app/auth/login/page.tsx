import React, { CSSProperties } from 'react';
import Layout from '../layout';

export default function LoginPage() {
  return (
    <Layout>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Welcome to Clearpath</h1>
        <p style={subtitleStyle}>A great team begins with efficiency. With a clearpath, your team will be more efficient.</p>
        <input type="email" placeholder="Email" style={inputStyle} />
        <button style={buttonStyle}>Signup with Google</button>
        <p style={termsStyle}>By signing up, you agree to our <a href="#">Terms and Conditions</a>.</p>
      </div>
    </Layout>
  );
}

const contentStyle: CSSProperties = {
  textAlign: 'center',
  maxWidth: '400px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const titleStyle: CSSProperties = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
};

const subtitleStyle: CSSProperties = {
  fontSize: '16px',
  marginBottom: '20px',
  color: '#555',
};

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle: CSSProperties = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const termsStyle: CSSProperties = {
  marginTop: '10px',
  fontSize: '12px',
  color: '#888',
};
