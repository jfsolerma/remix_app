import { Link, useLoaderData } from "@remix-run/react";

type Post = {
  id: number;
  slug: string;
  title: string;
}

export function loader () {
  const posts: Post[] = [
    {
      id: 1,
      slug: 'Hello world',
      title: 'Hello world',
    },
    {
      id: 2,
      slug: 'second-article',
      title: 'Prueba'
    } 
  ]
  return posts
}

export default function Prueba() {
  const posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Prueba</h1>
      {
        posts.map(post => {
          return (
            <div key={post.id}>
              <Link to={`/posts/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
