import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    pageSize: 9,
    country: 'us',
    category: 'general'
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.updateNews();
  }

  async componentDidUpdate(prevProps) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.country !== this.props.country
    ) {
      this.setState({ page: 1 }, () => {
        this.updateNews();
      });
    }
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    const url = `http://localhost:5000/api/news?country=${country}&category=${category}&page=${page}&pagesize=${pageSize}`;
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }
  

  handlePrevClick = () => {
    this.setState(
      {
        page: this.state.page - 1
      },
      () => {
        this.updateNews();
      }
    );
  };

  handleNextClick = () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState(
        {
          page: this.state.page + 1
        },
        () => {
          this.updateNews();
        }
      );
    }
  };
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

export default News;