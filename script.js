// Zadanie 1
// Sprawdzanie czy wartość x wprowadzona do pola tekstowego jest liczbą. Jeżeli tak, to czy jest to liczba dodatnia, zero czy liczba ujemna
function f1_DK() {
    const x = parseInt(document.getElementById("zad1_x").value);
    const wynik = document.getElementById("zad1_wynik");

    if (isNaN(x)) {
        wynik.textContent = "To nie jest liczba!";
    } else if (x > 0) {
        wynik.textContent = "Liczba dodatnia";
    } else if (x < 0) {
        wynik.textContent = "Liczba ujemna";
    } else {
        wynik.textContent = "Zero";
    }
}

// Zadanie 2
// Wyświetlanie kolejnych liczb całkowitych z przedziału [a,b]. Wykonaj zadanie za pomocą pętli for, while, do..while.
function f2_for_DK() {
    let a = parseInt(document.getElementById("zad2_for_a").value);
    let b = parseInt(document.getElementById("zad2_for_b").value);
    let wynik = document.getElementById("zad2_for_wynik");

    wynik.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = "Wprowadź poprawne liczby.";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }

    for (let i = a; i <= b; i++)
        wynik.innerHTML += `${i}, `;
    wynik.innerHTML += '<br><br>';

}

function f2_while_DK() {
    let a = parseInt(document.getElementById("zad2_while_a").value);
    let b = parseInt(document.getElementById("zad2_while_b").value);
    let wynik = document.getElementById("zad2_while_wynik");

    wynik.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = "Wprowadź poprawne liczby.";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }
    
    let i = a;
    while (i<=b){
        wynik.innerHTML += `${i}, `;
        i++;
    }
    wynik.innerHTML += '<br><br>';
}

function f2_dowhile_DK() {
    let a = parseInt(document.getElementById("zad2_dowhile_a").value);
    let b = parseInt(document.getElementById("zad2_dowhile_b").value);
    let wynik = document.getElementById("zad2_dowhile_wynik");

    wynik.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = "Wprowadź poprawne liczby.";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }
    
    let i = a;
    do {
        wynik.innerHTML += `${i}, `;
        i++;
    }while (i<=b)
    wynik.innerHTML += '<br><br>';
}

// Zadanie 3
// Wyświetlanie wszystkich liczb z przedziału [a,b], które są podzielne przez n
function f3_DK() {
    let a = document.getElementById("zad3_a").value;
    let b = document.getElementById("zad3_b").value;
    let n = document.getElementById("zad3_n").value;
    const wynik = document.getElementById("zad3_wynik");

    wynik.innerHTML = "";

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        wynik.innerHTML += "Wprowadź poprawne liczby.";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }

    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            wynik.innerHTML += `${i}, `
        }
    }
}

// Zadanie 4
// Wyświetlanie ilości i sumy cyfr liczby całkowitej n wprowadzonej do pola tekstowego
function f4_DK() {
    const n = document.getElementById("zad4_n").value;
    const wynik = document.getElementById("zad4_wynik");

    wynik.innerHTML = "";

    if (isNaN(n)) {
        wynik.innerHTML += "Wprowadź poprawną liczbę.";
        return;
    }

    // tablica z wszystkimi cyframi
    let dlugosc = n.toString().length;
    let suma = 0;
    for (let i = 0; i < dlugosc; i++) {
        suma += parseInt(n.toString()[i]);
    }
    wynik.innerHTML = `Długość liczby ${n} to ${dlugosc} cyfr, a ich suma wynosi ${suma}.`;
}


// Zadanie 5
// Obliczanie silni liczby całkowitej n
function f5_DK() {
    const n = document.getElementById("zad5_n").value;
    const wynik = document.getElementById("zad5_wynik");

    wynik.innerHTML = "";

    if (isNaN(n) || n < 0) {
        wynik.innerHTML += "Proszę wprowadzić liczbę całkowitą większą lub równą 0.";
        return;
    }

    let silnia = 1;
    for (let i = 1; i <= n; i++) {
        silnia *= i;
    }

    wynik.innerHTML += `Silnia liczby ${n} wynosi: ${silnia}`;
}


