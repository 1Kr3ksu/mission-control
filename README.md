# 🚀 Mission Control Manager - Advanced Features

## Podstawowe funkcje

### Core Functions
- `zaplanujMisje(nazwa, typ)` - Planuje nową misję
- `dodajDoZalogi(misja, czlonek)` - Dodaje członka załogi
- `zaladujSprzet(misja, sprzet)` - Dodaje sprzęt do ładowni
- `przemierzDystans(misja, odleglosc)` - Aktualizuje dystans misji
- `raportMisji(misja)` - Generuje raport misji

## 🆕 Zaawansowane funkcjonalności

### 1. ⚠️ Awarie systemów
```javascript
symulujAwarie(misja)
```
- **25% szansy** na wystąpienie awarii
- **Rodzaje awarii:**
  - Utrata losowego sprzętu z ładowni
  - Strata 50% zapasów
- **Użycie:** `symulujAwarie("Ekspedycja na Marsa")`

### 2. 🎯 Zarządzanie celami
```javascript
ukonczCel(misja, cel)
```
- Usuwa ukończony cel z listy `celeBadawcze`
- **Bonus:** +10% zapasów za ukończenie celu
- **Walidacja:** Sprawdza czy cel istnieje
- **Użycie:** `ukonczCel("Ekspedycja na Marsa", "Analiza próbek gleby")`

### 3. 🌌 Zarządzanie flotą
```javascript
raportFloty()
```
**Zawiera:**
- Statystyki ogólne floty
- Podział według typów misji
- Szczegółowe informacje o każdej misji
- System alertów (niskie zapasy, ukończone cele)

```javascript
najlepszaMisja(kryterium)
```
**Kryteria:**
- `"dystans"` - misja z największym przebytym dystansem
- `"zapasy"` - misja z największymi zapasami
- `"zaloga"` - misja z największą załogą
- `"sprzet"` - misja z największą ilością sprzętu

## 📊 Funkcje pomocnicze

### Zarządzanie flotą
- `pobierzWszystkieMisje()` - Zwraca listę wszystkich misji
- `usunMisje(nazwa)` - Usuwa misję z systemu

## 🎮 Przykład użycia zaawansowanych funkcji

```javascript
// Tworzenie floty misji
const misja1 = zaplanujMisje("Ekspedycja na Marsa", "Badawcza");
const misja2 = zaplanujMisje("Transport na Księżyc", "Transportowa");
const misja3 = zaplanujMisje("Kolonia Europa", "Kolonizacyjna");

// Zarządzanie celami
ukonczCel(misja1, "Analiza próbek gleby");

// Symulacja awarii
for (let i = 0; i < 5; i++) {
    symulujAwarie(misja1);
}

// Raport floty
console.log(raportFloty());

// Znajdowanie najlepszych misji
const najdalszaMisja = najlepszaMisja("dystans");
const najbogatszaMisja = najlepszaMisja("zapasy");
```

## 🔧 Mechaniki systemu

### Zarządzanie zasobami
- **Dodanie sprzętu:** +25% zapasów
- **Przemierzenie dystansu:** -2% zapasów na AU
- **Ukończenie celu:** +10% zapasów
- **Awaria zapasów:** -50% zapasów

### Typy misji i domyślne ustawienia

#### Badawcza
- **Załoga:** Inżynier, Medyk, Biolog, Pilot, Architekt
- **Sprzęt:** Spektrometr, Wiertło geologiczne, Moduł mieszkalny
- **Cele:** Analiza próbek gleby, Poszukiwanie wody

#### Transportowa
- **Załoga:** Pilot, Inżynier, Logistyk
- **Sprzęt:** Dźwig kosmiczny, Kontenery transportowe
- **Cele:** Transport ładunku, Dostawa zapasów

#### Kolonizacyjna
- **Załoga:** Inżynier, Medyk, Biolog, Architekt, Specjalista rolnictwa
- **Sprzęt:** Moduł mieszkalny, Generator energii, System życiowy
- **Cele:** Założenie bazy, Przygotowanie terenu

## 🚨 System alertów

W raporcie floty automatycznie wyświetlane są alerty:
- **⚠️ ALERT:** Zapasy < 20% (krytycznie niskie)
- **⚠️ UWAGA:** Zapasy < 50% (niskie)
- **✓ Wszystkie cele ukończone:** Brak pozostałych celów

## 🎯 Funkcje walidacji

Wszystkie funkcje zawierają kompleksowe sprawdzanie:
- Poprawność nazw misji (min. 5 znaków)
- Istniejące typy misji
- Unikalne nazwy misji
- Poprawność parametrów wejściowych
- Informacyjne komunikaty o błędach

## 🚀 Uruchomienie

```bash
Uruchom plik w przeglądarce.
```

System automatycznie przeprowadzi demonstrację wszystkich funkcjonalności!
