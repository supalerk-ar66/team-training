<script lang="ts">
    import { onMount } from 'svelte';    
    let fruits: {id:number,name:string,color:string}[]=[]
    let selectedId=0,debug = "",fruitName="",fruitColor=""
    async function load(){
        const res = await fetch("http://localhost:4000/api/fruits")
        fruits = await res.json()
    }
    async function create(){
        const res = await fetch("http://localhost:4000/api/fruits",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({name: fruitName, color: fruitColor})
        });
        load();
    }
    async function remove(){
        const res = await fetch(`http://localhost:4000/api/fruits/${selectedId}`,{
            method:"DELETE",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({name: fruitName, color: fruitColor})
        });
        load();
        selectedId = 0;
    }
    async function update(){
        const res = await fetch(`http://localhost:4000/api/fruits/${selectedId}`,{
            method:"PATCH",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({name: fruitName, color: fruitColor})
        });
        load();
    }
    function selectFruit(id:number){
        let f = fruits.find((e)=>e.id===id)
        if(f){
            selectedId=id
            fruitName=f.name
            fruitColor=f.color
            debug = "Select "+selectedId    
        }else{
            debug = id+" not found "+id
        }
    }
    onMount(async () => {load()});  
    </script>
    <input type="text" name="name" bind:value={fruitName} placeholder="name">
    <input type="text" name="color" bind:value={fruitColor} placeholder="color">
    <button on:click={create} disabled={!fruitName||!fruitColor}>Create</button>   
    <button on:click={update} disabled={!fruitName||!fruitColor||selectedId===0}>Update</button> 
    <button on:click={remove} disabled={selectedId===0}>Delete</button>
    <ul>
    {#each fruits as fruit}
        <li>
            <input type="radio" name="id" on:click={()=>selectFruit(fruit.id)}>
            {fruit.name} : {fruit.color} 
        </li>
    {/each}
    </ul>
    <div>{debug}</div>
    