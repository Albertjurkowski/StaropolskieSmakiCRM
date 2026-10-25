# StaropolskieSmakiCRM — Pełna Specyfikacja Techniczna i Biznesowa dla Claude Code

> Dokumentacja przygotowana automatycznie jako master-specyfikacja wdrożeniowa dla Claude Code / agentów programistycznych.

---

## 1. Kontekst Biznesowy i Persona
Projekt dotyczy ekskluzywnej restauracji fine dining wyróżnionej gwiazdką Michelin, serwującej kuchnię staropolską w nowoczesnej interpretacji.
Główne wyzwania operacyjne:
- Zarządzanie nietypowymi, rzemieślniczymi dostawcami (dziczyzna, lokalne pasieki, stare odmiany jabłek, rzemieślnicze sery, grzyby leśne z atestem).
- Ścisła kontrola terminów przydatności i partii składników premium.
- Obsługa gości VIP z personalizowanymi profilami (alergie, preferencje sommelierskie, rocznice).
- Precyzyjne przewidywanie frekwencji w oparciu o AI (rezerwacje, zjawiska pogodowe, wydarzenia w mieście) w celu redukcji marnowania żywności (zero waste).

---

## 2. Macierz Ról i Uprawnień (RBAC)

| Rola | Odpowiedzialność | Główne Uprawnienia |
|------|------------------|-------------------|
| **Szef Kuchni (Head Chef)** | Nadzór nad menu degustacyjnym, akceptacja zamówień surowców premium, analityka rentowności potraw, zarządzanie recepturami. | Pełny dostęp do menu, zamówień, receptur, raportów kosztowych i AI. |
| **Sous-Chef** | Bieżące zarządzanie stanami magazynowymi, składanie zamówień do dostawców, weryfikacja dostaw, harmonogram mise en place. | Tworzenie/edycja zamówień, wprowadzanie dostaw, kontrola partii surowców. |
| **Menadżer Sali / Sommelier** | Rezerwacje stolików, profile gości VIP, parowanie win, preferencje dietetyczne. | Moduł gości, rezerwacje, moduł piwniczki win. |
| **Dostawca Rzemieślniczy (Portal)** | Potwierdzanie dostępności surowców sezonowych, awizacja dostaw. | Ograniczony widok zamówień i dostępności. |

---

## 3. Modele Danych i Encje

### 3.1. Supplier (Dostawca rzemieślniczy)
- id: string (UUID)
- name: string (np. Gospodarstwo Ekologiczne Pradolina)
- category: enum (MEAT_GAME, DAIRY_ARTISAN, FORAGED_MUSHROOMS, HERBS_VEG, HONEY_APIARY)
- contactPerson: string
- phone, email: string
- leadTimeDays: number (czas realizacji zamówienia)
- minimumOrderValue: number
- qualityCertificates: string[] (atesty leśne, eko certyfikaty)
- rating: number (1-5)

### 3.2. InventoryItem (Surowiec / Składnik magazynowy)
- id: string
- name: string (np. Comber z jelenia bieszczadzkiego)
- supplierId: string (FK -> Supplier)
- unit: enum (KG, G, L, PIECE)
- currentStock: number
- minSafeStock: number
- costPerUnit: number
- batchNumber: string
- expiryDate: timestamp
- storageCondition: enum (COLD_ROOM, DRY_STORAGE, FREEZER, AGING_CHAMBER)

### 3.3. PurchaseOrder (Zamówienie do dostawcy)
- id: string
- supplierId: string
- status: enum (DRAFT, SENT, CONFIRMED, DELIVERED, REJECTED)
- items: Array<{ itemId: string, quantity: number, agreedPrice: number }>
- totalCost: number
- orderedBy: string (userId)
- deliveryExpectedAt: timestamp
- deliveredAt: timestamp | null

### 3.4. GuestProfile (Profil Gościa VIP)
- id: string
- fullName: string
- phone, email: string
- dietaryRestrictions: string[] (np. bezglutenowe, bez owoców morza)
- preferences: string (np. stolik przy oknie, polskie wina)
- totalVisits: number
- averageSpend: number
- tags: string[] (VIP, Michelin Guide Reviewer, Stały gość)

### 3.5. OccupancyForecast (Predykcja Ruchu AI)
- date: string (YYYY-MM-DD)
- serviceType: enum (LUNCH, DINNER, TASTING_MENU_ONLY)
- predictedCovers: number (przewidywana liczba gości)
- confidenceScore: number (0-1)
- factors: { weather: string, cityEvents: string[], historicalAvg: number }
- recommendedPrepVolume: record<string, number> (rekomendacja mise en place)

---

## 4. Architektura i Stack Technologiczny
Wzorzec zaczerpnięty z PowerBeCRM:
- Framework: Next.js 15 (App Router), React 19, TypeScript
- Styling: Tailwind CSS, Lucide Icons, shadcn/ui komponenty
- Baza Danych & Backend: Firebase (Auth, Firestore / Data Connect, Storage) z opcją SQLite offline
- AI Integracja: Endpointy AI w oparciu o Vertex AI / OpenRouter do analizy prognoz i rekomendacji zamówień
- Testy: Vitest, Playwright

---

## 5. Wytyczne Implementacyjne dla Claude Code
1. Buduj kod modułowo w folderach apps/, packages/, shared/.
2. Zachowaj rygorystyczny TypeScript (strict: true).
3. Wykorzystuj schemat zdefiniowany w tym dokumencie jako jedyne źródło prawdy.
4. Implementuj funkcje krok po kroku według pliku TASKS.md.

