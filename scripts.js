document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".principle-card");

  // אנימציית טעינה ראשונית
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = `cardAppear 0.5s ease-out forwards`;
    }, index * 100);
  });

  // הוספת פונקציונליות אקורדיון
  cards.forEach((card) => {
    const header = card.querySelector(".principle-header");

    header.addEventListener("click", () => {
      // סגירת כל הכרטיסים האחרים
      cards.forEach((otherCard) => {
        if (otherCard !== card && otherCard.classList.contains("active")) {
          otherCard.classList.remove("active");
        }
      });

      // פתיחה/סגירה של הכרטיס הנוכחי
      card.classList.toggle("active");

      // אפקט הזזה חלק
      const content = card.querySelector(".principle-content");
      if (card.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
});
