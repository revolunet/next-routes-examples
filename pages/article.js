import React from "react";

import { Link } from "../routes";

// fake async fetch
const fakePromise = data =>
  new Promise((resolve, reject) => setTimeout(() => resolve(data), 100));

export default class Article extends React.Component {
  // this page fetch async stuff before rendering
  static async getInitialProps({ query }) {
    const data = await fakePromise({
      slug: query.slug
    });
    return { data };
  }
  render() {
    return (
      <div>
        <h3>Article {this.props.data.slug}</h3>
        <Link route="/">
          <a>Homepage </a>
        </Link>
        |
        <Link route="about">
          <a>About</a>
        </Link>
        |
        <Link route="article" params={{ slug: "article-1" }}>
          <a>Article 1</a>
        </Link>
        |
        <Link route="article" params={{ slug: "article-2" }}>
          <a>Article 2</a>
        </Link>
      </div>
    );
  }
}
