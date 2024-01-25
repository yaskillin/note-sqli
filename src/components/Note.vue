<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Note Details</h1>
    <form @submit.prevent="submitChanges" class="p-4 border rounded shadow-lg">
      <p class="mb-4">ID: {{ note.id }}</p>
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input v-model="note.title" id="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div class="mb-4">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content:</label>
        <textarea v-model="note.content" id="content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
      </div>

      <button type="submit" class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">Save Changes</button>

      <p class="mt-4 text-green-500" v-if="successMessage">{{ successMessage }}</p>
      <p class="mt-4 text-red-500" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const note = ref({});
const router = useRouter();
const successMessage = ref('');
const errorMessage = ref('');

onMounted(async () => {
  const route = useRoute();
  const noteId = route.params.id;

  try {
    const response = await axios.get(`http://localhost:3000/notes/${noteId}`);
    note.value = response.data;
  } catch (error) {
    console.error('Error fetching note details:', error);
  }
});

const submitChanges = async () => {
  try {
    await axios.put(`http://localhost:3000/notes/${note.value.id}`, {
      title: note.value.title,
      content: note.value.content
    });

    // Rediriger vers la page d'accueil après la modification
    router.push(`/`);

    // Afficher le message de succès
    successMessage.value = 'Note updated successfully!';
    errorMessage.value = ''; // Réinitialiser le message d'erreur
  } catch (error) {
    console.error('Error updating note:', error);
    successMessage.value = ''; // Réinitialiser le message de succès
    errorMessage.value = 'Error updating note. Please try again.';
  }
};
</script>
