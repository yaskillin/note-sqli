<template>
    <div class="container mx-auto p-4">
      <!-- Barre de navigation, en-tête, ou tout autre élément commun -->
      <header class="bg-gray-800 text-white p-4">
        <h1 class="text-2xl font-bold">SQLI NOTE APP</h1>
        <nav class="mt-2">
          <router-link to="/" class="mr-4">Accueil</router-link>
          <router-link to="/note-editor">Ajouter une note</router-link>
        </nav>
      </header>
  
      <!-- Contenu spécifique à chaque page -->
      <router-view></router-view>
  
      <!-- Pied de page ou autre contenu commun -->
      <footer class="bg-gray-800 text-white p-4 mt-4">
        <p class="text-center">© 2024 SQLI NOTE APP</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  </style>
  