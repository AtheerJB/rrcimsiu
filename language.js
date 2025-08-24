let isArabic = true;

function toggleLanguage() {
  isArabic = !isArabic;

  const elements = {
    headerTitle: document.querySelector('.club-title strong'),
    navLinks: document.querySelectorAll('nav a'),
    contactTitle: document.querySelector('.contact-title'),
    homeTitle: document.querySelector('.hero-text h1'),
    aboutTitle: document.querySelector('.page-header h1'),
    // أضف المزيد من العناصر حسب الحاجة
  };

  if (isArabic) {
    elements.headerTitle.innerText = "نادي الروبوت والرياضات";
    elements.navLinks[0].innerText = "الرئيسية";
    elements.navLinks[1].innerText = "عن النادي";
    elements.navLinks[2].innerText = "الهيكل التنظيمي";
    elements.navLinks[3].innerText = "الفعاليات";
    elements.navLinks[4].innerText = "مركز المعرفة";
    elements.navLinks[5].innerText = "تواصل معنا";
    if (elements.contactTitle) elements.contactTitle.innerText = "تواصل معنا";
    if (elements.homeTitle) elements.homeTitle.innerText = "نادي الروبوت والرياضات يرحب بكم";
    // أضف المزيد من النصوص حسب الحاجة
  } else {
    elements.headerTitle.innerText = "Robotic & Sports Club";
    elements.navLinks[0].innerText = "Home";
    elements.navLinks[1].innerText = "About Us";
    elements.navLinks[2].innerText = "Organizational Structure";
    elements.navLinks[3].innerText = "Events";
    elements.navLinks[4].innerText = "Knowledge Center";
    elements.navLinks[5].innerText = "Contact Us";
    if (elements.contactTitle) elements.contactTitle.innerText = "Contact Us";
    if (elements.homeTitle) elements.homeTitle.innerText = "Welcome to the Robotic & Sports Club";
    // أضف المزيد من النصوص حسب الحاجة
  }
}