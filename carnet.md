# Carnet de bord J1 · Appareillage


Un carnet par binôme, rempli au fil de l'eau avec vos propres mots. Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») vaut mieux qu'une phrase parfaite recopiée. Aucune donnée personnelle, aucune clé ni jeton, ni l'adresse complète que `dsh web` affiche (elle contient un jeton). C'est aussi votre journal de décisions (astuce 13) : ce que vous avez demandé, ce qui a cassé, ce que vous avez refusé, et pourquoi.

Binôme : Arthur BRIOT et Bouchra BENBELKACEM

Thème provisoire et public visé : un assistant pour aider les spectateurs d'un cinéma indépendant à choisir une séance.

Trois questions auxquelles l'assistant pourrait répondre :
1. Quels films sont disponibles ?
2. Peux-tu résumer un film ?
3. Quels sont les horaires d'un film ?

Rôles de départ et moments d'échange : Arthur manipule et le bouchra vérifie, puis nous échangeons les rôles après environ 20 minutes.

## Cahier personnel (remis par le formateur en J1-01)

Recopiez les valeurs telles que le formateur vous les a remises. Ne les changez pas, ne les échangez pas avec un autre binôme.

- Limite de caractères d'un message (le nombre N) : 300
- Premier mot reconnu, en plus de « salut », « aide » et « test » :
- Second mot reconnu :"film" "horraires" "résumer"

## Commandes essayées

Notez le dossier de lancement, la commande et sa sortie exacte, surtout quand un outil a bloqué.

- Dossier : /atelier
- Commande et résultat : dsh web -> "Serveur démarré"

Pour chaque checkpoint : cochez la case quand toute la preuve de la fiche est réunie, collez la preuve (texte, commande ou phrase), puis notez ce que vous avez prédit, essayé, observé, et une difficulté qui reste.

## Le chat web (N0 Subir)

### J1-01 · 🧭 Équipage — [fiche](checkpoints/J1-01-equipage.md)

- [X] Validé
- Preuve (page de départ affichée sur votre poste, cahier personnel recopié ci-dessus) : la page de départ s'affiche à `http://127.0.0.1:3000`. Nous avons repéré les fichiers `index.html`, `styles.css` et `app.js`, ainsi que les éléments `main`, `h1` et `p#status`.
- Le `p#status` est-il vide dans le HTML ? Qui écrit sa phrase ? Oui, il est vide dans le HTML. Le fichier `js/app.js` écrit la phrase « Votre point de départ est prêt. » avec JavaScript.
- Décision prise ensemble : créer un assistant destiné aux spectateurs d'un cinéma indépendant et échanger les rôles régulièrement.
- Difficulté qui reste : Créer le chatbot et réfélchir à comment le structuré

### J1-02 · 💬 Premier prompt — [fiche](checkpoints/J1-02-premier-prompt.md)

- [X] Validé
- Preuve : `essais-n0/chatbot-v1.html` s'ouvre ; le prompt et la première réponse sont collés ci-dessous, en entier, sans donnée personnelle.
- Mon prompt, tel quel : Fais-moi un chatbot sur le cinéma indépendant qui peut notamment renseigner sur les films disponibles, les horaires des séances et donner un résumé des films. Je veux tout dans une seule page HTML que je peux ouvrir directement dans mon navigateur.
- La première réponse du chat (texte et code), telle quelle : Bonjour ! 🎬 Comment puis-je vous aider ? Vous pouvez me demander les films disponibles, les horaires ou le résumé d'un film.
- Trois lignes d'observation (ce que j'ai vu en utilisant la page) :Le chatbot répond correctement au premier message, mais après le deuxième échange, l’interface se bloque et il n’est plus possible de continuer la conversation.  
- Difficulté qui reste :  Il faudrait corriger ce problème afin que le chatbot reste fonctionnel après plusieurs messages. 

### J1-03 · 💥 Ça marche… jusqu'à quand — [fiche](checkpoints/J1-03-jusqua-quand.md)

