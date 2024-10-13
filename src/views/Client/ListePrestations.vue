<template>
<main>

   <h1>Liste Prestations</h1>


   <div class="block">
    <div class="block1">
    <h1>Categorie1</h1>
    <div class="card w-750 mb-3">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
<h1>Categorie2</h1>
    <div class="card w-750 mb-3">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
<h1>Categorie3</h1>
    <div class="card w-750 mb-3">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
   </div>
   <div class="block2">
    <div class="card" style="width: 50rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Continuer</a>
    
  </div>
</div>
   </div>
</div>
</main>
</template>
<script>
export default {
    name: "ListePrestations"
}
</script>
<style scoped>
.block{
    display: flex;
    justify-content: space-around;
}
</style>