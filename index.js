const studenti = [
    {
        indeks: 20140021,
        ime: 'Milos',
        prezime: 'Peric',
        datum_rodjenja: '20.01.1995.',
        mesto_rodjenja: 'Beograd',
        datum_upisa: '06.07.2014.'
    },
    {
        indeks: 20140022,
        ime: 'Marijana',
        prezime: 'Savkovic',
        datum_rodjenja: '11.03.1995.',
        mesto_rodjenja: 'Kraljevo',
        datum_upisa: '05.07.2014.'
    },

    {
        indeks: 20130023,
        ime: 'Saja',
        prezime: 'Terzic',
        datum_rodjenja: '09.11.1994.',
        mesto_rodjenja: 'Beograd',
        datum_upisa: '04.07.2013.'
    },

    {
        indeks: 20130024,
        ime: 'Nikola',
        prezime: 'Vukovic',
        datum_rodjenja: '17.09.1994.',
        mesto_rodjenja: '',
        datum_upisa: '04.07.2013.'
    },

    {
        indeks: 20140021,
        ime: 'Marijana',
        prezime: 'Savkovic',
        datum_rodjenja: '04.02.1995.',
        mesto_rodjenja: 'Kraljevo',
        datum_upisa: '06.07.2014'
    },

    {
        indeks: 20140021,
        ime: 'Milena',
        prezime: 'Stankovic',
        datum_rodjenja: '',
        mesto_rodjenja: '',
        datum_upisa: '',
    },
];


// b

function kreiraj_red_tabele(student){
    const stRed = document.createElement('tr');
    for(vrednost in student){ // Ovo si nasao na internetu, ne secam se da se pominjalo na vezbama
                                // pomocu of se ne moze iterirati kroz objekte 
        const stPolje = document.createElement('td');
        const poljeText = document.createTextNode(vrednost);
        stPolje.appendChild(poljeText);
        stRed.appendChild(stPolje);
    }
    return stRed;
}

// c i d

function postavi_hover_stil(){
    this.style.backgroundColor = 'grey';
}

function ukloni_hover_stil(){
    this.style.backgroundColor = 'white';
}

// f
// nisi napisao trecu funkciju koja se trazi u zadatku
// bilo bi lepo da je napises

function postavi_osluskivace_nad_prvom_kolonom(){
    const prvaTabela = document.querySelector('table');
    if(prvaTabela === null){
        console.log('nema tabele');
        return;
    }

// proveru i dete si uveo da bi znao da li
// tabela poseduje thead i tbody
// ako ne poseduje dete i tabela su isto

    let provera = 0;
    let telo
    const deca_tabele = prvaTabela.children;
    for(const dete of deca_tabele){
        if(dete.tagName == 'tbody'){
            provera = 1;
            telo = dete;
            break; 
        }
    }
    if(provera == 0){
        telo = prvaTabela;
    }

    const deca_tela = telo.children;
    for(const jedno_dete_tela of deca_tela){
        jedno_dete_tela.postavi_hover_stil = postavi_hover_stil;
        jedno_dete_tela.ukloni_hover_stil = ukloni_hover_stil;
        jedno_dete_tela.addEventListener('mouseenter', function(){
            this.postavi_hover_stil();
        });
        jedno_dete_tela.addEventListener('mouseleave', function(){
            this.ukloni_hover_stil();
        });
    }
}

// g

function prikazi_podatke(){
    

    const tabela_prikaza = document.createElement('table');
    const n = studenti.length;
    for(let i = 0; i<n; i++){
        let red = kreiraj_red_tabele(studenti[i]);
        tabela_prikaza.appendChild(red);
    }
    
    const po_daci = document.getElementById('podaci');
    po_daci.appendChild(tabela_prikaza);

    postavi_osluskivace_nad_prvom_kolonom();
}


const dugme_prikazi = document.getElementById('prikazi_podatke');
dugme_prikazi.addEventListener('click', function(){
    prikazi_podatke();
});
