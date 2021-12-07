<template>
  <div class="row">
    <carousel class="col-sm-12">
      <slide>
        <img src="../assets/1635438.jpg" class="col-sm-12" alt="1" />
      </slide>

      <slide>
        <img src="../assets/1635439.jpg" class="col-sm-12" alt="1" />
      </slide>

      <slide>
        <img src="../assets/1635440.jpg" class="col-sm-12" alt="1" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style>
  .slide {
    height:500px;
  }
</style>