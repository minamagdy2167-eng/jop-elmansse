/**
 * منصتي PRO - Educational Platform Dashboard
 * Static data mode - no backend required
 */

const API_BASE = "";

// ===== STATIC MOCK DATA =====
const STATIC_DATA = {
  courses: [
    {
      id: "course-001",
      name: "الفيزياء العملية - الصف الثالث الثانوي",
      category: "علوم طبيعية",
      desc: "منهج شامل يغطي كهرباء التيار المستمر، المجالات المغناطيسية، والموجات الكهرومغناطيسية مع تجارب تفاعلية.",
      price: 450,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
      chapters: [
        {
          title: "الباب الأول: كهرباء التيار المستمر",
          lessons: [
            { id: "L001", title: "قانون أوم والمقاومة الكهربائية", videoUrl: "https://www.youtube.com/watch?v=8gvJzrjwkds", desc: "شرح تفصيلي لقانون أوم وتطبيقاته مع أمثلة محلولة", materials: [
              { id: "M001", name: "ملخص قانون أوم - مراجعة شاملة", type: "pdf", size: "2.1 MB" },
              { id: "M002", name: "تمارين إضافية - كهرباء التيار", type: "docx", size: "1.4 MB" }
            ]},
            { id: "L002", title: "توصيل المقاومات (التوالي والتوازي)", videoUrl: "https://www.youtube.com/watch?v=_-NpkdWcMpo", desc: "حساب المقاومة المكافئة في دوائر التوالي والتوازي المختلطة", materials: [
              { id: "M003", name: "جدول مقارنة أنواع التوصيل", type: "pdf", size: "890 KB" }
            ]},
            { id: "L003", title: "قوانين كيرشوف للدوائر الكهربائية", videoUrl: "https://www.youtube.com/watch?v=SRnEe4fnnOo", desc: "قانون الجهد وقانون التيار مع حل الدوائر المعقدة", materials: [] }
          ]
        },
        {
          title: "الباب الثاني: المغناطيسية والحث",
          lessons: [
            { id: "L004", title: "المجال المغناطيسي وقوة لورنتز", videoUrl: "https://www.youtube.com/watch?v=kYT67I8r7Rc", desc: "القوة المؤثرة على موصل يحمل تياراً في مجال مغناطيسي", materials: [
              { id: "M004", name: "نماذج امتحانات سابقة - مغناطيسية", type: "pdf", size: "3.2 MB" }
            ]},
            { id: "L005", title: "الحث الكهرومغناطيسي - قانون فاراداي", videoUrl: "https://www.youtube.com/watch?v=hajIIGHPeuU", desc: "اشتقاق قانون فاراداي وتطبيقاته على المولدات والمحولات", materials: [] }
          ]
        }
      ]
    },
    {
      id: "course-002",
      name: "الرياضيات المتقدمة - التفاضل والتكامل",
      category: "رياضيات",
      desc: "دورة متكاملة في حساب التفاضل والتكامل، المتتاليات والمتسلسلات، وحل المعادلات التفاضلية.",
      price: 380,
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
      chapters: [
        {
          title: "التفاضل وتطبيقاته",
          lessons: [
            { id: "L006", title: "مفهوم النهايات والمشتقات", videoUrl: "https://www.youtube.com/watch?v=WUvTyaaNkzM", desc: "تعريف المشتقة من المبادئ الأولى وقواعد التفاضل الأساسية", materials: [
              { id: "M005", name: "جدول قواعد التفاضل", type: "pdf", size: "1.8 MB" }
            ]},
            { id: "L007", title: "القيم العظمى والصغرى - تطبيقات", videoUrl: "https://www.youtube.com/watch?v=3Z6GEW_Dq7o", desc: "إيجاد نقاط الاستقرار وتحديد القيم المثلى في المسائل العملية", materials: [] }
          ]
        },
        {
          title: "التكامل وتطبيقاته",
          lessons: [
            { id: "L008", title: "التكامل المحدد وغير المحدد", videoUrl: "https://www.youtube.com/watch?v=rfG8ce4nNh0", desc: "نظرية الحساب الأساسية وطرق التكامل المختلفة", materials: [
              { id: "M006", name: "أوراق عمل تكامل - حلول نموذجية", type: "pdf", size: "2.7 MB" },
              { id: "M007", name: "مراجعة شاملة قبل الاختبار", type: "docx", size: "1.1 MB" }
            ]}
          ]
        }
      ]
    },
    {
      id: "course-003",
      name: "الكيمياء العضوية - أساسيات ومتقدم",
      category: "كيمياء",
      desc: "دراسة المركبات العضوية، التفاعلات الكيميائية، والتطبيقات الصناعية مع مخططات تفصيلية.",
      price: 420,
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=800",
      chapters: [
        {
          title: "الهيدروكربونات الأليفاتية",
          lessons: [
            { id: "L009", title: "الألكانات والألكينات", videoUrl: "https://www.youtube.com/watch?v=Rd4a1X3B61w", desc: "تسمية المركبات العضوية وخواصها الفيزيائية والكيميائية", materials: [
              { id: "M008", name: "ملخص الهيدروكربونات - جدول مقارنة", type: "pdf", size: "3.0 MB" }
            ]}
          ]
        }
      ]
    }
  ],

  quizzes: [
    {
      id: "quiz-001",
      title: "اختبار شامل - كهرباء التيار المستمر",
      targetType: "subject",
      targetId: "course-001",
      timeLimit: 30,
      questions: [
        { id: "q1", text: "إذا كان فرق الجهد بين طرفي مقاومة 12 فولت وشدة التيار 3 أمبير، فما قيمة المقاومة؟", choices: ["2 أوم", "3 أوم", "4 أوم", "6 أوم"], correctAnswer: 2 },
        { id: "q2", text: "في دائرة توالي تضم ثلاث مقاومات قيمها 2 و 3 و 5 أوم، ما المقاومة المكافئة؟", choices: ["6 أوم", "8 أوم", "10 أوم", "12 أوم"], correctAnswer: 2 },
        { id: "q3", text: "ينص قانون أوم على أن التيار يتناسب:", choices: ["تربيعياً مع الجهد", "طردياً مع المقاومة", "طردياً مع الجهد وعكسياً مع المقاومة", "عكسياً مع الجهد"], correctAnswer: 2 },
        { id: "q4", text: "مقاومتان قيمتهما 6 أوم و 3 أوم موصلتان على التوازي، ما المقاومة المكافئة؟", choices: ["9 أوم", "4.5 أوم", "2 أوم", "1 أوم"], correctAnswer: 2 },
        { id: "q5", text: "أي قانون يستخدم لحل الدوائر الكهربائية المعقدة متعددة المصادر؟", choices: ["قانون أوم فقط", "قانون كيرشوف", "قانون أمبير", "قانون فاراداي"], correctAnswer: 1 }
      ]
    },
    {
      id: "quiz-002",
      title: "اختبار درس - توصيل المقاومات",
      targetType: "lesson",
      targetId: "L002",
      timeLimit: 15,
      questions: [
        { id: "q6", text: "في التوصيل على التوالي، فرق الجهد الكلي يساوي:", choices: ["مجموع فوارق جهود المقاومات", "فرق الجهد لأكبر مقاومة", "نفس فرق الجهد لكل مقاومة", "ناتج ضرب التيار في العدد"], correctAnswer: 0 },
        { id: "q7", text: "في التوصيل على التوازي، التيار الكلي يساوي:", choices: ["تيار أصغر مقاومة", "مجموع التيارات الجزئية", "نفس التيار في كل فرع", "نصف مجموع التيارات"], correctAnswer: 1 },
        { id: "q8", text: "عند إضافة مقاومة إضافية على التوازي مع دائرة، المقاومة المكافئة:", choices: ["تزداد", "تقل", "تبقى كما هي", "تتضاعف"], correctAnswer: 1 }
      ]
    },
    {
      id: "quiz-003",
      title: "اختبار قصير - المشتقات",
      targetType: "lesson",
      targetId: "L006",
      timeLimit: 20,
      questions: [
        { id: "q9", text: "مشتقة الدالة f(x) = x³ هي:", choices: ["3x", "x²", "3x²", "2x³"], correctAnswer: 2 },
        { id: "q10", text: "مشتقة الثابت تساوي:", choices: ["الثابت نفسه", "1", "0", "غير معرفة"], correctAnswer: 2 },
        { id: "q11", text: "قاعدة حاصل الضرب للمشتقة (uv)' =", choices: ["u'v'", "u'v + uv'", "u'v - uv'", "uv' فقط"], correctAnswer: 1 }
      ]
    }
  ],

  logs: [
    { user: "أ. أحمد المصري", role: "teacher", action: "إضافة درس جديد", target: "قانون أوم والمقاومة", timestamp: new Date(Date.now() - 3600000).toISOString(), fingerprint: "hash_a1b2c3" },
    { user: "المهندس خالد الحربي", role: "assistant", action: "رفع ملف مرفق", target: "ملخص قانون أوم - PDF", timestamp: new Date(Date.now() - 7200000).toISOString(), fingerprint: "hash_d4e5f6" },
    { user: "أ. أحمد المصري", role: "teacher", action: "إنشاء اختبار ذكي", target: "اختبار شامل - كهرباء التيار", timestamp: new Date(Date.now() - 10800000).toISOString(), fingerprint: "hash_g7h8i9" },
    { user: "المهندس علي السعيد", role: "admin", action: "مراجعة سجل النظام", target: "جميع الأجهزة", timestamp: new Date(Date.now() - 86400000).toISOString(), fingerprint: "hash_j1k2l3" },
    { user: "المهندس خالد الحربي", role: "assistant", action: "تسجيل حضور طلاب", target: "الدفعة A - الجلسة الصباحية", timestamp: new Date(Date.now() - 172800000).toISOString(), fingerprint: "hash_m4n5o6" }
  ],

  submissions: [
    { studentName: "يوسف محمد", quizTitle: "اختبار شامل - كهرباء التيار المستمر", subjectName: "الفيزياء العملية", score: "4 / 5", timeSpent: "22:15", date: "2026-06-25", status: "ناجح" },
    { studentName: "كريم أحمد", quizTitle: "اختبار شامل - كهرباء التيار المستمر", subjectName: "الفيزياء العملية", score: "3 / 5", timeSpent: "28:40", date: "2026-06-25", status: "ناجح" },
    { studentName: "سارة عبد الرحمن", quizTitle: "اختبار درس - توصيل المقاومات", subjectName: "الفيزياء العملية", score: "1 / 3", timeSpent: "10:05", date: "2026-06-24", status: "راسب" },
    { studentName: "نور علي", quizTitle: "اختبار قصير - المشتقات", subjectName: "الرياضيات المتقدمة", score: "3 / 3", timeSpent: "08:30", date: "2026-06-23", status: "ناجح" }
  ],

  attendance: [
    { studentName: "يوسف محمد", code: "ST-101", status: "حاضر", timeArrived: "08:00 ص" },
    { studentName: "كريم أحمد", code: "ST-102", status: "حاضر", timeArrived: "08:05 ص" },
    { studentName: "سارة عبد الرحمن", code: "ST-103", status: "متأخر", timeArrived: "08:45 ص" },
    { studentName: "خالد الحربي", code: "ST-104", status: "غائب", timeArrived: "-" },
    { studentName: "نور علي", code: "ST-105", status: "حاضر", timeArrived: "07:58 ص" }
  ],

  watchHistory: [
    { studentName: "يوسف محمد", lectureTitle: "قانون أوم والمقاومة الكهربائية", durationWatched: 42, completionPercent: 95, pauseCount: 3, lastActive: new Date(Date.now() - 3600000).toISOString(), screenCaptureAttempts: 0 },
    { studentName: "كريم أحمد", lectureTitle: "توصيل المقاومات (التوالي والتوازي)", durationWatched: 28, completionPercent: 62, pauseCount: 7, lastActive: new Date(Date.now() - 7200000).toISOString(), screenCaptureAttempts: 1 },
    { studentName: "سارة عبد الرحمن", lectureTitle: "قانون أوم والمقاومة الكهربائية", durationWatched: 44, completionPercent: 100, pauseCount: 2, lastActive: new Date(Date.now() - 86400000).toISOString(), screenCaptureAttempts: 0 },
    { studentName: "نور علي", lectureTitle: "مفهوم النهايات والمشتقات", durationWatched: 55, completionPercent: 88, pauseCount: 4, lastActive: new Date(Date.now() - 172800000).toISOString(), screenCaptureAttempts: 0 }
  ],

  erpData: {
    revenue: "28,450 ج.م",
    salary: "12,300 ج.م",
    storage: "42.5 جيجا",
    hr: [
      { id: "emp-001", name: "المهندس خالد الحربي", job: "مساعد معلم أول", salary: "4,500 ج.م", status: "تم الصرف" },
      { id: "emp-002", name: "آية رمضان", job: "مشرفة منصة", salary: "3,200 ج.م", status: "قيد المراجعة" },
      { id: "emp-003", name: "محمد السيد", job: "مصمم جرافيك", salary: "2,800 ج.م", status: "تم الصرف" }
    ],
    inventory: [
      { id: "inv-001", item: "كتاب الفيزياء - الطبعة الرابعة", count: 85, price: "120 ج.م", status: "متوفر" },
      { id: "inv-002", item: "مذكرة الرياضيات المتقدمة", count: 12, price: "65 ج.م", status: "شارف على النفاد" },
      { id: "inv-003", item: "مذكرة الكيمياء العضوية", count: 0, price: "75 ج.م", status: "غير متوفر" },
      { id: "inv-004", item: "أوراق عمل إضافية - فيزياء", count: 200, price: "15 ج.م", status: "متوفر" }
    ]
  },

  liveStream: { active: false, url: "", title: "", mode: "self", hlsUrl: "/hls/live.m3u8" }
};

