// ===== Embedded Recipe Data (no server needed) =====
const RECIPES_DATA = [
  { id:1, name:"Spaghetti Aglio e Olio", category:"veg", time:20, ingredients:["spaghetti","garlic","olive oil","parsley","chili flakes","salt"], steps:"1. Cook spaghetti until al dente.\n2. Sauté sliced garlic in olive oil until golden.\n3. Add chili flakes, then toss in drained pasta.\n4. Garnish with parsley and serve.", image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" },
  { id:2, name:"Veggie Omelette", category:"veg", time:10, ingredients:["eggs","onion","tomato","bell pepper","salt","butter"], steps:"1. Beat eggs with salt.\n2. Sauté onion, tomato, and bell pepper in butter.\n3. Pour eggs over veggies and cook until set.\n4. Fold and serve hot.", image:"https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&q=80" },
  { id:3, name:"Chicken Stir Fry", category:"non-veg", time:25, ingredients:["chicken","soy sauce","garlic","ginger","bell pepper","onion","oil"], steps:"1. Marinate chicken in soy sauce and ginger.\n2. Stir fry garlic and onion in hot oil.\n3. Add chicken and cook through.\n4. Toss in bell pepper and serve.", image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
  { id:4, name:"Tomato Soup", category:"veg", time:20, ingredients:["tomato","onion","garlic","butter","cream","salt","pepper"], steps:"1. Sauté onion and garlic in butter.\n2. Add chopped tomatoes and cook until soft.\n3. Blend smooth, season with salt and pepper.\n4. Stir in cream and serve warm.", image:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
  { id:5, name:"Egg Fried Rice", category:"veg", time:15, ingredients:["rice","eggs","soy sauce","garlic","onion","oil","salt"], steps:"1. Cook and cool rice beforehand.\n2. Scramble eggs in oil, set aside.\n3. Fry garlic and onion, add rice and soy sauce.\n4. Mix in eggs and serve hot.", image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80" },
  { id:6, name:"Avocado Toast", category:"veg", time:5, ingredients:["bread","avocado","lemon","salt","chili flakes","olive oil"], steps:"1. Toast bread slices.\n2. Mash avocado with lemon juice and salt.\n3. Spread on toast.\n4. Top with chili flakes and a drizzle of olive oil.", image:"https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80" },
  { id:7, name:"Grilled Chicken Salad", category:"non-veg", time:20, ingredients:["chicken","lettuce","tomato","cucumber","olive oil","lemon","salt"], steps:"1. Season and grill chicken until cooked.\n2. Slice and place over lettuce, tomato, cucumber.\n3. Drizzle with olive oil and lemon juice.\n4. Season and serve.", image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
  { id:8, name:"Banana Pancakes", category:"veg", time:15, ingredients:["banana","eggs","flour","milk","butter","salt"], steps:"1. Mash banana and mix with eggs, flour, and milk.\n2. Add a pinch of salt.\n3. Cook spoonfuls on a buttered pan until golden.\n4. Serve with honey or syrup.", image:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80" },
  { id:9, name:"Tuna Pasta", category:"non-veg", time:20, ingredients:["pasta","tuna","tomato","garlic","olive oil","salt","parsley"], steps:"1. Cook pasta until al dente.\n2. Sauté garlic in olive oil, add tomatoes.\n3. Stir in drained tuna and season.\n4. Toss with pasta and garnish with parsley.", image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80" },
  { id:10, name:"Lentil Soup", category:"veg", time:30, ingredients:["lentils","onion","garlic","tomato","cumin","olive oil","salt"], steps:"1. Sauté onion and garlic in olive oil.\n2. Add lentils, tomato, cumin, and water.\n3. Simmer 25 minutes until lentils are soft.\n4. Season and serve with bread.", image:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
  { id:11, name:"Beef Tacos", category:"non-veg", time:25, ingredients:["ground beef","taco shells","onion","tomato","lettuce","cheese","cumin","salt"], steps:"1. Brown ground beef with onion and cumin.\n2. Season with salt.\n3. Fill taco shells with beef mixture.\n4. Top with tomato, lettuce, and cheese.", image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80" },
  { id:12, name:"Caprese Salad", category:"veg", time:5, ingredients:["tomato","mozzarella","basil","olive oil","salt","pepper"], steps:"1. Slice tomatoes and mozzarella.\n2. Alternate slices on a plate.\n3. Tuck basil leaves between slices.\n4. Drizzle with olive oil, season and serve.", image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
  { id:13, name:"Butter Chicken", category:"non-veg", time:40, ingredients:["chicken","butter","tomato","onion","garlic","ginger","cream","garam masala","cumin","coriander","salt","oil"], steps:"1. Marinate chicken in yogurt and spices, cook in oil.\n2. Sauté onion, garlic, ginger; add tomatoes and cook down.\n3. Blend sauce smooth, return to pan with butter and cream.\n4. Add chicken, simmer 10 min. Serve with naan.", image:"https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80" },
  { id:14, name:"Dal Tadka", category:"veg", time:30, ingredients:["yellow lentils","onion","tomato","garlic","ginger","cumin","turmeric","garam masala","butter","salt","coriander"], steps:"1. Boil lentils with turmeric and salt until soft.\n2. Heat butter, fry cumin, garlic, ginger and onion.\n3. Add tomatoes and spices, cook until oil separates.\n4. Pour tadka over lentils, garnish with coriander.", image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
  { id:15, name:"Paneer Tikka Masala", category:"veg", time:35, ingredients:["paneer","tomato","onion","garlic","ginger","cream","garam masala","cumin","turmeric","oil","salt","coriander"], steps:"1. Cube paneer, marinate in spices and grill or pan-fry.\n2. Sauté onion, garlic, ginger; add tomatoes and spices.\n3. Blend sauce, stir in cream and simmer.\n4. Add paneer, cook 5 min. Garnish with coriander.", image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
  { id:16, name:"Aloo Paratha", category:"veg", time:30, ingredients:["wheat flour","potato","onion","green chili","cumin","coriander","salt","butter","ginger"], steps:"1. Knead dough with flour, water and salt.\n2. Mash boiled potatoes with onion, chili, cumin, coriander.\n3. Stuff dough balls with filling, roll flat.\n4. Cook on tawa with butter until golden on both sides.", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  { id:17, name:"Chole Bhature", category:"veg", time:45, ingredients:["chickpeas","onion","tomato","garlic","ginger","cumin","coriander","garam masala","amchur","oil","flour","yogurt","salt"], steps:"1. Cook chickpeas with spices, onion and tomato gravy.\n2. Mix flour with yogurt and knead into soft dough.\n3. Roll into circles and deep fry until puffed and golden.\n4. Serve hot bhature with spiced chole.", image:"https://images.unsplash.com/photo-1626132647523-66c3f4942c4a?w=400&q=80" },
  { id:18, name:"Masala Dosa", category:"veg", time:30, ingredients:["rice batter","potato","onion","mustard seeds","turmeric","green chili","curry leaves","oil","salt","urad dal"], steps:"1. Prepare potato filling with onion, mustard, turmeric.\n2. Pour batter on hot tawa, spread thin and crisp.\n3. Place potato filling in center.\n4. Fold and serve with coconut chutney and sambar.", image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
  { id:19, name:"Biryani", category:"non-veg", time:60, ingredients:["basmati rice","chicken","onion","tomato","yogurt","garlic","ginger","garam masala","saffron","mint","oil","salt","cumin"], steps:"1. Marinate chicken in yogurt and spices.\n2. Fry onions golden, cook chicken in spices.\n3. Layer par-boiled rice over chicken with mint and saffron.\n4. Seal and dum cook 20 min on low heat.", image:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
  { id:20, name:"Palak Paneer", category:"veg", time:30, ingredients:["paneer","spinach","onion","tomato","garlic","ginger","cream","cumin","garam masala","oil","salt"], steps:"1. Blanch spinach and blend to a smooth puree.\n2. Sauté onion, garlic, ginger; add tomatoes and spices.\n3. Add spinach puree and simmer 5 min.\n4. Add paneer cubes and cream, cook 3 min.", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  { id:21, name:"Samosa", category:"veg", time:45, ingredients:["flour","potato","peas","onion","cumin","coriander","garam masala","green chili","oil","salt","ginger"], steps:"1. Make stiff dough with flour, oil and water.\n2. Cook potato-pea filling with spices.\n3. Shape dough into cones, fill and seal.\n4. Deep fry until golden and crispy.", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  { id:22, name:"Rajma Chawal", category:"veg", time:40, ingredients:["kidney beans","rice","onion","tomato","garlic","ginger","cumin","garam masala","turmeric","oil","salt","coriander"], steps:"1. Soak and boil kidney beans until tender.\n2. Make onion-tomato masala with spices.\n3. Add beans, simmer until thick gravy forms.\n4. Serve over steamed basmati rice.", image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
  { id:23, name:"Pav Bhaji", category:"veg", time:30, ingredients:["potato","peas","tomato","onion","bell pepper","butter","pav bhaji masala","garlic","salt","coriander","bread rolls"], steps:"1. Boil and mash potato, peas and veggies.\n2. Cook with butter, garlic, tomato and pav bhaji masala.\n3. Mash everything together into thick bhaji.\n4. Toast bread rolls in butter, serve with bhaji and onion.", image:"https://images.unsplash.com/photo-1626132647523-66c3f4942c4a?w=400&q=80" },
  { id:24, name:"Mango Lassi", category:"veg", time:5, ingredients:["mango","yogurt","milk","sugar","cardamom","ice"], steps:"1. Blend ripe mango pulp with yogurt and milk.\n2. Add sugar and a pinch of cardamom.\n3. Blend until smooth and frothy.\n4. Pour over ice and serve chilled.", image:"https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80" },
  { id:25, name:"Chicken Tikka", category:"non-veg", time:35, ingredients:["chicken","yogurt","garlic","ginger","cumin","coriander","turmeric","chili powder","lemon","oil","salt"], steps:"1. Marinate chicken in yogurt, spices, lemon and oil for 30 min.\n2. Thread onto skewers.\n3. Grill or bake at high heat until charred at edges.\n4. Serve with mint chutney and sliced onions.", image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
  { id:26, name:"Kadai Paneer", category:"veg", time:30, ingredients:["paneer","bell pepper","onion","tomato","garlic","ginger","cumin","coriander","garam masala","oil","salt","kasuri methi"], steps:"1. Sauté cumin, garlic, ginger in oil.\n2. Add onion and tomatoes, cook until masala thickens.\n3. Add bell pepper and paneer cubes.\n4. Finish with kasuri methi and garam masala.", image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
  { id:27, name:"Idli Sambar", category:"veg", time:30, ingredients:["rice batter","urad dal","toor dal","tomato","onion","tamarind","mustard seeds","curry leaves","turmeric","oil","salt","drumstick"], steps:"1. Steam idli batter in moulds for 10–12 min.\n2. Cook toor dal with tomato, tamarind and turmeric.\n3. Temper with mustard seeds, curry leaves and onion.\n4. Serve soft idlis with hot sambar and chutney.", image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
  { id:28, name:"Mutton Rogan Josh", category:"non-veg", time:70, ingredients:["mutton","onion","yogurt","garlic","ginger","kashmiri chili","fennel","cardamom","cloves","cinnamon","oil","salt"], steps:"1. Brown mutton in hot oil, set aside.\n2. Fry whole spices, then onion until golden.\n3. Add garlic, ginger, kashmiri chili and yogurt.\n4. Return mutton, add water and slow cook 45 min until tender.", image:"https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80" },
  { id:29, name:"Poha", category:"veg", time:15, ingredients:["flattened rice","onion","potato","mustard seeds","turmeric","green chili","curry leaves","peanuts","oil","salt","lemon","coriander"], steps:"1. Rinse poha and drain, keep aside.\n2. Fry mustard seeds, peanuts, curry leaves in oil.\n3. Add onion, potato, chili and turmeric, cook until soft.\n4. Toss in poha, season, squeeze lemon and garnish.", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  { id:30, name:"Upma", category:"veg", time:20, ingredients:["semolina","onion","green chili","mustard seeds","curry leaves","ginger","peanuts","oil","salt","water","coriander"], steps:"1. Dry roast semolina until light golden, set aside.\n2. Temper mustard seeds, peanuts, curry leaves in oil.\n3. Add onion, ginger, chili and sauté.\n4. Pour in water, bring to boil, stir in semolina and cook.", image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80" },
  { id:31, name:"Fish Curry", category:"non-veg", time:30, ingredients:["fish","coconut milk","tomato","onion","garlic","ginger","turmeric","chili powder","mustard seeds","curry leaves","oil","salt","tamarind"], steps:"1. Marinate fish in turmeric and salt.\n2. Fry mustard seeds, curry leaves, onion, garlic and ginger.\n3. Add tomatoes, tamarind, chili powder and coconut milk.\n4. Simmer fish in gravy for 10 min.", image:"https://images.unsplash.com/photo-1626132647523-66c3f4942c4a?w=400&q=80" },
  { id:32, name:"Gulab Jamun", category:"veg", time:40, ingredients:["milk powder","flour","butter","milk","sugar","cardamom","rose water","saffron","oil"], steps:"1. Mix milk powder, flour and butter; add milk to form soft dough.\n2. Shape into small smooth balls.\n3. Deep fry on low heat until deep golden brown.\n4. Soak in warm sugar syrup with cardamom and rose water.", image:"https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80" },
  { id:33, name:"Baingan Bharta", category:"veg", time:30, ingredients:["eggplant","onion","tomato","garlic","ginger","green chili","cumin","coriander","turmeric","oil","salt","coriander leaves"], steps:"1. Roast eggplant directly on flame until charred.\n2. Peel and mash the flesh.\n3. Sauté cumin, onion, garlic, ginger, tomato and spices.\n4. Mix in mashed eggplant, cook 5 min and garnish.", image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
  { id:34, name:"Keema Matar", category:"non-veg", time:35, ingredients:["ground lamb","peas","onion","tomato","garlic","ginger","cumin","garam masala","turmeric","chili powder","oil","salt","coriander"], steps:"1. Brown minced lamb in oil, drain excess fat.\n2. Sauté onion, garlic, ginger until golden.\n3. Add tomatoes and spices, cook until oil separates.\n4. Add peas and keema, simmer 15 min.", image:"https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80" },
  { id:35, name:"Aloo Gobi", category:"veg", time:25, ingredients:["potato","cauliflower","onion","tomato","garlic","ginger","cumin","turmeric","coriander","garam masala","oil","salt"], steps:"1. Heat oil, add cumin and sauté onion, garlic, ginger.\n2. Add tomatoes and spices, cook until masala is ready.\n3. Add potato and cauliflower, mix well.\n4. Cover and cook on low heat until tender.", image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
  { id:36, name:"Tandoori Roti", category:"veg", time:20, ingredients:["wheat flour","water","salt","butter","yogurt"], steps:"1. Mix flour, yogurt, salt and water into a soft dough.\n2. Rest for 15 min, then divide into balls.\n3. Roll flat and cook on a hot tawa or in oven.\n4. Apply butter and serve hot.", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  { id:37, name:"Kheer", category:"veg", time:40, ingredients:["milk","rice","sugar","cardamom","saffron","almonds","cashews","raisins","rose water"], steps:"1. Simmer milk in a heavy pan, stirring often.\n2. Add washed rice and cook until very soft.\n3. Stir in sugar, cardamom and saffron.\n4. Garnish with nuts and raisins, serve warm or chilled.", image:"https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80" },
  { id:38, name:"Egg Curry", category:"non-veg", time:25, ingredients:["eggs","onion","tomato","garlic","ginger","cumin","turmeric","chili powder","garam masala","oil","salt","coriander"], steps:"1. Hard boil eggs, peel and lightly fry in oil.\n2. Sauté cumin, onion, garlic, ginger until golden.\n3. Add tomatoes and spices, cook until thick.\n4. Add eggs to gravy, simmer 5 min and garnish.", image:"https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&q=80" }
];

// ===== State =====
let allRecipes = [];
let userIngredients = [];
let favorites = JSON.parse(localStorage.getItem('sk_favorites') || '[]');
let mealPlan = JSON.parse(localStorage.getItem('sk_mealplan') || '{}');
let activeFilter = 'all';
let currentRecipe = null;
let matchedIngredients = new Set();

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// ===== DOM Refs =====
const ingredientInput = document.getElementById('ingredientInput');
const addIngredientBtn = document.getElementById('addIngredientBtn');
const ingredientChips = document.getElementById('ingredientChips');
const findRecipesBtn = document.getElementById('findRecipesBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const clearIngredientsBtn = document.getElementById('clearIngredientsBtn');
const recipeGrid = document.getElementById('recipeGrid');
const emptyState = document.getElementById('emptyState');
const wasteBanner = document.getElementById('wasteBanner');
const wasteText = document.getElementById('wasteText');
const weekGrid = document.getElementById('weekGrid');
const clearPlannerBtn = document.getElementById('clearPlannerBtn');
const favGrid = document.getElementById('favGrid');
const favEmpty = document.getElementById('favEmpty');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalIngredients = document.getElementById('modalIngredients');
const modalSteps = document.getElementById('modalSteps');
const modalFavBtn = document.getElementById('modalFavBtn');
const modalDaySelect = document.getElementById('modalDaySelect');
const modalAddPlanBtn = document.getElementById('modalAddPlanBtn');
const darkToggle = document.getElementById('darkToggle');

// ===== Init =====
function init() {
  allRecipes = RECIPES_DATA;
  renderWeekPlanner();
  renderFavorites();
  if (localStorage.getItem('sk_dark') === '1') {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
  }
}

// ===== Tab Navigation =====
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    if (btn.dataset.tab === 'favorites') renderFavorites();
  });
});

// ===== Dark Mode =====
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  darkToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('sk_dark', isDark ? '1' : '0');
});

// ===== Ingredient Input =====
function addIngredient() {
  const raw = ingredientInput.value.trim();
  if (!raw) return;
  const items = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  items.forEach(item => {
    if (item && !userIngredients.includes(item)) {
      userIngredients.push(item);
    }
  });
  ingredientInput.value = '';
  renderChips();
}

addIngredientBtn.addEventListener('click', addIngredient);
ingredientInput.addEventListener('keydown', e => { if (e.key === 'Enter') addIngredient(); });

clearIngredientsBtn.addEventListener('click', () => {
  userIngredients = [];
  renderChips();
  recipeGrid.innerHTML = '';
  emptyState.style.display = 'block';
  wasteBanner.style.display = 'none';
});

function renderChips() {
  ingredientChips.innerHTML = '';
  userIngredients.forEach(ing => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `${ing} <button class="chip-remove" data-ing="${ing}">✕</button>`;
    ingredientChips.appendChild(chip);
  });
  ingredientChips.querySelectorAll('.chip-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      userIngredients = userIngredients.filter(i => i !== btn.dataset.ing);
      renderChips();
    });
  });
}

// ===== Recipe Matching =====
function getMatchCount(recipe) {
  return recipe.ingredients.filter(ing =>
    userIngredients.some(u => ing.toLowerCase().includes(u) || u.includes(ing.toLowerCase()))
  ).length;
}

function getMatchedSet(recipe) {
  return new Set(recipe.ingredients.filter(ing =>
    userIngredients.some(u => ing.toLowerCase().includes(u) || u.includes(ing.toLowerCase()))
  ));
}

findRecipesBtn.addEventListener('click', () => {
  if (!userIngredients.length) {
    alert('Please add at least one ingredient first.');
    return;
  }
  renderRecipes();
});

function renderRecipes(pool) {
  let recipes = pool || [...allRecipes];

  // Apply category/time filter
  if (activeFilter === 'veg') recipes = recipes.filter(r => r.category === 'veg');
  else if (activeFilter === 'non-veg') recipes = recipes.filter(r => r.category === 'non-veg');
  else if (activeFilter === 'quick') recipes = recipes.filter(r => r.time <= 15);

  // Sort by match count descending
  recipes.sort((a, b) => getMatchCount(b) - getMatchCount(a));

  recipeGrid.innerHTML = '';

  if (!recipes.length) {
    emptyState.style.display = 'block';
    emptyState.textContent = 'No recipes match your current filters.';
    wasteBanner.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';

  // Waste indicator
  if (userIngredients.length) {
    const allRecipeIngs = new Set(allRecipes.flatMap(r => r.ingredients.map(i => i.toLowerCase())));
    const usable = userIngredients.filter(u =>
      [...allRecipeIngs].some(ri => ri.includes(u) || u.includes(ri))
    ).length;
    wasteBanner.style.display = 'flex';
    wasteText.textContent = `You can use ${usable} out of ${userIngredients.length} ingredient${userIngredients.length > 1 ? 's' : ''} across our recipes. Great job reducing food waste!`;
  }

  recipes.forEach((recipe, i) => {
    const matched = getMatchedSet(recipe);
    const matchCount = matched.size;
    const total = recipe.ingredients.length;
    const pct = Math.round((matchCount / total) * 100);
    const isFav = favorites.includes(recipe.id);

    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="recipe-img-wrap">
        <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
        <span class="recipe-badge">${recipe.category === 'veg' ? '🥦 Veg' : '🍗 Non-Veg'} · ⏱ ${recipe.time}m</span>
        <button class="recipe-fav-btn ${isFav ? 'active' : ''}" data-id="${recipe.id}" title="Favorite">
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="recipe-info">
        <div class="recipe-name">${recipe.name}</div>
        <div class="match-bar-wrap">
          <div class="match-label">${matchCount}/${total} ingredients matched (${pct}%)</div>
          <div class="match-bar"><div class="match-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="ingredient-tags">
          ${recipe.ingredients.map(ing => `<span class="ing-tag ${matched.has(ing) ? 'matched' : ''}">${ing}</span>`).join('')}
        </div>
      </div>
    `;

    card.querySelector('.recipe-fav-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(recipe.id, e.currentTarget);
    });

    card.addEventListener('click', () => openModal(recipe));
    recipeGrid.appendChild(card);
  });
}

// ===== Filters =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    if (userIngredients.length || recipeGrid.children.length) renderRecipes();
  });
});

// ===== Surprise Me =====
surpriseBtn.addEventListener('click', () => {
  const pool = activeFilter === 'all' ? allRecipes
    : activeFilter === 'quick' ? allRecipes.filter(r => r.time <= 15)
    : allRecipes.filter(r => r.category === activeFilter);
  if (!pool.length) return;
  const recipe = pool[Math.floor(Math.random() * pool.length)];
  openModal(recipe);
});

// ===== Modal =====
function openModal(recipe) {
  currentRecipe = recipe;
  const matched = getMatchedSet(recipe);
  modalImg.src = recipe.image;
  modalImg.alt = recipe.name;
  modalTitle.textContent = recipe.name;
  modalMeta.innerHTML = `<span>${recipe.category === 'veg' ? '🥦 Veg' : '🍗 Non-Veg'}</span><span>⏱ ${recipe.time} min</span><span>🥘 ${recipe.ingredients.length} ingredients</span>`;
  modalIngredients.innerHTML = recipe.ingredients.map(ing =>
    `<li class="${matched.has(ing) ? 'matched' : ''}">${ing}</li>`
  ).join('');
  modalSteps.textContent = recipe.steps;
  updateModalFavBtn();
  modalDaySelect.value = '';
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentRecipe = null;
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function updateModalFavBtn() {
  if (!currentRecipe) return;
  const isFav = favorites.includes(currentRecipe.id);
  modalFavBtn.textContent = isFav ? '💔 Remove Favorite' : '❤️ Save to Favorites';
  modalFavBtn.style.background = isFav ? '#fc8181' : '';
}

modalFavBtn.addEventListener('click', () => {
  if (!currentRecipe) return;
  toggleFavorite(currentRecipe.id);
  updateModalFavBtn();
});

// ===== Favorites =====
function toggleFavorite(id, btnEl) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('sk_favorites', JSON.stringify(favorites));
  if (btnEl) {
    const isFav = favorites.includes(id);
    btnEl.textContent = isFav ? '❤️' : '🤍';
    btnEl.classList.toggle('active', isFav);
  }
}

function renderFavorites() {
  favGrid.innerHTML = '';
  const favRecipes = allRecipes.filter(r => favorites.includes(r.id));
  if (!favRecipes.length) {
    favEmpty.style.display = 'block';
    return;
  }
  favEmpty.style.display = 'none';
  favRecipes.forEach((recipe, i) => {
    const matched = getMatchedSet(recipe);
    const matchCount = matched.size;
    const total = recipe.ingredients.length;
    const pct = Math.round((matchCount / total) * 100);

    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="recipe-img-wrap">
        <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
        <span class="recipe-badge">${recipe.category === 'veg' ? '🥦 Veg' : '🍗 Non-Veg'} · ⏱ ${recipe.time}m</span>
        <button class="recipe-fav-btn active" data-id="${recipe.id}" title="Remove favorite">❤️</button>
      </div>
      <div class="recipe-info">
        <div class="recipe-name">${recipe.name}</div>
        <div class="match-bar-wrap">
          <div class="match-label">${matchCount}/${total} ingredients matched (${pct}%)</div>
          <div class="match-bar"><div class="match-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="ingredient-tags">
          ${recipe.ingredients.map(ing => `<span class="ing-tag ${matched.has(ing) ? 'matched' : ''}">${ing}</span>`).join('')}
        </div>
      </div>
    `;
    card.querySelector('.recipe-fav-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(recipe.id);
      renderFavorites();
    });
    card.addEventListener('click', () => openModal(recipe));
    favGrid.appendChild(card);
  });
}

// ===== Weekly Planner =====
function renderWeekPlanner() {
  weekGrid.innerHTML = '';
  DAYS.forEach(day => {
    const meal = mealPlan[day];
    const div = document.createElement('div');
    div.className = 'day-card';
    div.innerHTML = `
      <div class="day-name">${day}</div>
      <div class="day-meal ${meal ? '' : 'empty'}">${meal || 'No meal planned'}</div>
      ${meal ? `<button class="day-remove" data-day="${day}">✕ Remove</button>` : ''}
    `;
    if (meal) {
      div.querySelector('.day-remove').addEventListener('click', () => {
        delete mealPlan[day];
        savePlan();
        renderWeekPlanner();
      });
    }
    weekGrid.appendChild(div);
  });
}

clearPlannerBtn.addEventListener('click', () => {
  mealPlan = {};
  savePlan();
  renderWeekPlanner();
});

modalAddPlanBtn.addEventListener('click', () => {
  const day = modalDaySelect.value;
  if (!day || !currentRecipe) return;
  mealPlan[day] = currentRecipe.name;
  savePlan();
  renderWeekPlanner();
  modalDaySelect.value = '';
  // brief feedback
  modalAddPlanBtn.textContent = '✓ Added';
  setTimeout(() => { modalAddPlanBtn.textContent = 'Add'; }, 1500);
});

function savePlan() {
  localStorage.setItem('sk_mealplan', JSON.stringify(mealPlan));
}

// ===== Start =====
init();
