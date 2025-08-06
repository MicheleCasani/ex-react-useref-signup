
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

// --------------------------------------------------------------

//  Milestone 2: Validare in tempo reale
// Aggiungere la validazione in tempo reale dei seguenti campi:

// ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

// ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

// ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

// Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:

import { useState } from 'react'


function App() {

  const [nome, setNome] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [specializzazione, setSpecializzazione] = useState('')
  const [anniDiEsperienza, setAnniDiEsperienza] = useState('')
  const [descrizione, setDescrizione] = useState('')

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

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

    // controllo username
    let hasInvalidChar = false;
    for (let char of username) {
      if (symbols.includes(char) || char === ' ') {
        hasInvalidChar = true;
        break;
      }
    }

    if (username.length < 6 || hasInvalidChar) {
      alert('Lo username deve contenere almeno 6 caratteri e deve essere alfanumerico');
      return;
    }

    // controllo password
    let hasLetter = false;
    let hasNumber = false;
    let hasSymbol = false;
    for (let char of password) {
      if (letters.includes(char)) {
        hasLetter = true;
      } else if (numbers.includes(char)) {
        hasNumber = true;
      } else if (symbols.includes(char)) {
        hasSymbol = true;
      }
    }
    if (password.length < 8 || !hasLetter || !hasNumber || !hasSymbol) {
      alert('La password deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo');
      return;
    }

    // controllo descrizione
    if (descrizione.trim().length < 100 || descrizione.trim().length > 1000) {
      alert('La descrizione deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali)');
      return;
    }

    // Se tutto è valido, stampa i dati in console



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
