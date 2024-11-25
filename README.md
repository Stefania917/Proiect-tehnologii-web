Manager de cautari integrat cu Bing Search

Scopul acestui proiect este să creez o aplicație care permite utilizatorilor să facă căutări pe internet folosind motorul de căutare Bing. Aplicația va avea două părți importante: partea de backend care se ocupă cu gestionarea datelor și comunicarea cu serviciile externe și partea de frontend interfața pe care utilizatorii o folosesc pentru a efectua căutările și pentru a vizualiza rezultatele.

 Utilizatorul introduce termeni de căutare într-o bară de căutare. Aplicația folosește Bing Search API (un serviciu extern oferit de Microsoft) pentru a obține cele mai relevante rezultate pe baza acestor termeni.  După ce aplicația obține datele de la Bing, le afișează într-o listă ușor de înțeles, care conține titluri, descrierea site-urilor și link-uri către acestea. Utilizatorul poate salva rezultatele căutărilor pentru a le vizualiza mai târziu, iar aceste informații vor fi stocate într-o bază de date. Backend-ul aplicației va expune un API un set de reguli și proceduri care permit aplicației să comunice cu baza de date, care va stoca informațiile utilizatorilor și rezultatele căutărilor lor.

 Frontend (interfața utilizatorului): Utilizatorii vor interacționa cu o interfață simplă și modernă, unde vor putea căuta pe internet, salva rezultatele și vizualiza istoricul căutărilor lor. Va fi un SPA (Single Page Application), adică o aplicație care nu va reîncărca întreaga pagină de fiecare dată când utilizatorul interacționează cu ea. Aceasta va fi rapidă și fluidă.
 Backend (serverul care procesează cererile): Partea de backend se va ocupa de gestionarea datelor, de a interoga serviciul Bing și de a păstra rezultatele căutărilor într-o bază de date.

 Tehnologii utilizate:
Frontend:
Va fi construit folosind un framework modern (JavaScript). Acestea ajută la crearea unor interfețe rapide și interactive.
Backend:
Voi utiliza Node.js (pentru a rula aplicația pe server) și un framework ( Express.js) pentru a construi un API RESTful (adică un set de reguli pentru ca frontend-ul să poată comunica cu serverul).
Bing Search API va fi utilizat pentru a face căutările și pentru a obține rezultatele.
Baza de date:
Datele despre utilizatori și rezultatele căutărilor vor fi stocate într-o bază de date. Aceasta va fi o bază de date relațională (MySQL ) unde datele sunt organizate în tabele.

Aplicația va fi o pagină web interactivă care nu va reîncărca complet conținutul de fiecare dată când utilizatorul face o acțiune (SPA). Aceasta va comunica cu backend-ul pentru a adăuga și a obține date. Serverul va procesa cererile de la frontend, va interacționa cu Bing Search API pentru a obține rezultate și va salva datele utilizatorilor într-o bază de date.  Voi folosi un serviciu extern oferit de Microsoft care ne permite să căutăm pe internet. Acest serviciu va returna rezultatele căutărilor pe care le vom arăta utilizatorilor. Toate datele (inclusiv căutările anterioare și rezultatele salvate) vor fi stocate într-o bază de date, astfel încât utilizatorii să își poată vizualiza istoricul.
Acest proiect va crea o aplicație web modernă, interactivă, care va permite utilizatorilor să efectueze căutări pe internet, să salveze rezultatele și să își acceseze istoricul. Va folosi un backend robust și un frontend ușor de folosit.


