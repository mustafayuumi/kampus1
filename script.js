const searchInput = document.querySelector("#event-search-input");
const clearButton = document.querySelector("#clear-search");
const eventCards = [...document.querySelectorAll("#event-list article")];
const eventCount = document.querySelector("#event-count");
const noEventsMessage = document.querySelector("#no-events");

function updateEvents() {
  const query = searchInput.value.trim().replace(/\s+/g, " ").toLocaleLowerCase("tr-TR");
  let visibleCount = 0;

  for (const card of eventCards) {
    const matches = card.textContent
      .replace(/\s+/g, " ")
      .toLocaleLowerCase("tr-TR")
      .includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  eventCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
  noEventsMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", updateEvents);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  updateEvents();
  searchInput.focus();
});

updateEvents();