// ===== APP STATE =====
let appState = {
  currentRole: "teacher",
  courses: [],
  quizzes: [],
  logs: [],
  submissions: [],
  attendance: [],
  watchHistory: [],
  erpData: {},
  liveStream: { active: false, url: "", title: "", mode: "self", hlsUrl: "/hls/live.m3u8" },
  activeTab: "dashboard",
  selectedSubject: null,
  selectedLesson: null,
  quizBuilderQuestions: []
};

const USERS_INFO = {
  teacher:   { name: "أ. أحمد المصري",        role: "معلم المادة (كامل الصلاحيات)", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" },
  assistant: { name: "المهندس خالد الحربي",   role: "مساعد معلم",                   avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
  student:   { name: "طالب: يوسف محمد",       role: "طالب مقيد",                    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" },
  admin:     { name: "المهندس علي السعيد",    role: "مدير النظام",                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" }
};

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  loadStaticData();
  initUI();
  startSimulatedUpdates();
});

function loadStaticData() {
  appState.courses     = JSON.parse(JSON.stringify(STATIC_DATA.courses));
  appState.quizzes     = JSON.parse(JSON.stringify(STATIC_DATA.quizzes));
  appState.logs        = JSON.parse(JSON.stringify(STATIC_DATA.logs));
  appState.submissions = JSON.parse(JSON.stringify(STATIC_DATA.submissions));
  appState.attendance  = JSON.parse(JSON.stringify(STATIC_DATA.attendance));
  appState.watchHistory = JSON.parse(JSON.stringify(STATIC_DATA.watchHistory));
  appState.erpData     = JSON.parse(JSON.stringify(STATIC_DATA.erpData));
  appState.liveStream  = JSON.parse(JSON.stringify(STATIC_DATA.liveStream));
  renderAll();
}

// ===== UI WIREUP =====
function initUI() {
  const sidebar       = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle) sidebarToggle.addEventListener("click", () => sidebar.classList.toggle("collapsed"));

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.contains("mobile-open") ? closeMobileSidebar() : openMobileSidebar();
  });

  window.addEventListener("resize", () => { if (window.innerWidth > 768) closeMobileSidebar(); });

  document.querySelectorAll(".sidebar-nav .nav-item[data-tab]").forEach(item => {
    item.addEventListener("click", (e) => { e.preventDefault(); switchTab(item.getAttribute("data-tab")); });
  });

  const roleSelector = document.getElementById("roleSelector");
  if (roleSelector) roleSelector.addEventListener("change", (e) => setRole(e.target.value));

  const forms = {
    subjectForm:   handleSubjectSubmit,
    chapterForm:   handleChapterSubmit,
    lessonForm:    handleLessonSubmit,
    materialForm:  handleMaterialSubmit,
    quizForm:      handleQuizSubmit,
    quizAnswersForm: handleQuizAnswersSubmit,
    staffForm:     handleStaffSubmit,
    inventoryForm: handleInventorySubmit
  };
  Object.entries(forms).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("submit", fn);
  });

  const searches = {
    subjectSearch:    renderSubjectsGrid,
    materialSearch:   renderMaterialsGrid,
    logsSearch:       renderLogs,
    watchSearchInput: renderWatchHistoryTable
  };
  Object.entries(searches).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", fn);
  });

  const logFilter = document.getElementById("logUserFilter");
  if (logFilter) logFilter.addEventListener("change", renderLogs);

  setRole(appState.currentRole);
}

// ===== ROLE =====
function setRole(role) {
  appState.currentRole = role;
  document.body.className = `role-${role}`;
  if (role === "teacher" || role === "admin") document.body.classList.add("can-edit");

  const info = USERS_INFO[role];
  const avatar = document.getElementById("sidebarAvatar");
  if (avatar) avatar.src = info.avatar;
  const nameEl = document.getElementById("sidebarUserName");
  if (nameEl) nameEl.textContent = info.name;
  const roleEl = document.getElementById("sidebarUserRole");
  if (roleEl) roleEl.textContent = info.role;

  const badge = document.getElementById("floatingRoleBadge");
  if (badge) badge.textContent = info.role;
  const welcome = document.getElementById("welcomeTitle");
  if (welcome) welcome.textContent = `مرحباً بك مجدداً، ${info.name}!`;

  if ((role === "student" || role === "assistant") && appState.activeTab === "logs") switchTab("dashboard");
  renderAll();
}

// ===== TAB SWITCH =====
function switchTab(tabId) {
  if (tabId === "logs" && (appState.currentRole === "student" || appState.currentRole === "assistant")) {
    alert("⚠️ عذراً، لا تمتلك صلاحية عرض سجل التغييرات.");
    return;
  }
  appState.activeTab = tabId;

  document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-tab") === tabId);
  });
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
  const target = document.getElementById(`tab-${tabId}`);
  if (target) target.classList.add("active");

  closeMobileSidebar();

  const titles = {
    dashboard: "الرئيسية ولوحة التحكم", subjects: "المواد والمناهج التعليمية",
    quizzes: "نظام الاختبارات والتقييم", materials: "المكتبة والملفات المرفقة",
    attendance: "متابعة حضور وغياب الطلاب", "watch-tracking": "تتبع مشاهدات المحاضرات",
    progress: "لوحة تقدم الطالب والمنحنيات", "learning-paths": "الخطط والمسارات الدراسية الذكية",
    "quiz-analytics": "تحليلات الاختبارات ورؤى الفصول",
    "ai-tutor": "مساعد الذكاء الاصطناعي 24/7",
    "live-stream": "استوديو البث المباشر والأسئلة التفاعلية",
    erp: "النظام المتكامل لإدارة الموارد ERP",
    logs: "سجل العمليات ومتابعة المساعدين"
  };
  const titleEl = document.getElementById("pageTitle");
  if (titleEl) titleEl.textContent = titles[tabId] || "لوحة التحكم";

  if (tabId !== "subjects") closeSubjectDetail();
}

// ===== ACTIVITY LOG (local only) =====
function recordActivityLog(action, target) {
  const userProfile = USERS_INFO[appState.currentRole];
  const logItem = {
    user: userProfile.name,
    role: appState.currentRole,
    action,
    target,
    timestamp: new Date().toISOString(),
    fingerprint: "hash_" + Math.random().toString(36).substr(2, 9)
  };
  appState.logs.unshift(logItem);
  renderLogs();
  renderMiniLogs();
  renderUsersFilterDropdown();
}

// ===== RENDER ALL =====
function renderAll() {
  renderStats();
  renderSubjectsGrid();
  renderQuizzesGrid();
  renderMaterialsGrid();
  renderLogs();
  renderMiniLogs();
  renderUsersFilterDropdown();
  renderSubmissionsTable();
  renderAttendanceTable();
  renderInteractiveCalendar();
  renderWatchHistoryTable();
  renderSyllabusChecklist();
  renderLearningPath();
  renderSkillsRadar();
  renderQuizAnalyticsOverview();
  renderDifficultyAnalyzer();
  renderHistoricalComparison();
  renderERPTables();
  renderLiveStream();
}

// ===== STATS =====
function renderStats() {
  const cc = document.getElementById("statCoursesCount");
  const qc = document.getElementById("statQuizzesCount");
  const fc = document.getElementById("statFilesCount");
  const sc = document.getElementById("statStudentsCount");
  if (cc) cc.textContent = appState.courses.length;
  if (qc) qc.textContent = appState.quizzes.length;
  let totalFiles = 0;
  appState.courses.forEach(c => c.chapters.forEach(ch => ch.lessons.forEach(l => totalFiles += (l.materials || []).length)));
  if (fc) fc.textContent = totalFiles;
  if (sc) sc.textContent = appState.attendance.length || 124;
}

