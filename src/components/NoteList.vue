<template>
  <div class="note-list">
    <ul>
      <note-item
        v-for="note in notes"
        :key="note.id"
        :note="note"
      >
      </note-item>
    </ul>
  </div>
</template>

<script>
import NoteItem from './NoteItem.vue';

export default {
  name: 'NoteList',
  components: {
    NoteItem,
  },
  props: {
    notes: Array,
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/utils/functions";

.note-list {
  ul {
    align-items: stretch;
    display: flex;
    flex-direction: column;
  }
}
</style>
