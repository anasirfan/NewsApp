import React, { Component, useEffect } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types' 
 

export class News extends Component {
   static defaultProps = {
    pageSize : 9 , 
    country : 'us' ,
    category : 'general'
    
    
   }

   static propTypes = {
    name : PropTypes.string,
    pageSize : PropTypes.number ,
    category : PropTypes.string 
   }
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : false , 
            page : 1 ,
        }
    }
    async updateNews(){

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30a1c5dbf79b409e80b16f3ead4976a3&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true})

      let data = await fetch(url);

      let parsedData = await data.json();
      this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults, loading: false})
      this.props.setProgress(100);
    }
    async componentDidMount(props){
      
       this.updateNews();
             
    }
    // componentDidUpdate(prevProps) {
    //   if (prevProps.category !== this.props.category || prevProps.country !== this.props.country) {
    //     this.updateNews();
    //   }
    // }

    
    handlePrevClick = async () => {
        this.updateNews();
        this.setState({page: this.state.page -1 })
    }
    handleNextClick = async () => {
        if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          this.updateNews();
        this.setState({page: this.state.page +1})}
        
    }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin : '35px 0px'}}>NewsBites - Top Headlines</h2> 
        {this.state.loading && <Spinner/>}
        <div className='row'>
 
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newsitems  title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,88): ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div> })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-3" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News