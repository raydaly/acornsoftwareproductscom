<svelte:head>
  <title>Acorn Software Products Authors</title>
</svelte:head>

<script>
  import catalog2 from './../../data/catalog2.js'
  const product2 = catalog2.products;  //obj
  let products2 = Object.values(product2)   //array
  
  let authorsObj={};
  let id;
  products2.forEach( 
    // product => console.log(product.authors)
    product => product.authors.forEach( 
      author =>  
        { id=author.toLocaleLowerCase().replaceAll(' ','_')
          // console.log(id)
          if (!authorsObj[id]) {
            // console.log('--- new author '+id)
            authorsObj[id]={};
            authorsObj[id].id=id;
            authorsObj[id].titles=[product.id];
            authorsObj[id].name=author;
            // authorsObj['titles']=["hello","hello"];
          } else {
            // console.log('=== existing author '+id)
            // console.log('==>  '+authorsObj[id].titles)
            authorsObj[id].titles = [...authorsObj[id].titles, product.id]
            // console.log('==>  '+authorsObj[id].titles)
            // authorsObj[id].titles.push[product.id];
          }
        }  
    )
  )
  // console.log(JSON.stringify(authorsObj))
  console.log('-----------------')

  let authors = Object.values(authorsObj).sort(   //array
    function(a,b){
      if( a.name.split(' ')[1] > b.name.split(' ')[1]){ return 1}
      return -1
    }
  )   //alpha sorta sort

  const getProductTitles = function(x){ //x is array of product.ids
    let y='';
    x.forEach( (id, index) => 
      { 
        // console.log('@getProductTitles for '+id+'  '+JSON.stringify(product2[id]))
        if (product2[id].title){
          y = y + product2[id].title;
        }else{
          y = y + id;
        }
        
        if (index < x.length && index != x.length-1){y = y+ ", "}
      })
    return y;
  }
</script>

<h1>Acorn's Authors</h1>

<div class="description">The authors were important to Acorn Software Products. 
  Their names were always prominently displayed in ads, in catalogs, and on the product.</div>

{#each authors as author}
  <div class="authors">
      <span class="author">{author.name}</span> 
      <span class="titles">{getProductTitles(author.titles)}</span>
  </div>
{/each}

<style>
  .author {font-weight: bold;}
  .authors {margin-bottom: 0.5rem; }
  .description {margin-bottom: 1rem;}
  h1 {margin-bottom: 0.1rem; margin-top: 0.5rem;}
  h2 {margin-bottom: 0.5rem; }
</style>