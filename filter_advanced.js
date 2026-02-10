function filter (array ,  func) {
var result = []
each(array , function (el , i) {
if (func(el , i )) {
result.push(el)
    }})
 return result 
}

function contientMot(tab, cle, mot){
return filter(tab,function(el){
return el[cle].includes(mot)
})
}

function topAvecLettre(tab, lettre) {
return tab.filter(function(el){
return el.score>80 && el.nom[0]===lettre

})
}

function datesPassees(dates) {
var aujourdHui=new Date()
    return dates.filter(function(el){
return new Date(el)<aujourdHui
})
}
function palindromes(chaines) {
return chaines.filter(function(el){
return el===el.split('').reverse().join('');
})
}

function avecPropriete(tab, cle) {
return tab.filter(function(el){
return el[cle]!==undefined;
})
}
function filtrerComplexe(nombres) {
return nombres.filter(function(el){
return (el%2===0&&el>10)||(el%2!==0&&el<5)
})
}
function avecValeur(tab, valeur) {
return tab.filter(function(el){
return el.valeurs.includes(valeur)
})
}
   function uniques(chaines) {
var unique=[]
    return chaines.filter(function(el){

        if(!unique.includes(el)){
            unique.push(el)
            return true
        }
return false
})
} 

function voyellesUniques(mots) {
  var mot = mots[0];
  var toutesVoyelles = ['a','e','i','o','u'];
  var voyelles = mot
    .toLowerCase()
    .split('')
    .filter(function(letra, index, self) {
      return toutesVoyelles.includes(letra) && self.indexOf(letra) === index;
    });
  
  return [mot, voyelles.join('')];
}


