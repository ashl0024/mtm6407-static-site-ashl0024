import DefaultLayout from './Layout.vue'
import AltLayout from './AltLayout.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './style.css'
export default {
  Layout: DefaultLayout,
  // We'll expose AltLayout as a global component so frontmatter can reference it by name in some setups.
  // Note: VitePress uses `Layout` by default; pages with frontmatter `layout: AltLayout` will render their Content component
}
