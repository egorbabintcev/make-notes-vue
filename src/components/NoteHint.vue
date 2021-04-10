<template>
  <div class="note-hint" v-once>
    <p class="note-hint__title">
      Have not created any note yet?
      <br>
      Do it!
    </p>
  </div>
</template>

<script>
export default {
  name: 'NoteHint',
};
</script>

<style lang="scss">
@import "~@/assets/sass/utils/functions";

.note-hint {
  justify-self: center;

  &__title {
    color: hsl(135, 25%, 20%);
    line-height: 1.25;
    text-align: center;
    font: {
      size: rem(20);
      weight: 500;
    }
  }
}
</style>
