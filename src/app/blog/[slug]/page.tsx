import Breadcrumb from "@/components/Breadcrumb";
import { getPostData } from "@/lib/post";

type Params = Promise<{ slug: string }>;

export default async function Post(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  const post = await getPostData(slug);

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb postTitle={post.title} />
      <div>
        <div>
          <div>{post.title}</div>
          <div>{post.date}</div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </div>
    </div>
  );
}