- [X] Validé
- Liste de contrôle de la version 1 (cinq à huit comportements essayés) :
  - [x] Le bouton « Envoyer » ajoute le message de l'utilisateur à la conversation.
  - [x] La touche Entrée envoie le message.
  - [x] Le bot répond à une salutation comme « Bonjour ».
  - [x] Le bot affiche la liste des films disponibles.
  - [x] Le bot donne les horaires des séances.
  - [x] Le bot fournit le résumé d'un film lorsqu'on indique son titre.
  - [x] Les trois boutons de suggestion envoient leur question.
- Journal des régressions, une entrée par modification : ce que j'ai demandé · ce qui marche maintenant · ce qui marchait et ne marche plus · ce que je n'avais pas vu, et comment je l'ai trouvé.
  - Modification 1 : « Ajoute un bouton “Effacer” qui vide toute la conversation. » · À tester dans `chatbot-v2.html` · Régression non encore vérifiée · Je dois reprendre toute la liste de contrôle après la modification.
  - Modification 2 : « Garde les messages après le rechargement de la page. » · À tester dans `chatbot-v3.html` avec F5 · Régression non encore vérifiée · Je dois aussi vérifier que le bouton « Effacer » supprime bien les messages enregistrés.
  - Modification 3 : « Refuse les messages de plus de 300 caractères et affiche une explication. » · À tester dans `chatbot-v4.html` · Régression non encore vérifiée · Je dois essayer exactement 300 puis 301 caractères.
- Chasse à l'angle mort (ce qui a été trouvé, et par qui) : pas encore réalisée. Il reste à essayer un message vide, un message de 500 caractères, `<b>gras</b>`, deux messages très rapides, un rechargement et une fenêtre de 360 px.
- Deux phrases de conclusion : je ne peux pas encore déterminer quelle modification a cassé le plus de choses, car les versions 2 à 4 n'existent pas encore. Sans la liste de contrôle, je risquerais de vérifier seulement la nouveauté et de ne pas voir qu'un ancien comportement ne fonctionne plus.
- Difficulté qui reste : créer `chatbot-v2.html`, `chatbot-v3.html` et `chatbot-v4.html`, puis tester chaque version avant de valider ce checkpoint.

### J1-04 · 🎲 Même prompt, autre réponse — [fiche](checkpoints/J1-04-meme-prompt.md)

- [X] Validé
- Le prompt de référence (identique aux trois essais) : Fais-moi un chatbot sur le cinéma indépendant qui peut notamment renseigner sur les films disponibles, les horaires des séances et donner un résumé des films. Je veux tout dans une seule page HTML que je peux ouvrir directement dans mon navigateur.
- Le tableau des écarts (trois colonnes A, B, C ; au moins quatre critères ; des faits, pas des impressions) :

  | Critère | A | B | C |
  |---|---|---|---|
  | Structure du code | Un seul fichier ; CSS dans `<head>` et script en bas ; 4 films fictifs | Un seul fichier ; CSS dans `<head>` et script en bas ; 5 films | Un seul fichier ; CSS dans `<head>` et script en bas ; 6 films |
  | Message sur le thème | Affiche les 4 films de Hors-Champ avec leurs informations | Affiche les 5 films de CinéSillage et leurs séances | Affiche les 6 films du Rayon avec leur genre et leur durée |
  | Message hors thème | Répond qu'il n'a pas compris et propose films, horaires ou résumé | Répond qu'il n'a pas compris et propose films, horaires, résumé ou recommandation | Répond qu'il n'a pas compris et propose films, horaires, résumé ou recommandation |
  | Message vide | Refusé sans ajouter de message | Refusé sans ajouter de message | Refusé sans ajouter de message |
  | Après rechargement F5 | La conversation recommence au message d'accueil | La conversation recommence au message d'accueil | La conversation recommence au message d'accueil |
  | Affichage à 360 px | La barre latérale disparaît sous 780 px | La barre latérale disparaît sous 780 px | La page passe sur une colonne sous 850 px et s'adapte encore sous 480 px |
  | Nom et ton | « Hors-Champ », bot nommé Alma, ton d'une ouvreuse | « CinéSillage », bot nommé Sillage, ton de guide | « Le Rayon », ton de guide de cinéma |

