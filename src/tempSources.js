import _ from 'lodash';

const backendData = {
  backgrounds: [
    {
      id: _.uniqueId(),
      link: 'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/bg-pic-1.jpg',
    },
    {
      id: _.uniqueId(),
      link: 'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/bg-pic-2.jpg',
    },
  ],
  texts: {
    introText: [
      'One old Chinese said, "A journey of a thousand miles begins with a single step".',
      'My journey started some time ago with a timid step and there is no end in sight.',
    ],
    navElements: [
      { id: _.uniqueId(), link: 'https://poludnev.github.io/blog', text: 'my blog' },
      { id: _.uniqueId(), link: 'https://poludnev.github.io/cv', text: 'about me' },
      // { id: _.uniqueId(), link: 'https://poludnev.github.io/cv', text: 'cv' },
      // { id: _.uniqueId(), link: 'https://poludnev.github.io/cv', text: 'projects' },
    ],
    footerElements: [
      {
        id: _.uniqueId(),
        name: 'email',
        link: 'roman@gmail.com',
        src: 'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-mail-wt-256.png',
        hoverSrc:
          'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-mail-wt-256.png',
      },
      {
        id: _.uniqueId(),
        name: 'insta',
        link: 'https://www.instagram.com/poludnev.roman/',
        src: 'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-inst-wt-256.png',
        hoverSrc:
          'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-inst-bw-256.png',
      },
      {
        id: _.uniqueId(),
        name: 'fb',
        link: 'https://www.facebook.com/poludnev.roman',
        src: 'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-fb-wt-256.png',
        hoverSrc:
          'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-fb-bw-256.png',
      },
      {
        id: _.uniqueId(),
        name: 'lnkd',
        link: 'https://www.linkedin.com/in/roman-poludnev-0b3592a7/',
        src: 'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-lnkdin-wt-256.png',
        hoverSrc:
          'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-lnkdin-bw-256.png',
      },
      {
        id: _.uniqueId(),
        name: 'twit',
        link: 'https:/twitter.com/Roman71439308',
        src: 'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-twtr-wt-256.png',
        hoverSrc:
          'https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/sm-logo-twtr-bw-256.png',
      },
    ],
    popupData: {
      email: {
        title: { text: 'Leave me a message' },
        body: {
          text: {
            header: 'Write your email or other contact details here:',
            p: '',
            emailFieldPlaceholder: 'example@email.mail',
            emailFieldDisclaimer: "We'll never share your email with anyone else.",
            textAreaPlaceholder: 'Put your message here',
          },
        },
        footer: { text: 'Or send me an e-mail directly:', email: 'poludnev.roman@gmail.com' },
      },
      about: {
        title: { text: "Hi there, I'm Roman." },
        body: {
          text: {
            header: "I'm going to be a programmer and I need your help.",
            p: `<p>
                <img
                class="w200px float-start"
                src='https://raw.githubusercontent.com/poludnev/timidsteps/main/public/img/ava-1.jpg'
                alt='my ava'>
                </img>
              <p>
                <span>
                  This link is supposed to forward you to a page that might introduce me to every
                  one, but all is still in process. Anyway, Let me tell you a little bit about me.
                </span>
              </p>
              <p>
                <span>
                  I've a dream - I want to become a porgrammer. I'm still not sure if I want to be a
                  frontender, but it's surely necessary to start something with, and as I want to
                  develope and produce softwear and services for entrepreneurs to help them with
                  analyzing, accounting and so on, it is vital to learn how to make efficient and
                  friendly interfaces for such software and the frontend could help me a lot to know
                  much aouut them.
                </span>
              </p>
              </p>
              <p>
              <span>So, there is my point. You can help me in some ways.</span>
            </p>
            <p>
              <span>
                Firstly, could you please reveiw my code. There are some urls to my github below,
                please follow them and give me somme comment how to make code better. Everything
                metters: layout, js, arcitechure, whatever, any comments, remarks or advice are
                highly appreciated. I defenetly can do some things, but I understand that the
                differnce between some the 'working' code and the good code is collosal, and I need
                somebody to point out the 'dents'.{' '}
              </span>
            </p>
            <p>
              <span>
                Secondly, you can hire me :) Now I have to work as an internation prurchasing
                manager, and I'm relly good in pruchasing, negotiating and so, I have been doing
                pruchasing for more than 10 years and I don't want to do it any more, but I have to.
                I'm not as good as it is desired by the market and I don't have the production
                experience, but I need to get it some where. Full-time, part-time, internship,
                apperntice ship everything suits for me right now. Please contact me by email or
                social medias if you can give me a chance.
              </span>
            </p>
            <p>
              <span>
                P.S. Contact me any time if you only want to chit-chat, I'm glad to communicate to
                new people, to exchange ideas or something.
              </span>
            </p>
            <p>
              Faithfully yours, Roman.
              <span></span>
            </p>`,
          },
        },
        footer: { text: 'about me 3' },
      },
      blog: {
        title: { text: 'My Blog' },
        body: {
          text: {
            header: 'Doing my all best.',
            p: "Sorry, guys, my blog is under construction now.I'll make it available soon, trying to do all my best.",
          },
        },
        footer: { text: '', buttonText: '' },
      },
    },
    buttonTexts: { closeButton: 'close', sendButton: 'send', submitButton: 'submit' },
  },
};

export default backendData;
