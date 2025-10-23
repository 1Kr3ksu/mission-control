// Mission Control Manager - Kompletny system w ~50 linjkach
let misje = [];
let output = document.getElementById('log');

function log(msg) {
    output.innerHTML += new Date().toLocaleTimeString() + ' - ' + msg + '<br>';
    output.scrollTop = output.scrollHeight;
}

function zaplanujMisje(nazwa, typ) {
    if (!nazwa || nazwa.length < 5) { log('❌ Nazwa za krótka'); return null; }
    if (misje.find(m => m.nazwa === nazwa)) { log('❌ Misja już istnieje'); return null; }
    
    let defaults = {
        'Badawcza': { zaloga: ['Pilot', 'Biolog', 'Inżynier'], cele: ['Analiza próbek', 'Badanie atmosfery'], sprzet: ['Spektrometr', 'Laboratorium'] },
        'Transportowa': { zaloga: ['Pilot', 'Logistyk'], cele: ['Transport ładunku'], sprzet: ['Dźwig', 'Kontenery'] },
        'Kolonizacyjna': { zaloga: ['Architekt', 'Medyk'], cele: ['Budowa bazy'], sprzet: ['Generator', 'Moduł'] }
    };
    
    let misja = { nazwa, typ, ...defaults[typ], dystans: 0, zapasy: 100 };
    misje.push(misja);
    log('✅ Misja "' + nazwa + '" utworzona');
    updateSelect();
    return misja;
}

function dodajDoZalogi(misja, czlonek) {
    if (!czlonek || misja.zaloga.includes(czlonek)) { log('❌ Błędny członek'); return; }
    misja.zaloga.push(czlonek);
    log('✅ Dodano: ' + czlonek);
}

function zaladujSprzet(misja, sprzet) {
    if (!sprzet || misja.sprzet.includes(sprzet)) { log('❌ Błędny sprzęt'); return; }
    misja.sprzet.push(sprzet);
    misja.zapasy += 25;
    log('✅ Załadowano: ' + sprzet);
}

function przemierzDystans(misja, odleglosc) {
    if (odleglosc <= 0) { log('❌ Błędna odległość'); return; }
    misja.dystans += odleglosc;
    misja.zapasy -= odleglosc * 2;
    log('✅ Przemierzono ' + odleglosc + ' AU (łącznie: ' + misja.dystans + ' AU)');
}

function raportMisji(misja) {
    return `*** RAPORT: ${misja.nazwa} ***\nTyp: ${misja.typ}\nDystans: ${misja.dystans} AU\nZapasy: ${Math.round(misja.zapasy)}%\nZałoga: ${misja.zaloga.join(', ')}\nSprzęt: ${misja.sprzet.join(', ')}\nCele: ${misja.cele.join(', ')}`;
}

function symulujAwarie(misja) {
    if (Math.random() > 0.25) { log('✅ Systemy OK'); return; }
    if (Math.random() > 0.5 && misja.sprzet.length > 0) {
        let utracony = misja.sprzet.splice(Math.floor(Math.random() * misja.sprzet.length), 1)[0];
        log('⚠️ AWARIA! Utracono: ' + utracony);
    } else {
        misja.zapasy -= 50;
        log('⚠️ AWARIA! Utracono 50% zapasów');
    }
}

function updateSelect() {
    let select = document.getElementById('misja');
    select.innerHTML = '<option value="">Wybierz misję</option>';
    misje.forEach((m, i) => select.innerHTML += `<option value="${i}">${m.nazwa} (${m.typ})</option>`);
}

// Funkcje interfejsu
function stworzMisje() { zaplanujMisje(document.getElementById('nazwa').value, document.getElementById('typ').value); document.getElementById('nazwa').value = ''; }
function dodajCzlonka() { let i = document.getElementById('misja').value; if (i !== '') { dodajDoZalogi(misje[i], document.getElementById('czlonek').value); document.getElementById('czlonek').value = ''; } }
function dodajSprzet() { let i = document.getElementById('misja').value; if (i !== '') { zaladujSprzet(misje[i], document.getElementById('sprzet').value); document.getElementById('sprzet').value = ''; } }
function przemierz() { let i = document.getElementById('misja').value; if (i !== '') { przemierzDystans(misje[i], +document.getElementById('dystans').value); document.getElementById('dystans').value = ''; } }
function raport() { let i = document.getElementById('misja').value; if (i !== '') log(raportMisji(misje[i])); }
function awaria() { let i = document.getElementById('misja').value; if (i !== '') symulujAwarie(misje[i]); }

// Inicjalizacja
document.addEventListener('DOMContentLoaded', () => {
    log('🚀 Mission Control Manager gotowy!');
    updateSelect();
});
