<template>
  <div class="menu">
    <a id="logo" href="">Logo</a>
      <ul>
        <li><a href="#"></a> HOME</li>
        <li><a href="#"></a> ABOUT</li>
        <li><a href="#"></a> BOARD</li>
        <li><a href="#"></a> CREDIT</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {},
};
</script>

<style>
li {
  list-style: none;
  display: inline;
  padding: 20px;
  color: white;
  font-size: xx-large;
  cursor: pointer;
}

.menu {
  height: 20%;
  background: rgb(74, 74, 78);
}


#logo {
  float: left;
}
</style>