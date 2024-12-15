// Pracę przygotował Dominik Kawalec 4i

// Zadanie 1
// Sprawdzanie czy wartość x wprowadzona do pola tekstowego jest liczbą. Jeżeli tak, to czy jest to liczba dodatnia, zero czy liczba ujemna
function f1_DK() {
    let x = parseInt(document.getElementById("zad1_x").value);
    let wynik = document.getElementById("zad1_wynik");

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
    let a = parseInt(document.getElementById("zad3_a").value);
    let b = parseInt(document.getElementById("zad3_b").value);
    let n = parseInt(document.getElementById("zad3_n").value);
    let wynik = document.getElementById("zad3_wynik");

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
    let n = parseInt(document.getElementById("zad4_n").value);
    let wynik = document.getElementById("zad4_wynik");

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
    let n = parseInt(document.getElementById("zad5_n").value);
    let wynik = document.getElementById("zad5_wynik");

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
    let p = parseInt(document.getElementById("zad6_p").value);
    let n = parseInt(document.getElementById("zad6_n").value);
    let wynik = document.getElementById("zad6_wynik");

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
    let a = parseInt(document.getElementById("zad7_a").value);
    let b = parseInt(document.getElementById("zad7_b").value);
    // let d = document.getElementById("zad7_dzialanie").value;
    let wynik = document.getElementById("zad7_wynik");

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

    wynik.innerHTML += `Wyniki:<br>`;
    wynik.innerHTML += `Dodawanie: ${resultAdd}<br>`;
    wynik.innerHTML += `Odejmowanie: ${resultSub}<br>`;
    wynik.innerHTML += `Mnożenie: ${resultMul}<br>`;
    wynik.innerHTML += `Dzielenie: ${resultDiv}<br>`;
    wynik.innerHTML += `Potęgowanie: ${resultPow}<br>`;
}


// Zadanie 8
// Konwersja liczb z systemu o podstawie p na system dziesiętny i odwrotnie
function f8_DK() {
    let a = parseInt(document.getElementById("zad8_a").value);
    let s = parseInt(document.getElementById("zad8_s").value);
    let dzialanie = document.getElementById("zad8_d").value;
    let wynik = document.getElementById("zad8_wynik");

    wynik.innerHTML = "";

    if (isNaN(a) || isNaN(s)) {
        wynik.innerHTML += "Proszę wprowadzić poprawne liczby.";
        return;
    }

    if(dzialanie == 'p')
        wynik.innerHTML += parseInt(a,s);
    else{
        if (a === 0) return '0';
    
        let digits = "0123456789ABCDEFGHIJK";  // Obsługuje do podstawy 16
        let result = '';
        
        while (a > 0) {
            result = digits[a % s] + result;
            a = Math.round(a / s);
        }
        wynik.innerHTML += result
    }

    
}


// Zadanie 9
// Losowanie z powtórzeniami i bez powtórzeń n (n>0) liczb całkowitych z przedziału [a,b]
function f9_DK() {
    let a = parseInt(document.getElementById("zad9_a").value);
    let b = parseInt(document.getElementById("zad9_b").value);
    let n = parseInt(document.getElementById("zad9_n").value);
    let powtorzenia = document.getElementById("zad9_p").value;
    powtorzenia = powtorzenia == "true" ? true : false;

    let wynik = document.getElementById("zad9_wynik");
    wynik.innerHTML = "";

    if (isNaN(n) || isNaN(a) || isNaN(b) || n <= 0) {
        wynik.innerHTML += "Wprowadź poprawne liczby (n > 0).";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }

    let liczby = [];
    if(n > (b-a) && !powtorzenia)
        wynik.innerHTML += "<span style='color:red'>Nie można wylosować tylu unikalnych liczb z danego przedziału.</span><br>"

    for(let i=1;i<=n;i++){
        let liczba = Math.round(Math.random()*(b-a)+a);
        if(!powtorzenia){
            if(!liczby.find((element) => element == liczba))
                liczby.push(liczba);
            else
                if(liczby.length <= (b-a))
                    i--;
        } else 
            liczby.push(liczba);
    }

    for(i = 0; i<liczby.length; i++){
        wynik.innerHTML += `${liczby[i]}, `;
    }
}


