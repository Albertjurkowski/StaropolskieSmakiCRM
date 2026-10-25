# Roadmapa Wdrożeniowa dla Claude Code (StaropolskieSmakiCRM)

Poniższa lista zadań jest przeznaczona do bezpośredniej realizacji przez Claude Code / programistów:

- [ ] **Faza 1: Baza Projektu i Środowisko**
  - [ ] Skonfigurować package.json, linter i skrypty budowania
  - [ ] Skonfigurować Tailwind CSS z elegancką paletą fine-dining (burgund, złoto, ciemny grafit)
  - [ ] Przygotować bazowy layout aplikacji (Sidebar nawigacyjny: Magazyn, Dostawcy, Menu, Goście, Predykcje AI)

- [ ] **Faza 2: Warstwa Danych i Firebase/SQLite**
  - [ ] Zaimplementować typy TypeScript w shared/types.ts
  - [ ] Utworzyć seed demo w seed/seed-staropolskie.ts z danymi 5 rzemieślniczych dostawców i 20 surowców
  - [ ] Skonfigurować adapter bazy danych (Firebase Firestore + offline SQLite fallback)

- [ ] **Faza 3: Moduł Zarządzania Dostawcami i Magazynem (Sous-Chef & Szef)**
  - [ ] Tabela stanów magazynowych z alertami o kończących się partiach i terminach ważności
  - [ ] Kreator zamówienia surowców do dostawców rzemieślniczych
  - [ ] Moduł odbioru dostawy (przyjęcie na stan, generowanie numeru partii)

- [ ] **Faza 4: Moduł Gości VIP i Rezerwacji (Menadżer & Kuchnia)**
  - [ ] Kartoteka gości VIP z tagami i historią preferencji kulinarnych
  - [ ] Widok serwisu dnia z uwzględnieniem restrykcji dietetycznych dla kuchni

- [ ] **Faza 5: Silnik Predykcji AI (Demand & Zero-Waste)**
  - [ ] Integracja z API pogodowym i kalendarzem rezerwacji
  - [ ] Moduł obliczania rekomendacji przygotowania (mise en place) na dany dzień serwisu
  - [ ] Raport oszczędności surowców i zapobiegania stratom

- [ ] **Faza 6: Testy, Walidacja i Wdrożenie**
  - [ ] Testy jednostkowe przepływu zamówień (pnpm test)
  - [ ] Testy E2E logowania i przejścia procesu zamówienia
  - [ ] Konfiguracja Dockerfile pod Cloud Run

