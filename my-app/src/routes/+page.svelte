<div class="content">

    <h1>oven</h1>
    
    <p>temp:</p>
    
    <h2 class="count" >0</h2>
    
<div class="buttons">
    <button on:click={increase}>+</button>
    <button on:click={decrease}>-</button>
</div>

</div>

<style>
    *{
        margin: auto;        
        display: flex;
        flex-direction: column;
        font-family: Arial, Helvetica, sans-serif;
    }

    .buttons {
        flex-direction: row;
    }

    h1{
        padding: 20px;
        font-size: 70px;
    }

    h2{
        font-size: 100px;
    }

    button{
        width: 40px;
        height: 40px;
        border-radius: 100px;
        margin: 20px;
        justify-content: center;
        align-items: center;
    }

    
</style>

<script>
    console.log("fuck u too buddy");

     let counter = 0
    function increase(){
        counter++
        document.querySelector(".count").textContent = counter
    }

    function decrease(){
        if(counter > 0){
            counter--
            document.querySelector(".count").textContent = counter
        }
        else{
            
            document.querySelector(".count").textContent = "you cant go bellow zero dumbass"
        }
       
    }


</script>
