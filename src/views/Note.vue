<template>
  <div class="container">
    <a href="/" class="note-editor__icon">↩</a>
    <textarea
      class="note-editor__title"
      rows="1"
      @input="resizeHeight"
      v-model="title"
      ref="title"
    ></textarea>
    <textarea
      class="note-editor__descr"
      rows="1"
      @input="resizeHeight"
      v-model="descr"
      ref="descr"
    ></textarea>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Note',
  data() {
    const note = store.getOne(+this.$route.params.id);

    return {
      note,
      title: String(note.title),
      descr: String(note.descr),
    };
  },
  methods: {
    resizeHeight(e) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight + 2}px`;
    },
  },
  mounted() {
    this.resizeHeight({ target: this.$refs.title });
    this.resizeHeight({ target: this.$refs.descr });
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/utils/functions";
@import "~@/assets/sass/utils/mixins";

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
  grid-gap: rem(20) 0;
  grid-auto-rows: repeat(1, auto);
}

.note-editor {
  &__icon {
    align-items: center;
    color: hsl(153, 47%, 53%);
    display: inline-flex;
    font-size: rem(40);
    justify-content: flex-start;
    height: rem(40);
    left: rem(15);
    line-height: 0.5;
    position: fixed;
    text-decoration: none;
    top: rem(5);
    width: rem(40);
  }

  &__title {
    color: hsl(219, 15%, 15%);
    font: {
      size: rem(28);
      weight: 700;
    }
  }

  &__descr {
    font-size: rem(20);
  }
}

textarea {
  border: 0;
  height: auto;
  overflow-y: hidden;
  outline: none;
  resize: none;
}
</style>
