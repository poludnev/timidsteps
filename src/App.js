// import logo from './logo.svg';
import React from 'react';
// import _ from 'lodash';
import './App.css';
import { Main } from './components/main/main.component.jsx';
import { Footer } from './components/footer/footer.component.jsx';
import { MyModal } from './components/modal/modal.component.jsx';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const texts = {
  headingText: '',
  // introText:
  //   'One old Chinese said, "A journey of a thousand miles begins with a single step". My journey started some time ago with a timid step and there is no end in sight.',
  // navElementsTexts: [
  //   { id: _.uniqueId(), link: 'http://localhost:8005/blog', text: 'my blog' },
  //   { id: _.uniqueId(), link: 'http://localhost:8005/cv', text: 'about me' },
  // ],
  // footerElements1: [
  //   {
  //     id: _.uniqueId(),
  //     name: 'email',
  //     link: 'roman@gmail.com',
  //     src: 'http://localhost:8005/img/index/sm-logo-mail-wt-256.png',
  //     hoverSrc: 'http://localhost:8005/img/index/sm-logo-mail-wt-256.png',
  //   },
  //   {
  //     id: _.uniqueId(),
  //     name: 'insta',
  //     link: 'https://www.instagram.com/poludnev.roman/',
  //     src: 'http://localhost:8005/img/index/sm-logo-inst-wt-256.png',
  //     hoverSrc: 'http://localhost:8005/img/index/sm-logo-inst-bw-256.png',
  //   },
  //   {
  //     id: _.uniqueId(),
  //     name: 'fb',
  //     link: 'https://www.facebook.com/poludnev.roman',
  //     src: 'http://localhost:8005/img/index/sm-logo-fb-wt-256.png',
  //     hoverSrc: 'http://localhost:8005/img/index/sm-logo-fb-bw-256.png',
  //   },
  //   {
  //     id: _.uniqueId(),
  //     name: 'lnkd',
  //     link: 'https://www.linkedin.com/in/roman-poludnev-0b3592a7/',
  //     src: 'http://localhost:8005/img/index/sm-logo-lnkdin-wt-256.png',
  //     hoverSrc: 'http://localhost:8005/img/index/sm-logo-lnkdin-bw-256.png',
  //   },
  //   {
  //     id: _.uniqueId(),
  //     name: 'twit',
  //     link: 'https:/twitter.com/Roman71439308',
  //     src: 'http://localhost:8005/img/index/sm-logo-twtr-wt-256.png',
  //     hoverSrc: 'http://localhost:8005/img/index/sm-logo-twtr-bw-256.png',
  //   },
  // ],
  modalData: {
    email: {
      title: { text: 'email1' },
      body: {
        text: {
          header: 'Doing my all best.',
          p: [
            'Sorry, guys, my block is under construction now',
            "I'll make it available soon, trying to do all my best.",
          ],
        },
      },
      footer: { text: 'email3' },
    },
    about: {
      title: { text: "Hi there, I'm Roman." },
      body: {
        text: {
          header: "I'm going to be a programmer and I need your help.",
          p: [
            'Sorry, guys, my block is under construction now',
            "I'll make it available soon, trying to do all my best.",
          ],
        },
      },
      footer: { text: 'about me 3' },
    },
    blog: {
      title: { text: 'My Blog' },
      body: {
        text: {
          header: 'Doing my all best.',
          p: [
            'Sorry, guys, my blog is under construction now.',
            "I'll make it available soon, trying to do all my best.",
          ],
        },
      },
      footer: { text: '' },
    },
  },
};

// texts.footerElements = {};

// texts.footerElements.byID = texts.footerElements1.map((e) => e);
// texts.footerElements.allIDs = texts.footerElements1.map((e) => e.id);

