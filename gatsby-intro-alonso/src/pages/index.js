import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Minessota!</p>
    <Link to="/about">Learn about me &rarr;</Link>
  </Layout>
);
