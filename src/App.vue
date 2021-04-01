<template>
  <div class="container">
    <note-input :addNote="() => {}"></note-input>
  </div>
</template>

<script>
import NoteInput from '@/components/NoteInput.vue';

export default {
  name: 'App',
  components: {
    NoteInput,
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
