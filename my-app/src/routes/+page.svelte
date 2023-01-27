<link href="https://fonts.cdnfonts.com/css/alarm-clock" rel="stylesheet">

<title class="hidden grey off">oven.exe</title>
<div class="content">
    <div class="hero">
        <h1 class="header">oven master 9,1k</h1>
        <button on:mousedown={power} class="power"><img class="powerBtn" src="/power.png" alt=""></button>
    </div>
    <div class="screen">
        
        {#if errMsg == true }
            <h2 transition:fade class="count">THIS AINT NO FREEZER BUDDY</h2>
        {:else}
            <h2 transition:fade class="count" >{counter} C°</h2>
        {/if}
        
        {#if counter < 180}
            <p transition:fade>A BIT COLD NO ?</p>
        {:else if counter >= 180 && counter <= 300 }
            <p transition:fade>DAS GOOD HEAT</p>
        {:else}
            <p transition:fade>THERMONUCLEAR OVEN LOL</p>
        {/if}
    </div>
    
    <div class="buttons">
        <button on:mousedown={decrease} on:mouseleave={stop} on:mouseup={stop}>-</button>
        <button on:mousedown={increase} on:mouseleave={stop} on:mouseup={stop}>+</button>
    </div>
    <div class="spacer"></div>

    <div class="content">

        <div class="bar"></div>

        <div class="window">
            <img class="pizza" src="/pizza.png" alt="pizza">
        </div>

    </div>
</div>


<style>
    *{
        margin: 0;
        padding: 0;        
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .off{
        color: black !important;
    }

    .powerBtn{
        height: 80%;
        justify-content: center;
        align-items: center;
    }

    .power{
        background-color: rgb(149, 0, 0);
    }

    .hero {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .hidden{
        display: none;
    }

    :global(body){
        margin: 0;
    }

    .window {
        background-color: #303030;
        height: 100%;
        margin: auto;
        border-radius: 10px;
    }

    .bar {
        background-color: lightgray;
        height: 40px;
        width: 700px;
        border-radius: 50px;
        margin: 20px auto;

    }

    .spacer {
        background-color: black;
        margin: auto;
        height: 20px;
        width: 100%;
    }

    .screen {
        margin: auto;
        background-color: black;
        color: red;
        font-family:alarm clock, sans-serif;
        border-radius: 20px;
        padding: 10px;
        height: 240px;
        min-width: 400px;
        justify-content: center;
        align-items: center;
    }

    .header {
        font-family: Arial, Helvetica, sans-serif;
        color: lightgray;
    }

    .buttons {
        margin: auto;
        flex-direction: row;
    }

    .content {
        margin: 0 !important;
        background-color: #212121;
    }

    .grey {
        filter: grayscale(100%);
    }

    .pizza {
        margin: auto;
        height: 500px;
        padding: 40px;
    }

    p{
        font-size: x-large;
    }

    h1{
        margin: auto;
        padding: 20px;
        font-size: 70px;
    }

    h2{
        font-size: 100px;
    }

    button{
        font-size: large;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        margin: 20px 40px;
        justify-content: center;
        align-items: center;
        border-color: grey;
    }

    
</style>

<script>
    import {fade} from "svelte/transition";

    console.log("fuck u too buddy");

    $: counter = 180
    let countInt = undefined;
    let ovenState = true;
    let errMsg = false

    function increase(){
        if(ovenState == true){
            errMsg = false
            counter+= 10
            /* document.querySelector(".count").textContent = (counter + " C°") */
            
            countInt = setInterval(()=> {
                counter+= 10
                /*  document.querySelector(".count").textContent = (counter + " C°") */
            }, 200 )
        }
    }

    function decrease(){
        if(ovenState == true){

            if(counter > 0){
                counter-= 10
                /* document.querySelector(".count").textContent = (counter + " C°") */
        }
        else{
            
            errMsg = true
        }

        countInt = setInterval(()=> {
            if(counter > 0){
            counter-= 10
           /*  document.querySelector(".count").textContent = (counter + " C°") */
            }
            else{
                errMsg = true
            }
            }, 200 )
        }
}

    function stop(){
        clearInterval(countInt)
    }

    function power(){
        if(ovenState == false)
        {
            ovenState = true
            document.querySelector(".pizza").classList.remove("grey")
            document.querySelector(".screen").classList.remove("off")
        }
        else{
            ovenState = false
            document.querySelector(".pizza").classList.add("grey")
            document.querySelector(".screen").classList.add("off")
        }

    }


</script>