// Zadanie 6
// Wyświetlanie n-kolejnych potęg naturalnych liczby całkowitej p
function f6_DK() {
    const p = document.getElementById("zad6_p").value;
    const n = document.getElementById("zad6_n").value;
    const wynik = document.getElementById("zad6_wynik");

    wynik.innerHTML = "";

    if (isNaN(p) || isNaN(n) || p <= 0 || n <= 0) {
        wynik.innerHTML += "Proszę wprowadzić liczby całkowite większe od 0.";
        return;
    }

    wynik.innerHTML = `Potęgi liczby ${p} do ${n}:<br>`;

    for (let i = 1; i <= n; i++) {
        wynik.innerHTML += `${(Math.pow(p, i))},`; // Oblicza p^i
    }
}


// Zadanie 7
// Dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie liczb rzeczywistych
function f7_DK() {
    const a = parseFloat(document.getElementById("zad7_a").value);
    const b = parseFloat(document.getElementById("zad7_b").value);
    // const d = document.getElementById("zad7_dzialanie").value;
    const wynik = document.getElementById("zad7_wynik");

    wynik.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML += "Proszę wprowadzić poprawne liczby.";
        return;
    }

    let resultAdd = a + b;
    let resultSub = a - b;
    let resultMul = a * b;
    let resultDiv = a !== 0 ? a / b : "Błąd: dzielenie przez zero!";
    let resultPow = Math.pow(a, b);

    wynik.innerHTML += `<strong>Wyniki:</strong><br>`;
    wynik.innerHTML += `Dodawanie: ${resultAdd}<br>`;
    wynik.innerHTML += `Odejmowanie: ${resultSub}<br>`;
    wynik.innerHTML += `Mnożenie: ${resultMul}<br>`;
    wynik.innerHTML += `Dzielenie: ${resultDiv}<br>`;
    wynik.innerHTML += `Potęgowanie: ${resultPow}<br>`;
}

// Aktywowanie/dezaktywowanie inputu dla liczby miejsc po przecinku w zależności od wybranego formatu
document.getElementById("zad7_format").addEventListener("change", function() {
    const decimalInput = document.getElementById("zad7_decimal_places");
    if (this.value === "fixed") {
        decimalInput.disabled = false;
    } else {
        decimalInput.disabled = true;
    }
});


// Pokaż kod
function pokazKod(nr) {
    const kodBlok = document.getElementById(`kod${nr}`);
    const toggleButton = document.getElementById(`toggleKod${nr}`);
    
    kodBlok.style.display = kodBlok.style.display === "none" ? "block" : "none";
    toggleButton.textContent = kodBlok.style.display === "none" ? "Pokaż kod" : "Ukryj kod";

    switch (nr) {
        case 1:
            kodBlok.textContent = f1_DK.toString();
            break;
        case '2_for':
            kodBlok.textContent = f2_for_DK.toString();
            break;
        case '2_while':
            kodBlok.textContent = f2_while_DK.toString();
            break;
        case '2_dowhile':
            kodBlok.textContent = f2_dowhile_DK.toString();
            break;
        case 3:
            kodBlok.textContent = f3_DK.toString();
            break;
        case 4:
            kodBlok.textContent = f4_DK.toString();
            break;
        case 5:
            kodBlok.textContent = f5_DK.toString();
            break;
        case 6:
            kodBlok.textContent = f6_DK.toString();
            break;
        case 7:
            kodBlok.textContent = f7_DK.toString();
            break;
        case 8:
            kodBlok.textContent = f8_DK.toString();
            break;
        case 9:
            kodBlok.textContent = f9_DK.toString();
            break;
        case 10:
            kodBlok.textContent = f10_DK.toString();
            break;
        case 11:
            kodBlok.textContent = f11_DK.toString();
            break;
        case 12:
            kodBlok.textContent = f12_DK.toString();
            break;
        case 13:
            kodBlok.textContent = f13_DK.toString();
            break;
        case 14:
            kodBlok.textContent = f14_DK.toString();
            break;
        case 15:
            kodBlok.textContent = f15_DK.toString();
            break;
        default:
            kodBlok.textContent = "Kod nie jest dostępny.";
    }
}
