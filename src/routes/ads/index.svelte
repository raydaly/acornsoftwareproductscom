<svelte:head>
  <title>Acorn Software Products Ads</title>
</svelte:head>

<script>
  import catalog from './../../data/catalog.js'
  const products = catalog.products   //TODO sort here2
  import adlist from './../../data/ads.js'
  // const ads = adlist.ads.sort(
  //   function(a,b){
  //     if( a.products[0] > b.products[0]){ return 1}
  //     return -1
  //   }
  // )   //alpha sort

  const ads = adlist.ads.sort(
    function(a,b){
      if( a.when > b.when){ return 1}
      return -1
    }
  )   //alpha sort

  function nodate2string(ad){
    let x=ad.when;
    let y="";
    let year=x.slice(0,4);
    let monthno=x.slice(4,7)-1
    let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[parseInt(monthno)]+" "+year;
  }

  function products2string(ad){
    let x="";
    ad.products.forEach((item, index) => {
      if (index<ad.products.length && index!=0){x=x+", "}
      x=x+item.replaceAll("_"," ")
      // console.log(x)
    })
    // console.log('string='+x)
    return x;
  }
</script>

<h1>Acorn's Ads</h1>
<h2>80 Microcomputing</h2>
<div>TRS-80 programs from Acorn Software Products were advertised primarily in 80-Microcomputing.</div>
<p>80-Microcomputing's first issue was January 1980. The magazine became the third largest magazine in the United States in 1982. (Wikipedia) 
  In May 1983 CW Communications purchased the magazine.</p>

{#each ads as ad}
  {#if ad.magazine == "80 Microcomputing"}
    <div class="ads">
        <span class="products">
          {products2string(ad)} --  
        </span>
        <span class="ad">
          {nodate2string(ad)} (p.{ad.page})
        </span>
        <span class="archive">
          <a href="{ad.url}" target="_blank">on archive.org</a>
        </span>
    </div>
  {/if}
{/each}

<h2>80 Micro</h2>
{#each ads as ad}
  {#if ad.magazine == "80 Micro"}
    <div class="ads">
        <span class="products">
          {products2string(ad)} --  
        </span>
        <span class="ad">
          {nodate2string(ad)} (p.{ad.page})
        </span>
        <span class="archive">
          <a href="{ad.url}" target="_blank">on archive.org</a>
        </span>
    </div>
  {/if}
{/each}

<h2>Compute!</h2>
<p>Atari programs from Acorn Software Products were advertised primarily in Compute!</p>
{#each ads as ad}
  {#if ad.magazine == "Compute!"}
    <div class="ads">
        <span class="products">
          {products2string(ad)} --  
        </span>
        <span class="ad">
          {nodate2string(ad)} (p.{ad.page})
        </span>
        <span class="archive">
          <a href="{ad.url}" target="_blank">on archive.org</a>
        </span>
    </div>
  {/if}
{/each}

<p>Note: Cover dates on 80-Microcomputing were usually a few weeks in advance of publication date. 
  For Compute!, 80-Micro, and others, the cover dates were more than a month in advance.</p>

<style>
  .ads {margin-bottom: 0.5rem;}
  .products {text-transform: capitalize; font-weight: bold;}
  h1 {margin-bottom: 0.1rem; margin-top: 0.5rem;}
  h2 {margin-bottom: 0.5rem; }
</style>