// ===== SUBJECTS =====
function renderSubjectsGrid() {
  const grid = document.getElementById("subjectsGrid");
  if (!grid) return;
  const query = (document.getElementById("subjectSearch")?.value || "").toLowerCase();
  const filtered = appState.courses.filter(c => c.name.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query));
  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">لا توجد مواد متطابقة.</div>`;
    return;
  }
  filtered.forEach(course => {
    let lessonsCount = 0;
    course.chapters.forEach(ch => lessonsCount += ch.lessons.length);
    const card = document.createElement("div");
    card.className = "subject-card";
    card.onclick = () => viewSubjectDetail(course.id);
    card.innerHTML = `
      <div class="subject-card-image" style="background-image:url('${course.image}');">
        <span class="subject-tag">${course.category}</span>
      </div>
      <div class="subject-card-body">
        <h3 class="subject-title">${course.name}</h3>
        <p class="subject-desc">${course.desc}</p>
        <div class="subject-card-footer">
          <span class="subject-price">${course.price} ج.م</span>
          <div class="subject-stats-summary">
            <span>📚 ${course.chapters.length} فصول</span>
            <span>🎬 ${lessonsCount} درس</span>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function viewSubjectDetail(courseId) {
  const course = appState.courses.find(c => c.id === courseId);
  if (!course) return;
  appState.selectedSubject = course;
  appState.selectedLesson = null;
  document.getElementById("subjectsGrid").style.display = "none";
  document.getElementById("subjectDetailView").style.display = "block";
  document.getElementById("detailSubjectCategory").textContent = course.category;
  document.getElementById("detailSubjectName").textContent = course.name;
  document.getElementById("detailSubjectDesc").textContent = course.desc;
  document.getElementById("detailSubjectPrice").textContent = `${course.price} ج.م`;
  let lc = 0; course.chapters.forEach(ch => lc += ch.lessons.length);
  document.getElementById("detailSubjectChaptersCount").textContent = `${course.chapters.length} فصول`;
  document.getElementById("detailSubjectLessonsCount").textContent = `${lc} درس`;
  renderChaptersList();
  document.getElementById("emptyLessonState").style.display = "flex";
  document.getElementById("activeLessonContent").style.display = "none";
}

function closeSubjectDetail() {
  appState.selectedSubject = null;
  appState.selectedLesson = null;
  const grid = document.getElementById("subjectsGrid");
  const detail = document.getElementById("subjectDetailView");
  if (grid) grid.style.display = "grid";
  if (detail) detail.style.display = "none";
}

function renderChaptersList() {
  const list = document.getElementById("chaptersList");
  if (!list) return;
  list.innerHTML = "";
  const course = appState.selectedSubject;
  if (!course || !course.chapters.length) {
    list.innerHTML = `<div class="empty-state">لا توجد فصول دراسية.</div>`;
    return;
  }
  course.chapters.forEach((ch, idx) => {
    let lessonsHtml = ch.lessons.length ? ch.lessons.map(l => {
      const isActive = appState.selectedLesson && appState.selectedLesson.id === l.id;
      return `<button class="lesson-item-btn ${isActive ? 'active' : ''}" onclick="selectLesson('${l.id}', ${idx})">🎬 ${l.title}</button>`;
    }).join("") : `<div class="empty-state" style="font-size:0.75rem;padding:8px;">لا توجد دروس.</div>`;

    const item = document.createElement("div");
    item.className = "chapter-item";
    item.innerHTML = `
      <div class="chapter-header-bar expanded" onclick="toggleChapterCollapse(this)">
        <span>📂 ${ch.title}</span>
        <div class="chapter-actions editor-only" onclick="event.stopPropagation();" style="display:flex;gap:4px;align-items:center;">
          <button class="btn btn-xs btn-outline" onclick="openAddLessonModal(${idx})">+ درس</button>
          <button class="btn btn-xs btn-danger" onclick="deleteChapter(${idx})">حذف</button>
        </div>
      </div>
      <div class="chapter-lessons-list">${lessonsHtml}</div>`;
    list.appendChild(item);
  });
}

function toggleChapterCollapse(header) { header.classList.toggle("expanded"); }

function selectLesson(lessonId, chapterIndex) {
  const course = appState.selectedSubject;
  const lesson = course.chapters[chapterIndex].lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  appState.selectedLesson = lesson;
  renderChaptersList();
  document.getElementById("emptyLessonState").style.display = "none";
  document.getElementById("activeLessonContent").style.display = "block";
  document.getElementById("activeLessonTitle").textContent = lesson.title;
  document.getElementById("activeLessonDesc").textContent = lesson.desc;
  renderLessonMaterials(lesson);
  renderLessonQuizzes(lesson);

  const wm = document.getElementById("videoWatermark");
  if (wm) wm.textContent = `ID: ${USERS_INFO[appState.currentRole].name} | ${new Date().toLocaleDateString('ar-EG')}`;

  const playerWrapper = document.getElementById("secureVideoWrapper");
  if (!playerWrapper) return;
  playerWrapper.innerHTML = "";

  const isYouTube = lesson.videoUrl.includes("youtube.com") || lesson.videoUrl.includes("youtu.be");
  if (isYouTube) {
    let embed = lesson.videoUrl;
    if (embed.includes("watch?v=")) {
      const vid = embed.split("watch?v=")[1].split("&")[0];
      embed = `https://www.youtube.com/embed/${vid}`;
    }
    const frame = document.createElement("iframe");
    frame.src = `${embed}?autoplay=0&controls=0&rel=0&modestbranding=1&disablekb=1&showinfo=0&fs=0`;
    frame.style.pointerEvents = "none";
    frame.allowFullscreen = false;
    playerWrapper.appendChild(frame);

    const shield = document.createElement("div");
    shield.className = "player-shield";
    shield.innerHTML = `
      <div style="position:absolute;bottom:8px;right:8px;left:8px;z-index:20;display:flex;gap:8px;align-items:center;background:rgba(13,17,23,0.92);padding:6px 12px;border-radius:8px;">
        <button class="btn btn-sm btn-primary" onclick="alert('تشغيل الفيديو الآمن')">▶ تشغيل</button>
        <div style="flex:1;height:4px;background:rgba(255,255,255,0.1);border-radius:2px;">
          <div style="width:33%;height:100%;background:var(--secondary);border-radius:2px;"></div>
        </div>
        <span style="font-size:0.65rem;font-family:monospace;color:var(--text-muted);">05:22 / 18:40</span>
        <span class="badge badge-success" style="font-size:0.6rem;">محمي 🔒</span>
      </div>`;
    playerWrapper.appendChild(shield);
    shield.addEventListener("contextmenu", e => { e.preventDefault(); });
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "player-placeholder";
    placeholder.innerHTML = `
      <div style="text-align:center;padding:24px;">
        <div style="font-size:2.5rem;margin-bottom:8px;">🔒</div>
        <h5>تم تشفير دفق الفيديو</h5>
        <p style="font-size:0.75rem;color:var(--text-muted);margin:8px 0;">CDN Stream: مشفر</p>
        <button class="btn btn-sm btn-primary" onclick="alert('بدء البث المشفر')">بدء المشاهدة</button>
      </div>`;
    playerWrapper.appendChild(placeholder);
  }
  initBouncingWatermark(playerWrapper);
}

function initBouncingWatermark(wrapper) {
  const activeUser = USERS_INFO[appState.currentRole].name;
  wrapper.querySelectorAll(".video-bounce-watermark").forEach(el => el.remove());
  const badge = document.createElement("div");
  badge.className = "video-bounce-watermark";
  badge.textContent = `${activeUser} (مراقبة)`;
  wrapper.appendChild(badge);
  let x = 15, y = 15, dx = 1.2, dy = 0.9;
  function animate() {
    if (!wrapper.contains(badge)) return;
    const wr = wrapper.getBoundingClientRect();
    const br = badge.getBoundingClientRect();
    const maxX = wr.width - br.width - 15;
    const maxY = wr.height - br.height - 15;
    if (x + dx > maxX || x + dx < 10) dx = -dx;
    if (y + dy > maxY || y + dy < 10) dy = -dy;
    x += dx; y += dy;
    badge.style.right = `${x}px`; badge.style.top = `${y}px`;
    requestAnimationFrame(animate);
  }
  setTimeout(animate, 600);
}

function renderLessonMaterials(lesson) {
  const list = document.getElementById("activeLessonMaterials");
  if (!list) return;
  list.innerHTML = "";
  const mats = lesson.materials || [];
  if (!mats.length) { list.innerHTML = `<div class="empty-state">لا توجد مرفقات لهذا الدرس.</div>`; return; }
  const icons = { pdf: "📄", xlsx: "📊", docx: "📝", pptx: "🖼️" };
  mats.forEach(m => {
    const el = document.createElement("div");
    el.className = "material-item";
    const isEditor = ["teacher","assistant","admin"].includes(appState.currentRole);
    const delBtn = isEditor ? `<button class="btn btn-xs btn-danger" onclick="deleteMaterial('${m.id}')">حذف</button>` : "";
    el.innerHTML = `
      <div class="material-info">
        <span class="file-icon">${icons[m.type] || "📁"}</span>
        <div><span class="file-title">${m.name}</span><div class="file-meta">الحجم: ${m.size} | النوع: ${m.type.toUpperCase()}</div></div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <button class="btn-file-dl" onclick="alert('📥 تنزيل: ${m.name}')">تحميل</button>
        ${delBtn}
      </div>`;
    list.appendChild(el);
  });
}

function renderLessonQuizzes(lesson) {
  const list = document.getElementById("activeLessonQuizzes");
  if (!list) return;
  list.innerHTML = "";
  const filtered = appState.quizzes.filter(q => q.targetType === "lesson" && q.targetId === lesson.id);
  if (!filtered.length) { list.innerHTML = `<div class="empty-state">لا توجد اختبارات قصيرة لهذا الدرس.</div>`; return; }
  filtered.forEach(q => {
    const el = document.createElement("div");
    el.className = "quiz-item-bar";
    el.innerHTML = `
      <div class="quiz-bar-info">
        <span class="quiz-bar-title">${q.title}</span>
        <span class="quiz-bar-meta">⏱️ ${q.timeLimit} دقيقة | ❓ ${q.questions.length} أسئلة</span>
      </div>
      <button class="btn btn-sm btn-primary" onclick="startQuizTaking('${q.id}')">بدء</button>`;
    list.appendChild(el);
  });
}

