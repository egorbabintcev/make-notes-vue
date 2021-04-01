<template>
  <div class="note-input">
    <form @submit.prevent="handleSubmit">
      <textarea
        placeholder="Title"
        rows="1"
        v-model.trim="title"
        @input="resizeHeight"
      >
      </textarea>
      <textarea
        placeholder="Description"
        rows="1"
        v-model.trim="descr"
        @input="resizeHeight"
      >
      </textarea>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NoteInput',
  props: {
    addNote: Function,
  },
  data() {
    return {
      title: '',
      descr: '',
    };
  },
  methods: {
    handleSubmit() {
      const { title, descr } = this;
      if (title.length > 0 && descr.length > 0) {
        this.addNote(title, descr);
        this.title = '';
        this.descr = '';
      }
    },
    resizeHeight(e) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight + 2}px`;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/utils/functions";

.note-input {
  form {
    align-items: center;
    display: flex;
    flex-direction: column;

    textarea, button {
      border-radius: rem(4);
      width: 100%;
    }

    textarea {
      border: rem(1) solid hsl(0, 0%, 80%);
      font-size: rem(22);
      margin-bottom: rem(10);
      padding: rem(10);
      resize: none;
    }

    button {
      background-color: hsl(135, 60%, 50%);
      color: hsl(0, 0%, 100%);
      padding: rem(10) rem(15);
      font: {
        family: 'Inconsolata', monospace;
        size: rem(20);
        weight: 700;
      }

      .icon {
        font-size: rem(14);
      }
    }
  }
}
</style>
