import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased" dir="rtl">
      {/* الهيدر */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
              <i className="fas fa-mobile-alt text-xl"></i>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-l from-blue-400 to-slate-200 bg-clip-text text-transparent">
                مركز أبو نمر
              </span>
              <p className="text-xs text-slate-400">للهواتف الذكية</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-blue-400 transition">خدماتنا</a>
            <a href="#contact" className="hover:text-blue-400 transition">اتصل بنا</a>
          </nav>
          <a href="https://wa.me/962788410214" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/20 transition duration-200">
            <i className="fab fa-whatsapp text-base"></i>
            <span>تواصل معنا</span>
          </a>
        </div>
      </header>

      <main>
        {/* سكشن الهيرو */}
        <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:w-2/3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                أخصائيو صيانة معتمدون
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight mb-6">
                صيانة احترافية <br />
                <span className="bg-gradient-to-l from-blue-400 via-blue-500 to-slate-200 bg-clip-text text-transparent">
                  لكافة أنواع الهواتف
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
                في مركز أبو نمر، نقدم حلول صيانة متكاملة لجميع أنواع الهواتف الذكية بأحدث المعدات، بالإضافة إلى بيع وشراء الأجهزة الجديدة والمستعملة بأفضل الأسعار.
              </p>
            </div>
          </div>
        </section>

        {/* سكشن الميزات السريعة */}
        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <i className="fas fa-tools text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">صيانة فورية</h3>
                  <p className="text-sm text-slate-400">نصلح جهازك ونعيده لك في وقت قياسي وبأعلى جودة.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <i className="fas fa-shield-alt text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">قطع أصلية ومضمونة</h3>
                  <p className="text-sm text-slate-400">نستخدم قطع غيار مكفولة لضمان أداء جهازك المثالي.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <i className="fas fa-tags text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">أفضل أسعار السوق</h3>
                  <p className="text-sm text-slate-400">أسعار منافسة وعروض مستمرة على الهواتف والإكسسوارات.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* سكشن الخدمات */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">خدماتنا المتميزة</h2>
              <p className="text-slate-400">كل ما يحتاجه هاتفك الذكي تحت سقف واحد وبأيدي خبراء</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/45 transition group">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                  <i className="fas fa-laptop-medical text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">صيانة الهاردوير</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  إصلاح الشاشات، تبديل البطاريات، صيانة مداخل الشحن، وحل مشاكل اللوحة الأم (البورد) بدقة متناهية.
                </p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/45 transition group">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                  <i className="fas fa-code-branch text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">السوفتوير والبرمجة</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  تحديث الأنظمة، حل مشاكل التعليق، تخطي حسابات iCloud و Google Account، وفك تشفير الشبكات.
                </p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/45 transition group">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6">
                  <i className="fas fa-store text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">بيع وشراء الهواتف</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  تشكيلة واسعة من الأجهزة الجديدة والمستعملة النظيفة المكفولة، مع إمكانية البدل بأفضل تقييم لجهازك.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* الفوتر وسكشن الاتصال */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-850 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <span className="text-xl font-bold text-white">مركز أبو نمر</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                خياراتك الموثوقة لصيانة وبيع الهواتف الذكية. جودة، سرعة، وأمانة في التعامل.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">اتصل بنا</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone-alt text-blue-400"></i>
                  <span dir="ltr">+962 7 8841 0214</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} مركز أبو نمر للهواتف الذكية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
