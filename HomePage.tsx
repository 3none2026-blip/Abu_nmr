import React, { useState } from 'react';
import { Phone, MessageSquare, Wrench, Shield, Smartphone, Clock, MapPin, CheckCircle, Menu, X, ChevronRight, Star } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', device: '', issue: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', device: '', issue: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800" style={{ fontFamily: "'Cairo', sans-serif" }}>
      {/* شريط الإعلانات العلوي */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4 text-center text-sm font-semibold flex justify-center items-center gap-4 border-b border-blue-900">
        <a href="tel:0935362951" className="flex items-center gap-1 hover:underline">
          <Phone size={14} /> 0935362951
        </a>
        <span>•</span>
        <span>أهلاً بكم في مركز أبو نمر للهواتف الذكية</span>
      </div>

      {/* الهيدر الهيدر الرئيسي */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">ن</div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">مركز <span className="text-[#1e3a8a]">أبو نمر</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#hero" className="text-gray-600 hover:text-[#1e3a8a] transition-colors">الرئيسية</a>
            <a href="#services" className="text-gray-600 hover:text-[#1e3a8a] transition-colors">خدماتنا</a>
            <a href="#store" className="text-gray-600 hover:text-[#1e3a8a] transition-colors">المعرض</a>
            <a href="#book" className="text-gray-600 hover:text-[#1e3a8a] transition-colors">حجز موعد</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/963935362951" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-sm hover:bg-green-600 transition-all transform hover:-translate-y-0.5">
              <MessageSquare size={18} /> تواصل عبر الواتساب
            </a>
          </div>

          <button className="md:hidden text-gray-600 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* قائمة الموبايل الجانبية */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#hero" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>الرئيسية</a>
            <a href="#services" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>خدماتنا</a>
            <a href="#store" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>المعرض</a>
            <a href="#book" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>حجز موعد</a>
            <a href="https://wa.me/963935362951" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm">
              <MessageSquare size={18} /> واتساب مباشر
            </a>
          </div>
        )}
      </header>

      {/* قسم الترحيب الرئيسي (Hero Section) */}
      <section id="hero" className="relative bg-gradient-to-br from-gray-900 to-blue-950 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold">
              <SparklesIcon className="w-4 h-4" /> صيانة احترافية وأجهزة مضمونة
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              رجع تلفونك وكأنه <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">جديد تماماً</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              في مركز أبو نمر، نقدم حلول صيانة متكاملة لجميع أنواع الهواتف الذكية بأيدي خبراء، بالإضافة إلى تشكيلة مميزة من الأجهزة الجديدة والمستعملة المكفولة.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#book" className="w-full sm:w-auto bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all text-center">
                احجز صيانة الآن
              </a>
              <a href="tel:0935362951" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2">
                <Phone size={18} /> اتصل بنا مباشر
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl absolute top-10"></div>
            <div className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-md p-6 rounded-3xl shadow-2xl w-full max-w-md space-y-4 transform hover:scale-[1.02] transition-transform">
              <div className="flex justify-between items-center border-b border-gray-700/50 pb-4">
                <span className="font-bold text-lg">حالة الصيانة الفورية</span>
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                  <Wrench className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm font-semibold">تبديل شاشات وبطاريات</p>
                    <p className="text-xs text-gray-400">خلال 30 دقيقة فقط</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                  <Shield className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm font-semibold">قطع تبديل أصلية 100%</p>
                    <p className="text-xs text-gray-400">مع كفالة حقيقية للمنتج</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم خدمات الصيانة */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">خدمات الصيانة الاحترافية</h2>
          <p className="text-gray-600">نصلح كل شيء! مهما كان العطل في جهازك، فريقنا الفني جاهز لإعادته للخدمة بأعلى كفاءة.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Smartphone size={32} />, title: 'تبديل الشاشات والـباغات', desc: 'تغيير الشاشات المكسورة ببدائل أصلية وعالية الجودة بحذر شديد وضمان الوضوح.' },
            { icon: <Wrench size={32} />, title: 'صيانة الماذر بورد والـ IC', desc: 'حل أعقد مشاكل البورد، التماس، وأعطال الشحن والشبكة بدقة ميكروسكوبية.' },
            { icon: <Clock size={32} />, title: 'تغيير البطاريات الفوري', desc: 'تبديل بطاريات الهاتف الضعيفة ببطاريات أصلية لتعود كفاءة العمل كما كانت.' },
            { icon: <Shield size={32} />, title: 'السوفت وير وفك الحسابات', desc: 'سوفت وير كامل، فك حسابات iCloud و FRP، وتحديث الأنظمة لأحدث إصدار.' },
            { icon: <Smartphone size={32} />, title: 'إصلاح الكاميرات والحساسات', desc: 'حل مشاكل الغباش، الفوكس المفقود، وتغيير زجاج الكاميرات الخلفية.' },
            { icon: <Wrench size={32} />, title: 'تنظيف وصيانة الصوت', desc: 'إصلاح السبيكرات، المايكات، وسماعات الأذن من الأوساخ أو التلف الكامل.' },
          ].map((srv, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="text-[#1e3a8a] bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{srv.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* قسم معرض الأجهزة (جديد ومستعمل) */}
      <section id="store" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center md:text-right space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">معرض الأجهزة الذكية</h2>
              <p className="text-gray-600">نوفر أحدث الأجهزة الجديدة بالكرتونة وأجهزة مستعملة نظيفة جداً وخالية من العيوب.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tag: 'جديد', title: 'iPhone 15 Pro Max', status: 'مكفول سنة كاملة', price: 'تواصل للسعر' },
              { tag: 'مستعمل نظيف', title: 'Samsung S23 Ultra', status: 'نظافة 99% مع كرتونة', price: 'تواصل للسعر' },
              { tag: 'جديد', title: 'Redmi Note 13 Pro', status: 'نسخة عالمية مميزة', price: 'تواصل للسعر' },
              { tag: 'مستعمل', title: 'iPhone 13 Pro', status: 'صحة البطارية 88% نظيف', price: 'تواصل للسعر' },
            ].map((prod, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between">
                <div className="bg-gray-200 h-48 flex items-center justify-center relative">
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white ${prod.tag === 'جديد' ? 'bg-blue-600' : 'bg-amber-600'}`}>
                    {prod.tag}
                  </span>
                  <Smartphone size={64} className="text-gray-400" />
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{prod.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{prod.status}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="font-bold text-blue-700 text-sm">{prod.price}</span>
                    <a href={`https://wa.me/963935362951?text=استفسار عن ${prod.title}`} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <MessageSquare size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم حجز مواعيد الصيانة وعنوان المركز */}
      <section id="book" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">حجز موعد صيانة فوري</h3>
            <p className="text-gray-600 text-sm">املاً النموذج لتجهيز قطع التبديل المناسبة لجهازك قبل وصولك للمركز لتوفير وقتك.</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
              <input type="text" required value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1e3a8a]" placeholder="أبو نمر" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
              <input type="tel" required value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1e3a8a] text-right" placeholder="0935362951" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">نوع الجهاز</label>
                <input type="text" required value={formData.device} onChange={(e)=>setFormData({...formData, device: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1e3a8a]" placeholder="آيفون 14 برو" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">المشكلة أو العطل</label>
                <input type="text" required value={formData.issue} onChange={(e)=>setFormData({...formData, issue: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1e3a8a]" placeholder="كسر بالشاشة الخارجية" />
              </div>
            </div>
            <button type="submit" className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors">
              تأكيد الحجز الفوري
            </button>
            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-2 text-sm font-semibold">
                <CheckCircle size={18} /> تما استلام طلبك يا بطل! سنقوم بالتواصل معك لتأكيد الموعد.
              </div>
            )}
          </form>
        </div>

        <div className="space-y-8 lg:pt-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">موقع المركز وأوقات الدوام</h3>
            <p className="text-gray-600 leading-relaxed">
              شرفنا بزيارتك في المحل لفحص جهازك مجاناً والحصول على استشارة فورية من الفنيين المختصين لدينا.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 text-[#1e3a8a] p-3 rounded-xl"><MapPin size={24} /></div>
              <div>
                <h5 className="font-bold text-gray-900 text-lg">عنوان صالة العرض والصيانة</h5>
                <p className="text-gray-600 text-sm mt-1">سوريا - دمشق</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 text-[#1e3a8a] p-3 rounded-xl"><Clock size={24} /></div>
              <div>
                <h5 className="font-bold text-gray-900 text-lg">ساعات العمل الرسمية</h5>
                <p className="text-gray-600 text-sm mt-1">يومياً من الساعة 10:00 صباحاً حتى 9:00 مساءً (ما عدا الجمعة)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* شريط الاتصال الثابت السفلي */}
      <footer className="bg-gray-900 text-white pt-12 pb-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-right">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight">مركز <span className="text-blue-400">أبو نمر</span></span>
            <p className="text-gray-400 text-sm leading-relaxed">الوجهة الأولى الموثوقة لصيانة وبيع الهواتف الذكية بأعلى معايير الجودة والأمان.</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold text-lg">روابط سريعة</h5>
            <div className="space-y-1 text-sm text-gray-400">
              <a href="#services" className="block hover:text-white">خدمات الصيانة</a>
              <a href="#store" className="block hover:text-white">معرض الأجهزة</a>
              <a href="#book" className="block hover:text-white">حجز موعد</a>
            </div>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold text-lg">اتصل بنا</h5>
            <p className="text-sm text-gray-400">لأي استفسار فوري أو طارئ تواصل معنا:</p>
            <p className="font-bold text-blue-400 tracking-wide text-lg" style={{ direction: 'ltr' }}>0935362951</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          جميع الحقوق محفوظة © {new Date().getFullYear()} مركز أبو نمر.
        </div>
      </footer>
    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z"/></svg>
  );
}

