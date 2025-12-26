# Restoran Menü ve Tanıtım Sitesi

Basit bir restoran tanıtım, menü ve rezervasyon ön yüzü uygulaması. Vite + React + TypeScript ile oluşturulmuş, Tailwind CSS ile stillendirilmiş ve veri/kimlik doğrulama için Supabase kullanılan örnek bir projedir.

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









