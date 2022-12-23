// @ts-nocheck
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query Authors {
            postsConnection {
                edges {
                    node {
                        author {
                            id
                            name
                            photo {
                                url
                            }
                        }
                        pubDate
                        youtube
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }      
    `

    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug }) {
                author {
                    id
                    name
                    photo {
                        url
                    }
                }
                pubDate
                youtube
                slug
                content{
                    raw
                }
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }

            }
        }      
    `

    const result = await request(graphqlAPI, query, { slug })
    return result.post;
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails(){
            posts(
                orderBy: pubDate_ASC
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                pubDate
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query)
    return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]){
            posts(
                where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories }}}
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                pubDate
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query, { categories, slug })
    return result.posts;
}


export const getCategories = async () => {
    const query = gql`
      query GetGategories {
          categories {
            name
            slug
          }
      }
    `;

    const result = await request(graphqlAPI, query);

    return result.categories;
};

export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
  };
  

export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;

    const result = await request(graphqlAPI, query);

    return result.posts;
};