// ===== QUIZZES TAB =====
function renderQuizzesGrid() {
  const grid = document.getElementById("quizzesGrid");
  if (!grid) return;
  grid.innerHTML = "";
  if (!appState.quizzes.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">لا توجد اختبارات.</div>`;
    return;
  }
  appState.quizzes.forEach(quiz => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML = `
      <div class="quiz-card-header">
        <span class="quiz-tag-badge">${quiz.targetType === "subject" ? 'اختبار منهج كامل' : 'اختبار درس'}</span>
      </div>
      <h3 class="quiz-title">${quiz.title}</h3>
      <div class="quiz-details">
        <span>⏱️ الوقت: ${quiz.timeLimit} دقيقة</span>
        <span>❓ الأسئلة: ${quiz.questions.length}</span>
      </div>
      <div class="quiz-card-footer">
        <button class="btn btn-sm btn-primary" onclick="startQuizTaking('${quiz.id}')">دخول الاختبار</button>
        <button class="btn btn-sm btn-danger editor-only" onclick="deleteQuiz('${quiz.id}')">حذف</button>
      </div>`;
    grid.appendChild(card);
  });
}

function deleteQuiz(id) {
  if (!confirm("هل أنت متأكد من حذف الاختبار؟")) return;
  const index = appState.quizzes.findIndex(q => q.id === id);
  if (index > -1) { appState.quizzes.splice(index, 1); recordActivityLog("حذف اختبار دراسي", id); renderQuizzesGrid(); }
}

// ===== QUIZ PLAYER =====
let quizInterval = null, secondsRemaining = 0, violationsCount = 0, activeQuiz = null;

function startQuizTaking(quizId) {
  const quiz = appState.quizzes.find(q => q.id === quizId);
  if (!quiz || !quiz.questions.length) return;
  activeQuiz = quiz;
  violationsCount = 0;
  document.getElementById("quizPlayerModal").classList.add("active");
  document.getElementById("playerQuizTitle").textContent = quiz.title;
  document.getElementById("playerQuizTarget").textContent = quiz.targetType === "subject" ? "تقييم منهج" : "اختبار درس";
  const badge = document.getElementById("cheatWarningCount");
  if (badge) { badge.style.display = "inline-block"; badge.textContent = "مخالفات: 0 / 3"; }

  const container = document.getElementById("quizQuestionsRender");
  container.innerHTML = "";
  quiz.questions.forEach((q, qi) => {
    const div = document.createElement("div");
    div.className = "render-question-item";
    const choices = q.choices.map((c, ci) => `
      <label class="choice-option-label" onclick="highlightSelectedChoice(this)">
        <input type="radio" name="question_${q.id}" value="${ci}" required>
        <span>${c}</span>
      </label>`).join("");
    div.innerHTML = `<div class="render-q-text">س ${qi+1}: ${q.text}</div><div class="render-choices-list">${choices}</div>`;
    container.appendChild(div);
  });

  secondsRemaining = quiz.timeLimit * 60;
  updateQuizTimer();
  if (quizInterval) clearInterval(quizInterval);
  quizInterval = setInterval(() => {
    secondsRemaining--;
    updateQuizTimer();
    if (secondsRemaining <= 0) { clearInterval(quizInterval); alert("⏰ انتهى الوقت!"); autoSubmitQuiz(); }
  }, 1000);

  window.addEventListener("blur", handleBlurCheat);
  document.addEventListener("visibilitychange", handleVisibilityCheat);
}

function updateQuizTimer() {
  const h = Math.floor(secondsRemaining / 3600);
  const m = Math.floor((secondsRemaining % 3600) / 60);
  const s = secondsRemaining % 60;
  const p = n => n.toString().padStart(2, "0");
  const el = document.getElementById("quizTimerDisplay");
  if (el) el.textContent = `${p(h)}:${p(m)}:${p(s)}`;
}

function highlightSelectedChoice(label) {
  label.parentNode.querySelectorAll(".choice-option-label").forEach(el => el.classList.remove("selected"));
  label.classList.add("selected");
}

function handleBlurCheat() { if (!activeQuiz) return; violationsCount++; alertCheat(); }
function handleVisibilityCheat() { if (!activeQuiz || !document.hidden) return; violationsCount++; alertCheat(); }

function alertCheat() {
  const badge = document.getElementById("cheatWarningCount");
  if (badge) badge.textContent = `مخالفات: ${violationsCount} / 3`;
  if (violationsCount >= 3) { alert("🚨 تم إلغاء الاختبار بسبب 3 مخالفات."); autoSubmitQuiz(); }
  else alert(`⚠️ تحذير: يُمنع مغادرة شاشة التقييم! المخالفات: ${violationsCount} / 3`);
}

function closeQuizTaking() {
  window.removeEventListener("blur", handleBlurCheat);
  document.removeEventListener("visibilitychange", handleVisibilityCheat);
  if (quizInterval) clearInterval(quizInterval);
  activeQuiz = null;
  document.getElementById("quizPlayerModal").classList.remove("active");
}

function cancelQuizTaking() { if (confirm("هل تريد الانسحاب من الاختبار؟")) closeQuizTaking(); }

async function handleQuizAnswersSubmit(e) { e.preventDefault(); await saveQuizResults(); }
function autoSubmitQuiz() { saveQuizResults(); }

async function saveQuizResults() {
  if (!activeQuiz) return;
  const quiz = activeQuiz;
  const form = document.getElementById("quizAnswersForm");
  let correct = 0;
  quiz.questions.forEach(q => {
    const sel = form.querySelector(`input[name="question_${q.id}"]:checked`);
    if (sel && parseInt(sel.value) === q.correctAnswer) correct++;
  });
  const elapsed = (quiz.timeLimit * 60) - secondsRemaining;
  const timeStr = `${Math.floor(elapsed/60).toString().padStart(2,"0")}:${(elapsed%60).toString().padStart(2,"0")}`;
  const sub = {
    studentName: USERS_INFO[appState.currentRole].name,
    quizTitle: quiz.title,
    subjectName: quiz.targetType === "subject" ? "المنهج الدراسي" : "الدرس القصير",
    score: `${correct} / ${quiz.questions.length}`,
    timeSpent: timeStr,
    date: new Date().toISOString().split("T")[0],
    status: (correct / quiz.questions.length) >= 0.5 ? "ناجح" : "راسب"
  };
  appState.submissions.unshift(sub);
  alert(`🎉 تم تسليم الإجابة!\nالدرجة: ${sub.score}\nالحالة: ${sub.status}`);
  renderSubmissionsTable();
  closeQuizTaking();
}

function renderSubmissionsTable() {
  const tbody = document.getElementById("quizSubmissionsTable");
  if (!tbody) return;
  tbody.innerHTML = "";
  if (!appState.submissions.length) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center">لا توجد نتائج مسجلة.</td></tr>`;
    return;
  }
  appState.submissions.forEach(s => {
    const isPass = s.status === "ناجح";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${s.studentName}</strong></td>
      <td>${s.quizTitle}</td>
      <td>${s.subjectName}</td>
      <td style="font-weight:700;color:var(--secondary);">${s.score}</td>
      <td>${s.timeSpent}</td>
      <td>${s.date}</td>
      <td><span class="badge ${isPass ? 'badge-success' : 'badge-danger'}">${s.status}</span></td>`;
    tbody.appendChild(tr);
  });
}

// ===== MATERIALS =====
function renderMaterialsGrid() {
  const grid = document.getElementById("materialsGrid");
  if (!grid) return;
  const query = (document.getElementById("materialSearch")?.value || "").toLowerCase();
  let list = [];
  appState.courses.forEach(c => c.chapters.forEach(ch => ch.lessons.forEach(l => (l.materials || []).forEach(m => list.push({ ...m, cName: c.name, lName: l.title })))));
  const filtered = list.filter(m => m.name.toLowerCase().includes(query));
  grid.innerHTML = "";
  if (!filtered.length) { grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">لا توجد ملفات.</div>`; return; }
  const icons = { pdf: "📄", xlsx: "📊", docx: "📝", pptx: "🖼️" };
  filtered.forEach(m => {
    const card = document.createElement("div");
    card.className = "material-card";
    card.innerHTML = `
      <div class="mat-card-icon">${icons[m.type] || "📁"}</div>
      <div class="mat-card-title">${m.name}</div>
      <div class="mat-card-meta"><div>المادة: ${m.cName}</div><div style="font-size:0.7rem;">الحجم: ${m.size}</div></div>
      <button class="btn btn-sm btn-outline" style="margin-top:auto;" onclick="alert('تنزيل: ${m.name}')">تحميل</button>`;
    grid.appendChild(card);
  });
}

// ===== ATTENDANCE =====
function renderAttendanceTable() {
  const tbody = document.getElementById("attendanceTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  if (!appState.attendance.length) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center">سجل الحضور فارغ.</td></tr>`;
    return;
  }
  const studentSelect = document.getElementById("attStudentSelect");
  if (studentSelect) {
    studentSelect.innerHTML = "";
    ["يوسف محمد","كريم أحمد","سارة عبد الرحمن","خالد الحربي","نور علي"].forEach(st => {
      const opt = document.createElement("option"); opt.value = st; opt.textContent = st;
      studentSelect.appendChild(opt);
    });
  }
  appState.attendance.forEach((att, idx) => {
    const colorMap = { "حاضر": "badge-success", "غائب": "badge-danger", "متأخر": "badge-warning" };
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${att.studentName}</strong></td>
      <td><code>${att.code}</code></td>
      <td><span class="badge ${colorMap[att.status] || 'badge-info'}">${att.status}</span></td>
      <td>${att.timeArrived || "-"}</td>
      <td>${att.status === "غائب" ? '⚠️ إشعار SMS مرسل' : '✅ آمن'}</td>
      <td>
        <button class="btn btn-xs btn-outline editor-only" onclick="toggleAttendanceStatus(${idx})">تغيير</button>
        <button class="btn btn-xs btn-danger editor-only" onclick="deleteAttendanceRecord('${att.studentName}')">حذف</button>
      </td>`;
    tbody.appendChild(tr);
  });
  const total = appState.attendance.length;
  const present = appState.attendance.filter(a => a.status === "حاضر" || a.status === "متأخر").length;
  const rate = total ? Math.round((present/total)*100) : 100;
  const el1 = document.getElementById("attendancePresentRate"); if (el1) el1.textContent = `${rate}%`;
  const el2 = document.getElementById("attendanceLateCount"); if (el2) el2.textContent = `${appState.attendance.filter(a => a.status === "متأخر").length} طالب`;
  const el3 = document.getElementById("attendanceAbsentCount"); if (el3) el3.textContent = `${appState.attendance.filter(a => a.status === "غائب").length} طالب`;
}

