import { Link } from "../routes";

export default () => (
  <div>
    <h3>About</h3>
    <Link route="/">
      <a>Homepage </a>
    </Link>
    |
    <Link route="article" params={{ slug: "article-1" }}>
      <a>Article 1</a>
    </Link>
    |
    <Link route="blog" params={{ slug: "article-2" }}>
      <a>Article 2</a>
    </Link>
  </div>
);
