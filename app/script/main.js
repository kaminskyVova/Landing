// Select control and Text
const previewsImagesToggler = (target) => {
  if (target.classList.contains('select__item')) {
    const divTextOut = document.querySelector('.text__out');
    const out = document.querySelector('.out');
    const correctCity = divTextOut.querySelector('.correct__city');
    const placesCount = divTextOut.querySelector('.places__count');

    divTextOut.style.display = 'block';
    correctCity.textContent = `${target.dataset.city.toUpperCase()}`;

    if (target.dataset.city === 'manji') {
      out.style.backgroundImage = `url('./images/slider__center/center__one.png')`;
      placesCount.textContent = `134+ Tempat di kota ini`;
    }
    if (target.dataset.city === 'makassan') {
      out.style.backgroundImage = `url('./images/slider__center/center__two.png')`;
      placesCount.textContent = `220+ Tempat di kota ini`;
    }
    if (target.dataset.city === 'djambi') {
      out.style.backgroundImage = `url('./images/slider__center/center__three.png')`;
      placesCount.textContent = `85+ Tempat di kota ini`;
    }
    if (target.dataset.city === 'jakarta') {
      out.style.backgroundImage = `url('./images/slider__top/top__one.png')`;
      placesCount.textContent = `300+ Tempat di kota ini`;
    }

    setTimeout(() => {
      placesCount.textContent = '';
      correctCity.textContent = '';
      divTextOut.style.display = 'none';
    }, 5000);
  }
};

const previewsSelectToggler = (target) => {
  const selectList = document.querySelector('.select__list');
  const selectHead = document.querySelector('.select__head');

  if (target.classList.contains('select__head')) {
    if (target.classList.contains('open')) {
      target.classList.toggle('open');
      selectList.style.display = 'none';
    } else {
      target.classList.toggle('open');
      selectList.style.display = 'block';
    }
  }

  if (target.classList.contains('select__item')) {
    selectHead.textContent = target.dataset.city;
    selectList.style.display = 'none';
    selectHead.classList.remove('open');
  }
};

// Info under bottom slider
const personInfo = (target) => {
  const swiper = document.querySelector('.footer__right-slider');
  const personsImgs = swiper.querySelectorAll('.swiper-slide');
  const personName = document.querySelector('.person__name');
  const personPosition = document.querySelector('.person__position');

  personsImgs.forEach((person) => {
    if (target.dataset.name === 'first') {
      personName.textContent = 'Samantha William';
      personPosition.textContent = 'Senior Designer at Design Studio';
    }

    if (target.dataset.name === 'second') {
      personName.textContent = 'Peter Jan';
      personPosition.textContent = 'Team Lead Front-end Developer';
    }

    if (target.dataset.name === 'third') {
      personName.textContent = 'Bill Gates';
      personPosition.textContent = 'Director of Cleanliness';
    }
    if (target.dataset.name === 'fourth') {
      personName.textContent = 'Fired for Arrogance';
      personPosition.textContent = 'Fired for Arrogance';
    }
    if (target.dataset.name === 'fifth') {
      personName.textContent = 'Joe Biden';
      personPosition.textContent = 'Fell Asleep at work';
    }
  });
};

// Pop Up and Mobile menu control
const controlMenu = (target) => {
  const burger = document.querySelector('.nav-icon__middle');
  const siteNavList = document.querySelector('.header__nav-wrapper');
  const overlay = document.getElementById('overlay');

  if (
    target.closest('.nav-icon__wrapper') ||
    target.closest('.site__nav-list') ||
    target.closest('.contacts__nav-list')
  ) {
    burger.classList.toggle('active');
    siteNavList.classList.toggle('show__menu');
    // overlay.classList.toggle('active')
  }

  // if (target.classList.contains('overlay')) {
  //   console.log('lll');
  //   siteNavList.classList.toggle('show__menu');
  // }


  console.log(target);
};


const modalControl = (target) => {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach((button) => {
    if (
      target.closest('.job__place-wrapper--link') ||
      target.closest('.join__us-btn-wrapper')
    ) {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    }
  });

  // overlay
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
};

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

const usersObj = [];

const addUserContact = (contact) => {
  usersObj.push(contact);
  console.log('usersObj: ', usersObj);
};

const formControl = () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const modal = e.target.closest('.modal');

    const formData = new FormData(form);

    const userContacts = Object.fromEntries(formData);

    addUserContact(userContacts);

    form.reset();
    closeModal(modal);
  });
};
formControl();

// Sliders

// Center
const swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  clickable: true,
});

// Bottom
const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 'auto',
  spaceBetween: 35,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  clickable: true,
  slidesOffsetBefore: 0,
  speed: 800,

  breakpoints: {
    320: { slidesPerView: 3 },
    640: { slidesPerView: 5 },
    1024: { slidesPerView: 5 },
  },
  simulateTouch: true,
});

document.body.addEventListener('click', (e) => {
  const target = e.target;
  personInfo(target);
  controlMenu(target);
  modalControl(target);
  previewsImagesToggler(target);
  previewsSelectToggler(target);
});
