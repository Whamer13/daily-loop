/* Daily Loop directory data. Add new listings to this array. */
const games = [
  {name:"Wordle",category:"Word",description:"Find the five-letter word in six guesses.",url:"https://www.nytimes.com/games/wordle/index.html",featured:true},
  {name:"Connections",category:"Word",description:"Sort sixteen words into four hidden groups.",url:"https://www.nytimes.com/games/connections",featured:true},
  {name:"Strands",category:"Word",description:"Find themed words and the hidden spangram.",url:"https://www.nytimes.com/games/strands",featured:true},
  {name:"Spelling Bee",category:"Word",description:"Make as many words as you can from seven letters.",url:"https://www.nytimes.com/puzzles/spelling-bee",featured:false},
  {name:"Quordle",category:"Word",description:"Solve four five-letter words at the same time.",url:"https://www.merriam-webster.com/games/quordle",featured:true},
  {name:"Octordle",category:"Word",description:"Eight Wordle-style puzzles in one challenge.",url:"https://www.merriam-webster.com/games/octordle",featured:false},
  {name:"Waffle",category:"Word",description:"Swap letters to complete the crossing words.",url:"https://wafflegame.net",featured:false},
  {name:"Contexto",category:"Word",description:"Find the secret word using meaning and similarity.",url:"https://contexto.me",featured:true},
  {name:"Semantle",category:"Word",description:"Guess a word by how close it is in meaning.",url:"https://semantle.com",featured:false},
  {name:"Minute Cryptic",category:"Word",description:"Crack one compact cryptic crossword clue.",url:"https://www.minutecryptic.com",featured:false},
  {name:"Wordiply",category:"Word",description:"Build the longest word you can from a starter.",url:"https://www.wordiply.com",featured:false},
  {name:"Squaredle",category:"Word",description:"Trace paths through a letter grid to find words.",url:"https://squaredle.app",featured:false},
  {name:"Word500",category:"Word",description:"Work out the word using letter-only feedback.",url:"https://word500.com",featured:false},
  {name:"Betweenle",category:"Word",description:"Narrow down a hidden word between two others.",url:"https://betweenle.com",featured:false},
  {name:"Redactle",category:"Word",description:"Reveal a hidden article one guess at a time.",url:"https://redactle.net",featured:false},
  {name:"Phrazle",category:"Word",description:"Guess a familiar phrase from colour-coded clues.",url:"https://solitaired.com/phrazle",featured:false},

  {name:"Worldle",category:"Geography",description:"Name the country from its outline.",url:"https://worldle.teuteuf.fr",featured:true},
  {name:"Globle",category:"Geography",description:"Find the mystery country using warmer and colder clues.",url:"https://globle-game.com",featured:true},
  {name:"Travle",category:"Geography",description:"Connect two countries using a route across the map.",url:"https://travle.earth",featured:false},
  {name:"Tradle",category:"Geography",description:"Identify a country from its export profile.",url:"https://games.oec.world/en/tradle/",featured:false},
  {name:"Flagle",category:"Geography",description:"Identify the flag as more of it is revealed.",url:"https://www.flagle.io",featured:false},
  {name:"TimeGuessr",category:"Geography",description:"Work out where and when historical photos were taken.",url:"https://timeguessr.com",featured:false},
  {name:"WhenTaken",category:"Geography",description:"Guess the location and date of a photograph.",url:"https://whentaken.com",featured:false},
  {name:"GeoGrid",category:"Geography",description:"Fill a nine-cell grid using country clues.",url:"https://www.geogridgame.com",featured:false},
  {name:"MapTap",category:"Geography",description:"Place your guesses as accurately as possible on a map.",url:"https://maptap.gg",featured:false},

  {name:"Nerdle",category:"Numbers & logic",description:"Guess the hidden equation using maths clues.",url:"https://nerdlegame.com",featured:true},
  {name:"Mathler",category:"Numbers & logic",description:"Find the calculation that reaches the target number.",url:"https://www.mathler.com",featured:false},
  {name:"Fermi",category:"Numbers & logic",description:"Estimate answers to three tricky number questions.",url:"https://fermi.gg",featured:false},
  {name:"Magnitudle",category:"Numbers & logic",description:"Estimate the size of a mystery number.",url:"https://magnitudle.com",featured:false},
  {name:"Angle",category:"Numbers & logic",description:"Estimate an angle from its visual appearance.",url:"https://angle.wtf",featured:false},
  {name:"Numble",category:"Numbers & logic",description:"Use a set of numbers and arithmetic to hit a target.",url:"https://numble.wtf",featured:false},
  {name:"Plain",category:"Numbers & logic",description:"Seven daily number challenges reward close estimates.",url:"https://playplain.app",featured:true},
  {name:"Pips",category:"Numbers & logic",description:"Complete a logic puzzle built around dominoes.",url:"https://www.nytimes.com/games/pips",featured:false},
  {name:"Murdle",category:"Numbers & logic",description:"Use deduction and logic clues to solve a daily puzzle.",url:"https://murdle.com",featured:false},
  {name:"Clues by Sam",category:"Numbers & logic",description:"Use a set of clues to identify who fits the case.",url:"https://cluesbysam.com",featured:false},
  {name:"enclose.horse",category:"Numbers & logic",description:"Plan a boundary to make the largest possible enclosure.",url:"https://enclose.horse",featured:false},

  {name:"Krillion",category:"Trivia",description:"Give rare but correct answers to seven daily prompts.",url:"https://krillion.io",featured:true},
  {name:"Factle",category:"Trivia",description:"Rank the top answers to a daily fact prompt.",url:"https://frontofficesports.com/trivia/factle/",featured:false},
  {name:"Anything Grid",category:"Trivia",description:"Fill a three-by-three grid with answers to mixed clues.",url:"https://anythinggrid.com",featured:false},
  {name:"Pedantle",category:"Trivia",description:"Identify a hidden encyclopaedia article from clues.",url:"https://pedantle.certitudes.org",featured:false},
  {name:"Bracket City",category:"Trivia",description:"Unpick nested clues to reveal a daily sentence.",url:"https://www.theatlantic.com/games/bracket-city",featured:false},

  {name:"Framed",category:"Film & music",description:"Name the film from a sequence of still images.",url:"https://framed.wtf",featured:true},
  {name:"Bandle",category:"Film & music",description:"Guess the song as more instruments are introduced.",url:"https://bandle.app",featured:false},
  {name:"Spotle",category:"Film & music",description:"Identify the mystery music artist from clues.",url:"https://spotle.io",featured:false},
  {name:"Cinematrix",category:"Film & music",description:"Complete a daily film-themed three-by-three grid.",url:"https://www.vulture.com/vulturecinematrix",featured:false},
  {name:"Cine2Nerdle",category:"Film & music",description:"Connect film clues in a daily movie challenge.",url:"https://www.cinenerdle.app",featured:false},
  {name:"Moviedle",category:"Film & music",description:"Work out the film from a set of clues.",url:"https://moviedle.xyz",featured:false},
  {name:"Songless",category:"Film & music",description:"Name the song from a very short audio clip.",url:"https://lessgames.com/songless",featured:false},
  {name:"Movie Grid",category:"Film & music",description:"Fill a grid with films that match each clue.",url:"https://moviegrid.io",featured:false},

  {name:"Poeltl",category:"Sport & gaming",description:"Identify the mystery NBA player from clues.",url:"https://poeltl.nbpa.com",featured:false},
  {name:"PokeDoku",category:"Sport & gaming",description:"Complete a Pokémon-themed nine-cell grid.",url:"https://pokedoku.com",featured:true},
  {name:"LoLdle",category:"Sport & gaming",description:"Try several daily League of Legends guessing modes.",url:"https://loldle.net",featured:false},
  {name:"Pokedle",category:"Sport & gaming",description:"Guess Pokémon using a selection of daily modes.",url:"https://pokedle.net",featured:false},
  {name:"Gamedle",category:"Sport & gaming",description:"Recognise a video game from its cover art and clues.",url:"https://www.gamedle.wtf",featured:false},
  {name:"Crossover Grid",category:"Sport & gaming",description:"Fill a sports grid using the row and column clues.",url:"https://crossovergrid.com",featured:false},
  {name:"Puckdoku",category:"Sport & gaming",description:"Complete a hockey-themed player and team grid.",url:"https://puckdoku.com",featured:false},
  {name:"WrestlePlay",category:"Sport & gaming",description:"Try a collection of daily professional-wrestling games.",url:"https://wrestleplay.com",featured:false},
  {name:"Missing 11",category:"Sport & gaming",description:"Name the starting eleven from a famous football match.",url:"https://playfootball.games",featured:false},

  {name:"Phoodle",category:"Food & nature",description:"Guess a food-related word in a daily word puzzle.",url:"https://phoodle.net",featured:false},
  {name:"Metazooa",category:"Food & nature",description:"Find the mystery animal through the tree of life.",url:"https://metazooa.com",featured:false},
  {name:"Metaflora",category:"Food & nature",description:"Work towards the mystery plant using biology clues.",url:"https://flora.metazooa.com",featured:false},
  {name:"Birdle",category:"Food & nature",description:"Identify the daily bird from a series of clues.",url:"https://www.play-birdle.com",featured:false},
  {name:"Doctordle",category:"Food & nature",description:"Use clinical clues to identify the mystery diagnosis.",url:"https://doctordle.org",featured:false}
];

