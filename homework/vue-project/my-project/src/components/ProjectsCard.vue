<script>
import {router} from "@routes/routes.js";

export default {
  name: "ProjectsCard",
  props: {
    title: String,
    text: String,
    img: String,
    id: Number | String,
    rounded: Number
  },
  methods: {
    navigate() {
      router.push({path: `/project/${this.id}`});
    }
  },
  data() {
    return {
      roundedClasses: ["", "rounded--rt", "rounded--rb", "rounded--lt", "rounded--lb"]
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="img"
           :alt="title"
           :class="`${roundedClasses[rounded]} ${rounded !== 0 ? 'img': ''}`"
           :height="rounded > 0 ? '550px' : ''"
      >
    </div>
    <div class="card__description">
      <div class="card__about">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__text">{{ text }}</p>
      </div>
      <div class="card__action">
        <button class="card__btn"
                @click="navigate">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="70"
               height="70"
               viewBox="0 0 70 70"
               fill="none">
            <path d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped
       lang="scss">


.card {
  max-width: 550px;

  &__image {
    margin-bottom: 24px;
  }

  &__description {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    @extend %heading3;
    color: $primary2;
  }

  &__btn {
    @include rounded(50%);
    background-color: $primary3;
    display: block;
    padding: 26px 30px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: $primary1;
    }
  }

  &__text {
    @extend %paragraphLarge;
    color: $secondary1;
  }
}

.rounded {
  &--rt {
    @include rounded(0 80px 0 0);
  }

  &--rb {
    @include rounded(0 0 80px 0);
  }

  &--lt {
    @include rounded(80px 0 0 0);
  }

  &--lb {
    @include rounded(0 0 0 80px);
  }
}

.img {
  height: 550px;
  width: 100%;
  object-fit: cover;
}
</style>
