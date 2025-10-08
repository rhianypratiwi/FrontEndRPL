// Toggle menu profil
const profileImg = document.getElementById('profile-img');
const menu = document.getElementById('menu');

if (profileImg && menu) {
  profileImg.addEventListener('click', () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Klik di luar untuk menutup menu
  document.addEventListener('click', (e) => {
    if (!profileImg.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });
}
