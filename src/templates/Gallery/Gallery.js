import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import './Gallery.scss'
class Gallery extends Component {
  constructor(props) { 
    super(props); 

    /* Handle all the data parsing */
    const pageData = props.data.allContentfulGallery.edges[0].node; 
    const filtersMulti = pageData.subGalleries.map((subgallery) => { return subgallery.filters })
    const filtersFlattened = filtersMulti.flat(Infinity);
    const photoRenderOptions = filtersFlattened.map(f => { return ({id: f, render: true, })}); 

    /* Handling the binding for functions */ 
    this.toggleAllFilters= this.toggleAllFilters.bind(this); 
    this.toggleSingleFilter = this.toggleSingleFilter.bind(this); 
    this.validateFilterGeneralization = this.validateFilterGeneralization.bind(this); 
    this.state = { 
      pageTitle: pageData.title, 
      allRendered: true, 
      photoRenderOptions: photoRenderOptions, // includes ID and render 
      //      { 
        //        id: some filter, 
        //        render: some render option 
        //      }
        subGalleries: pageData.subGalleries, 
      }
      console.log(this.state.pageTitle, "TITLE"); 
  }

  /* Toggle to make sure the show all button always works in accordance to the current state of filters */ 
  validateFilterGeneralization() { 
    const renderOptions = this.state.photoRenderOptions.map((group) => group.render); 
    let allTrue = renderOptions.every(x => x); 
    this.setState(state => ({ allRendered: allTrue })); 
  }

  /* Toggles the 'Show all' Button */
  toggleAllFilters() {  
    this.setState(state => { 
      const renderProperties = state.photoRenderOptions.map(group => group.render = !state.allRendered);
      return { renderProperties, allRendered: !state.allRendered};
    });
  };

  /* Toggle specific filters */ 
  toggleSingleFilter(id) { 
    let renderProperties = this.state.photoRenderOptions.slice(); 
    const index = renderProperties.findIndex(photoGroup => photoGroup.id === id); 
    renderProperties[index].render = !renderProperties[index].render; 
    this.setState(state => ({ renderProperties, }))
    this.validateFilterGeneralization(); 
  }

  render() {
    const renderAll = (this.state.allRendered) ? 'gallery__filter-active' : 'gallery__filter-inactive'; 

    /* Return only the data of the photo groups with an active filter */ 
    const tagsToRender = new Set(this.state.photoRenderOptions.filter(x => x.render).map(x => x.id));
    const imagesGroupsToRender = this.state.subGalleries.filter(img => img.filters.some(filters => tagsToRender.has(filters)))

    const images = imagesGroupsToRender.map(groups => { 
      return groups.photos.map((img) => { 
        return(
          // <div className="gallery__image-container">
        <Img className="gallery__image-item" fluid={img.fluid} />
        // </div>
        ); 
      })
    })
    return (
      <Layout>
        <section className="gallery__body">
          <SectionHeader title={this.state.pageTitle}/>
            <div className="gallery__content">
              <div className="gallery__filter-container">
              <h5 className="gallery__filter-header">Filters</h5>
              <button className={renderAll} onClick={() => this.toggleAllFilters()}> All </button>
              {this.state.photoRenderOptions.map((photoGroup) => {
              return(
              (photoGroup.render) ?
              <button className='gallery__filter-active' onClick={() => this.toggleSingleFilter(photoGroup.id)}>{photoGroup.id}</button> :
              <button className='gallery__filter-inactive' onClick={() => this.toggleSingleFilter(photoGroup.id)}>{photoGroup.id}</button> )
              })}
              </div>
              <div className="gallery__images">
              {images}
              </div>
            </div>
        </section>
      </Layout>
    )
  }
}


Gallery.propTypes = { 
  data: PropTypes.object.isRequired,
}
export default Gallery; 
export const query = graphql`
  query galleryQuery($slug: String!) { 
    allContentfulGallery(filter: {slug: {eq: $slug}}) { 
      edges { 
        node { 
          title
          subGalleries { 
            title 
            filters 
            photos { 
              fluid { 
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`