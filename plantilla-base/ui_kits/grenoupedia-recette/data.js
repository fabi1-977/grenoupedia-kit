window.RECETTE = {
  categorie: 'Cuisine & techniques',
  titre: 'Cuisses de grenouille en persillade : la cuisson à la seconde près',
  chapo: 'Deux faces, 135 secondes sur le feu, une persillade liée hors du feu : la méthode pour une chair nacrée qui se détache de l\u2019os sans sécher.',
  meta: [{ label: 'Préparation', value: '15 min' }, { label: 'Cuisson', value: '2 min 30 s', alert: '90 s max. par face' }, { label: 'Difficulté', value: 'Facile' }, { label: 'Portions', value: '4' }],
  legende: 'Découpe Premium saisie au beurre clarifié, persillade émulsionnée hors du feu.',
  erreur: { title: 'Elle ne se braise pas : elle se saisit.', text: 'La cuisse de grenouille a une fibre fine et courte : rien à attendrir. Au-delà de deux minutes sur le feu, les fibres se contractent, rendent leur eau, et la chair se détache sèche de l\u2019os. Traitez-la comme un filet de sole : saisie franche, cuisson minute, service immédiat.', rule: 'Règle : jamais plus de 90 secondes par face.' },
  ingredients: [
    { title: 'Les cuisses', items: [{ name: 'Cuisses de grenouille, découpe Premium', qty: '800 g' }, { name: 'Farine de blé T45, en voile (facultatif)', qty: '20 g', allergen: 'Gluten' }, { name: 'Fleur de sel', qty: '4 g' }, { name: 'Poivre blanc du moulin', qty: '1 g' }] },
    { title: 'La cuisson', items: [{ name: 'Beurre clarifié', qty: '60 g', allergen: 'Lait' }, { name: 'Ail, 4 gousses', qty: '20 g' }] },
    { title: 'La persillade', items: [{ name: 'Beurre doux froid, en dés', qty: '40 g', allergen: 'Lait' }, { name: 'Persil plat, ciselé', qty: '15 g' }, { name: 'Jus de citron', qty: '10 ml' }] }
  ],
  phases: [
    { from: 0, to: 75, title: 'Saisir sans toucher', text: 'Cuisses posées à plat dans le beurre clarifié moussant. On ne les déplace pas.', signal: 'bord doré, chair nacrée devenue opaque sur le premier tiers.' },
    { from: 75, to: 135, title: 'Retourner, ajouter l\u2019ail confit', text: 'Retourner une à une à la pince. Ajouter l\u2019ail confit écrasé et arroser au beurre.', signal: 'l\u2019ail blondit sans colorer.' },
    { from: 135, to: 150, title: 'Émulsionner hors du feu', text: 'Poêle retirée du feu : beurre froid, persil plat, quelques gouttes de citron. Napper.', signal: 'sauce liée et brillante.' }
  ],
  cuissonNote: 'Temps indicatifs pour des paires de 100–125 g dans une poêle non surchargée ; à ajuster selon calibre, charge et matériel. La couleur et la texture ne garantissent pas la sécurité sanitaire.',
  steps: [
    { title: 'Confire l\u2019ail', control: 'Feu très doux', text: 'Cuire les gousses dans 20 g de beurre clarifié 10 à 12 minutes, jusqu\u2019à ce qu\u2019elles s\u2019écrasent à la fourchette.', signal: 'l\u2019ail reste blond.' },
    { title: 'Sécher les cuisses', control: 'Température ambiante', text: 'Sortir les cuisses 15 minutes avant cuisson, les éponger, fariner d\u2019un voile et tapoter l\u2019excédent.', signal: 'surface sèche au toucher.' },
    { title: 'Saisir', control: 'Feu moyen-vif', text: 'Chauffer 40 g de beurre clarifié dans une poêle de 28 cm. Déposer les cuisses sans les chevaucher ; ne plus y toucher pendant 75 secondes.', signal: 'bord doré.' },
    { title: 'Retourner et arroser', control: 'Feu moyen', text: 'Retourner, ajouter l\u2019ail confit écrasé et arroser au beurre pendant 60 secondes.', signal: 'la chair se détache de l\u2019os à la pointe du couteau.' },
    { title: 'Émulsionner', control: 'Hors du feu', text: 'Ajouter le beurre froid, le persil et le citron. Faire tourner la poêle 15 secondes.', signal: 'sauce brillante et nappante.' },
    { title: 'Dresser', control: 'Service immédiat', text: 'Assiettes chaudes, deux paires par personne, napper. Fleur de sel au dernier moment.' }
  ],
  conservation: 'Laisser tiédir, puis réfrigérer en boîte hermétique, la persillade à part. Délai : se référer à l\u2019étiquette du lot.',
  regeneration: 'Au bain-marie en sachet fermé, ou à la poêle à feu doux, couvercle posé, avec une noisette de beurre et une cuillère d\u2019eau. Une à deux minutes, sans bouillir.',
  vin: { name: 'Chablis ou Meursault', note: 'Blanc sec de Bourgogne, tendu, pour trancher le beurre.' },
  sansAlcool: { name: 'Infusion à froid de thé blanc', note: 'Zestes de citron et de bergamote.' }
};
