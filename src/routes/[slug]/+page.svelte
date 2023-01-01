<script lang="ts">
  export let data: {
    slug: string;
    post: string;
  };
</script>

<a href="/">Back</a>
{@html data.post}