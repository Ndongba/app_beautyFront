<template>
<main>
    <div class="principal">
        <div class="buton">
            <div>
                <button id="bouton">Annuler</button>
            </div>
            <div>
                <button id="bouton">Continuer</button>
            </div>
        </div>
        <h2 id="h2">Configuration du Compte</h2>
        <h1 class="titre">Quelles prestations proposées-vous ?</h1>
        <div class="block1">
            <div class="class1">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/map_beauty-salon.svg">
                <h1>Salon de Coiffure</h1>
            </div>
            <div class="class2">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/manicure 1.svg">
                <h1>Salon Manucure</h1>
            </div>
        </div>
        <div class="block2">
            <div class="class3">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/hugeicons_chair-barber.svg">
                <h1>Barbier</h1>
            </div>
            <div class="class4">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/hair-treatment 1.svg">
                <h1>Institut de Beauté</h1>
            </div>
        </div>
        <div class="block3">
            <div class="class5">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/material-symbols_spa.svg">
                <h1>Spa</h1>
            </div>
            <div class="class6">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/massage 1.svg">
                <h1>Massage</h1>
            </div>
        </div>
        <div class="block4">
            <div class="class7">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/waxing 1.svg">
                <h1>Epilation</h1>
            </div>
            <div class="class8">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/eye-makeup 1.svg">
                <h1>Cils et Sourcils</h1>
            </div>
        </div>
        <div class="block5">
            <div class="class9">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/tatoo 1.svg">
                <h1>Tatouage et Percing</h1>
            </div>
            <div class="class10">
                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/face-cleanser 1.svg">
                <h1>Soins du Visage et de la Peau</h1>
            </div>
        </div>
    </div>
</main>

</template>
<script>
 export default {
    name: "ListeprestationPro",
    components: {
      
    },
};
</script>
<style scoped>

.titre{
    font-size: 50px;
    text-align: center;
}

.buton{
    display: flex;
    gap: 20px;
    justify-content: flex-end;
}

.block1{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}
.block2{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

#h2{
    text-align: center;
    color: gray;
}

#bouton{
    width: 200px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 20px;
    margin-right: 20px;
}

.block3{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

.block4{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

.block5{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

.block6{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

.class1{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;

}

.class2{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}

.class3{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;

}

.class4{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}

.class4{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}

.class5{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}

.class6{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}

.class7{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}

.class8{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}



.class9{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}

.class10{
    border:solid black 1px;
    padding:20px;
    width: 400px;
    text-align: center;
    margin-top: 30px;
    border-radius: 20px;
}
</style>