function toggleAttendanceStatus(idx) {
  const statuses = ["حاضر","غائب","متأخر"];
  const att = appState.attendance[idx];
  att.status = statuses[(statuses.indexOf(att.status) + 1) % 3];
  att.timeArrived = att.status === "حاضر" ? "08:00 ص" : att.status === "متأخر" ? "08:45 ص" : "-";
  renderAttendanceTable();
  renderInteractiveCalendar();
}

function deleteAttendanceRecord(name) {
  if (!confirm(`حذف سجل حضور: ${name}؟`)) return;
  const idx = appState.attendance.findIndex(a => a.studentName === name);
  if (idx > -1) { appState.attendance.splice(idx, 1); recordActivityLog("حذف سجل حضور", name); renderAttendanceTable(); }
}

function renderInteractiveCalendar() {
  const cal = document.getElementById("interactiveCalendar");
  if (!cal) return;
  cal.innerHTML = "";
  ["س","ح","ن","ث","ر","خ","ج"].forEach(d => {
    const dh = document.createElement("div"); dh.className = "calendar-day-header"; dh.textContent = d; cal.appendChild(dh);
  });
  for (let i = 1; i <= 30; i++) {
    const cell = document.createElement("div");
    cell.className = "calendar-day-cell";
    cell.textContent = i;
    if (i % 7 === 1) cell.classList.add("late");
    else if (i % 7 === 4) cell.classList.add("absent");
    else if (i % 7 !== 0) cell.classList.add("present");
    cal.appendChild(cell);
  }
}

function openAddAttendanceModal() {
  document.getElementById("attendanceForm")?.reset();
  const t = document.getElementById("attTimeInput"); if (t) t.value = "08:15 ص";
  openModal("attendanceModal");
}

function handleAttendanceSubmit(e) {
  e.preventDefault();
  const student = document.getElementById("attStudentSelect")?.value;
  const statusRaw = document.getElementById("attStatusSelect")?.value || "حاضر";
  const time = document.getElementById("attTimeInput")?.value;
  const status = statusRaw.replace("🟢 ","").replace("🔴 ","").replace("🟡 ","");
  const record = { studentName: student, code: "ST-" + Math.floor(Math.random()*900+100), status, timeArrived: status === "غائب" ? "-" : time };
  appState.attendance.unshift(record);
  recordActivityLog("تسجيل حضور", `${student} - ${status}`);
  closeModal("attendanceModal");
  renderAttendanceTable();
  renderInteractiveCalendar();
}

