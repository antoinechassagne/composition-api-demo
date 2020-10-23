# Composition API (Vue 3)

_Présentation de l'API de Composition dans le cadre d'un cours de Vue.js en mastère 2 à l'ECV Digital._

Documentation officielle :
https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

Making Vue 3 by Evan You : https://increment.com/frontend/making-vue-3/

## 🧐 Composition API ?

- Permet d'utiliser des fonctionalités du coeur de Vue sans passer par les options de composants
- Par extension, permet d'utiliser ces fonctionnalités en dehors d'un composant Vue
- Aucune obligation de l'utiliser dans une application Vue 3
- Similaire aux Hooks de React

## 💻 Fonctionnement

Demo time 🤓

## 😍 Avantages

- Permet d'organiser son code dans une logique de _separation of concerns_ => regrouper les variables/fonctions/computed/lifecycle hooks par fonctionnalité et non plus par nature
- Permet d'extraire de la logique en dehors des composants dans une logique de réusabilité (_DRY_) => remplace les mixins dans la quasi totalité des cas
- En comparaison aux mixins :
  - permet de ne récupérer que ce qu'on souhaite
  - plus de conflit de nommage
  - on sait ce à quoi on a accès

## 🥵 Inconvéniants

Wait & see...
