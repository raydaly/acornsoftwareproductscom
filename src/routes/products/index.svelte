<script context="module">
	export const prerender = true;
</script>

<svelte:head>
  <title>Acorn Software Products Product Catalog</title>
</svelte:head>

<script>
  // import catalog from './../../data/catalog.js'
  import catalog2 from './../../data/catalog2.js'

  const product2 = catalog2.products
  let products2 = Object.values(product2).sort(
    function(a,b){
      if( a.title > b.title){ return 1}
      // console.log(a.title, b.title)
      return -1
    }
  )   //alpha sort

  // const product2 = catalog2.products
  // let products2 = Object.values(product2).sort(
  //   function(a,b){
  //     if( a.whenpub > b.whenpub){ return 1}
  //     // console.log(a.title, b.title)
  //     return -1
  //   }
  // )   //pub date sort


</script>

<h1>Acorn's Products</h1>

<div>Acorn published software for the Radio Shack TRS-80, Atari Computer and IBM PC Compatibles. </div>

<h2>TRS-80 Programs</h2>

{#each products2 as product}
  <div class="product">
    {#if product.isTRS80}
      <span class="title">{product.title}</span> by 
      <span class="authors">{product.authors}</span>
      <span class="when">({product.whenpub})</span>
      {#if product.price}
        <span class="price">${product.price}</span>
      {/if}
    {/if}
  </div>
{/each}

<h2>Atari Programs</h2>
<!-- <div class="product">Atari catalog will be updated in next version.</div> -->
{#each products2 as product}
  <div class="product">
    {#if product.isAtari}
      <span class="title">{product.title}</span> by 
      <span class="authors">{product.authors}</span> 
      <span class="when">({product.whenpub})</span>
      <span class="price">${product.isAtari}</span>
    {/if}
  </div>
{/each}


 
 <!-- <h2>IBM PC Programs</h2>
 <div class="product">IBM catalog will be updated in next version.</div> -->

<style>
  h1 {margin-bottom: 0.1rem; margin-top: 0.5rem;}
  h2 {margin-bottom: 0.5rem; }
  .product {margin-bottom: 0.5rem; }
  .title {font-weight: bold;}
</style>