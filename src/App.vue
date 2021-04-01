<template>
  <div class="container">
    <note-input :addNote="addNote"></note-input>
    <note-list :notes="notes"></note-list>
  </div>
</template>

<script>
import NoteInput from '@/components/NoteInput.vue';
import NoteList from '@/components/NoteList.vue';
import store from '@/store';

export default {
  name: 'App',
  components: {
    NoteInput,
    NoteList,
  },
  data() {
    return {
      notes: store.getAll(),
    };
  },
  methods: {
    addNote(title, descr) {
      const newNote = {
        id: this.notes.length + 1,
        title,
        descr,
      };
      store.create(newNote);
      this.notes.push(newNote);
    },
    removeNote(id) {
      store.delete(id);
      this.notes = this.notes.filter((n) => n.id !== id);
    },
  },
  provide() {
    return {
      removeNote: this.removeNote,
    };
  },
};
</script>

<style lang="scss">
@import '~@/assets/sass/utils/functions';

.container {
  max-width: 480px;
  margin: 0 auto;
  padding: {
    left: rem(15);
    right: rem(15);
    top: rem(60);
  }

  // grid
  display: grid;
  grid-gap: rem(40) 0;
  grid-template-rows: repeat(1, auto);
}
</style>
