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
</script>

<h1>Products</h1>

<p>Acorn published software for the Radio Shack TRS-80, Atari Computer and IBM PC Compatibles. </p>

<!-- <div>Test: {catalog2.title}   {product2.codebreaker.description}</div> -->

<h2>TRS-80 Programs</h2>

{#each products2 as product}
  <div class="product">
    {#if product.isTRS80}
      <span class="title">{product.title}</span> by 
      <span class="authors">{product.authors}</span>
      <span class="when">({product.whenpub})</span>
    {/if}
  </div>
{/each}

<h2>Atari Programs</h2>
<p>Atari catalog will be updated in next version.</p>
<!-- {#each products as product}
  <div class="product">
    {#if product.isAtari}
      <span class="title">{product.title}</span> by 
      <span class="authors">{product.authors}</span> 
      <span class="when">({product.whenpub})</span>
    {/if}
  </div>
{/each}

 -->
 
 <h2>IBM PC Programs</h2>
 <p>IBM catalog will be updated in next version.</p>

<style>
  h1 {color: brown; margin-bottom: 0.1rem;}
  .product {margin-bottom: 0.5rem; margin-left: 0.5rem;}
  .title {font-weight: bold;}
</style>