// ===== WATCH TRACKING =====
function renderWatchHistoryTable() {
  const tbody = document.getElementById("watchTrackingTableBody");
  if (!tbody) return;
  const query = (document.getElementById("watchSearchInput")?.value || "").toLowerCase();
  const filtered = appState.watchHistory.filter(w => w.studentName.toLowerCase().includes(query) || w.lectureTitle.toLowerCase().includes(query));
  tbody.innerHTML = "";
  if (!filtered.length) { tbody.innerHTML = `<tr><td colspan="7" class="text-center">لا توجد سجلات مشاهدات.</td></tr>`; return; }
  filtered.forEach(w => {
    const safe = w.screenCaptureAttempts > 0
      ? `<span class="badge badge-danger">⚠️ مخالف (${w.screenCaptureAttempts})</span>`
      : `<span class="badge badge-success">✅ آمن</span>`;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${w.studentName}</strong></td>
      <td>${w.lectureTitle}</td>
      <td>${w.durationWatched} دقيقة</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px;min-width:120px;">
          <div class="progress-bar" style="flex:1;"><div class="progress-fill" style="width:${w.completionPercent}%;"></div></div>
          <span style="font-size:0.78rem;">${w.completionPercent}%</span>
        </div>
      </td>
      <td>${w.pauseCount} مرات</td>
      <td>${new Date(w.lastActive).toLocaleDateString('ar-EG')}</td>
      <td>${safe}</td>`;
    tbody.appendChild(tr);
  });
}

// ===== SYLLABUS CHECKLIST =====
function renderSyllabusChecklist() {
  const container = document.getElementById("syllabusChecklist");
  if (!container) return;
  const checkpoints = [
    { label: "قانون أوم وتوصيل المقاومات", rate: 100 },
    { label: "قانونا كيرشوف للدوائر المغلقة", rate: 85 },
    { label: "تأثير المجال المغناطيسي", rate: 40 },
    { label: "قانون فاراداي للحث الكهرومغناطيسي", rate: 0 }
  ];
  container.innerHTML = checkpoints.map(c => `
    <div class="syllabus-check-item">
      <div class="syllabus-check-label">
        <span>${c.rate === 100 ? '✅' : c.rate > 0 ? '⏳' : '❌'}</span>
        <span>${c.label}</span>
      </div>
      <strong style="color:${c.rate===100 ? 'var(--secondary)' : c.rate>0 ? 'var(--warning)' : 'var(--accent)'};">${c.rate}%</strong>
    </div>`).join("");
}

// ===== LEARNING PATH =====
function renderLearningPath() {
  const container = document.getElementById("learningPathContainer");
  if (!container) return;
  if (appState.currentRole === "student") {
    container.innerHTML = `
      <div class="path-step-card">
        <div class="path-step-title">الخطوة الأولى: مراجعة محاضرة توصيل المقاومات (التوازي)</div>
        <div class="path-step-desc">بناءً على إخفاقك في السؤال 3 من الاختبار الأخير، ينصحك المعلم الذكي بمشاهدة شرح التوازي مرة أخرى.</div>
      </div>
      <div class="path-step-card">
        <div class="path-step-title">الخطوة الثانية: حل تمرين المقاومات الإضافي</div>
        <div class="path-step-desc">تم توليد ملف PDF يحوي 5 مسائل علاجية لتثبيت الفهم. حمله من تبويب المرفقات.</div>
      </div>`;
  } else {
    container.innerHTML = `
      <div class="path-step-card">
        <div class="path-step-title">توصية الدفعة A: إعادة شرح "قوانين كيرشوف" في البث القادم</div>
        <div class="path-step-desc">كشفت تحليلات الإجابات أن 65% من الطلاب واجهوا صعوبة في تحديد اتجاه التيارات. يُقترح جلسة مراجعة حية 45 دقيقة.</div>
      </div>
      <div class="path-step-card">
        <div class="path-step-title">توصية الدفعة B: تفعيل اختبار شامل على الباب الأول</div>
        <div class="path-step-desc">تجاوز متوسط معدل المشاهدات 90%، يُوصى بنشر الاختبار المجدول لتقييم الحصيلة النهائية.</div>
      </div>`;
  }
}

// ===== SKILLS RADAR =====
function renderSkillsRadar() {
  const container = document.getElementById("studentSkillsSummary");
  if (!container) return;
  const skills = [
    { label: "تطبيقات القوانين الفيزيائية", value: 88, color: "var(--secondary)" },
    { label: "العمليات الرياضية الحسابية", value: 65, color: "var(--warning)" },
    { label: "الاستنتاج وحل المسائل المركبة", value: 42, color: "var(--accent)" }
  ];
  container.innerHTML = skills.map(s => `
    <div class="difficulty-item">
      <div class="difficulty-header"><span>${s.label}</span><span style="color:${s.color};font-weight:700;">${s.value}%</span></div>
      <div class="difficulty-bar"><div style="width:${s.value}%;height:100%;background:${s.color};border-radius:10px;"></div></div>
    </div>`).join("");
}

// ===== QUIZ ANALYTICS =====
function renderQuizAnalyticsOverview() {
  const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  el("qaScheduledCount", "1 اختبار");
  el("qaActiveCount", "1 اختبار");
  el("qaCompletedCount", `${appState.quizzes.length} اختبارات`);
  let totalScore = 0, count = 0;
  appState.submissions.forEach(s => {
    const parts = s.score.split(" / ");
    if (parts.length === 2) { totalScore += parseInt(parts[0]) / parseInt(parts[1]); count++; }
  });
  const avg = count > 0 ? Math.round((totalScore/count)*100) : 84;
  el("qaAvgPassRate", `${avg}%`);
}

function renderDifficultyAnalyzer() {
  const container = document.getElementById("difficultyAnalyzer");
  if (!container) return;
  container.innerHTML = `
    <div class="difficulty-item">
      <div class="difficulty-header"><span>السؤال الثالث: حساب المقاومة المكافئة على التوازي</span><span style="color:var(--accent);">72% فشلوا</span></div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">يعاني الطلاب من تحديد العقد ونقاط تفرع التيار في المسائل المركبة.</p>
      <div class="difficulty-bar" style="margin-top:6px;"><div style="width:72%;height:100%;background:var(--accent);border-radius:10px;"></div></div>
    </div>
    <div class="difficulty-item" style="margin-top:14px;">
      <div class="difficulty-header"><span>السؤال الثاني: مفاهيم المقاومة النوعية والتوصيلية</span><span style="color:var(--warning);">48% فشلوا</span></div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">الخلط بين تأثير مساحة المقطع على المقاومة مقابل ثبات المقاومة النوعية.</p>
      <div class="difficulty-bar" style="margin-top:6px;"><div style="width:48%;height:100%;background:var(--warning);border-radius:10px;"></div></div>
    </div>`;
}

function renderHistoricalComparison() {
  const container = document.getElementById("historicalComparison");
  if (!container) return;
  const batches = [
    { label: "الدفعة الحالية (2026)", value: 84.5, color: "var(--primary-light)" },
    { label: "دفعة العام الماضي (2025)", value: 79.8, color: "var(--text-muted)" },
    { label: "المعايير الوطنية المرجعية", value: 75.0, color: "var(--secondary)" }
  ];
  container.innerHTML = batches.map(b => `
    <div class="difficulty-item" style="margin-bottom:12px;">
      <div class="difficulty-header"><span>${b.label}</span><span style="color:${b.color};font-weight:700;">${b.value}%</span></div>
      <div class="difficulty-bar" style="margin-top:6px;"><div style="width:${b.value}%;height:100%;background:${b.color};border-radius:10px;"></div></div>
    </div>`).join("");
}

// ===== AI TUTOR =====
async function handleAITutorSubmit(e) {
  e.preventDefault();
  const inputEl = document.getElementById("aiTutorInput");
  const val = inputEl.value.trim();
  if (!val) return;
  inputEl.value = "";
  appendTutorMessage(val, false);
  let reply = "أنا جاهز لمساعدتك! هل يمكنك توضيح السؤال أو تحديد المعادلة المقصودة؟";
  if (val.includes("أوم")) reply = "ينص قانون أوم على أن: V = I × R\nفرق الجهد بين طرفي موصل معدني يتناسب طردياً مع شدة التيار المار فيه عند ثبوت درجة الحرارة.";
  else if (val.includes("مسألة") || val.includes("مثال")) reply = "📌 مسألة تدريبية:\nاحسب المقاومة المكافئة لمقاومتين على التوازي قيمتهما 6 أوم و 3 أوم.\nالحل:\n1/R = 1/6 + 1/3 = 1/2\nR = 2 أوم ✅";
  else if (val.includes("كيرشوف")) reply = "قانونا كيرشوف:\n① قانون التيار (KCL): مجموع التيارات الداخلة لعقدة = مجموع الخارجة\n② قانون الجهد (KVL): مجموع فوارق الجهد في حلقة مغلقة = صفر";
  else if (val.includes("مشتقة") || val.includes("تفاضل")) reply = "قواعد التفاضل الأساسية:\n• مشتقة الثابت = 0\n• مشتقة xⁿ = n·xⁿ⁻¹\n• مشتقة (u×v) = u'v + uv'\n• مشتقة (u/v) = (u'v - uv') / v²";
  setTimeout(() => appendTutorMessage(reply, true), 700);
}

function sendPromptToAITutor(text) {
  const input = document.getElementById("aiTutorInput");
  if (input) { input.value = text; input.focus(); }
}

function appendTutorMessage(text, isBot) {
  const chat = document.getElementById("aiTutorMessages");
  if (!chat) return;
  const div = document.createElement("div");
  div.className = `ai-msg${isBot ? ' bot' : ''}`;
  div.innerHTML = `<div class="bubble">${text.replace(/\n/g, "<br>")}</div><span class="time">${isBot ? '🤖 مساعد ذكي' : '🎓 أنت'}</span>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// ===== LIVE STREAM =====
let hlsInstance = null;

function renderLiveStream() {
  const container = document.getElementById("liveVideoContainer");
  const badge = document.getElementById("liveStreamBadge");
  const viewerCount = document.getElementById("liveViewerCount");
  if (!container) return;
  const ls = appState.liveStream || { active: false };
  if (ls.active) {
    if (badge) { badge.textContent = "🔴 بث مباشر الآن"; badge.style.color = "var(--accent)"; }
    if (viewerCount) viewerCount.textContent = `👁️ ${ls.viewerCount || 67} مشاهدة`;
    container.innerHTML = `<div style="position:relative;width:100%;height:100%;background:#000;"><video id="hlsVideo" controls style="width:100%;height:100%;" playsinline></video></div>`;
    const video = document.getElementById("hlsVideo");
    if (video && typeof Hls !== "undefined" && ls.hlsUrl) {
      if (hlsInstance) hlsInstance.destroy();
      hlsInstance = new Hls({ enableWorker: false });
      hlsInstance.loadSource(ls.hlsUrl);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    }
  } else {
    if (hlsInstance) { hlsInstance.destroy(); hlsInstance = null; }
    if (badge) { badge.textContent = "⚫ غير متاح حالياً"; badge.style.color = "var(--text-muted)"; }
    if (viewerCount) viewerCount.textContent = "👁️ 0 مشاهدة";
    container.innerHTML = `
      <div class="camera-lens">📡</div>
      <div class="teacher-stream-mock" style="margin-top:8px;">البث المباشر غير نشط حالياً</div>
      <div class="stream-screenshare-view" style="margin-top:6px;">
        ${["teacher","admin"].includes(appState.currentRole)
          ? 'انقر على "بدء البث" لتفعيل الجلسة التفاعلية'
          : 'سيتم إشعارك عند بدء البث من المعلم'}
      </div>`;
  }
}

function handleLiveChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("liveChatInput");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  appendLiveChatMessage(USERS_INFO[appState.currentRole].name, text);
}

function appendLiveChatMessage(user, text) {
  const list = document.getElementById("liveChatMessages");
  if (!list) return;
  const div = document.createElement("div");
  div.className = "live-chat-msg";
  div.innerHTML = `<strong class="live-chat-user">${user}:</strong> <span>${text}</span>`;
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
}

function createNewLivePoll() {
  const q = prompt("اكتب سؤال الاستطلاع:");
  if (!q) return;
  const div = document.getElementById("livePollContainer");
  if (!div) return;
  div.innerHTML = `
    <div style="font-size:0.85rem;font-weight:700;margin-bottom:8px;">📊 استطلاع: ${q}</div>
    <div class="live-poll-option" onclick="voteLivePoll(1,65)" style="margin-bottom:6px;">
      <div class="live-poll-fill" id="pollFill1" style="width:0%;"></div>
      <div class="live-poll-text-row"><span>نعم، مفهوم</span><span id="pollPct1">0%</span></div>
    </div>
    <div class="live-poll-option" onclick="voteLivePoll(2,35)">
      <div class="live-poll-fill" id="pollFill2" style="width:0%;"></div>
      <div class="live-poll-text-row"><span>بحاجة لإعادة شرح</span><span id="pollPct2">0%</span></div>
    </div>`;
}

function voteLivePoll(option, mockPct) {
  const fill = document.getElementById(`pollFill${option}`); if (fill) fill.style.width = `${mockPct}%`;
  const pct = document.getElementById(`pollPct${option}`); if (pct) pct.textContent = `${mockPct}%`;
  const other = option === 1 ? 2 : 1;
  const fillO = document.getElementById(`pollFill${other}`); if (fillO) fillO.style.width = `${100-mockPct}%`;
  const pctO = document.getElementById(`pollPct${other}`); if (pctO) pctO.textContent = `${100-mockPct}%`;
}

function shareLiveStream() {
  const url = `${window.location.origin}/live-view.html`;
  if (navigator.clipboard) { navigator.clipboard.writeText(url).then(() => alert("✅ تم نسخ رابط البث!")); }
  else alert(`رابط البث: ${url}`);
}

// ===== ERP =====
function renderERPTables() {
  const hr = document.getElementById("erpHRTable");
  const inv = document.getElementById("erpInventoryTable");
  const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  el("erpRevenue", appState.erpData.revenue || "0 ج.م");
  el("erpSalary", appState.erpData.salary || "0 ج.م");
  el("erpStorage", appState.erpData.storage || "0 جيجا");

  if (hr) {
    hr.innerHTML = "";
    (appState.erpData.hr || []).forEach(h => {
      const isPaid = h.status === "تم الصرف";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${h.name}</strong></td>
        <td>${h.job}</td>
        <td>${h.salary}</td>
        <td><span class="badge ${isPaid ? 'badge-success' : 'badge-warning'}">${h.status}</span></td>
        <td class="editor-only">
          <button class="btn btn-xs btn-outline" onclick="toggleStaffPaid('${h.id}')">${isPaid ? 'إلغاء' : 'صرف'}</button>
          <button class="btn btn-xs btn-outline" onclick="openEditStaffModal('${h.id}')">تعديل</button>
          <button class="btn btn-xs btn-danger" onclick="deleteStaff('${h.id}')">حذف</button>
        </td>`;
      hr.appendChild(tr);
    });
  }

  if (inv) {
    inv.innerHTML = "";
    (appState.erpData.inventory || []).forEach(i => {
      const cls = i.status.includes("شارف") ? "badge-warning" : i.status.includes("غير") ? "badge-danger" : "badge-success";
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${i.item}</strong></td>
        <td>${i.count} نسخة</td>
        <td>${i.price}</td>
        <td><span class="badge ${cls}">${i.status}</span></td>
        <td class="editor-only">
          <button class="btn btn-xs btn-outline" onclick="adjustInventoryCount('${i.id}',10)">+10</button>
          <button class="btn btn-xs btn-outline" onclick="adjustInventoryCount('${i.id}',-10)">-10</button>
          <button class="btn btn-xs btn-outline" onclick="openEditInventoryModal('${i.id}')">تعديل</button>
          <button class="btn btn-xs btn-danger" onclick="deleteInventory('${i.id}')">حذف</button>
        </td>`;
      inv.appendChild(tr);
    });
  }
}

// ERP HR
function openAddStaffModal() { document.getElementById("staffForm")?.reset(); const el = document.getElementById("editStaffId"); if (el) el.value = ""; document.getElementById("staffModalTitle").textContent = "إضافة موظف جديد"; openModal("staffModal"); }
function openEditStaffModal(id) {
  const s = (appState.erpData.hr || []).find(x => x.id === id); if (!s) return;
  const set = (eid, v) => { const e = document.getElementById(eid); if (e) e.value = v; };
  set("editStaffId", s.id); set("staffName", s.name); set("staffJob", s.job); set("staffSalary", s.salary); set("staffStatus", s.status);
  document.getElementById("staffModalTitle").textContent = "تعديل بيانات الموظف";
  openModal("staffModal");
}
function handleStaffSubmit(e) {
  e.preventDefault();
  const get = id => document.getElementById(id)?.value || "";
  const id = get("editStaffId"); const name = get("staffName"); const job = get("staffJob"); const salary = get("staffSalary"); const status = get("staffStatus");
  const item = { id: id || "emp-" + Math.random().toString(36).substr(2,9), name, job, salary, status };
  if (!appState.erpData.hr) appState.erpData.hr = [];
  if (id) { const i = appState.erpData.hr.findIndex(x => x.id === id); if (i > -1) appState.erpData.hr[i] = item; }
  else appState.erpData.hr.push(item);
  recordActivityLog(id ? "تعديل موظف" : "إضافة موظف", name);
  closeModal("staffModal"); renderERPTables();
}
function deleteStaff(id) {
  if (!confirm("حذف الموظف؟")) return;
  const idx = (appState.erpData.hr || []).findIndex(x => x.id === id);
  if (idx > -1) { appState.erpData.hr.splice(idx, 1); recordActivityLog("حذف موظف", id); renderERPTables(); }
}
function toggleStaffPaid(id) {
  const s = (appState.erpData.hr || []).find(x => x.id === id); if (!s) return;
  s.status = s.status === "تم الصرف" ? "قيد المراجعة" : "تم الصرف";
  recordActivityLog("تغيير حالة صرف مرتب", s.name); renderERPTables();
}

// ERP Inventory
function openAddInventoryModal() { document.getElementById("inventoryForm")?.reset(); const el = document.getElementById("editInventoryId"); if (el) el.value = ""; document.getElementById("inventoryModalTitle").textContent = "إضافة كتاب/مذكرة"; openModal("inventoryModal"); }
function openEditInventoryModal(id) {
  const i = (appState.erpData.inventory || []).find(x => x.id === id); if (!i) return;
  const set = (eid, v) => { const e = document.getElementById(eid); if (e) e.value = v; };
  set("editInventoryId", i.id); set("inventoryItem", i.item); set("inventoryCount", i.count); set("inventoryPrice", i.price); set("inventoryStatus", i.status);
  document.getElementById("inventoryModalTitle").textContent = "تعديل كتاب بالمخزن";
  openModal("inventoryModal");
}
function handleInventorySubmit(e) {
  e.preventDefault();
  const get = id => document.getElementById(id)?.value || "";
  const id = get("editInventoryId"); const item = get("inventoryItem"); const count = parseInt(get("inventoryCount")) || 0; const price = get("inventoryPrice"); const status = get("inventoryStatus");
  const data = { id: id || "inv-" + Math.random().toString(36).substr(2,9), item, count, price, status };
  if (!appState.erpData.inventory) appState.erpData.inventory = [];
  if (id) { const i = appState.erpData.inventory.findIndex(x => x.id === id); if (i > -1) appState.erpData.inventory[i] = data; }
  else appState.erpData.inventory.push(data);
  recordActivityLog(id ? "تعديل كتاب" : "إضافة كتاب", item);
  closeModal("inventoryModal"); renderERPTables();
}
function deleteInventory(id) {
  if (!confirm("حذف هذا العنصر؟")) return;
  const idx = (appState.erpData.inventory || []).findIndex(x => x.id === id);
  if (idx > -1) { appState.erpData.inventory.splice(idx, 1); recordActivityLog("حذف من المخزن", id); renderERPTables(); }
}
function adjustInventoryCount(id, delta) {
  const item = (appState.erpData.inventory || []).find(x => x.id === id); if (!item) return;
  item.count = Math.max(0, item.count + delta);
  item.status = item.count === 0 ? "غير متوفر" : item.count < 20 ? "شارف على النفاد" : "متوفر";
  renderERPTables();
}

// ===== LOGS =====
function renderLogs() {
  const tbody = document.getElementById("auditLogsTable");
  if (!tbody) return;
  const query = (document.getElementById("logsSearch")?.value || "").toLowerCase();
  const filter = document.getElementById("logUserFilter")?.value || "";
  const filtered = appState.logs.filter(l =>
    (l.user.toLowerCase().includes(query) || l.action.toLowerCase().includes(query) || l.target.toLowerCase().includes(query)) &&
    (filter === "" || l.user === filter)
  );
  tbody.innerHTML = "";
  if (!filtered.length) { tbody.innerHTML = `<tr><td colspan="6" class="text-center">السجل فارغ.</td></tr>`; return; }
  filtered.forEach(log => {
    const date = new Date(log.timestamp).toLocaleString('ar-EG');
    const roleMap = { teacher: { label: "👨‍🏫 معلم", cls: "badge-purple" }, assistant: { label: "🧑‍💻 مساعد", cls: "badge-info" }, admin: { label: "🔑 مدير", cls: "badge-danger" } };
    const rm = roleMap[log.role] || { label: log.role, cls: "badge-info" };
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${log.user}</strong></td>
      <td><span class="badge ${rm.cls}">${rm.label}</span></td>
      <td>${log.action}</td>
      <td style="color:var(--text-muted);">${log.target}</td>
      <td style="font-size:0.8rem;">${date}</td>
      <td><code>${log.fingerprint}</code></td>`;
    tbody.appendChild(tr);
  });
}

function renderMiniLogs() {
  const list = document.getElementById("miniLogList");
  if (!list) return;
  const assistantLogs = appState.logs.filter(l => l.role === "assistant").slice(0, 4);
  list.innerHTML = "";
  if (!assistantLogs.length) { list.innerHTML = `<div class="empty-state">لا توجد نشاطات للمساعدين.</div>`; return; }
  assistantLogs.forEach(log => {
    const div = document.createElement("div");
    div.className = "mini-log-item";
    div.innerHTML = `<div class="log-user-row"><span class="log-user-name">${log.user}</span><span class="log-timestamp">قبل قليل</span></div><div>${log.action}: <span style="color:var(--text-muted);">${log.target}</span></div>`;
    list.appendChild(div);
  });
}

function renderUsersFilterDropdown() {
  const select = document.getElementById("logUserFilter");
  if (!select) return;
  select.innerHTML = `<option value="">كل المستخدمين</option>`;
  [...new Set(appState.logs.map(l => l.user))].forEach(u => {
    const opt = document.createElement("option"); opt.value = u; opt.textContent = u; select.appendChild(opt);
  });
}

function clearLogs() {
  if (!confirm("تصفير سجل العمليات بالكامل؟")) return;
  appState.logs = [];
  renderLogs(); renderMiniLogs(); renderUsersFilterDropdown();
}

// ===== EXPORT FUNCTIONS =====

function exportTableToExcel(tableId, filename) {
  const table = document.getElementById(tableId);
  if (!table) { alert("لم يتم العثور على الجدول."); return; }
  let csv = "\uFEFF";
  table.querySelectorAll("tr").forEach(row => {
    csv += Array.from(row.querySelectorAll("th,td")).map(c => `"${c.innerText.replace(/"/g,'""')}"`).join(",") + "\r\n";
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
  recordActivityLog("تصدير Excel/CSV", filename);
}

function exportTableToPDF(tableId, reportTitle) {
  const table = document.getElementById(tableId);
  if (!table) { alert("لم يتم العثور على الجدول."); return; }
  const dateStr = new Date().toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });
  const userInfo = USERS_INFO[appState.currentRole];
  const rows = Array.from(table.querySelectorAll("tr")).map(row =>
    Array.from(row.querySelectorAll("th,td")).map(c => c.innerText.trim())
  );
  let tableHtml = "<table><thead>" +
    (rows[0] ? `<tr>${rows[0].map(h => `<th>${h}</th>`).join("")}</tr>` : "") +
    "</thead><tbody>" +
    rows.slice(1).map(r => `<tr>${r.map(d => `<td>${d}</td>`).join("")}</tr>`).join("") +
    "</tbody></table>";

  const win = window.open("", "_blank", "width=900,height=700");
  win.document.write(`<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="UTF-8">
<title>${reportTitle}</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Cairo', sans-serif; direction: rtl; background: #fff; color: #1a1a2e; padding: 30px; }
  .report-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px solid #7c3aed; }
  .logo-block { display: flex; align-items: center; gap: 10px; }
  .logo-icon { width: 44px; height: 44px; background: linear-gradient(135deg,#7c3aed,#8b5cf6); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; color: #fff; }
  .logo-text { font-size: 1.2rem; font-weight: 800; color: #7c3aed; }
  .report-meta { text-align: left; font-size: 0.78rem; color: #666; }
  .report-meta strong { display: block; font-size: 1rem; color: #1a1a2e; margin-bottom: 4px; }
  h2 { font-size: 1.15rem; font-weight: 800; color: #1a1a2e; margin-bottom: 16px; }
  .info-row { display: flex; gap: 20px; margin-bottom: 20px; font-size: 0.82rem; color: #555; flex-wrap: wrap; }
  .info-row span { background: #f3f0ff; border-radius: 6px; padding: 4px 12px; font-weight: 600; }
  table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  th { background: #7c3aed; color: #fff; padding: 10px 12px; text-align: right; font-weight: 700; }
  td { padding: 9px 12px; border-bottom: 1px solid #e5e7eb; text-align: right; }
  tr:nth-child(even) td { background: #f9fafb; }
  tr:hover td { background: #f3f0ff; }
  .footer { margin-top: 24px; font-size: 0.72rem; color: #aaa; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 12px; }
  @media print {
    body { padding: 15px; }
    button { display: none !important; }
  }
</style>
</head>
<body>
<div class="report-header">
  <div class="logo-block">
    <div class="logo-icon">🎓</div>
    <span class="logo-text">مِنَصَّتِي PRO</span>
  </div>
  <div class="report-meta">
    <strong>${reportTitle}</strong>
    تاريخ الإصدار: ${dateStr}<br>
    أُعِدَّ بواسطة: ${userInfo.name}
  </div>
</div>
<h2>📊 ${reportTitle}</h2>
<div class="info-row">
  <span>📅 التاريخ: ${dateStr}</span>
  <span>👤 المُصدَّر بواسطة: ${userInfo.name}</span>
  <span>📋 عدد السجلات: ${rows.length - 1} صف</span>
</div>
${tableHtml}
<div class="footer">
  هذا التقرير صادر آلياً من منصة منصتي PRO — جميع الحقوق محفوظة © ${new Date().getFullYear()}
</div>
<br>
<button onclick="window.print()" style="font-family:Cairo,sans-serif;background:#7c3aed;color:#fff;border:none;border-radius:8px;padding:10px 24px;font-size:0.9rem;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:8px;margin:auto;">🖨️ طباعة / حفظ كـ PDF</button>
</body>
</html>`);
  win.document.close();
  recordActivityLog("تصدير PDF", reportTitle);
}

