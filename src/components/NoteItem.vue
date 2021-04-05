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
      <svg>
        <use :href="`${sprite}#trash`"></use>
      </svg>
    </button>
    <div class="remove-group" v-if="isRemoveShown">
      <button
        type="button"
        class="note-item__btn"
        @click="toggleRemoveShow"
      >
        <svg class="red">
          <use :href="`${sprite}#times`"></use>
        </svg>
      </button>
      <button
        type="button"
        class="note-item__btn"
        @click="handleRemove"
      >
        <svg class="green">
          <use :href="`${sprite}#check`"></use>
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
import sprite from '@/assets/svg/solid.svg';

export default {
  name: 'NoteItem',
  props: {
    note: Object,
  },
  data() {
    return {
      sprite,
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
    margin-bottom: rem(18);
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
    background-color: transparent;
    border: rem(1) solid hsl(0, 0%, 20%);
    border-radius: rem(4);
    cursor: pointer;
    height: rem(40);
    padding: 0;
    position: absolute;
    top: rem(16);
    right: rem(12);
    width: rem(40);
  }

  .remove-group {
    position: absolute;
    top: rem(16);
    right: rem(12);

    .note-item__btn {
      position: relative;
      right: unset;
      top: unset;

      &:not(:last-child) {
        margin-right: rem(4);
      }
    }
  }

  svg {
    fill: hsl(218, 14%, 15%);
    height: rem(25);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: rem(25);

    &.green {
      fill: hsl(153, 47%, 53%);
    }

    &.red {
      fill: hsl(0, 47%, 53%);
    }
  }
}
</style>
