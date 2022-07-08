<template>
<div class="side-bar">
    <span>
        <img class="logo" src="@/assets/logo.png">
    </span>
    <div class="circle">프로플 이미지</div>

</div>

<nav class="fixed-bottom bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{
        search : '',
    }
  },
  methods:{

  }
};
</script>

<style scoped>
.logo{
    width: 50px;
    height: 50px;
}
.side-bar{
    background: rgb(197, 189, 189);
    color:white;
    position: fixed; 
    top: 0; 
    left: 0;
    width: 15%;
    height: 100vh;
    min-width: 200px;
}
.circle {
background-color:#86efef;
width:150px;
height:150px;
border-radius:75px;
text-align:center;
margin: auto;
margin-top: 50px;
font-size:12px;
vertical-align:middle;
line-height:150px;
}
</style>