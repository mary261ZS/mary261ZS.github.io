const cards = document.querySelectorAll(".gacha-card");

cards.forEach((card) => {
  const uraBtn = card.querySelector(".ura-btn");
  const uraText = card.querySelector(".ura-text");

  if (uraBtn && uraText) {
    uraBtn.addEventListener("click", () => {
      uraText.classList.toggle("hidden");
      
      if (uraText.classList.contains("hidden")) {
        uraBtn.textContent = "裏話を見る";
      } else {
        uraBtn.textContent = "裏話を閉じる";
      }
    });
  }
});