// Zadanie 10
// Obliczanie wartości średniej i maksymalnej z wylosowanego zbioru z przedziału [a, b]
function f10_DK() {
    let n = parseInt(document.getElementById("zad10_n").value);
    let a = parseInt(document.getElementById("zad10_a").value);
    let b = parseInt(document.getElementById("zad10_b").value);
    let wynik = document.getElementById("zad10_wynik");

    console.log(typeof n)

    wynik.innerHTML = "";

    if (isNaN(n) || isNaN(a) || isNaN(b) || n <= 0) {
        wynik.innerHTML += "Wprowadź poprawne liczby (n > 0).";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }

    let liczby = [];
    for (let i = 0; i < n; i++) {
        let liczba = Math.round(Math.random() * (b-a)) + a;
        liczby.push(liczba);
    }
    console.log(liczby)

    let max = Math.max(...liczby);
    let suma = 0;
    for(i=0;i<liczby.length;i++){
        suma += liczby[i];
    }
    let srednia = Math.round((suma/liczby.length)*100)/100;

    wynik.innerHTML += `Wylosowane liczby: ${liczby.join(", ")}<br>`;
    wynik.innerHTML += `Wartość maksymalna: ${max}<br>`;
    wynik.innerHTML += `Średnia wartość: ${srednia}`;
}

// Zadanie 11
// Wyświetlanie ilości liczb z wylosowanego zbioru, których wartość jest równa liczbie x
function f11_DK() {
    let n = parseInt(document.getElementById("zad11_n").value);
    let a = parseInt(document.getElementById("zad11_a").value);
    let b = parseInt(document.getElementById("zad11_b").value);
    let x = parseInt(document.getElementById("zad11_x").value);
    let wynik = document.getElementById("zad11_wynik");

    wynik.innerHTML = "";

    if (isNaN(n) || isNaN(a) || isNaN(b) || isNaN(x) || n <= 0) {
        wynik.innerHTML += "Wprowadź poprawne liczby (n > 0).";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }

    let liczby = [];
    for (let i = 0; i < n; i++) {
        let liczba = Math.round(Math.random() * (b-a)) + a;
        liczby.push(liczba);
    }

    let iloscLiczb = 0;
    for(i=0;i<liczby.length;i++){
        if(liczby[i] == x)
            iloscLiczb++;
    }

    wynik.innerHTML += `Wylosowane liczby: ${liczby.join(", ")}<br>`;
    wynik.innerHTML += `Liczba x (${x}) występuje: ${iloscLiczb} razy.`;
}

// Zadanie 12
// Porządkowanie rosnąco i malejąco wylosowanych liczb z przedziału [a,b]
function f12_DK() {
    let n = parseInt(document.getElementById("zad12_n").value);
    let a = parseInt(document.getElementById("zad12_a").value);
    let b = parseInt(document.getElementById("zad12_b").value);
    let wynik = document.getElementById("zad12_wynik");

    wynik.innerHTML = "";

    if (isNaN(n) || isNaN(a) || isNaN(b) || n <= 0) {
        wynik.innerHTML += "Wprowadź poprawne liczby (n > 0).";
        return;
    }

    if(a > b){
        let temp=a;
        a=b;
        b=temp;
    }

    let liczby = [];
    for (let i = 0; i < n; i++) {
        let liczba = Math.round(Math.random() * (b-a)) + a;
        liczby.push(liczba);
    }

    let rosnaca = [...liczby].sort((a, b) => a - b);
    let malejaco = [...liczby].sort((a, b) => b - a);

    //[...liczby] tworzy tabelę elementów ([...liczby]=>[1,6,23,8,-2])

    //sort((a, b) => a - b) bierze parę liczb n i n+1 i sprawdza czy różnica jest większa czy mniejsza niż 0
    //jeżeli jest mniejsza to zamienia miejscami elementy

    wynik.innerHTML += `Wylosowane liczby: ${liczby.join(", ")}<br>`;
    wynik.innerHTML += `Posortowane rosnąco: ${rosnaca.join(", ")}<br>`;
    wynik.innerHTML += `Posortowane malejąco: ${malejaco.join(", ")}<br>`;
}