// ===== EXPORT DROPDOWN LOGIC =====
function toggleExportMenu(btn) {
  const menu = btn.nextElementSibling;
  if (!menu) return;
  const isOpen = menu.classList.contains("open");
  // Close all open menus first
  document.querySelectorAll(".export-dropdown-menu.open").forEach(m => m.classList.remove("open"));
  if (!isOpen) menu.classList.add("open");
}

// Close export menus when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".export-dropdown")) {
    document.querySelectorAll(".export-dropdown-menu.open").forEach(m => m.classList.remove("open"));
  }
});

// ===== MODALS =====
function openModal(id) { const el = document.getElementById(id); if (el) el.classList.add("active"); }
function closeModal(id) { const el = document.getElementById(id); if (el) el.classList.remove("active"); }

// ===== MOBILE SIDEBAR =====
function openMobileSidebar() {
  document.getElementById("sidebar")?.classList.add("mobile-open");
  document.getElementById("mobileSidebarOverlay")?.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeMobileSidebar() {
  document.getElementById("sidebar")?.classList.remove("mobile-open");
  document.getElementById("mobileSidebarOverlay")?.classList.remove("active");
  document.body.style.overflow = "";
}

// ===== SUBJECT CRUD FORMS =====
function openAddSubjectModal() {
  document.getElementById("subjectForm")?.reset();
  const el = document.getElementById("editSubjectId"); if (el) el.value = "";
  const t = document.getElementById("subjectModalTitle"); if (t) t.textContent = "إضافة مادة جديدة";
  openModal("subjectModal");
}
function openEditSubjectModal() {
  const c = appState.selectedSubject; if (!c) return;
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.value = v; };
  set("editSubjectId", c.id); set("subjectName", c.name); set("subjectCategory", c.category); set("subjectDesc", c.desc); set("subjectPrice", c.price); set("subjectImage", c.image || "");
  const t = document.getElementById("subjectModalTitle"); if (t) t.textContent = "تعديل المادة الدراسية";
  openModal("subjectModal");
}
function handleSubjectSubmit(e) {
  e.preventDefault();
  const get = id => document.getElementById(id)?.value || "";
  const id = get("editSubjectId"); const name = get("subjectName"); const cat = get("subjectCategory"); const desc = get("subjectDesc"); const price = parseFloat(get("subjectPrice")); const img = get("subjectImage") || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800";
  const item = { id: id || "subject-"+Math.random().toString(36).substr(2,9), name, category: cat, desc, price, image: img, chapters: [] };
  if (id) { const i = appState.courses.findIndex(c => c.id === id); if (i > -1) { item.chapters = appState.courses[i].chapters; appState.courses[i] = item; } }
  else appState.courses.push(item);
  recordActivityLog(id ? "تعديل مادة" : "إضافة مادة جديدة", name);
  closeModal("subjectModal"); renderSubjectsGrid();
  if (appState.selectedSubject) viewSubjectDetail(appState.selectedSubject.id);
}
async function deleteActiveCourse() {
  const c = appState.selectedSubject; if (!c) return;
  if (!confirm(`حذف المادة: ${c.name}؟`)) return;
  const idx = appState.courses.findIndex(x => x.id === c.id);
  if (idx > -1) { appState.courses.splice(idx, 1); recordActivityLog("حذف مادة", c.name); closeSubjectDetail(); renderSubjectsGrid(); }
}

