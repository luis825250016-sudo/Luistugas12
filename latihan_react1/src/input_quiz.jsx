import React, { useState } from 'react';

function App() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <div>
      <h2>Input Data</h2>
      <div>
        <label>Nama: </label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama ..."
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email ...."
        />
      </div>
      <div>
        <label>Alamat: </label>
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan Alamat..."
        />
      </div>

      <div>
        <p>Hasil Inputan:</p>
        <p>Nama: {nama}</p>
        <p>Email: {email}</p>
        <p>Alamat: {alamat}</p>
      </div>
    </div>
  );
}

export default App;