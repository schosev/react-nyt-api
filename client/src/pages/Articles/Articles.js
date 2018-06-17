import React, { Component } from "react";
import "./Articles.css"; 
import Card from "../../components/Card";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/Results";
import { Search, Records, StartYr, EndYr, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    savedArticles: [],
    search: "",
    nbrRecords: "",
    startYr: "",
    endYr: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticle()
      .then(res =>
        this.setState({ savedArticles: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleSave = (title, date, url) => {
      API.saveArticle({  
        title: title,
        pubDate: date,
        url: url
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let searchParm = this.state.search;
    console.log("start year ", this.state.startYr);
    console.log("end year ", this.state.endYr);
    if (this.state.startYr) {
      searchParm += "?begin_date" + this.state.startYr + "0101";
    }
    if (this.state.endYr) {
      searchParm += "?end_date" + this.state.endYr + "1231";
    }
    API.getArticles(searchParm)
      .then(res => this.setState({ articles: res.data.response.docs }))
      .catch(err => console.log(err))
  }

  formatDate = fmtDate => {
    return fmtDate.substring(0,10);
  }

  render() {
    return (
      <div className="container fluid">
        <div className="row">
          <div className="col">
            <div className="card">
            <Card
              value="Search Parameters"
            >
              <div className="card-body">
            <form>
              <Search
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
              />
              <Records
                value={this.state.nbrRecords}
                onChange={this.handleInputChange}
                name="nbrRecords"
              />
              <StartYr
                value={this.state.startYr}
                onChange={this.handleInputChange}
                name="startYr"
              />
              <EndYr
                value={this.state.endYr}
                onChange={this.handleInputChange}
                name="endYr"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
              </div>
            </Card>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
            <Card
              value="Top Articles"
            >
              <div className="card-body">
              <List>
                  {this.state.articles.map(article => {
                    return (
                      <ListItem
                        key={article.headline.main}
                        title={article.headline.main}
                        date={this.formatDate(article.pub_date)}
                        url={article.web_url}
                        button="Save"
                        onClick={() => this.handleSave(article.headline.main, article.pub_date, article.web_url)}
                      />
                    );
                  })}
                </List>
            </div>
            </Card>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
            <Card
              value="Saved Articles"
            >
              <div className="card-body">
              <List>
                  {this.state.savedArticles.map(saveArticle => {
                    return (
                      <ListItem
                        key={saveArticle._id}
                        title={saveArticle.title}
                        date={this.formatDate(saveArticle.pubDate)}
                        url={saveArticle.url}
                        button="Delete"
                        onClick={() => this.deleteArticle(saveArticle._id)}
                      />
                    );
                  })}
                </List>
            </div>
            </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
