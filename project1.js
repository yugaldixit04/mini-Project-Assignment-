// 1. THEME TOGGLE (Dark / Light Mode)
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  // body par dark-theme class toggle hogi
  document.body.classList.toggle('dark-theme');
  
  // Optional: Theme change hone par button ka text bhi update kar sakte hain
  if (document.body.classList.contains('dark-theme')) {
    themeBtn.textContent = '☀️ Light Mode';
  } else {
    themeBtn.textContent = '🌙 Toggle Theme';
  }
});


// 2. LIKE COUNTER
const likeBtn = document.getElementById('likeBtn');
const likesSpan = document.getElementById('likes');
let likeCount = 0;

likeBtn.addEventListener('click', () => {
  likeCount++; // Like count 1 se badhega
  // Span ke andar text updation  (Like ke button ka HTML text maintain rakhte hue)
  likesSpan.textContent = likeCount;
});

// 3. FAQ TOGGLE (Show / Hide Answer)
const faqBtn = document.getElementById('faqBtn');
const faqAnswer = document.getElementById('faqAnswer');

faqBtn.addEventListener('click', () => {
  // Paragraph se .hidden class toggle hogi (show/hide)
  faqAnswer.classList.toggle('hidden');
  
  // Accessibility ke liye aria-expanded state update hogi
  const isExpanded = faqBtn.getAttribute('aria-expanded') === 'true';
  faqBtn.setAttribute('aria-expanded', !isExpanded);
});