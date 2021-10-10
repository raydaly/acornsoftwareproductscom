<script>
  import Nav from './../lib/Nav.svelte';
</script>

<!-- src/route/__layout.svelte -->
<div class="container">
  <header><Nav></Nav></header>
  <div><slot></slot></div>
  <footer class="copyright">© Acorn Software Products, 1979-1983</footer>
</div>

<style>
  .container {background-color: gold;}
</style>