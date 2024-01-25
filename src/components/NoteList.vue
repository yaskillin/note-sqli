<script setup>
import { computed } from 'vue';
import NoteItem from './NoteItem.vue';
import { useNotesStore } from '@/stores/notes';
import { useRouter } from 'vue-router';

const store = useNotesStore();
store.fetchNotes();
const notes = computed(() => store.notes);
const router = useRouter();

function goToNoteEditor() {
  router.push('/note-editor');
}

function handleNoteDeleted(noteId) {
  // Rafraîchir la liste des notes après la suppression
  store.fetchNotes();
}

function handleNoteEdit(noteId) {
  // Naviguer vers la page d'édition de la note en passant l'ID
  router.push(`/note/${noteId}`);
}
</script>

<template>
  <div>
    <button @click="goToNoteEditor" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
      Add Note
    </button>
    <NoteItem
      class="space-y-4"
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleted="handleNoteDeleted"
      @edit="handleNoteEdit"
    />
  </div>
</template>

<style scoped></style>
