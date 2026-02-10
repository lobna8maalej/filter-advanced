# filter-advanced

# filtreAvecFilter-Avancé

## Exercices Avancés

### 1 — Objets dont une chaîne contient un mot-clé
Écris une fonction `contientMot` qui retourne uniquement les objets dont la valeur d’une propriété contient un mot-clé donné.

```javascript
function contientMot(tab, cle, mot) {
}

var tab = [{nom:'Alice Paris'},{nom:'Bob Lyon'},{nom:'Charlie Paris'}];
contientMot(tab,'nom','Paris'); // => [{nom:'Alice Paris'},{nom:'Charlie Paris'}]
```

---
### 2 — Objets avec score élevé et nom spécifique

Écris une fonction `topAvecLettre` qui prend un tableau d’objets `{nom, score}` et une lettre, et retourne uniquement les objets ayant un `score` supérieur à 80 **et** dont le `nom` commence par la lettre donnée.

```javascript
function topAvecLettre(tab, lettre) {
}

var etudiants = [
  {nom:'Alice', score:95},
  {nom:'Bob', score:90},
  {nom:'Amir', score:70},
  {nom:'Anna', score:85}
];

topAvecLettre(etudiants,'A'); // => [{nom:'Alice', score:95}, {nom:'Anna', score:85}]
```

---

### 3 — Filtrer dates dans le passé

Écris une fonction `datesPassees` qui prend un tableau de chaînes représentant des dates ISO et retourne uniquement celles qui sont dans le passé par rapport à aujourd’hui.

```javascript
function datesPassees(dates) {
}
datesPassees(['2023-01-01','2026-05-01','2025-01-01']);
// => ['2023-01-01','2025-01-01']
```

---

### 4 — Filtrer chaînes palindromes

Écris une fonction `palindromes` qui retourne uniquement les chaînes qui se lisent de la même façon dans les deux sens.

```javascript
function palindromes(chaines) {
}
palindromes(['radar','chat','level','code','noon']); 
// => ['radar','level','noon']
```

---

### 5 — Objets avec propriété manquante

Écris une fonction `avecPropriete` qui prend un tableau d’objets et une clé, et retourne uniquement les objets **qui possèdent cette clé**.

```javascript
function avecPropriete(tab, cle) {
}
var personnes = [
  {nom:'Alice', age:25},
  {nom:'Bob'},
  {nom:'Charlie', age:30}
];

avecPropriete(personnes,'age'); 
// => [{nom:'Alice', age:25}, {nom:'Charlie', age:30}]
```

---

### 6 — Filtrer par combinaison de conditions

Écris une fonction `filtrerComplexe` qui prend un tableau de nombres et retourne uniquement ceux qui sont **pairs et supérieurs à 10** ou **impairs et inférieurs à 5**.

```javascript
function filtrerComplexe(nombres) {
}
filtrerComplexe([1,2,3,4,5,12,14,7,9]); 
// => [1,3,2,12,14]
```

---

### 7 — Objets avec tableau imbriqué

Écris une fonction `avecValeur` qui prend un tableau d’objets `{nom, valeurs: []}` et un nombre, et retourne uniquement les objets dont le tableau `valeurs` contient ce nombre.

```javascript
function avecValeur(tab, valeur) {
}

var data = [
  {nom:'A', valeurs:[1,2,3]},
  {nom:'B', valeurs:[4,5]},
  {nom:'C', valeurs:[3,5,6]}
];

avecValeur(data,3); 
// => [{nom:'A', valeurs:[1,2,3]}, {nom:'C', valeurs:[3,5,6]}]
```

---

### 8 — Filtrer chaînes uniques

Écris une fonction `uniques` qui prend un tableau de chaînes et retourne uniquement celles qui **n’apparaissent qu’une seule fois** dans le tableau.

```javascript
function uniques(chaines) {
}
uniques(['chat','chien','chat','lion','tigre','lion']);
// => ['chien','tigre']
```

---


### 9 — Filtrer mots avec voyelles uniques

Écris une fonction `voyellesUniques` qui retourne uniquement les mots contenant **toutes les voyelles au maximum une fois** (a,e,i,o,u).

```javascript
function voyellesUniques(mots) {
}
voyellesUniques(['education','audio','unique','aeiou','hello']);
// => ['audio','aeiou']
```

---


