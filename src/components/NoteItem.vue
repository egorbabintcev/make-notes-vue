<template>
  <li class="note-item">
    <h3 class="note-item__title">
      <a :href="'/' + note.id">{{ note.title }}</a>
    </h3>
    <p class="note-item__text">{{ note.descr }}</p>
    <button
      type="button"
      class="note-item__btn"
      v-if="!isRemoveShown"
      @click="toggleRemoveShow"
    >
      🗑
    </button>
    <div class="remove-group" v-if="isRemoveShown">
      <button
        type="button"
        class="remove-group__btn"
        @click="toggleRemoveShow"
      >
        ❌
      </button>
      <button
        type="button"
        class="remove-group__btn"
        @click="handleRemove"
      >
        ✅
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NoteItem',
  props: {
    note: Object,
  },
  data() {
    return {
      isRemoveShown: false,
    };
  },
  methods: {
    toggleRemoveShow() {
      this.isRemoveShown = !this.isRemoveShown;
    },
    handleRemove() {
      this.removeNote(this.note.id);
    },
  },
  inject: ['removeNote'],
};
</script>

<style lang="scss">
@import "~@/assets/sass/utils/functions";
@import "~@/assets/sass/utils/mixins";

.note-item {
  border: rem(1) solid hsl(0, 0%, 80%);
  border-radius: rem(4);
  padding: rem(16) rem(12);
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: rem(20);
  }

  &__title {
    color: hsl(219, 15%, 15%);
    margin-bottom: rem(14);
    padding-right: rem(88);
    font: {
      size: rem(26);
      weight: 700;
    }

    a {
      color: inherit;
      position: relative;
      text-decoration: none;

      &::after {
        background-color: hsl(219, 15%, 15%);
        bottom: rem(-2);
        height: rem(2);
        width: 100%;
        @include pseudo;
      }
    }
  }

  &__text {
    line-height: 1.25;
    font: {
      size: rem(20);
      weight: 400;
    }
  }

  &__btn {
    align-items: center;
    display: inline-flex;
    font-size: rem(20);
    justify-content: center;
    height: rem(40);
    position: absolute;
    top: rem(16);
    right: rem(12);
    width: rem(40);
  }

  .remove-group {
    position: absolute;
    top: rem(16);
    right: rem(12);

    &__btn {
      align-items: center;
      display: inline-flex;
      font-size: rem(20);
      justify-content: center;
      height: rem(40);
      width: rem(40);

      &:not(:last-child) {
        margin-right: rem(4);
      }
    }
  }
}
</style>
