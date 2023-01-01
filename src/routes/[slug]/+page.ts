import type { PageLoad } from './$types';
import { marked } from 'marked';

export const load: PageLoad = async ({ fetch, params }) => {
  try {
    const slug = params['slug'];
    const res = await fetch(`/${slug}.md`);
    if (res.status !== 200) {
      throw new Error();
    }

    const post = await res.text();

    return {
      slug,
      post: marked.parse(post),
    };
  } catch (e) {
    throw e;
  }
};
