import { useState } from 'react';

/*
Zadání: Přidejte na prvek `input` událost `onChange`, 
která bude do stavu `login` ukládat aktuální
  hodnotu, kterou uživatel do inputu napíše.
*/

export const Ukol1 = () => {
  const [login, setLogin] = useState('petr');

  return (
    <>
      <label>
        Login:
        <input 
          type="text" 
          value={login} //říkáme inputu: „zobrazuj to, co je ve stavu login“
          onChange={(e) => setLogin(e.target.value)} //když uživatel něco napíše, uložíme to do login
          />
      </label>
    </>
  );
};