// Zadanie 13
// Po wczytaniu dwóch liczb całkowitych – a, b, skrypt pyta o ich iloczyn do momentu, aż zostanie podany prawidłowy wynik.
// Następnie wyświetlany jest prawidłowy wynik oraz ilość prób podawania wyniku.
function f13_DK() {
    const a = parseInt(document.getElementById("zad13_a").value);
    const b = parseInt(document.getElementById("zad13_b").value);
    const wynikDiv = document.getElementById("zad13_wynik");

    wynikDiv.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        wynikDiv.innerHTML = "Wprowadź poprawne liczby całkowite dla a i b.";
        return;
    }

    const iloczyn = a * b;
    let liczbaProb = 0;
    let podanyWynik;

    do {
        podanyWynik = parseInt(prompt(`Podaj wynik iloczynu ${a} * ${b}:`));
        liczbaProb++;
        if (isNaN(podanyWynik)) {
            alert("To nie jest liczba! Spróbuj ponownie.");
        } else if (podanyWynik !== iloczyn) {
            alert("Nieprawidłowy wynik. Spróbuj ponownie.");
        }
    } while (podanyWynik !== iloczyn);

    wynikDiv.innerHTML = `Prawidłowy wynik: ${iloczyn}<br>Ilość prób: ${liczbaProb}`;
}

// Zadanie 14
// Program prosi użytkownika o podanie liczby z przedziału od 1 do 100 do momentu aż liczba będzie równa wartości wylosowanej
// z zakresu od 1 do 100. Jeżeli użytkownik poda wartość różną od wylosowanej program powinien informować, czy jest to wartość większa,
// czy mniejsza od wartości wylosowanej. Po zakończeniu powinna być wyświetlona ilość wykonanych prób.
function f14_DK() {
    const wynikDiv = document.getElementById("zad14_wynik");
    wynikDiv.innerHTML = "";
    
    const wylosowanaLiczba = Math.round(Math.random() * 99) + 1;
    let liczbaProb = 0;
    let podanaLiczba;

    do {
        podanaLiczba = parseInt(prompt("Podaj liczbę z przedziału 1-100:"));
        liczbaProb++;
        
        if (isNaN(podanaLiczba) || podanaLiczba < 1 || podanaLiczba > 100) {
            alert("Wprowadź liczbę z przedziału 1-100!");
        } else if (podanaLiczba < wylosowanaLiczba) {
            alert("Podana liczba jest za mała!");
        } else if (podanaLiczba > wylosowanaLiczba) {
            alert("Podana liczba jest za duża!");
        }
    } while (podanaLiczba !== wylosowanaLiczba);

    wynikDiv.innerHTML = `Prawidłowa liczba: ${wylosowanaLiczba}<br>Ilość prób: ${liczbaProb}`;
}

// Zadanie 15
// Wyświetlanie liczb w kolejnych wierszach w zależności od wartości k i n
function f15_DK() {
    const k = parseInt(document.getElementById("zad15_k").value);
    const n = parseInt(document.getElementById("zad15_n").value);
    const wynikDiv = document.getElementById("zad15_wynik");

    wynikDiv.innerHTML = "";

    if (isNaN(k) || isNaN(n) || k < 1 || k > 20 || n < 1 || n > 20) {
        wynikDiv.innerHTML = "Wprowadź liczby z przedziału 1-20!";
        return;
    }

    for (let i = 0; i < k; i++) {
        let wiersz = "";
        for (let j = 1; j <= n - i; j++) {
            wiersz += j + " ";
        }
        wynikDiv.innerHTML += `<p>${wiersz.trim()}</p>`;
    }
}



// Pokaż kod
function pokazKod(nr) {
    let kodBlok = document.getElementById(`kod${nr}`);
    let toggleButton = document.getElementById(`toggleKod${nr}`);
    
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
