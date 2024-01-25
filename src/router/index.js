import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import NoteList from '../components/NoteList.vue'
import NoteEditor from '../components/NoteEditor.vue'
import Note from '../components/Note.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: NoteList },
        { path: 'note-editor', component: NoteEditor },
        { path: 'note/:id', component: Note, props: true }
      ]
    }
  ]
})

export default router
