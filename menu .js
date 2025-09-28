function loadPage(page) {
  const popup = document.getElementById('popup-content');
  let content = '';

  switch (page) {
    case 'mods':
      content = `<h2>Mods</h2><p>Server runs custom starter kits, bounty system, and faction loadouts.</p>`;
      break;
    case 'rules':
      content = `<h2>Rules</h2><ul><li>No cheating</li><li>No spawn camping</li><li>Respect factions</li></ul>`;
      break;
    case 'killfeed':
      content = `<h2>Killfeed</h2><p>Jake was shredded by a blood-soaked AKM.</p>`;
      break;
    case 'leaderboard':
      content = `<h2>Leaderboard</h2><p>Top killers, faction scores, and bounty claims.</p>`;
      break;
  }

  popup.innerHTML = content;
  popup.style.display = 'block';
}
