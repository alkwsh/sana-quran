window.SANA_PRIVACY = {
  "privacy_usage": {
    "ar": "الخصوصية والاستخدام",
    "en": "Privacy and use"
  },
  "privacy_intro": {
    "ar": "هذه الصفحة توضح ما يبقى على جهازك، ومتى يحتاج سنا إلى خدمات خارجية، وكيف تستخدم أدواته. تنطبق على الميزات المتاحة حاليًا.",
    "en": "This page explains what stays on your device, when Sana uses external services, and how its tools work. It describes the features currently available."
  },
  "privacy_revision": {
    "ar": "آخر تحديث: 1 أكتوبر 2026",
    "en": "Last updated: October 1, 2026"
  },
  "privacy_provider_link": {
    "ar": "عن خدمة QUD ومعالجة الصوت",
    "en": "About QUD and audio processing"
  },
  "privacy_host_link": {
    "ar": "خصوصية Hugging Face",
    "en": "Hugging Face privacy"
  },
  "privacy_local_title": {
    "ar": "بياناتك على جهازك",
    "en": "Your data on your device"
  },
  "privacy_local_body": {
    "ar": "تُحفظ مشاريعك وتسجيلاتك المحفوظة وإعداداتك والفواصل وأثر القراءة محليًا داخل سنا. لا يتطلب التطبيق إنشاء حساب. تُعالج جلسات تسميع الحفظ محليًا بنموذج مضمّن، ولا نحفظ صوت الجلسة أو نصها كتسجيل؛ نحتفظ بالتقدم وبيانات أثر القراءة اللازمة للميزات. تسجيل «سجّل بصوتك» ميزة منفصلة تحفظ الصوت عندما تختار استخدام التسجيل. عند المسح بالصورة، تتم قراءة الصورة ومطابقتها على الجهاز دون حفظها أو إرسالها. إذن الكاميرا لا يُطلب إلا عند اختيار فتحها.",
    "en": "Projects, saved recordings, settings, bookmarks and reading history are stored locally in Sana. No account is required. Memorization review runs on an included on-device model; session audio and transcripts are not saved as recordings. Progress and reading-impact records are retained for those features. Record your voice is a separate feature that saves audio when you choose to use the recording. When scanning, images are recognized and matched on-device without saving or uploading them. Camera permission is requested only when you choose to open it."
  },
  "privacy_audio_title": {
    "ar": "تحليل تسجيلات المشاركة",
    "en": "Analyzing audio for sharing"
  },
  "privacy_audio_body": {
    "ar": "عند إضافة ملف صوتي أو فيديو، نحتفظ بالصوت فقط لهذه الميزة ونبدأ تحليل نسخة صوتية عبر الإنترنت فور تجهيزها، أثناء اختيار الجزء وتحسين الصوت. وقد يشمل الإرسال التسجيل كاملًا قبل قصّه، بما فيه أي كلام أو أصوات خلفية. لتسجيل الميكروفون تبدأ المعالجة الخارجية بعد إيقاف التسجيل. لا نرسل صورة الفيديو أو اسمه أو عنوان التسجيل. إذا تعذّر الاتصال بالخدمة أو لم تكن متاحة نستخدم نموذج 3.1 على جهازك. تحسين الصوت وقصّه يجريان محليًا ولا يغيران أصل التسجيل أثناء المعاينة.",
    "en": "When you add an audio file or video, this feature keeps its audio and starts online analysis as soon as the audio copy is ready, while you choose the excerpt and audio enhancement. The upload may include the full recording before trimming, including speech and background sounds. For microphone recordings, external analysis starts after you stop recording. We do not send video frames, the video filename or the recording title. If the connection fails or the service is unavailable, the on-device 3.1 model is used. Trimming and sound enhancement run locally and do not change the master during preview."
  },
  "privacy_provider_title": {
    "ar": "خدمة تحليل الصوت",
    "en": "Audio analysis service"
  },
  "privacy_provider_body": {
    "ar": "نستخدم QUD / Quranic Universal Aligner المستضاف على Hugging Face للتعرّف على الآيات. ولتحديد توقيت الكلمات تستخدم الخدمة معالج MFA خارجيًا مستضافًا أيضًا على Hugging Face. يستقبل مزوّد الخدمة نسخة الصوت وبيانات الاتصال المعتادة مثل عنوان IP. توضح وثائق الخدمة أنها تحتفظ بالصوت المعالج مؤقتًا لبضع ساعات؛ ليست هذه مهلة حذف نتحكم بها أو ضمانًا منا لسياسة المزوّد. إلغاء العملية يوقف طلبات سنا، لكنه لا يسترجع نسخة وصلت إلى الخدمة. حذف التسجيل محليًا لا يرسل طلب حذف إلى المزوّد. لا ترفع تسجيلًا لا ترغب في معالجته خارجيًا؛ يمكن استخدام التحليل المحلي دون اتصال بالإنترنت.",
    "en": "We use QUD / Quranic Universal Aligner hosted on Hugging Face to identify verses. For word timing, the service also uses an external MFA processor hosted on Hugging Face. The provider receives an audio copy and ordinary connection data such as your IP address. Its documentation describes caching processed audio for a few hours; this is not a retention period we control or a guarantee of the provider’s policy. Cancellation stops Sana’s requests but cannot retrieve a copy already received by the service. Local deletion does not send a deletion request to the provider. Do not upload recordings you do not want processed externally; local analysis can be used without an internet connection."
  },
  "privacy_social_title": {
    "ar": "المقاطع المشتركة عبر رابط",
    "en": "Clips shared through links"
  },
  "privacy_social_body": {
    "ar": "عند تأكيد فتح سنا من المشاركة، يُحفظ رابط المقطع على جهازك مؤقتًا إلى أن تفتح سنا. تُحذف الروابط بعد إغلاق الاستيراد أو عند فحص الروابط المنتهية بعد 24 ساعة. لا تتزامن هذه الروابط مع iCloud. يتصل سنا بإنستغرام أو تيك توك لجلب الفيديو العام، دون قراءة جلسة حسابك أو تسجيل دخولك. ملفات ارتباط مؤقتة تبقى داخل جلسة الطلب فقط. يُحذف الفيديو المؤقت بعد استخراج الصوت؛ ويخضع تحليل الصوت لسياسة مزود التحليل الموضحة هنا. قد تتعذر بعض الروابط، ولا يتجاوز سنا قيود الحسابات الخاصة أو تسجيل الدخول.",
    "en": "When you confirm opening Sana from sharing, the clip link is stored temporarily on this device until you open Sana. Links are removed after closing import or when expired links are checked after 24 hours. They do not sync with iCloud. Sana contacts Instagram or TikTok to fetch public video without reading your account session or signing you in. Temporary cookies stay within that request session. The temporary video is deleted after extracting audio; audio analysis follows the provider policy described here. Some links may be unavailable; Sana does not bypass private-account or sign-in restrictions."
  },
  "privacy_permissions_title": {
    "ar": "الأذونات والتذكيرات",
    "en": "Permissions and reminders"
  },
  "privacy_permissions_body": {
    "ar": "لا يعمل الميكروفون إلا بعد بدء ميزة صوتية ومنح الإذن. نستورد الملفات والصور أو الفيديوهات التي تختارها، ويحتاج حفظ التصدير إلى الصور لإذن الإضافة فقط. البحث الصوتي يستخدم خدمات Apple للتعرّف على الكلام، وقد يعالج الكلام عبر الإنترنت عندما لا تتاح المعالجة على الجهاز. التذكيرات اختيارية ومحلية وصامتة، ويمكن إيقافها من سنا أو إعدادات النظام. لا تُستخدم أذونات التسجيل لتشغيل الميكروفون سرًا.",
    "en": "The microphone runs only after you start a voice feature and grant permission. We import the files, photos or videos you select; saving exports to Photos requires add-only permission. Voice search uses Apple speech recognition and may process speech online when on-device recognition is unavailable. Reminders are optional, local and silent and can be disabled in Sana or system settings. Recording permissions are not used to start the microphone secretly."
  },
  "privacy_network_title": {
    "ar": "الاتصال والخدمات الأخرى",
    "en": "Connections and other services"
  },
  "privacy_network_body": {
    "ar": "تنزيل التلاوات وطبعات المصحف والمشاهد يحتاج إلى الاتصال بمصادرها. محاولة التعرّف على القارئ تستخدم بصمة صوتية عبر ShazamKit عندما تكون الخدمة متاحة، ولا تغيّر صوتك أو تختار قارئًا بديلًا. قد تستقبل هذه الخدمات بيانات الاتصال المعتادة. لا نعرض أسماء الأشخاص في أثر المشاركة، ولم تُفعّل بعد خدمة احتساب الدعوات أو تسجيل الدخول. لا يحتوي هذا الإصدار على Firebase أو نظام إعلانات أو تتبّع إعلاني.",
    "en": "Downloading recitations, Mushaf editions and scenes requires connections to their sources. Reciter identification uses an audio fingerprint through ShazamKit when available; it does not change your audio or substitute a reciter. These services may receive ordinary connection data. Share impact does not display people’s names; referral attribution and sign-in services are not yet active. This version does not include Firebase, advertising or advertising tracking."
  },
  "privacy_retention_title": {
    "ar": "الحفظ والحذف والمشاركة",
    "en": "Storage, deletion and sharing"
  },
  "privacy_retention_body": {
    "ar": "يمكنك حذف المشاريع والتسجيلات والتنزيلات من أقسامها. إزالة تسجيل من المكتبة قد تُبقي ملفه إذا كان مشروع محفوظ لا يزال يستخدمه، حتى لا يتلف المشروع. تُنظّف الملفات المؤقتة التي يملكها سنا عند انتهاء العملية أو إلغائها؛ وقد يترك إغلاق النظام المفاجئ ملفات مؤقتة حتى التنظيف اللاحق. لا تُنشر مشاريعك تلقائيًا. عند المشاركة أو الحفظ في الصور تصبح النسخة خارج مكتبة سنا، وتخضع للتطبيق أو الخدمة التي اخترتها. قد تشمل نسخة جهازك الاحتياطية بيانات التطبيق بحسب إعدادات النظام؛ حذف سنا لا يحذف النسخ التي صدّرتها أو نسخ الجهاز الاحتياطية.",
    "en": "Projects, recordings and downloads can be deleted in their respective sections. Removing a recording from the library may retain its file while a saved project still uses it, so the project remains intact. Sana-owned temporary files are cleaned when work ends or is cancelled; an abrupt system termination may leave temporary files until later cleanup. Projects are not published automatically. Sharing or saving to Photos creates a copy outside Sana’s library, governed by the app or service you choose. Device backups may include app data according to system settings; deleting Sana does not delete exported copies or device backups."
  },
  "privacy_support_title": {
    "ar": "المشاكل والاقتراحات",
    "en": "Problems and suggestions"
  },
  "privacy_support_body": {
    "ar": "الإبلاغ اختياري. يُجهّز سنا تقريرًا محليًا يتضمن وصفك وإصدار التطبيق ونوع الجهاز والنظام واللغة والصفحة وحالات تشغيل تقنية محدودة. هز الجهاز يضيف لقطة شاشة ظاهرة في النموذج، ويمكنك إلغاء إرفاقها. لا يتضمن التقرير ملفات المشاريع أو التسجيلات الصوتية أو سجل بحثك. لا يُرسل شيء تلقائيًا؛ تختار الإرسال من البريد أو المشاركة إلى Aboutmuslimapp@gmail.com. تُحذف المرفقات المؤقتة بعد انتهاء استخدامها. يمكنك إيقاف هز الجهاز من الإعدادات.",
    "en": "Reporting is optional. Sana prepares a local report with your description, app version, device and system information, language, current screen and limited technical events. Shaking adds a screenshot visible in the form, which you can exclude. The report does not include project files, audio recordings or search history. Nothing is sent automatically; you choose to send it by mail or sharing to Aboutmuslimapp@gmail.com. Temporary attachments are removed when no longer in use. You can disable shake reporting in Settings."
  },
  "privacy_usage_title": {
    "ar": "استخدام النتائج والمحتوى",
    "en": "Using results and content"
  },
  "privacy_usage_body": {
    "ar": "التعرّف على الآيات والتوقيت ومتابعة الحفظ أدوات مساعدة قد تخطئ أو تفوّت كلمات، وليست حكمًا على صحة التلاوة أو التجويد. راجع الآيات وتوقيتها قبل نشرها، ويمكنك تعديل الاختيار يدويًا. تبقى نصوص القرآن من المصادر المثبتة داخل التطبيق؛ لا ننشئ آيات بديلة. استخدم تسجيلات ووسائط تملك حق استخدامها، وراعِ خصوصية أصحاب الأصوات وحقوق المصادر الموضحة في «حول سنا».",
    "en": "Verse identification, timing and memorization tracking are assistive tools that can make mistakes or miss words. They are not a ruling on recitation or tajweed. Review verses and their timing before publishing; selections can be adjusted manually. Quran text remains sourced from the app’s pinned corpus; we do not generate replacement verses. Use recordings and media you have rights to use, and respect the privacy of recorded people and the source notices in About Sana."
  },
  "privacy_updates_title": {
    "ar": "التغييرات المستقبلية",
    "en": "Future changes"
  },
  "privacy_updates_body": {
    "ar": "سنحدّث هذه الصفحة قبل تفعيل خدمات جديدة تجمع أو تعالج بيانات، مع توضيح نوع البيانات والغرض منها والجهة المستقبلة والخيارات المتاحة. إضافة Firebase أو خدمة دعوات مستقبلًا لا تعني أنها مستخدمة في الإصدار الحالي.",
    "en": "We will update this page before enabling new services that collect or process data, explaining the data, purpose, recipient and available choices. Planned Firebase or referral services are not used in the current version."
  }
};
