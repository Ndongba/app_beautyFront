<template>
<main>
    <h1>Choisir la date et l'heure du Rendez-Vous</h1>


<div class="block">
 <div class="block1">
<div>
    <input type="date" name="" id="date">
</div>
 <div class="card w-750 mb-3">
<div class="card-body">
 <h5 class="card-title">09:00</h5>


</div>
</div>

 <div class="card w-750 mb-3">
<div class="card-body">
 <h5 class="card-title">09H30</h5>


</div>
</div>

 <div class="card w-750 mb-3">
<div class="card-body">
 <h5 class="card-title">10H00</h5>

 
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
 <a href="#" class="btn btn-primary">Terminer</a>
 
</div>
</div>
</div>
</div>
</main>
</template>
<script>

export default {
    name: "Planification"
}
</script>
<style scoped>

.block{
    display: flex;
    justify-content: space-around;
}

#date{
    margin-bottom: 50px;
    margin-top: 50px;
}

</style>