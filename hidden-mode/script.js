window.onload = function () {
  setTimeout(async () => { // Tambahkan async di sini
    const content1 = document.querySelector('.content1');
    const typewriterElement = document.querySelector('.typewritter');
    const content2 = document.querySelector('.content2');

    // Tampilkan content1
    content1.classList.remove('hidden');
    typewriterElement.classList.remove('hidden');

    // Data paragraf
    const paragraphs = [
      "Yang dimana page, lebih tepatnya seluruh web ini dibikin khusus buat lu",
      "Gw tahu kalo lu udah tau tapi kayaknya...",
      "GW SAYANG SAMA LU!",
      "....",
      "Gemeteran gw ngetiknya ajg",
      "BTW, scroll"
    ];

    // Jalankan typewriter dan tunggu sampai selesai
    await startTypewriter(typewriterElement, paragraphs);
    // Tambahan delay 1 detik setelah typewriter selesai
    await new Promise(resolve => setTimeout(resolve, 1000));
    content2.classList.remove('hidden');
  }, 2000);
};

// Fungsi typewriter yang di-modifikasi
async function startTypewriter(element, paragraphs) {
  for (const [index, text] of paragraphs.entries()) {
    const p = document.createElement('p');
    p.className = 'm-0';
    element.appendChild(p);

    await typeText(p, text);

    if (index !== paragraphs.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 700));
    }
  }
  return; // Mengembalikan promise yang resolve ketika selesai
}

// Fungsi typeText tetap sama
function typeText(element, text) {
  return new Promise(resolve => {
    let i = 0;
    const speed = 100;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }

    type();
  });
}

// scroll
window.addEventListener('scroll', () => {
  let contents = document.querySelectorAll('.anim');

  contents.forEach(content => {
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
      content.classList.add('scrolled');
    } else {
      content.classList.remove('scrolled');
    }
  });
});
