//  SELFWORK OGGETTI 1

// let oggetto = {
//     'nome' : 'Davide',
//     'cognome' : 'Dignazio',
//     "eta'" : 30,
//     'saluta' : function(){
//         console.log(`Ciao a tutti, mi chiamo ${this.nome} ${this.cognome}`);
        
//     }

// }

// oggetto.saluta();


// SELFWORK OGGETTI 2

let agenda = {
    // Lista di contatti iniziale
    contacts: [
        { nome: 'Nicola', telefono: '3331111111' },
        { nome: 'Lorenzo', telefono: '3332222222' },
        { nome: 'Paola', telefono: '3333333333' },
        { nome: 'Jenny', telefono: '3334444444' }
    ],

    // Mostra tutti i contatti
    mostraTuttiContatti: function() {
        console.log("Contatti in agenda:");
        this.contacts.forEach(contatto => {
            console.log(`${contatto.nome}: ${contatto.telefono}`);
        });
    },

    // Mostra un singolo contatto per nome
    mostraContatto: function(nome) {
        let contatto = this.contacts.find(c => c.nome == nome);
        if (contatto) {
            console.log(`Trovato: ${contatto.nome} - ${contatto.telefono}`);
        } else {
            console.log(`Contatto ${nome} non trovato.`);
        }
    },

    // Elimina un contatto per nome
    eliminaContatto: function(nome) {
        let index = this.contacts.indexOf(nome);
        if (index >= 0) {
            this.contacts.splice(index, 1);
            console.log(`Contatto ${nome} eliminato.`);
        } else {
            console.log(`Contatto ${nome} non trovato.`);
        }
    },

    // Aggiunge un nuovo contatto
    aggiungiContatto: function(nome, telefono) {
        this.contacts.push({ nome: nome, telefono: telefono });
        console.log(`Contatto ${nome} aggiunto con successo.`);
    },

    // Modifica un contatto esistente
    modificaContatto: function(nome, nuovoNome, nuovoTelefono) {
        let contatto = this.contacts.find(c => c.nome == nome);
        if (contatto) {
            contatto.nome = nuovoNome || contatto.nome;
            contatto.telefono = nuovoTelefono || contatto.telefono;
            console.log(`Contatto ${nome} modificato con successo.`);
        } else {
            console.log(`Contatto ${nome} non trovato.`);
        }
    }
};


agenda.mostraTuttiContatti();
agenda.mostraContatto('Paola');
agenda.aggiungiContatto('Marco', '3335555555');
agenda.mostraTuttiContatti();
agenda.modificaContatto('Marco', 'Marco Bianchi', '3336666666');
agenda.mostraContatto('Marco Bianchi');
agenda.eliminaContatto('Lorenzo');
agenda.mostraTuttiContatti();
