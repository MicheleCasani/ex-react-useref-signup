
// Milestone 1: Creare un Form con Campi Controllati
// Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

// ✅ Nome completo (input di testo)

// ✅ Username (input di testo)

// ✅ Password (input di tipo password)

// ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")

// ✅ Anni di esperienza (input di tipo number)

// ✅ Breve descrizione sullo sviluppatore (textarea)

// Aggiungi una validazione al submit, verificando che:

// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata

// Al submit, se il form è valido, stampa in console i dati.
import { useState } from 'react'


function App() {

  const [nome, setNome] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [specializzazione, setSpecializzazione] = useState('')
  const [anniDiEsperienza, setAnniDiEsperienza] = useState('')
  const [descrizione, setDescrizione] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !username || !password || !specializzazione || !anniDiEsperienza || !descrizione) {
      alert('Tutti i campi devono essere compilati');
      return;
    }
    if (anniDiEsperienza <= 0) {
      alert('Gli anni di esperienza devono essere un numero positivo');
      return;
    }

    console.log({
      nome,
      username,
      password,
      specializzazione,
      anniDiEsperienza,
      descrizione
    });
  }


  return (
    <>
      <h1>Form di Registrazione</h1>
      <form action="">
        <section>
          <label htmlFor="nome">Nome Completo:</label>
          <input type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="username">Username:</label>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="password">Password:</label>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="Specializzazione">Specializzazione:</label>
          <select
            value={specializzazione}
            onChange={(e) => setSpecializzazione(e.target.value)}
          >
            <option value="">Seleziona</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </section>
        <section>
          <label htmlFor="anni di esperienza">Anni di Esperienza:</label>
          <input type="number"
            value={anniDiEsperienza}
            onChange={(e) => setAnniDiEsperienza(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="descrizione">Descrizione:</label>
          <textarea
            value={descrizione}
            onChange={(e) => setDescrizione(e.target.value)}
          />
        </section>
        <button onClick={handleSubmit}>Registrati</button>
      </form>
    </>
  )
}

export default App
