<template>
    <section>
    <div class="form">
        <div class="class1">
            <div class="Nom">
                <div>
                <label for="" id="label">Nom</label>
            </div>
                <input type="text" placeholder="votre nom" id="input">
            </div>
            <div class="telephone">
                <div>
                <label for="" id="label">Telephone</label>
                </div>
                <input type="tel" placeholder="Votre numero de telephone" id="input">
            </div>
        </div>
        <div class="email">
            <div>
            <label for="" id="label">Email</label>
            </div>
            <input type="email" placeholder="example@example.com" id="input">
        </div>
        <div class="message" id="label">
            <div>
                <label for="">Message</label>
            </div>
            <textarea name="" id="message"></textarea>
        </div>

        <button id="bouton">Envoyer</button>
    </div>
</section>
</template>

<script>
     export default {
    name: "FormContactComponent",
  };
</script>

<style scoped>
.form{
    border: solid black 3px;
    padding: 40px;
    width: 800px;
    border-radius: 20px;
    background-color: #B4838D;
    color: white;
    font-weight: 500;
}

#label{
    font-size: 20px;
}

#input{
    font-size: 16px;
    width: auto;
    height: 50px;
    border-radius: 20px;
}

#message{
    width: 750px;
    height: 400px;
    font-size: 28px;
    border-radius: 20px;
}

.class1{
    display: flex;
    gap:40px;
}

#bouton{
    font-size: 21px;
        background-color:#FFCDB3 ;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 20px;
}

@media screen and (max-width: 420px) {
    .form{
        margin-top: 30px;
    }
    #input{
        width: 300px;
        font-size: 21px;
    }

    .class1{
        display: block;
    }

    #message{
        width: 300px;
    }

    .form{
        width: 375px;
    }

    label{
        font-size: 16px;
    }
}
</style>
