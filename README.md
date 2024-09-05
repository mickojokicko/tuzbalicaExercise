## Aplikacija za Pritužbe Građana

Ovaj projekat predstavlja jednostavnu web aplikaciju koja simulira građani da podnose pritužbe putem forme. Aplikacija sadrži funkcionalnosti za registraciju i prijavu korisnika, kao i mogućnost upravljanja pritužbama.

### Funkcionalnosti

1. **Registracija i Prijava:**

   - Korisnici mogu da se registruju putem jednostavne signup forme.
   - Nakon registracije, korisnički podaci se čuvaju u `localStorage`.
   - Prijavljeni korisnici mogu da pristupe glavnoj stranici aplikacije putem login logike.

2. **Podnošenje Pritužbi:**

   - Glavna stranica aplikacije omogućava korisnicima da popune formu za pritužbe.
   - Uneti podaci se šalju u drugi `div`, koji simulira serversku stranu aplikacije.

3. **Pregled i Brisanje Pritužbi:**
   - Pritužbe se prikazuju u posebnom delu stranice gde se mogu pregledati.
   - Korisnici imaju mogućnost da obrišu pritužbu koja više nije relevantna.

### Tehnologije Korišćene

- **HTML**: Za strukturiranje aplikacije.
- **CSS**: Za stilizovanje korisničkog interfejsa.
- **JavaScript/TypeScript**: Za dinamičku manipulaciju DOM-om i rukovanje podacima.
- **Local Storage**: Za skladištenje korisničkih podataka i pritužbi.

### Prikaz Aplikacije

Slike u nastavku prikazuju osnovne funkcionalnosti aplikacije:

![Početna strana](photos/tuzbalica1.png)
_Početna strana aplikacije_

![Forma za pritužbu](photos/tuzbalica2.png)
_Forma za podnošenje pritužbe_

![Lista pritužbi](photos/tuzbalica3.png)
_Prikaz liste pritužbi_

![Brisanje pritužbi](photos/tuzbalica4.png)
_Mogućnost brisanja pritužbi_

![Potvrda brisanja](photos/tuzbalica5.png)
_Potvrda nakon brisanja pritužbe_
