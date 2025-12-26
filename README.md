# Restoran Menü ve Tanıtım Sitesi

Basit bir restoran tanıtım, menü ve rezervasyon ön yüzü uygulaması. Vite + React + TypeScript ile oluşturulmuş, Tailwind CSS ile stillendirilmiş ve veri/kimlik doğrulama için Supabase kullanılan örnek bir projedir.

Demo URL : https://restaurant-website-d-3a5n.bolt.host/

## Teknolojiler
- Vite
- React + TypeScript
- Tailwind CSS
- Supabase (veritabanı ve/veya auth)
- PostCSS, ESLint
- N8N otomasyonu

## Proje Yapısı

- `project/` — uygulama kaynağı
	- `src/` — TypeScript React kaynak kodu
		- `components/` — tekrar kullanılan bileşenler (`Navigation.tsx`, `Footer.tsx`)
		- `pages/` — sayfa bileşenleri (`Home.tsx`, `Menu.tsx`, `Gallery.tsx`, `About.tsx`, `Reservation.tsx`)
		- `lib/supabase.ts` — Supabase istemci konfigürasyonu
		- `types/` — proje genelinde kullanılan TypeScript tipleri
	- `index.html`, `vite.config.ts`, `tailwind.config.js` vb. yapılandırma dosyaları
- `supabase/migrations/` — veritabanı migration SQL dosyaları
	- `20251224131328_create_restaurant_tables.sql` — örnek tablo tanımları

## Hızlı Başlangıç

Önkoşullar:
- Node.js (v16 veya daha güncel bir sürüm önerilir)

Projeyi çalıştırmak için:

```bash
cd project
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` (Vite varsayılan) adresini açın.

## Otomasyon & n8n

Bu projede rezervasyon alma ve bildirim süreçleri için `n8n` tabanlı otomasyonlar hazırlanmıştır. Otomasyon dosyaları proje kökünde `n8n/` dizininde saklanır ve aşağıdaki iş akışlarını içerir.

- `website/` — Restoran tanıtım ve rezervasyon formunu barındıran ön yüz (mevcut `project/` dizinine denk gelen uygulama).
- `n8n/` — n8n workflow JSON/ayrıntıları (import için hazır dosyalar).

### n8n Workflows

1) Rezervasyon Email Workflow

- Webhook ile form verisini yakalar (ön yüzde rezervasyon formu n8n webhook URL'sine POST eder).
- Alınan rezervasyon bilgilerini restoran sahibine e-posta olarak gönderir (SMTP ile).

2) Günlük WhatsApp Menü Workflow

- Cron tetikleyicisi ile her gün saat 09:00'da çalışır.
- O günün menüsünü alır (basit bir dosya/DB sorgusu veya sabit içerik) ve WhatsApp API (demo/mock) üzerinden gönderir.

- Proje Görselleri
<img width="1317" height="601" alt="image" src="https://github.com/user-attachments/assets/9924d9b7-7aa4-4998-bba7-8a21f7474d3e" />

![restaurant-website-d-3a5n bolt host_ (1)](https://github.com/user-attachments/assets/a5405370-226e-459b-a2c4-7ffe6e802999)
<img width="3292" height="5250" alt="restaurant-website-d-3a5n bolt host_ (2) (1)" src="https://github.com/user-attachments/assets/10a2c47d-a006-4fa4-a2c9-f06eb48cc66e" />

![restaurant-website-d-3a5n bolt host_ (3)](https://github.com/user-attachments/assets/efc930a1-9e30-4dda-ba84-4e0db85f6235)

<img width="3292" height="3426" alt="restaurant-website-d-3a5n bolt host_ (4) (1)" src="https://github.com/user-attachments/assets/fc12535f-09b1-465a-ac02-77cb3749356a" />
<img width="3292" height="3278" alt="restaurant-website-d-3a5n bolt host_ (5) (1)" src="https://github.com/user-attachments/assets/1c947215-38b8-4289-8219-b2d7098ad40a" />