const grid = document.getElementById('game-grid');
const searchInput = document.getElementById('game-search');
const categoryList = document.getElementById('category-list');
const resultsCount = document.getElementById('results-count');
const emptyState = document.getElementById('empty-state');
const activeFilterRow = document.getElementById('active-filter-row');
const activeFilterLabel = document.getElementById('active-filter-label');
const sortSelect = document.getElementById('sort-games');
const toast = document.getElementById('toast');
let activeCategory = 'All';
let showOnlyFavourites = false;
let toastTimer;

function readFavourites(){
  try { return new Set(JSON.parse(localStorage.getItem('dailyLoopFavourites') || '[]')); }
  catch { return new Set(); }
}
let favourites = readFavourites();
function saveFavourites(){
  try { localStorage.setItem('dailyLoopFavourites', JSON.stringify([...favourites])); }
  catch { showToast('Your browser did not allow favourites to be saved.'); }
}
function updateFavouriteCount(){
  document.getElementById('favourite-count').textContent = favourites.size;
}
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'),2200);
}
function safeDomain(url){
  try { return new URL(url).hostname.replace(/^www\./,''); }
  catch { return 'open game'; }
}
function getVisibleGames(){
  const query = searchInput.value.trim().toLowerCase();
  let visible = games.filter(game=>{
    const categoryMatch = activeCategory === 'All' || activeCategory === 'Favourites' || game.category === activeCategory;
    const favouriteMatch = !showOnlyFavourites && activeCategory !== 'Favourites' ? true : favourites.has(game.name);
    const queryMatch = !query || `${game.name} ${game.description} ${game.category} ${safeDomain(game.url)}`.toLowerCase().includes(query);
    return categoryMatch && favouriteMatch && queryMatch;
  });
  if(sortSelect.value === 'az') visible.sort((a,b)=>a.name.localeCompare(b.name));
  if(sortSelect.value === 'za') visible.sort((a,b)=>b.name.localeCompare(a.name));
  if(sortSelect.value === 'popular') visible.sort((a,b)=>(Number(b.featured)-Number(a.featured)) || a.name.localeCompare(b.name));
  return visible;
}
function renderGames(){
  const visible = getVisibleGames();
  resultsCount.textContent = visible.length;
  grid.innerHTML = visible.map(game=>{
    const saved = favourites.has(game.name);
    return `<article class="game-card">
      <div class="card-top"><span class="category-label">${game.category}</span>
        <button class="favourite-button ${saved?'saved':''}" type="button" data-favourite="${encodeURIComponent(game.name)}" aria-label="${saved?'Remove':'Add'} ${game.name} ${saved?'from':'to'} favourites" aria-pressed="${saved}">${saved?'★':'☆'}</button>
      </div>
      <h3>${game.name}</h3><p>${game.description}</p>
      <div class="card-bottom"><span class="game-domain">${safeDomain(game.url)}</span><a class="play-link" href="${game.url}" target="_blank" rel="noopener noreferrer">Play <span aria-hidden="true">↗</span></a></div>
    </article>`;
  }).join('');
  emptyState.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  const active = searchInput.value.trim() || activeCategory !== 'All';
  activeFilterRow.hidden = !active;
  activeFilterLabel.textContent = `${activeCategory === 'All' ? 'All games' : activeCategory} · ${searchInput.value.trim() ? `matching “${searchInput.value.trim()}”` : 'filtered view'}`;
  updateFavouriteCount();
}
function setCategory(category){
  activeCategory = category;
  showOnlyFavourites = category === 'Favourites';
  categoryList.querySelectorAll('.category-chip').forEach(button=>button.classList.toggle('selected',button.dataset.category===category));
  renderGames();
}
categoryList.addEventListener('click',event=>{
  const button = event.target.closest('[data-category]');
  if(button) setCategory(button.dataset.category);
});
grid.addEventListener('click',event=>{
  const button = event.target.closest('[data-favourite]');
  if(!button) return;
  const name = decodeURIComponent(button.dataset.favourite);
  if(favourites.has(name)){favourites.delete(name);showToast(`${name} removed from favourites`);}
  else {favourites.add(name);showToast(`${name} saved to favourites`);}
  saveFavourites();renderGames();
});
searchInput.addEventListener('input',renderGames);
sortSelect.addEventListener('change',renderGames);
document.getElementById('show-favourites').addEventListener('click',()=>{setCategory('Favourites');document.getElementById('directory').scrollIntoView({behavior:'smooth'});});
document.getElementById('bottom-favourites').addEventListener('click',()=>{setCategory('Favourites');document.getElementById('directory').scrollIntoView({behavior:'smooth'});});
document.getElementById('routine-favourites').addEventListener('click',()=>{setCategory('Favourites');document.getElementById('directory').scrollIntoView({behavior:'smooth'});});
document.querySelectorAll('[data-jump-category]').forEach(link=>link.addEventListener('click',()=>setCategory(link.dataset.jumpCategory)));
document.getElementById('clear-filters').addEventListener('click',()=>{searchInput.value='';sortSelect.value='popular';setCategory('All');});
document.getElementById('empty-reset').addEventListener('click',()=>{searchInput.value='';sortSelect.value='popular';setCategory('All');});
document.getElementById('surprise-button').addEventListener('click',()=>{
  const visible = getVisibleGames();
  if(!visible.length){showToast('No games in this view to choose from.');return;}
  const chosen = visible[Math.floor(Math.random()*visible.length)];
  showToast(`Today's random pick: ${chosen.name}`);
  window.open(chosen.url,'_blank','noopener,noreferrer');
});
document.addEventListener('keydown',event=>{
  if(event.key==='/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){
    event.preventDefault();searchInput.focus();
  }
  if(event.key==='Escape' && document.activeElement===searchInput){searchInput.value='';renderGames();searchInput.blur();}
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('game-total').textContent = `${games.length}`;
renderGames();
