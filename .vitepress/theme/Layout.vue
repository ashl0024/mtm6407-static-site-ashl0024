<template>
  <div>
   <body>
     <header class="bg-dark fixed-top">
      <nav class="container-xxl navbar navbar-expand-lg py-3 bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-3" href="/">ASHLAY</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <a class="nav-link" href="/about">About</a>
              </li>
               <li class="nav-item mx-2">
                <a class="nav-link" href="/resume">Resume</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    </header>
    
      <Content/>
   
   <footer>
  <div class="container-xxl flex-wrap pt-3 d-flex align-items-center justify-content-center justify-content-md-between">
    <p>Copyright © 2025 ASHLAY PORTFOLIO</p>
    
  </div>
</footer>
</body>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script> 