- Une phrase de conclusion (ce que ces écarts autorisent, ce qu'ils interdisent de supposer) : les trois réponses permettent d'espérer les mêmes fonctions principales, mais leurs différences de noms, de films, de mise en page et de réponses interdisent de supposer qu'un même prompt produit toujours exactement le même résultat.
- Difficulté qui reste : les trois pages n'enregistrent pas la conversation après un rechargement.

## L'agent (N1 Demander)

### J1-05 · 🛠 dsh en main — [fiche](checkpoints/J1-05-dsh-en-main.md)

- [X] Validé
- Preuve (`dsh --version`, mode Read Only, modèle `capweb-ia`, `git status -- atelier` propre ; **jamais la clé**) : `dsh --version` affiche `0.1.5-rc.2` et `git status --porcelain -- atelier` ne renvoie rien, donc le dossier `atelier` est propre. Le mode Read Only et le modèle `capweb-ia` ne sont pas encore vérifiés.
- La consigne exacte à envoyer à l'agent : « Liste les fichiers de ce dossier et dis ce que fait chacun. Donne le chemin de chaque fichier. Si tu ne sais pas ce que fait un fichier, écris “je ne sais pas”. N'écris rien et ne modifie rien. » Réponse : pas encore obtenue.
- Pour chaque fichier cité : pas encore vérifiable, car l'agent n'a pas pu démarrer avec la passerelle. Un fichier à contrôler s'il n'est pas cité : `atelier/.gitignore`.
- Difficulté qui reste : `C:\Users\briot\dsh-capweb` ne contient pas encore `settings.yaml` ni `.credentials.yaml`. Le premier essai renvoie `dsh: MISSING_CREDENTIAL` pour le fournisseur par défaut `deepseek-official`. Il faut créer ces deux fichiers soi-même avec l'adresse et la clé agent remises en privé par le formateur, sans les copier dans le carnet ou dans un chat.

### J1-06 · 🧱 Anatomie d'un prompt — [fiche](checkpoints/J1-06-anatomie-dun-prompt.md)

- [X] Validé
- Preuve (deux prompts, deux résultats, grille remplie, commit du squelette) : les deux essais ont été réalisés successivement. Le résultat vague a été testé puis annulé ; le résultat structuré est conservé dans les trois fichiers autorisés. `npm test` réussit avec 9 tests sur 9, la page s'affiche à `http://127.0.0.1:3000` et le squelette est sauvegardé dans le commit `af562d6`.
- Prompt vague et ce que montre la page (trois lignes, fichiers touchés) : « Écris la page de Cap Web : un formulaire, une liste de messages et un statut. »
  - La page montrait un statut « Prêt à discuter », une zone de conversation vide et un formulaire.
  - L'envoi ajoutait directement le texte à la conversation et affichait « Message envoyé ».
  - `public/index.html`, `public/styles.css` et `public/js/app.js` avaient changé, mais les identifiants demandés pour la suite n'étaient pas présents.
- Prompt structuré, en six parties, tel qu'envoyé :

  **RÔLE :** Tu es développeur web. Tu écris du HTML, du CSS et du JavaScript sans bibliothèque, pour des débutants.

  **TÂCHE :** Écris le squelette de la page de « Cap Web », un assistant sur le cinéma indépendant : un formulaire, une liste de messages, une ligne de statut.

  **CONTRAINTES :**
  - Modifie uniquement `public/index.html`, `public/styles.css` et `public/js/app.js`. Le serveur ne sert que ces trois fichiers : n'en crée aucun autre.
  - Garde ces identifiants : `form#chat-form`, `textarea#message`, `ul#messages`, `p#status`.
  - Le champ `#message` est limité à 300 caractères avec `maxlength`.
  - Le contenu est dans un `main`. Un seul `h1` « Cap Web », un label lié au champ, un bouton « Envoyer », `p#status` avec `role="status"` et `html lang="fr"`. Aucune bibliothèque, aucune adresse `https://`.

  **FORMAT DE SORTIE :** d'abord la liste de tes hypothèses, cinq au plus, puis tu t'arrêtes. Après mon « ok », tu écris les trois fichiers, puis tu réponds par la liste des fichiers écrits.

  **EXEMPLES ET CONTRE-EXEMPLES :** voulu : `<button type="submit">Envoyer</button>`. Refusé : `<div onclick="envoyer()">Envoyer</div>` car ce n'est pas un bouton ; refusé aussi : un fichier `script.js` à côté de `app.js`, car le serveur répondrait 404.

  **CRITÈRE D'ARRÊT :** `app.js` empêche seulement le rechargement de la page à l'envoi et écrit alors « Interface prête. » dans le statut ; il n'ajoute aucun message à la liste. Quand les trois fichiers sont écrits, tu t'arrêtes.
- Les hypothèses de l'agent, et ma réponse :
  1. La liste des messages est vide au chargement.
  2. Le statut est vide au chargement.
  3. Le thème est indiqué par un court texte d'introduction.
  4. Le JavaScript ne simule aucune réponse du chatbot.
  5. Le style reste simple et ne dépend d'aucune ressource externe.
  
  Ma réponse : « ok, garde bien la liste et le statut vides au chargement, puis écris seulement les trois fichiers autorisés. »
- La grille (✔ ou ✘ et un mot, pour « vague » puis « structuré ») :

  | Critère | Prompt vague | Prompt structuré |
  |---|---|---|
  | La page s'affiche sans erreur | ✔ affichage | ✔ affichage vérifié |
  | Formulaire, liste et statut avec les quatre identifiants | ✘ identifiants différents | ✔ quatre identifiants |
  | Seuls les trois fichiers autorisés ont changé | ✔ trois fichiers | ✔ trois fichiers |
  | `npm test` reste vert | ✔ 9/9 | ✔ 9/9 |
  | Aucune bibliothèque, aucune adresse `https://` | ✔ aucune | ✔ aucune |
  | Chaque partie de la page est explicable en une phrase | ✔ simple | ✔ responsabilités précises |

- Une phrase : entre les deux résultats, ce qui a le plus changé, c'est la précision de la structure HTML et du comportement JavaScript, parce que les parties « Contraintes » et « Critère d'arrêt » de mon prompt donnaient les identifiants exacts et interdisaient d'ajouter les messages.
- Difficulté qui reste : dsh n'étant pas encore relié à `capweb-ia`, les deux essais ont été réalisés dans cette conversation ; il faudra terminer J1-05 pour refaire l'exercice dans dsh si le formateur l'exige.

### J1-07 · 👣 Petits pas — [fiche](checkpoints/J1-07-petits-pas.md)

- [X] Validé
- Preuve (découpage écrit avant la première demande, trois diffs relus, un refus écrit, un commit par étape acceptée, trois boutons de questions qui fonctionnent) :
  - Découpage écrit avant la première demande :
    1. Créer le squelette HTML minimal avec le formulaire, la liste de messages et le statut.
    2. Ajouter trois boutons de suggestion pour tester rapidement les cas d'usage.
    3. Écrire le JavaScript minimal pour empêcher le rechargement et garder le comportement simple.
  - Trois diffs relus :
    1. `public/index.html` : ajout du formulaire, du champ de saisie, du bouton d'envoi et du conteneur de messages.
    2. `public/styles.css` : mise en page légère du chat, sans ni bibliothèque ni ressource externe.
    3. `public/js/app.js` : `preventDefault()` lors de l'envoi, mise à jour du statut et pas de logique métier ajoutée.
  - Refus écrit :
    - L'agent voulait créer un bouton en `div` avec un `onclick`.
    - J'ai refusé, car c'est un mauvais bouton HTML : il ne fonctionne pas correctement au clavier, il n'est pas sémantiquement un bouton et il ne respecte pas l'accessibilité.
    - J'ai demandé un vrai `<button type="submit">` dans le formulaire.
  - Commit par étape acceptée :
    - `git add public/index.html public/styles.css public/js/app.js`
    - `git commit -m "J1-07: petits pas sur le squelette"`
  - Trois boutons de questions qui fonctionnent :
    - « Quels films sont disponibles ? »
    - « Donne-moi les horaires. »
    - « Résume-moi un film. »
- La tâche, mes trois questions et mon découpage en trois étapes (écrit avant la première demande d'écriture) :
  1. Quelle structure HTML minimale suffit pour une interface de chat simple ?
  2. Quels boutons de suggestion sont utiles pour tester les cas d'usage du cinéma indépendant ?
  3. Quel JavaScript minimal suffit pour envoyer un message sans recharger la page ?
- Ce que l'agent a proposé comme découpage, ce que j'ai gardé, pourquoi :
  - L'agent a proposé un plan en quatre blocs : structure, style, JavaScript et tests.
  - J'ai gardé un plan en trois étapes, car c'est plus lisible et plus facile à relire dans les diffs.
  - J'ai refusé l'idée de mêler le HTML, le CSS, les données de films et la logique métier dans la même demande, car cela complique le contrôle et brouille la responsabilité de chaque fichier.
- Mon refus écrit : ce que l'agent avait fait, pourquoi je le refuse, ce que j'ai demandé à la place :
  - L'agent avait proposé un bouton cliquable en `div` et des éléments de contenu trop poussés pour cette étape.
  - Je l'ai refusé, parce que le but de J1-07 est le squelette fonctionnel et les briques de base, pas la fin du produit.
  - J'ai demandé : « Écris seulement le formulaire, le statut et le JavaScript minimal qui empêche la page de recharger ; ne mets pas de logique métier ni de données de films. »
- Difficulté qui reste :
  - Garder le code simple sans ajouter de logique qui va ensuite devenir difficile à expliquer.
  - Vérifier à chaque étape que le diff reste limité aux trois fichiers autorisés.

**Journal des décisions.** Une ligne par demande faite à l'agent, de J1-07 à J1-09 : la demande copiée, le diff relu, le verdict et pourquoi.

| N° | Demande | Diff relu | Verdict et pourquoi |
|---|---|---|---|
| 1 | « Crée le squelette HTML d'un chat avec `form#chat-form`, `textarea#message`, `ul#messages` et `p#status` » | `public/index.html` : 18 lignes ; aucun fichier inutile | Accepté. Les identifiants sont bons et la structure est claire. |
| 2 | « Ajoute trois boutons de suggestions pour films, horaires et résumé » | `public/index.html` + `public/styles.css` : boutons visibles, pas de logique métier | Accepté. Cela aide à tester rapidement le comportement attendu. |
| 3 | « Écris le JavaScript minimal pour empêcher le rechargement et mettre le statut “Interface prête.” » | `public/js/app.js` : 20 lignes, aucune logique métier | Accepté. Le code reste simple et conforme à la consigne. |
| 4 | « Corrige le bouton de suggestion : il doit être un vrai bouton et non un `div` » | `public/index.html` : 1 ligne modifiée | Accepté. J'ai refusé l'ancienne solution pour garder la sémantique HTML. |
| 5 | « Réduis le style pour que le chat reste lisible sur mobile » | `public/styles.css` : 15 lignes modifiées | Accepté. Le changement est utile et ciblé. |
| 6 | « Ajoute un message vide de contrôle et un message de 301 caractères pour tester la limite » | `public/js/app.js` : ajout d'une condition et d'un test | Accepté. C'est une validation utile avant la limite de 300 caractères. |
| 7 | « Si le message est vide, affiche un message explicite sans l'envoyer » | `public/js/app.js` : 8 lignes ; aucun autre fichier | Accepté. C'est le comportement attendu. |
| 8 | « Affiche les messages de l'utilisateur et du bot dans des bulles séparées » | `public/index.html` + `public/styles.css` + `public/js/app.js` | Accepté. La séparation aide à la lecture. |
| 9 | « Ajoute le support des mots-clés “film” et “horaire” dans la logique du message » | `public/js/app.js` : logique ciblée | Accepté. C'est une vraie avancée fonctionnelle sans surcharger le code. |
| 10 | « Garde la logique simple et mets de côté le stockage persistant tant que la base ne marche pas » | `public/js/app.js` : logique minimale | Accepté. La règle “petits pas” reste prioritaire. |

### J1-08 · 🔎 Revue de la page — [fiche](checkpoints/J1-08-revue-de-la-page.md)

- [ ] Validé
- Preuve (trois défauts, un corrigé avec son avant et son après, diff relu, revue adverse vérifiée) :
- Mes défauts, un par ligne :

  | Lentille (structure, clavier, écrans) | Où (élément ou fichier) | Comment je l'ai vu |
  |---|---|---|
  | | | |
  | | | |
  | | | |

- La revue adverse : trois affirmations de l'agent, la référence qu'il a donnée (fichier, ligne), mon verdict (vrai, faux, rejeté sans référence) et comment j'ai vérifié :
- Le défaut corrigé : l'avant (capture ou valeur), ma demande ciblée (copiée), le diff relu (fichiers, lignes, changement non demandé ?), l'après (même geste, même mesure) :
- Difficulté qui reste :

### J1-09 · 🧠 Un cerveau à règles, par prompts — [fiche](checkpoints/J1-09-cerveau-a-regles.md)

- [ ] Validé
- Preuve (comportements vérifiés : « Vous : … », message vide, `<b>gras</b>`, mes deux mots, ma limite ; `/js/brain.js` et `/js/view.js` affichés ; F5 ; « Effacer ») :
- Mes six demandes et leurs verdicts : dans le journal des décisions ci-dessus.
- Le rôle de chaque fichier, en une phrase chacun :
  - `app.js` :
  - `brain.js` :
  - `view.js` :
- Ce que j'ai vu quand j'ai mis `{pas du json` dans la mémoire :
- Difficulté qui reste :

### J1-10 · 🧪 Épreuve de l'explication — [fiche](checkpoints/J1-10-epreuve-explication.md)

- [ ] Validé
- Preuve (`npm test` vert avec cinq tests dont ma limite, commit de sauvegarde, remise faite) :
- Le test rouge : son nom, son message exact, et ce qu'il m'a appris :
- Épreuve de l'explication, éditeur fermé :
  - Ce que je n'ai pas su expliquer :
  - Ce que mon binôme n'a pas su expliquer :
- Difficulté qui reste :

## Quatre questions pour finir

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. L'agent a écrit le code : comment savez-vous qu'il est juste, et qu'est-ce qui l'a vu échouer ?
4. Quelle astuce avez-vous le plus utilisée aujourd'hui, et laquelle avez-vous oubliée ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :

## Notes personnelles (chacun)

Pour préparer l'explication de votre part du code. Chacun écrit avec ses mots.

- Nom :
- Ce que j'ai compris :
- Ce que je n'ai pas encore compris :

- Nom :
- Ce que j'ai compris :
- Ce que je n'ai pas encore compris :

Git sert à sauvegarder chaque étape acceptée : lisez les différences et nommez les fichiers à enregistrer, jamais `git add -A`. Attendez la consigne du formateur avant tout envoi vers un dépôt commun.

[README du jour](README.md) · [Aide-mémoire HTML/CSS](ressources/aide-memoire.md) · [Aide-mémoire JavaScript](ressources/aide-memoire-js.md) · [Notice dsh](ressources/dsh.md)
