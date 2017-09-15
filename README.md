# mdf
Quelques exercices proposés sur la plateforme https://www.isograd.com/FR/solutionconcours.php

Solutions en Javascript

### infos
* arrow function : OK
* let : KO
* affectation par décomposition : KO
* Map : OK
* for..of : OK


## 2015
https://www.isograd.com/FR/solutionconcours.php?contest_id=9#

## Local
Tests en local avec VSCode et Quokka.js (https://quokkajs.com/). Ajouter `/*?*/` en fin de ligne pour afficher le résultat de l'affectation. 
Activer sur le fichier courant : `Ctrl+K Q`

## Codingame
* use `print` function to display result

## Astuces
* Créer des alias de fonction si utilisé plus d'une fois. Ex : `r=readline`
* `parseInt('3')` === `+'3'` === `Number('3')`
* utiliser la première ligne d'input indiquant le nombre de lignes plutôt que de faire après un length : `n=+r()`
* `c=readline().split(' ').map(Number)`
* `a.splice(forest.indexOf(e), 1)` : Supprimer un élément d'un tableau
* `a.filter((item, pos, arr) => arr.indexOf(item) === pos)` : Dédoublonne


## Tips and Tricks
* undefined, null, 0, false, NaN, '' (empty string) are all falsy.
* Generate an array of numbers with numbers from 0 to max
```
var numbersArray = [] , max = 100;
for( var i=1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100]
```
* var maxInNumbers = Math.max.apply(Math, numbers); : max d'un tableau de nombre
* 
```
var num =2.443242342;
num = num.toFixed(4);  // num will be equal to 2.4432
```


https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/
