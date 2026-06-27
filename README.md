# 🕋 نظام إدارة رحلات العمرة (Umrah System)

نظام إدارة رحلات العمرة المطور بـ React + TypeScript + Vite + Firebase.

## 🚀 المميزات

- ✅ إدارة الرحلات والعملاء والمعتمرين
- ✅ نظام أدوار متدرج (مدير / مستخدم / مشرف / زائر)
- ✅ حذف ناعم (Soft Delete) مع أرشيف
- ✅ تقارير وطباعة متقدمة
- ✅ رسوم بيانية تفاعلية (Chart.js)
- ✅ مساعد ذكي (AI) مع Claude API
- ✅ PWA - تطبيق ويب تقدمي
- ✅ تصميم متجاوب للجوال
- ✅ تخزين سحابي (Firebase) + نسخة محلية (LocalStorage)

## 📦 التثبيت

```bash
# 1. تثبيت الاعتماديات
npm install

# 2. إعداد المتغيرات البيئية
cp .env.example .env
# عدل المفاتيح في ملف .env

# 3. تشغيل التطوير
npm run dev

# 4. البناء للإنتاج
npm run build
```

## 🔧 المتغيرات البيئية

| المتغير | الوصف |
|---------|-------|
| `VITE_FIREBASE_API_KEY` | مفتاح Firebase API |
| `VITE_ANTHROPIC_API_KEY` | مفتاح Claude API (اختياري) |

## 📁 هيكل المشروع

```
src/
├── components/     # المكونات المشتركة
│   ├── UI/        # عناصر واجهة المستخدم
│   ├── Charts/    # الرسوم البيانية
│   ├── Layout/    # تخطيط الصفحة
│   └── Auth/      # مصادقة المستخدم
├── pages/         # صفحات التطبيق
├── hooks/         # Hooks مخصصة
├── context/       # إدارة الحالة (Zustand)
├── utils/         # أدوات مساعدة
├── types/         # أنواع TypeScript
├── constants/     # الثوابت
└── firebase/      # تكوين Firebase
```

## 🛠️ التقنيات المستخدمة

- React 18 + TypeScript
- Vite (Build Tool)
- Tailwind CSS
- Zustand (State Management)
- Firebase (Auth + Firestore)
- Chart.js
- Lucide React (Icons)

## 📄 الترخيص

MIT License
