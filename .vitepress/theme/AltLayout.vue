<template>
  <div style="display:flex;min-height:100vh">
    <aside style="width:220px;padding:1rem;background:#fafafa;border-right:1px solid #eee">
      <h3>Vishleshan</h3>
      <p style="font-size:0.9rem">Travel · Food · Code</p>
      <nav style="margin-top:1rem">
        <div><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
        <div><a href="/projects">Projects</a></div>
        <div><a href="/blog">Blog</a></div>
        <div><a href="/contact">Contact</a></div>
      </nav>
    </aside>
    <section style="flex:1;padding:1.25rem;max-width:900px">
      <Content/>
    </section>
  </div>
</template>

<script>
export default {
  name: "AltLayout"
}
</script> 
