# مركز أبو نمر للهواتف الذكية

موقع احترافي باللغة العربية لمركز أبو نمر لصيانة وبيع الهواتف الذكية.

## Run & Operate

- `pnpm --filter @workspace/abu-namer-site run dev` — run the website (port 5000)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite + Tailwind CSS v4
- UI Icons: lucide-react
- Font: Cairo (Google Fonts) for Arabic RTL
- No backend needed (static site)

## Where things live

- `artifacts/abu-namer-site/` — main website (Arabic RTL, port 5000)
- `artifacts/abu-namer-site/src/pages/HomePage.tsx` — all page sections
- `artifacts/abu-namer-site/src/index.css` — theme and Tailwind
- `artifacts/api-server/` — shared API server (port 8080, at /api)

## Product

موقع إلكتروني احترافي لمركز أبو نمر يتضمن:
- صفحة ترحيب (Hero) مع أزرار الاتصال والواتساب
- قسم خدمات الصيانة (6 بطاقات)
- معرض الأجهزة (جديد ومستعمل)
- نموذج حجز المواعيد
- شريط التواصل مع رقم الهاتف
- تذييل الصفحة

## User preferences

- رقم الهاتف: 0935362951
- واتساب: https://wa.me/963935362951
- اللغة: عربي RTL
- الألوان: أزرق داكن (#1e3a8a) ورمادي فاتح

## Gotchas

- The Google Fonts @import must be the VERY FIRST line in index.css (before tailwind import)
- Font must be applied via style attributes since Cairo isn't a Tailwind default font
- WhatsApp link uses Syria country code 963 (0935362951 → 963935362951)
