# Esercizio: Task list

Scriviamo un'applicazione JavaScript che permetta di soddisfare i seguenti criteri:

- Da utente voglio trovare al caricamento della pagina una` barra di testo` vuota e un `bottone` "Aggiungi".
- Da utente voglio trovare al caricamento della pagina trovare una lista, inizialmente vuota.
- Da utente voglio che, dopo aver riempito l'input, premendo invio possa aggiungere un elemento alla lista. L'elemento deve contenere:
  - Un input di tipo checkbox;
  - Uno span con il testo dell'input;
- Da utente voglio che dopo ogni submit il form si svuoti.
- Da utente voglio poter segnare alcuni elementi come fatti cliccando sull'input.

_**Possiamo sviluppare l'esercizo con qualunque approccio.**_

### Bonus track (opzionale)
- Da utente voglio poter vedere l'orario (ora:minuti) in cui è stata aggiunta una task. [Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=it)
- Da utente voglio vedere dopo il testo in ogni elemento della lista un bottone "Elimina". [Ref se si lavora solo sul DOM](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
- Da utente posso cancellare la task corrispettiva cliccando il bottone "Elimina".
- Da utente voglio poter aggiornare la pagina senza perdere la lista corrente di task. [Ref](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Metodo con oggetti (opzionale)
Se si è confidenti di lavorare con oggetti (metodi, get/set, etc...) provare a sviluppare l'esercizo strutturando un oggetto con almeno:
- Lista task in proprietà dedicata
- Metodo per aggiunta task
- Metodo per rimozione task
- Metodo per stampare a schermo
