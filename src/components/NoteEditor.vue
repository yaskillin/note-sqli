<script setup>
import { ref } from 'vue';
import axios from 'axios';

const note = ref({
  title: '',
  content: ''
});

async function submitNote() {
  try {
    // Vérifiez si le formulaire est valide
    if (!note.value.title.trim() || !note.value.content.trim()) {
      alert('Please enter both title and content.');
      return;
    }

    // Envoyez la note au backend (ajustez l'URL et les noms de champs selon votre API)
    const response = await axios.post('http://localhost:3000/notes', {
      title: note.value.title,
      content: note.value.content
    });

    // Si la création réussit, vous pouvez faire quelque chose avec la réponse
    console.log('Note created successfully:', response.data);

    // Réinitialisez le formulaire après une soumission réussie
    note.value.title = '';
    note.value.content = '';
  } catch (error) {
    // Gérez les erreurs selon vos besoins
    console.error('Error creating note:', error);

    // Affichez un message à l'utilisateur en cas d'erreur
    alert('An error occurred while creating the note. Please try again.');
  }
}
</script>

<template>
  <div class="p-4 border rounded shadow-lg">
    <form @submit.prevent="submitNote">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          id="title"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="note.title"
        />
      </div>
      <div class="mb-4">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea
          id="content"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="note.content"
          rows="4"
        />
      </div>
      <button class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
        Save
      </button>
    </form>
  </div>
</template>
