<template>
  <div class="nav">
    <img class="logo" src="@/assets/logo.png" />
    <div class="menu">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">BOARD</a></li>
        <li><a href="#">CREDIT</a></li>
      </ul>
    </div>
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
.nav {
  width: 100%;
  height: 100px;
  color: white;
  background: rgb(63, 57, 57);
  display: inline-block;
}

.logo {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-left: 25px;
  float:left
}

.menu {
 float: left;
 margin-top: 10px;
}

.menu::after{
  content : "";
  display: block;
  clear : both;

}
ul, li {
  list-style-type: none;
  font-size: x-large;
}


li {
  display: inline;
  margin: 20px;
}

a{
  text-decoration: none;
  color: white;
}

a:hover{
  text-shadow: 5px 5px 5px gold; 
  transition: all .5s;
}
</style>