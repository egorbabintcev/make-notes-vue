<template>
  <div class="container">
    <a href="/" class="note-editor__icon note-editor__icon_left">
      <svg>
        <use :href="`${sprite}#reply`"></use>
      </svg>
    </a>
    <a
      href="/"
      class="note-editor__icon note-editor__icon_right"
      @click="handleSave"
    >
      <svg>
        <use :href="`${sprite}#check`"></use>
      </svg>
    </a>
    <textarea
      class="note-editor__title"
      rows="1"
      @input="resizeHeight"
      v-model="title"
      ref="titleTemplateRef"
    ></textarea>
    <textarea
      class="note-editor__descr"
      rows="1"
      @input="resizeHeight"
      v-model="descr"
      ref="descrTemplateRef"
    ></textarea>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import store from '@/store';
import sprite from '@/assets/svg/solid.svg';

export default {
  name: 'Note',
  setup() {
    const note = store.getOne(useRoute().params.id);

    const title = ref(note.title);
    const descr = ref(note.descr);
    const handleSave = () => {
      store.update(note.id, { title: title.value, descr: descr.value });
    };

    // textarea resize fn and template refs definition
    const resizeHeight = (e) => {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight + 2}px`;
    };
    const titleTemplateRef = ref(null);
    const descrTemplateRef = ref(null);

    onMounted(() => {
      titleTemplateRef.value.focus();
      resizeHeight({ target: titleTemplateRef.value });
      resizeHeight({ target: descrTemplateRef.value });
    });

    return {
      sprite,
      title,
      descr,
      handleSave,
      resizeHeight,
      titleTemplateRef,
      descrTemplateRef,
    };
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
}

.note-editor {
  &__icon {
    align-items: center;
    fill: hsl(153, 47%, 53%);
    display: inline-flex;
    font-size: rem(40);
    justify-content: center;
    height: rem(40);
    line-height: 0.5;
    position: fixed;
    text-decoration: none;
    top: rem(5);
    width: rem(40);

    $desktop_position: calc(100vw / 2 - 480px / 2);

    @media screen and (min-width: 480px) {
      &_left {
        left: $desktop_position;
      }

      &_right {
        right: $desktop_position;
      }
    }

    @media screen and (max-width: 480px) {
      &_left {
        left: rem(15);
      }

      &_right {
        right: rem(15);
      }
    }

    svg {
      height: 80%;
      width: 80%;
    }
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
