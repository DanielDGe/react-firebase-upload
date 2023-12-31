import React, { useState } from 'react'
import { uploadFile } from "./firebase/config";

function App() {

  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      //throw new Error('Fallo al subir')
      const result = await uploadFile(file);
      console.log(result)
    } catch (error) {
      console.error(error)
    }

  }

  return (

    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name='file'
        onChange={(e) => setFile(e.target.files[0])} />

      <button>Upload</button>

    </form>

  )
}

export default App