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
import { inject } from 'vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'NoteInput',
  props: {
    addNote: Function,
  },
  setup() {
    // define title and description
    // handle form submit and note add
    const title = ref('');
    const descr = ref('');
    const addNote = inject('addNote');
    const handleSubmit = () => {
      if (title.value.length > 0 && descr.value.length > 0) {
        addNote(title.value, descr.value);
        title.value = '';
        descr.value = '';
      }
    };

    // handle textarea height resize
    const resizeHeight = (e) => {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight + 2}px`;
    };

    return {
      title,
      descr,
      handleSubmit,
      resizeHeight,
    };
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
      overflow-y: hidden;
      padding: rem(10);
      resize: none;
    }

    button {
      border: 0;
      background-color: hsl(153, 47%, 53%);
      color: hsl(0, 0%, 100%);
      padding: rem(16) rem(24);
      text-shadow: rem(0) rem(0) rem(2) hsla(0, 0%, 0%, 50%);
      font: {
        family: 'Inconsolata', monospace;
        size: rem(22);
        weight: 900;
      }

      .icon {
        font-size: rem(14);
      }
    }
  }
}
</style>
