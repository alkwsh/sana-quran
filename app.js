(() => {
  'use strict';
  const copy = {
    skip:['انتقل إلى المحتوى','Skip to content'],brand:['سنا القرآن','Sana Quran'],home:['الرئيسية','Home'],privacy:['الخصوصية','Privacy'],contact:['تواصل معنا','Contact'],copyright:['© 2026 سنا القرآن','© 2026 Sana Quran'],
    eyebrow:['مساحة هادئة مع القرآن','A quiet space with the Quran'],hero1:['اقرأ بتأنٍّ.','Read with care.'],hero2:['وشارك الأثر.','Share what matters.'],heroDescription:['مصحفك، وتسميع حفظك، ومشاركة الآيات. في تجربة واحدة، تتشكّل على اختيارك.','Your Mushaf, memorization review, and verse sharing. One considered experience, shaped around your choices.'],discover:['تعرّف على سنا','Explore Sana'],testing:['قريبًا على App Store. سنا حاليًا في المرحلة التجريبية.','Coming to the App Store. Sana is currently in testing.'],featuresLabel:['قريبٌ من يومك','Part of your day'],featuresTitle:['مع القرآن، من القراءة إلى المشاركة.','With the Quran, from reading to sharing.'],
    reviewLabel:['تسميع الحفظ','Memorization review'],reviewTitle:['راجع حفظك،\nمن حيث تريد.','Review your memorization.\nStart where you want.'],reviewDescription:['ابدأ التلاوة، وتابع الكلمات التي يتعرّف عليها سنا في موضعها من المصحف. يمكنك الانتقال إلى سورة أخرى خلال الجلسة.','Begin reciting and follow the words Sana recognizes in the Mushaf. Move to another surah during the same session.'],onDevice:['المعالجة على جهازك','Processed on your device'],reviewCaption:['لقطة توضيحية من واجهة التسميع','A demonstration of the review interface'],
    readingLabel:['المصحف','Your Mushaf'],readingTitle:['مساحة لقراءةٍ مطمئنة.','Make room for reading.'],readingDescription:['مصحف المدينة بإصداريه، أو المصحف النصي. اختر الزخرفة والفاصل، وأكمل من الموضع الذي حفظته.','Choose either Madinah edition or the text Mushaf. Pick your ornament and bookmark, then return to your saved place.'],
    audioLabel:['صوتٌ تودّ مشاركته','A recitation worth sharing'],audioTitle:['من مقطعٍ أعجبك،\nإلى آياتٍ تشاركها.','From a clip you love\nto verses you share.'],audioDescription:['أضف ملفًا صوتيًا أو فيديو، أو شارك رابطًا من Instagram وTikTok إلى سنا. اختر الجزء، وحسّن الصوت، ثم أنشئ مشهدك.','Add an audio or video file, or share an Instagram or TikTok link to Sana. Choose the excerpt, adjust the sound, and create your scene.'],audioSource:['صوتك، باختيارك','Your choice of audio'],
    videoLabel:['مشاركة الآيات','Share the verses'],videoTitle:['أنت تختار المشهد.\nوالآيات تتبع التلاوة.','You choose the scene.\nVerses follow the recitation.'],videoDescription:['فيديو من ألبومك أو مكتبة المشاهد، أو صفحة مصحف تفاعلية. اضبط موضع الآيات، وأضف التفسير الميسر أو الترجمة الإنجليزية.','Use a video from your library, a ready-made scene, or an interactive Mushaf page. Position the verses and add Al-Muyassar tafsir or an English translation.'],videoChoice:['فيديو','Video'],pageChoice:['صفحة مصحف','Mushaf page'],
    scanLabel:['التعرّف من صورة','Find verses in a photo'],scanTitle:['صوّر الآية.\nواقترب من معناها.','Capture a verse.\nExplore its meaning.'],scanDescription:['تعرّف على السورة والآيات في صورة المصحف، ثم اقرأ التفسير أو استمع أو شارك. راجع النتائج مقابل صورتك قبل المشاركة.','Identify the surah and verses in a Mushaf photo, then read tafsir, listen, or share. Check the results against your photo before sharing.'],
    meaningLabel:['التفسير والترجمة','Tafsir & translation'],meaningTitle:['توقّف عند المعنى.','Stay with the meaning.'],meaningDescription:['افتح التفسير الميسر عند الآية، أو اقرأ تفسير السعدي في مساحة مستقلة للنص الطويل. نزّل الكتاب، وأدر تنزيلاتك من مكان واحد.','Open Al-Muyassar for an ayah, or read Al-Saadi in a dedicated space for longer text. Download the book and manage your downloads in one place.'],yourPrivacy:['خصوصيتك، بوضوح','Privacy, made clear'],
    downloadTitle:['قريبًا، في يومك.','Soon, part of your day.'],downloadDescription:['نضع اللمسات الأخيرة. سيكون رابط التحميل هنا عند الإطلاق.','We’re putting on the finishing touches. The download link will be here at launch.'],notYet:['قريبًا — التحميل غير متاح بعد','Coming soon — download not yet available'],
    readerAlt:['المصحف في تطبيق سنا','The Mushaf in Sana'],editorAlt:['اختيار مشهد لمشاركة الآيات','Choosing a scene for sharing verses'],reviewAlt:['متابعة الكلمات خلال تسميع الحفظ','Following words during memorization review'],badgeAlt:['التحميل من App Store — متاح قريبًا','Download on the App Store — coming soon'],
    websitePrivacyTitle:['خصوصية هذه الصفحة','Privacy on this website'],websitePrivacyBody:['هذه صفحة تعريفية ثابتة مستضافة على GitHub Pages. لا نضيف أدوات تحليلات أو إعلانات أو نماذج لجمع البيانات. يُحفظ اختيار اللغة والمظهر في متصفحك فقط. قد يعالج مزوّد الاستضافة بيانات الاتصال لتقديم الصفحة، وفق سياسة خصوصيته.','This is a static website hosted on GitHub Pages. We add no analytics, advertising, or data-collection forms. Your language and appearance choices are stored only in your browser. The hosting provider may process connection data to serve the website, under its privacy policy.'],hostingPrivacy:['سياسة خصوصية الاستضافة','Hosting privacy policy'],privacyContact:['للاستفسارات المتعلقة بخصوصية سنا القرآن، تواصل معنا عبر البريد:','For questions about privacy in Sana Quran, contact us at:'],backHome:['العودة إلى الرئيسية','Back to home']
  };
  const storage = {get(key){try{return localStorage.getItem(key)}catch{return null}},set(key,value){try{localStorage.setItem(key,value)}catch{}}};
  const query = new URLSearchParams(location.search);
  let language = ['ar','en'].includes(query.get('lang')) ? query.get('lang') : (storage.get('sana.site.language') === 'en' ? 'en' : 'ar');
  let theme = ['light','dark'].includes(storage.get('sana.site.theme')) ? storage.get('sana.site.theme') : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const text = key => copy[key]?.[language === 'ar' ? 0 : 1] ?? key;
  const policy = window.SANA_PRIVACY;
  function renderPolicy(){
    if(!policy) return;
    document.querySelectorAll('[data-policy]').forEach(el => {el.textContent=policy[el.dataset.policy][language]});
    const holder=document.getElementById('policy-sections'); holder.replaceChildren();
    ["local", "audio", "provider", "social", "permissions", "network", "retention", "support", "icloud", "analytics", "usage", "updates"].forEach(section=>{
      const card=document.createElement('section');card.className='policy-card';card.id=section;
      const title=document.createElement('h2');title.textContent=policy[`privacy_${section}_title`][language];
      const body=document.createElement('p');body.textContent=policy[`privacy_${section}_body`][language];
      card.append(title,body);
      if(section==='provider') for(const [key,url] of [['privacy_provider_link','https://qud.dev/en/projects/aligner/'],['privacy_host_link','https://huggingface.co/privacy']]){const a=document.createElement('a');a.textContent=policy[key][language];a.href=url;a.target='_blank';a.rel='noopener noreferrer';card.append(a)}
      if(section==='analytics'){const a=document.createElement('a');a.textContent=policy.privacy_analytics_link[language];a.href='https://policies.google.com/privacy';a.target='_blank';a.rel='noopener noreferrer';card.append(a)}
      holder.append(card);
    });
  }
  function render(){
    document.documentElement.lang=language;document.documentElement.dir=language==='ar'?'rtl':'ltr';document.documentElement.dataset.theme=theme;
    document.querySelector('meta[name="theme-color"]').content=theme==='light'?'#e6e6e6':'#1a1a1a';
    document.title=policy ? (language==='ar'?'الخصوصية والاستخدام — سنا القرآن':'Privacy & use — Sana Quran') : (language==='ar'?'سنا القرآن — اقرأ، راجع حفظك، وشارك':'Sana Quran — Read. Review. Share.');
    document.querySelector('meta[name="description"]').content=policy ? (language==='ar'?'سياسة الخصوصية والاستخدام لتطبيق سنا القرآن.':'Privacy and use policy for Sana Quran.') : text('heroDescription');
    document.querySelectorAll('[data-copy]').forEach(el=>{el.textContent=text(el.dataset.copy);el.style.whiteSpace='pre-line'});
    document.querySelectorAll('[data-alt]').forEach(el=>el.alt=text(el.dataset.alt));
    document.querySelectorAll('[data-icon]').forEach(el=>el.src=`assets/icon-${theme}.png`);
    document.querySelectorAll('[data-screen]').forEach(el=>el.src=`assets/${el.dataset.screen}-${language}-${theme}.png`);
    document.querySelectorAll('[data-local-link]').forEach(el=>{const u=new URL(el.getAttribute('href'),location.href);u.searchParams.set('lang',language);el.href=u.pathname+u.search+u.hash});
    document.querySelectorAll('[data-brand-label]').forEach(el=>el.setAttribute('aria-label',text('brand')));
    document.querySelectorAll('[data-nav-label]').forEach(el=>el.setAttribute('aria-label',language==='ar'?'الصفحة':'Page navigation'));
    document.querySelector('[data-hero-label]')?.setAttribute('aria-label',language==='ar'?'صور من تطبيق سنا':'Screens from Sana');
    document.querySelector('.verse-ornament')?.setAttribute('aria-label',language==='ar'?'الآية الثانية':'Verse 2');
    document.getElementById('language').textContent=language==='ar'?'EN':'ع';
    document.getElementById('language').setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');
    const themeButton=document.getElementById('theme');themeButton.setAttribute('aria-label',language==='ar'?(theme==='light'?'تفعيل النمط الداكن':'تفعيل النمط الفاتح'):(theme==='light'?'Switch to dark appearance':'Switch to light appearance'));themeButton.setAttribute('aria-pressed',String(theme==='dark'));
    renderPolicy();
  }
  document.getElementById('language').addEventListener('click',()=>{language=language==='ar'?'en':'ar';storage.set('sana.site.language',language);const u=new URL(location.href);u.searchParams.set('lang',language);history.replaceState(null,'',u);render()});
  document.getElementById('theme').addEventListener('click',()=>{theme=theme==='light'?'dark':'light';storage.set('sana.site.theme',theme);render()});
  document.querySelectorAll('[data-waveform]').forEach(el=>{for(let i=0;i<60;i++){const bar=document.createElement('i');bar.style.height=`${10+Math.abs(Math.sin(i*.67)*Math.cos(i*.12))*40}px`;el.append(bar)}});
  document.querySelectorAll('.scan-symbol i').forEach((el,i)=>el.style.setProperty('--i',i%3+Math.floor(i/3)));
  const quran=document.getElementById('quran-sample');if(quran && window.SANA_QURAN_SAMPLE)quran.textContent=window.SANA_QURAN_SAMPLE;
  render();
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){
    document.documentElement.classList.add('motion-ready');
    const observer=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{if(isIntersecting){target.classList.remove('pending');target.classList.add('in-view');observer.unobserve(target)}})},{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('pending');observer.observe(el)});
  }
})();