// ===== CHAPTER / LESSON / MATERIAL CRUD =====
function openAddChapterModal() { document.getElementById("chapterForm")?.reset(); openModal("chapterModal"); }
function handleChapterSubmit(e) {
  e.preventDefault();
  const c = appState.selectedSubject; if (!c) return;
  const title = document.getElementById("chapterTitle")?.value || "";
  c.chapters.push({ title, lessons: [] });
  recordActivityLog("إضافة فصل دراسي", `${title} في ${c.name}`);
  closeModal("chapterModal"); renderChaptersList();
}
function deleteChapter(idx) {
  const c = appState.selectedSubject; if (!c) return;
  const name = c.chapters[idx].title;
  if (!confirm(`حذف الفصل: ${name}؟`)) return;
  c.chapters.splice(idx, 1);
  recordActivityLog("حذف فصل دراسي", name);
  renderChaptersList();
  document.getElementById("emptyLessonState").style.display = "flex";
  document.getElementById("activeLessonContent").style.display = "none";
}

function openAddLessonModal(chIdx) {
  document.getElementById("lessonForm")?.reset();
  const el = document.getElementById("editLessonId"); if (el) el.value = "";
  const ci = document.getElementById("lessonChapterIndex"); if (ci) ci.value = chIdx;
  const t = document.getElementById("lessonModalTitle"); if (t) t.textContent = "إضافة درس جديد";
  openModal("lessonModal");
}
function openEditLessonModal() {
  const l = appState.selectedLesson; if (!l) return;
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.value = v; };
  set("editLessonId", l.id); set("lessonTitle", l.title); set("lessonVideoSource", l.videoUrl); set("lessonDesc", l.desc);
  const t = document.getElementById("lessonModalTitle"); if (t) t.textContent = "تعديل الدرس";
  openModal("lessonModal");
}
function handleLessonSubmit(e) {
  e.preventDefault();
  const c = appState.selectedSubject;
  const get = id => document.getElementById(id)?.value || "";
  const id = get("editLessonId"); const title = get("lessonTitle"); const url = get("lessonVideoSource"); const desc = get("lessonDesc"); const chIdx = parseInt(get("lessonChapterIndex") || "0");
  const lesson = { id: id || "lesson-"+Math.random().toString(36).substr(2,9), title, videoUrl: url, desc, materials: [] };
  if (id) {
    c.chapters.forEach(ch => { const i = ch.lessons.findIndex(l => l.id === id); if (i > -1) { lesson.materials = ch.lessons[i].materials; ch.lessons[i] = lesson; appState.selectedLesson = lesson; } });
  } else {
    c.chapters[chIdx].lessons.push(lesson);
  }
  recordActivityLog(id ? "تعديل درس" : "إضافة درس", title);
  closeModal("lessonModal"); renderChaptersList();
  if (appState.selectedLesson && id) selectLesson(appState.selectedLesson.id, chIdx);
}
function deleteActiveLesson() {
  const c = appState.selectedSubject; const l = appState.selectedLesson; if (!c || !l) return;
  if (!confirm(`حذف الدرس: ${l.title}؟`)) return;
  c.chapters.forEach(ch => { const i = ch.lessons.findIndex(x => x.id === l.id); if (i > -1) ch.lessons.splice(i, 1); });
  appState.selectedLesson = null; recordActivityLog("حذف درس", l.title);
  renderChaptersList();
  document.getElementById("emptyLessonState").style.display = "flex";
  document.getElementById("activeLessonContent").style.display = "none";
}

function openUploadMaterialModal() { document.getElementById("materialForm")?.reset(); openModal("materialModal"); }
function handleMaterialSubmit(e) {
  e.preventDefault();
  const l = appState.selectedLesson; if (!l) return;
  const get = id => document.getElementById(id)?.value || "";
  const name = get("materialName"); const type = get("materialType"); const size = get("materialSize") || "2.5 MB";
  const m = { id: "mat-"+Math.random().toString(36).substr(2,9), name, type, size };
  if (!l.materials) l.materials = [];
  l.materials.push(m);
  recordActivityLog("رفع ملف مرفق", `${name} (${type.toUpperCase()})`);
  closeModal("materialModal"); renderLessonMaterials(l); renderMaterialsGrid();
}
function deleteMaterial(matId) {
  const l = appState.selectedLesson; if (!l || !l.materials) return;
  const idx = l.materials.findIndex(m => m.id === matId);
  if (idx > -1) {
    const name = l.materials[idx].name;
    if (!confirm(`حذف المرفق: ${name}؟`)) return;
    l.materials.splice(idx, 1); recordActivityLog("حذف مرفق", name);
    renderLessonMaterials(l); renderMaterialsGrid();
  }
}

// ===== QUIZ BUILDER =====
function openCreateQuizModal(type = "subject") {
  document.getElementById("quizForm")?.reset();
  const tt = document.getElementById("quizTargetType"); if (tt) tt.value = type;
  const list = document.getElementById("questionsBuilderList"); if (list) list.innerHTML = "";
  appState.quizBuilderQuestions = [];
  addQuestionToBuilder();
  openModal("quizModal");
}
function addQuestionToBuilder() {
  const list = document.getElementById("questionsBuilderList"); if (!list) return;
  const idx = appState.quizBuilderQuestions.length;
  const div = document.createElement("div");
  div.className = "question-builder-item";
  div.id = `builderQ-${idx}`;
  div.innerHTML = `
    <button type="button" class="btn-remove-q" onclick="removeQuestionFromBuilder(${idx})">حذف</button>
    <div class="form-group"><label>السؤال ${idx+1}</label><input type="text" class="form-input q-text-input" placeholder="اكتب صيغة السؤال..." required></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
      <div class="form-group"><input type="text" class="form-input q-choice-input" placeholder="خيار أ" required></div>
      <div class="form-group"><input type="text" class="form-input q-choice-input" placeholder="خيار ب" required></div>
      <div class="form-group"><input type="text" class="form-input q-choice-input" placeholder="خيار ج" required></div>
      <div class="form-group"><input type="text" class="form-input q-choice-input" placeholder="خيار د" required></div>
    </div>
    <div class="form-group"><label>الخيار الصحيح:</label>
      <select class="form-input q-correct-select"><option value="0">خيار أ</option><option value="1">خيار ب</option><option value="2">خيار ج</option><option value="3">خيار د</option></select>
    </div>`;
  list.appendChild(div);
  appState.quizBuilderQuestions.push({ active: true });
}
function removeQuestionFromBuilder(idx) {
  const el = document.getElementById(`builderQ-${idx}`);
  if (el) { el.remove(); appState.quizBuilderQuestions[idx].active = false; }
}
function handleQuizSubmit(e) {
  e.preventDefault();
  const get = id => document.getElementById(id)?.value || "";
  const title = get("quizTitle"); const limit = parseInt(get("quizTime")); const type = get("quizTargetType");
  const targetId = type === "subject" ? (appState.selectedSubject?.id || "course-001") : (appState.selectedLesson?.id || "L001");
  const items = document.getElementById("questionsBuilderList")?.querySelectorAll(".question-builder-item") || [];
  const questions = Array.from(items).map(item => ({
    id: "q-"+Math.random().toString(36).substr(2,9),
    text: item.querySelector(".q-text-input")?.value || "",
    choices: Array.from(item.querySelectorAll(".q-choice-input")).map(el => el.value),
    correctAnswer: parseInt(item.querySelector(".q-correct-select")?.value || "0")
  }));
  if (!questions.length) { alert("يجب إضافة سؤال واحد على الأقل."); return; }
  const quiz = { id: "quiz-"+Math.random().toString(36).substr(2,9), title, targetType: type, targetId, timeLimit: limit, questions };
  appState.quizzes.push(quiz);
  recordActivityLog("إنشاء اختبار جديد", title);
  closeModal("quizModal"); renderQuizzesGrid();
  if (appState.selectedLesson) renderLessonQuizzes(appState.selectedLesson);
}

// ===== SIMULATED UPDATES =====
function startSimulatedUpdates() {
  setTimeout(() => {
    const container = document.getElementById("livePollContainer");
    if (container) {
      container.innerHTML = `
        <div style="font-size:0.85rem;font-weight:700;margin-bottom:8px;">📊 استطلاع نشط: هل فهمت فكرة التوازي؟</div>
        <div class="live-poll-option" onclick="voteLivePoll(1,80)" style="margin-bottom:6px;">
          <div class="live-poll-fill" id="pollFill1" style="width:45%;"></div>
          <div class="live-poll-text-row"><span>نعم، واضحة</span><span id="pollPct1">45%</span></div>
        </div>
        <div class="live-poll-option" onclick="voteLivePoll(2,20)">
          <div class="live-poll-fill" id="pollFill2" style="width:15%;"></div>
          <div class="live-poll-text-row"><span>بحاجة لتمرين آخر</span><span id="pollPct2">15%</span></div>
        </div>`;
    }
  }, 2000);

  setInterval(() => {
    if (appState.activeTab === "live-stream") {
      const msgs = [
        ["محمد كامل", "فرق الجهد ثابت بالتوازي صح؟"],
        ["أمل علي", "الشرح واضح جداً أستاذ!"],
        ["كريم السعدي", "هل البث مسجل تلقائياً؟"],
        ["حازم أحمد", "تطبيق رائع!"]
      ];
      const [user, text] = msgs[Math.floor(Math.random() * msgs.length)];
      appendLiveChatMessage(user, text);
    }
  }, 8000);
}
