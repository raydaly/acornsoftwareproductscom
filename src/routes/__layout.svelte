<!-- src/route/__layout.svelte -->
<div class="container">
  <header>
    <div class="logo">
      <img src="/manifest/acorn_logo_small_transparent.png" height="105" width="105" alt="Acorn Logo">
    </div>
    <div class="title">
      <div class="acorn-title">Acorn</div>
      Software Products, Inc.
      <!-- <Nav></Nav> -->
      <nav class="nav">
        <a href="./">Home</a>
        <a href="./products">Products</a>
        <a href="./authors">Authors</a>
        <a href="./ads">Ads</a>
        <!-- <a href="./materials">Materials</a>
        <a href="./history">History</a> -->
      </nav>
    </div>
    
  </header>
  <div class="documentation"><slot></slot></div>
  <footer class="copyright">© Acorn Software Products, 1979-1983</footer>
</div>

<style>
  .container {background-color: gold; color: #654321; max-width: 5.75in; margin: auto;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;}
  .documentation {background-color:#fc0; color: black; 
    margin: 0.25in 0.25in 0.09in 0.25in; padding: 0.5em 1em;
    box-shadow: #654321 .95px .95px 2.6px;}
  .copyright {text-align: center;}
  header {display: grid; grid-template-columns: 105px 1fr; column-gap: 1rem; margin: 1em; padding-top: 1em; }
  .title {color: #654321; margin-bottom: 0.1rem; font-size: 1.5rem; }
  .acorn-title {font-weight: bold; font-size: 2rem;}
  nav {display: grid; grid-template-columns: repeat(5, 1fr); column-gap: 1rem; 
    font-weight: bold; margin-top: 0.8rem;}
  a {color: #654321;}

</style>