// texts.navElements = {};
// texts.navElements.byID = texts.navElementsTexts.map((e) => e);
// texts.navElements.allIDs = texts.navElements.byID.map((e) => e.id);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // console.log('props', props);

    const { backgroundImgs, introText, navElements, footerElements, popupData, buttonTexts } =
      this.props.data;

    this.state = {
      uiState: {
        hoveredElementId: null,
        backgroundImgId: 0,
        // modalShow: false,
        // modalType: '',
        popup: {
          show: false,
          type: '',
        },
      },
      texts: { ...texts },
      introText,
      backgroundImgs,
      navElements,
      footerElements,
      popupData,
      buttonTexts,
    };
  }

  componentDidMount() {
    this.setBackGroundImg();
  }

  mouseOverHandler =
    (props = {}) =>
    (e) =>
      this.setState({ uiState: { ...this.state.uiState, hoveredElementId: props.id || null } });

  mouseOutHandler = () => () =>
    this.setState({ uiState: { ...this.state.uiState, hoveredElementId: null } });

  getModalType = (text) => {
    switch (true) {
      case !!/blog/g.exec(text):
        return 'blog';
      case !!/about/g.exec(text):
        return 'about';
      case !!/mail/g.exec(text):
        return 'email';
      default:
        throw new Error('can not define modal type');
    }
  };

  toggleModalHandler = (text) => () => {
    // console.log('toggle modal tesxt', text, this.getModalType(text));

    this.setState({
      uiState: {
        ...this.state.uiState,
        modalShow: !this.state.modalShow,
        popup: { type: this.getModalType(text), show: !this.state.uiState.popup.show },
      },
    });
  };

  setBackGroundImg = () => {
    // console.log('setBackGroundImd start');

    const randomNum = Math.floor(Math.random() * this.state.backgroundImgs.allIDs.length + 0);

    // const newBgImgId = Number(this.state.backgroundImgs.allIDs[0]);
    const newBgImgId = randomNum;

    this.setState({
      ...this.state,
      uiState: { ...this.state.uiState, backgroundImgId: newBgImgId },
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log('submit handler started');
    const formData = new FormData(e.target);
    const email = formData.get('email');
    console.log(e.target);
    console.log(formData);
    console.log(email);

    fetch('http://localhost:8000/api/homepage/background', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('post success', data))
      .catch((e) => console.log('error', e));
  };

  render() {
    // console.log('render this.state', this.state);
    // console.log('render this.state', this.state.uiState.backgroundImgId);
    // co/nsole.log(
    //   this.state.backgroundImgs.byID[
    //     this.state.backgroundImgs.allIDs[this.state.uiState.backgroundImgId]
    //   ].link,
    // );

    const {
      backgroundImgs,
      uiState: { backgroundImgId },
    } = this.state;

    const bgImgId = backgroundImgs.allIDs[backgroundImgId];
    const bgImageUrl = backgroundImgs.byID[bgImgId].link;

    return (
      <div className='App'>
        <div id='cover'>
          <img className='bg-img' id='img-1' src={bgImageUrl} alt='bg-img' />
        </div>
        <div id='shader'></div>
        <MyModal
          show={this.state.uiState.popup.show}
          onHide={() =>
            this.setState({
              uiState: {
                ...this.state.uiState,
                popup: { ...this.state.uiState.popup, show: false },
              },
            })
          }
          submitHandler={this.submitHandler}
          modalData={this.state.texts.modalData[this.state.uiState.popup.type]}
          popupData={this.state.popupData[this.state.uiState.popup.type]}
          modalType={this.state.uiState.popup.type}
          buttonTexts={this.state.buttonTexts}
        />

        <Main
          headingText={'timid steps'}
          introText={this.state.introText}
          navElements={this.state.navElements}
          hoveredElementId={this.state.uiState.hoveredElementId}
          onMouseOverButton={this.mouseOverHandler}
          onMouseOutButton={this.mouseOutHandler}
          toggleModalHandler={this.toggleModalHandler}
        />
        <Footer
          footerElements={this.state.footerElements}
          hoveredElementId={this.state.uiState.hoveredElementId}
          onMouseOverButton={this.mouseOverHandler}
          onMouseOutButton={this.mouseOutHandler}
          toggleModalHandler={this.toggleModalHandler}
        />
      </div>
    );
  }
}

export default App;
