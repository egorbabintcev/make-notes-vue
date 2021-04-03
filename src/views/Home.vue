<template>
  <div class="container">
    <note-input :addNote="addNote"></note-input>
    <note-list :notes="notes" v-if="notes.length > 0"></note-list>
    <note-hint v-else v-once></note-hint>
  </div>
</template>

<script>
import NoteInput from '@/components/NoteInput.vue';
import NoteList from '@/components/NoteList.vue';
import NoteHint from '@/components/NoteHint.vue';
import store from '@/store';

export default {
  name: 'Home',
  components: {
    NoteInput,
    NoteList,
    NoteHint,
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
      this.notes.unshift(newNote);
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
