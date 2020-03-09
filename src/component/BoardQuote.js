import './BoardQuote.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class BoardQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 1,
      randomColor: 1
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    let random = Math.floor(Math.random() * this.props.sentences.length);
    let randomColor = Math.floor(Math.random() * this.props.colors.length);
    this.setState({
      random,
      randomColor
    });
  }

  render() {
    const { random, randomColor } = this.state;
    const { sentences, colors } = this.props;
    const color = colors[randomColor];

    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    return (
      <div className='container'>
        <div id='wrapper'>
          <div id='quote-box'>
            <div className='quote-text'>
              <i className='fa fa-quote-left' style={{ color }}>
                {' '}
              </i>
              <span id='text' style={{ color }}>
                {sentences[random]}
              </span>
            </div>
            <div className='quote-author'>
              -{' '}
              <span id='author' style={{ color }}>
                {' '}
                Matthew{' '}
                <i
                  className='fa fa-american-sign-language-interpreting'
                  aria-hidden='true'
                ></i>
              </span>
            </div>
            <div className='buttons' style={{ backgroundColor: color }}>
              <a
                className='button'
                id='tweet-quote'
                title='Tweet this quote!'
                target='_blank'
                href='https://twitter.com/login'
                style={{ backgroundColor: color }}
                rel='noopener noreferrer'
              >
                <i className='fa fa-twitter'></i>
              </a>
              <a
                className='button'
                id='tumblr-quote'
                title='Post this quote on tumblr!'
                target='_blank'
                href='https://www.tumblr.com/login'
                style={{ backgroundColor: color }}
                rel='noopener noreferrer'
              >
                <i className='fa fa-tumblr'></i>
              </a>
              <button
                className='button'
                id='new-quote'
                onClick={this.onClick}
                style={{ backgroundColor: color }}
              >
                New quote
              </button>
            </div>
          </div>
          <div className='footer'>
            by <a href=''>huynguyen</a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sentences: state.biblesentenes.sentences,
    colors: state.biblesentenes.colors
  };
}

export default connect(mapStateToProps, null)(BoardQuote);
