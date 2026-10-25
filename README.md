# StaropolskieSmakiCRM

## Opis Projektu

StaropolskieSmakiCRM to system CRM stworzony dla gwiazdkowej restauracji fine dining, specjalizującej się w kuchni staropolskiej. Projekt ma na celu usprawnienie zarządzania zamówieniami od rzemieślniczych, lokalnych dostawców, zarządzania klientami oraz przewidywanie ruchu w restauracji z pomocą sztucznej inteligencji na podstawie danych historycznych. Głównymi użytkownikami systemu będą sous-chef i szef kuchni.

## Architektura

Projekt jest zbudowany na architekturze PowerBe CRM i wykorzystuje następujący stack technologiczny:

*   **Frontend:** Next.js 15, TypeScript, React
*   **Backend/Baza Danych:** Firebase (Authentication, Firestore - Data Connect, Cloud Storage)
*   **Deployment:** Google Cloud Run
*   **Zarządzanie Projektem:** pnpm monorepo

## Funkcjonalności

*   **Zarządzanie Dostawcami i Zamówieniami:** Moduł do łączenia się z rzemieślniczymi dostawcami i zarządzania całym cyklem zamówień.
*   **Zarządzanie Klientami:** System do zarządzania bazą danych klientów, ich preferencjami i historią zamówień.
*   **Przewidywanie Ruchu w Restauracji:** Implementacja modeli AI do analizy danych historycznych (np. liczba gości, rezerwacje, wydarzenia, pogoda) w celu przewidywania przyszłego ruchu i optymalizacji zasobów.

## Uruchamianie Projektu

### Wymagania

*   Node.js (v18 lub nowszy)
*   pnpm (do instalacji globalnej: `npm install -g pnpm`)
*   Konto Firebase

### Instalacja

1.  **Sklonuj repozytorium:**
    ```bash
    git clone [LINK_DO_REPOZYTORIUM]
    cd StaropolskieSmakiCRM
    ```

2.  **Zainstaluj zależności (wymaga zatwierdzenia skryptów budowania pnpm):**
    ```bash
    pnpm install
    # Jeśli wystąpią błędy z ignorowanymi skryptami budowania, uruchom:
    # pnpm approve-builds
    # i ponownie:
    # pnpm install
    ```

3.  **Skonfiguruj Firebase:**
    *   Utwórz nowy projekt w Firebase Console.
    *   Skonfiguruj Firebase Authentication, Firestore i Cloud Storage.
    *   Zaktualizuj plik `firebase/init.ts` swoimi danymi konfiguracyjnymi Firebase:
        ```typescript
        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
        };
        ```

### Uruchamianie Serwera Deweloperskiego

```bash
pnpm dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce, aby zobaczyć aplikację.

## Struktura Projektu

```
StaropolskieSmakiCRM/
├── .git/
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── firebase/
│   ├── init.ts
│   └── datamodels.ts
├── pages/
│   └── index.tsx
├── public/
├── styles/
└── README.md
```

## Wspierani Użytkownicy

*   Sous-chef
*   Szef Kuchni

## Kontakt

W razie pytań lub problemów, prosimy o kontakt z zespołem deweloperskim.
