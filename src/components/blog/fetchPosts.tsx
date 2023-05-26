import React, { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

interface Metadata {
  isPublic: boolean;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tags: string;
}

export interface Post {
  id: string;
  slug: string;
  metadata: Metadata;
  heroImage: string;
  content: string;
}

const MarkdownWrapper = (props: { source: string }): ReactElement => {
  return <ReactMarkdown>{props.source}</ReactMarkdown>;
};

export async function fetchPosts(): Promise<Post[]> {
  const context = import.meta.glob('./blog-posts/posts/*.md');
  console.log('context');
  console.log(context);
  const posts: Post[] = [];

  for (const path in context) {
    const id = path.split('/').pop()?.replace('.md', '') || '';
    console.log('path')
    console.log(path)
    const response = await context[path]();
    await import(path).then(res => {
      fetch(res.default)
        .then(response => response.text())
        .then(text => console.log('My text' + text))
    })

    console.log('response');
    console.log(response);
    console.log(Object.keys(response as Record<string, unknown>));

    const { ReactComponent, attributes } = response as {
      ReactComponent: any,
      attributes: {
        isPublic: boolean;
        title: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        tags: string;
        slug: string;
        heroImage: string;
      };
    };

    console.log('ReactComponent');
    console.log(ReactComponent);

    const rawMarkdownContent = ReactComponent && ReactComponent.props && ReactComponent.props.children;    console.log('rawMarkdownContent');
    console.log(rawMarkdownContent);

    console.log('attributes');
    console.log(attributes);


    const { isPublic, title, description, createdAt, updatedAt, tags } = attributes;
    const metadata: Metadata = { isPublic, title, description, createdAt, updatedAt, tags };

    posts.push({ id, slug: attributes.slug, metadata: metadata, heroImage: attributes.heroImage, content: rawMarkdownContent });
    console.log(posts);

  }

  // Sort by date in descending order
  posts.sort((a, b) => new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime());

  return posts;
}