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

<h1>Authors</h1>

<p>The authors were important to Acorn Software Products. 
  Their names always listed in ads, catalogs, and on the product.</p>

<!-- <p>{JSON.stringify(authorsObj)}</p> -->

{#each authors as author}
  <div class="authors">
      <span class="author">{author.name}</span> 
      <span class="titles">{getProductTitles(author.titles)}</span>
  </div>
{/each}

<style>
  /* h1 {color: brown; margin-bottom: 0.1rem;} */
  .author {font-weight: bold;}
  .authors {margin-bottom: 0.5rem; margin-left: 0.5rem;}
</style>