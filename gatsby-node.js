exports.createPages = async function ({ actions, graphql }) { 
  const { data } = await graphql(`
    query {
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
}

