exports.createPages = async function ({ actions, graphql }) { 
  const { data } = await graphql(`
    query {
      allContentfulSubGallery {
        edges {
          node {
            slug
            gallery {
              slug
            }
          }
        }
      }
      allContentfulGallery { 
        edges { 
          node { 
            slug
          }
        }
      }
    }
  `)
  /* Create all the Gallery pages */
  data.allContentfulGallery.edges.forEach((edge) => { 
    const slug = edge.node.slug; 
    actions.createPage({ 
    path: `/portfolio/${slug}`, 
    component: require.resolve(`./src/templates/Gallery/Gallery.js`),
    context: {slug: slug }, 
    })
  })
  
  /* Create all the sub-gallery pages */ 
  data.allContentfulSubGallery.edges.forEach((edge) => { 
    const gallery_slug = edge.node.gallery.slug;
    const sub_gallery_slug = edge.node.slug; 
    const slug = `${gallery_slug}/${sub_gallery_slug}`;
    actions.createPage({
      path: `/portfolio/${slug}`,
      component: require.resolve(`./src/templates/SubGallery/SubGallery.js`),
      context: { slug: sub_gallery_slug }, 
    })
  })
}

