<script lang="ts">
  import { posts } from './stores/posts.store';
</script>

<h1>Welcome to my blog</h1>
<hr />
{#each $posts as post}
  <div>
    <a href="/{post.slug}" style="margin-top: 4px; font-size: 24px;">{post.title}</a>
    <p>{post.datePublished}</p>
  </div>
  <hr />
{/each}