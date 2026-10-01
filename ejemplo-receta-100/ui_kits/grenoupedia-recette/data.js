window.RECETTE = {
  statut: 'Brouillon · création inspirée de la cuisine chinoise · quantités proposées par l’auteur, essai en cuisine à faire',
  cutId: 'grenouchup',
  calibre: 'Selon fiche du lot',
  categorie: 'Cuisine & techniques',
  titre: 'Cuisses de grenouille laquées hoisin et cinq-épices : le grill sans dessécher',
  chapo: 'Une laque hoisin et cinq-épices posée dans les dernières minutes du grill : la chair reste nacrée, le sucre caramélise sans noircir.',
  meta: [{ label: 'Préparation', value: '20 min' }, { label: 'Repos', value: '20 min' }, { label: 'Cuisson', value: '8 à 9 min', alert: 'Laquer en fin de grill' }, { label: 'Difficulté', value: 'Moyenne' }, { label: 'Portions', value: '4' }],
  legende: 'Grenouchup grillés à la braise, laque hoisin et cinq-épices, graines de sésame.',
  erreur: { title: 'Le sucre brûle avant la chair.', text: 'La laque hoisin contient du sucre : posée dès le début, elle noircit et vire à l’amertume avant que la chair soit cuite. On grille d’abord, on laque ensuite, en deux couches fines, sur la zone tiède du grill. Gardez l’os dégagé à l’écart de la flamme vive.', rule: 'Règle : jamais de laque avant la dernière étape.' },
  ingredients: [
    { title: 'Les Grenouchup', items: [{ name: 'Grenouchup (découpe sucette, os dégagé)', qty: '600 g' }, { name: 'Fleur de sel', qty: '5 g' }, { name: 'Vin de riz Shaoxing', qty: '30 ml' }, { name: 'Gingembre frais, râpé', qty: '10 g' }, { name: 'Huile neutre, pour la grille', qty: '10 ml' }] },
    { title: 'La laque', items: [{ name: 'Sauce hoisin', qty: '40 g', allergen: 'Soja, gluten (selon étiquette)' }, { name: 'Miel', qty: '20 g' }, { name: 'Sauce soja', qty: '15 ml', allergen: 'Soja, gluten' }, { name: 'Vinaigre de riz', qty: '10 ml' }, { name: 'Huile de sésame grillé', qty: '5 ml', allergen: 'Sésame' }, { name: 'Poudre de cinq-épices', qty: '1,5 g' }, { name: 'Ail, 1 gousse râpée', qty: '5 g' }] },
    { title: 'La finition', items: [{ name: 'Cébettes, émincées', qty: '30 g' }, { name: 'Graines de sésame', qty: '5 g', allergen: 'Sésame' }] }
  ],
  cuissonTitre: 'Trois temps, un grill',
  phases: [
    { from: 0, to: 210, title: 'Griller sans laquer', text: 'Grenouchup posés sur la zone chaude, os dégagé côté tiède. On les laisse prendre couleur.', signal: 'bord doré, chair devenue opaque sur le premier tiers.' },
    { from: 210, to: 390, title: 'Retourner', text: 'Retourner à la pince, même position, sans pression sur la chair.', signal: 'la chair commence à se détacher de l’os.' },
    { from: 390, to: 510, title: 'Laquer en deux couches', text: 'Zone tiède : une couche de laque au pinceau, 60 secondes, retourner, seconde couche.', signal: 'laque brillante, sans bord noirci.' }
  ],
  cuissonNote: 'Temps indicatifs, proposés par l’auteur et à valider en cuisine : ils dépendent du calibre, de la braise et de la distance à la grille. Température à cœur : se référer à la fiche du lot ou à une source officielle (ANSES). La couleur et la texture ne garantissent pas la sécurité sanitaire.',
  steps: [
    { title: 'Mariner', control: 'Au frais', text: 'Mélanger les Grenouchup avec la fleur de sel, le vin Shaoxing et le gingembre. Laisser reposer 20 minutes, puis éponger soigneusement.', signal: 'surface sèche au toucher.' },
    { title: 'Préparer la laque', control: 'Feu très doux', text: 'Réunir hoisin, miel, sauce soja, vinaigre de riz, huile de sésame, cinq-épices et ail. Chauffer 2 minutes en remuant, sans bouillir.', signal: 'laque lisse, nappante.' },
    { title: 'Préparer le grill', control: 'Braise moyenne', text: 'Créer une zone chaude et une zone tiède. Huiler la grille avec 10 ml d’huile neutre.', signal: 'la main tient 3 à 4 secondes au-dessus de la zone chaude.' },
    { title: 'Griller', control: 'Zone chaude', text: 'Poser les Grenouchup, os dégagé côté tiède. Griller environ 3 min 30, puis retourner et poursuivre environ 3 minutes.', signal: 'bord doré, chair opaque.' },
    { title: 'Laquer', control: 'Zone tiède', text: 'Badigeonner une première couche, attendre 60 secondes, retourner, badigeonner la seconde.', signal: 'laque brillante sans noircir.' },
    { title: 'Dresser', control: 'Service immédiat', text: 'Assiettes chaudes. Parsemer de cébettes et de graines de sésame. Servir avec la laque restante à part.' }
  ],
  conservation: 'Laisser tiédir, puis réfrigérer en boîte hermétique, la laque à part. Délai : se référer à l’étiquette du lot.',
  regeneration: 'Au four doux ou à la poêle à feu doux, couvercle posé, avec une cuillère d’eau. Reglacer au pinceau en fin de réchauffe, sans bouillir.',
  vin: { name: 'Riesling d’Alsace', note: 'Blanc d’Alsace sec à demi-sec : la rondeur accompagne le sucré-salé, l’acidité répond aux épices.' },
  sansAlcool: { name: 'Thé vert au jasmin, infusé à froid', note: 'Gingembre frais et zeste de citron vert.' },
  social: {
    cover: 'Laquer en dernier.',
    erreur: 'Le sucre brûle avant la chair.',
    chrono: 'Côté 1 · côté 2 · laque',
    cta: 'La recette complète sur la Grenoupedia.',
    reelHook: 'Plan serré : la laque brillante nappe un Grenouchup sur la braise.',
    reelHookText: '« Laquer en dernier. »',
    reelBody: 'Griller côté 1, retourner, deux couches de laque, sésame. Chrono à l’écran.',
    reelBodyText: 'Les trois temps du grill.',
    reelBig: '3 temps',
    reelSmall: 'Un grill.',
    linkedinBig: '3 gestes',
    linkedinSub: 'Griller, retourner, laquer.',
    linkedinArgs: ['Découpe sucette : l’os dégagé sert de manche, service à la main.', 'Laque préparable à l’avance, finition minute au grill.', 'Format apéritif et finger food, sans couverts.']
  }
};
