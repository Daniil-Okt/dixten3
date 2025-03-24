/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import MousePRLX from './libs/parallax-mouse'
import AOS from 'aos'
import Swiper, { Navigation, Pagination, Autoplay, Grid, FreeMode } from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
// import SimpleParallax from 'simple-parallax-js';
// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
/* Фиксированный header */
// BaseHelpers.headerFixed();


/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */

window.addEventListener('load', () => {
	setTimeout(() => {
		AOS.init({
			once: true,
		});
	}, 500);
})
/** ===================================================================================
 * Параллакс мышей
 * */
new MousePRLX();



//Праллакс
// const aboutImgOne = document.querySelector('.img-1')
// if (aboutImgOne) {
// 	new simpleParallax(aboutImgOne, {
// 		orientation: 'up',
// 		scale: 1.8,
// 		overflow: true,
// 		delay: .6
// 	});
// }
// const aboutImgTwo = document.querySelector('.img-2')
// if (aboutImgTwo) {
// 	new simpleParallax(aboutImgTwo, {
// 		orientation: 'down',
// 		scale: 1.6,
// 		overflow: true,
// 		delay: .6
// 	});
// }


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===========================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
import { maskTel } from './modules/index.js'
maskTel()

/* Cкрыть меню при клике на его ссылки ==================================================================
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
//toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
const aboutSlider = new Swiper('.about__slider', {
	speed: 1400,
	spaceBetween: 10,
	slidesPerView: 1,
	modules: [Pagination, FreeMode],
	freeMode: true,        // Включение свободного режима
	freeModeMomentum: true, // Включение инерции
	freeModeMomentumRatio: 1, // Сила инерции
	freeModeMomentumBounce: true, // Отскок от краев
	freeModeSticky: true,  // Остановка точно на краю слайда
	initialSlide: 2,
	loop: true,

	autoplay: {
		delay: 2500,
		stopOnLastSlide: false,
		disableOnIteration: false,
	},
	pagination: {
		    el: ".about__pagination",
		    dynamicBullets: true,
		    clickable: true,
		  },
	breakpoints: {
		651: {
			freeMode: false,
		},
	}
  });

const objectSlider = new Swiper('.object__slider', {
  speed: 1400,
  spaceBetween: 10,
  slidesPerView: 'auto',
  modules: [FreeMode],
  freeMode: true,        // Включение свободного режима
  freeModeMomentum: true, // Включение инерции
  freeModeMomentumRatio: 1, // Сила инерции
  freeModeMomentumBounce: true, // Отскок от краев
  freeModeSticky: true,  // Остановка точно на краю слайда
});

const solvingSlide = new Swiper('.solving__slider', {
	speed: 1400,
	spaceBetween: 10,
	slidesPerView: 2, 
	modules: [Autoplay, Navigation, Pagination, Grid, FreeMode],
	freeMode: true,        // Включение свободного режима
	freeModeMomentum: true, // Включение инерции
	freeModeMomentumRatio: 1, // Сила инерции
	freeModeMomentumBounce: true, // Отскок от краев
	freeModeSticky: true,  // Остановка точно на краю слайда
	grid: {
		rows: 2,
		fill: 'row', 
	},
	navigation: {
		prevEl: ".reviews__button-slider-prev",
		nextEl: ".reviews__button-slider-next"
	},
	pagination: {
		el: ".solving__pagination",
		clickable: true,
	},
	breakpoints: {
		451: {
			slidesPerView: 3,
			grid: {
			rows: 2,
			fill: 'row',
			},
		},
		651: {
			freeMode: false,
			slidesPerView: 4,
			grid: {
			rows: 2,
			fill: 'row',
			},
		},
		801: {
			freeMode: false,
			slidesPerView: 1, // На экранах шире 800px показываем 1 слайд
			spaceBetween: 0,
			grid: {
			rows: 1, // На экранах шире 800px возвращаемся к одной строке
			},
		}
	},
});

const projectSlider = new Swiper('.projects__slider', {
	speed: 800,
	spaceBetween: 10,
	slidesPerView: 1.25,
	initialSlide: 2,
	modules: [Autoplay, Navigation, Pagination, Grid, FreeMode],
	freeMode: true,        // Включение свободного режима
	freeModeMomentum: true, // Включение инерции
	freeModeMomentumRatio: 1, // Сила инерции
	freeModeMomentumBounce: false, // Отскок от краев
	freeModeSticky: true,  // Остановка точно на краю слайда

	grid: {
		rows: 1,
		fill: 'row',
	},
	navigation: {
		prevEl: ".projects__slider-prev",
		nextEl: ".projects__slider-next"
	},
	pagination: {
		el: ".projects__pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		401: {
			slidesPerView: 1.5,
			initialSlide: 2,
			grid: {
				rows: 1,
				fill: 'row',
			},
			pagination: {
				dynamicBullets: true,
			},
		},
		501: {
			slidesPerView: 2,
			initialSlide: 0,
			grid: {
				rows: 2,
				fill: 'row',
			},
			pagination: {
				dynamicBullets: false,
			},
		},
		651: {
			freeMode: false,
		},
		769: {
			slidesPerView: 3,
			initialSlide: 0,
			freeMode: false,
			grid: {
				rows: 2,
				fill: 'row',
			},
			pagination: {
				dynamicBullets: false,
			},
		},
		801: {
			initialSlide: 0,
			freeMode: false,
		},
		1151: {
			slidesPerView: 4,
			spaceBetween: 21,
			initialSlide: 0,
			initialSlide: 0,
			freeMode: false,
			grid: {
				rows: 2,
				fill: 'row',
			},
			pagination: {
				dynamicBullets: false,
			},
		}
	},
});



const trustSlider = new Swiper('.trust__slider', {
	speed: 800,
	spaceBetween: 30,
	slidesPerView: 2,
	modules: [Autoplay, Navigation, FreeMode, Pagination],
	freeMode: true,        // Включение свободного режима
	freeModeMomentum: true, // Включение инерции
	freeModeMomentumRatio: 1, // Сила инерции
	freeModeMomentumBounce: true, // Отскок от краев
	freeModeSticky: true,  // Остановка точно на краю слайда
	loop: true,
	navigation: {
	  prevEl: ".trust__slider-prev",
	  nextEl: ".trust__slider-next"
	},
	pagination: {
		    el: ".trust__pagination",
		    dynamicBullets: true,
		    clickable: true,
		  },
	breakpoints: {
	  401: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  501: {
		slidesPerView: 4,
		spaceBetween: 60,
	  },
	  651: {
		slidesPerView: 5,
		freeMode: false,
		spaceBetween: 60,
		},
	  1051: {
		slidesPerView: 6,
		spaceBetween: 88,
		freeMode: false,
	  }
	},
  });
  
// Функция для включения автоплея, когда слайдер виден
function startAutoplayWhenVisible(slider) {
	const observer = new IntersectionObserver(
	  (entries) => {
		entries.forEach((entry) => {
		  if (entry.isIntersecting) {
			slider.autoplay.start();
		  } else {
			slider.autoplay.stop();
		  }
		});
	  },
	  {
		threshold: 0.5,
	  }
	);

	const sliderContainer = document.querySelector('.trust__slider');
	if (sliderContainer) {
	  observer.observe(sliderContainer);
	}
}

startAutoplayWhenVisible(trustSlider);

const reviewsSlider = new Swiper('.reviews__slider', {
  speed: 1400,
  spaceBetween: 16,
  slidesPerView: 1,
  modules: [Autoplay, Navigation, Pagination, FreeMode],
  loop: true,
  initialSlide: 0,
  freeMode: true,        // Включение свободного режима
	freeModeMomentum: true, // Включение инерции
	freeModeMomentumRatio: 1, // Сила инерции
	freeModeMomentumBounce: true, // Отскок от краев
	freeModeSticky: true,  // Остановка точно на краю слайда
  navigation: {
    prevEl: ".reviews__slider-prev",
    nextEl: ".reviews__slider-next"
  },
  pagination: {
    el: ".reviews__pagination",
    // dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
	451: {
		slidesPerView: 1.4,
		spaceBetween: 16,
	},
    651: {
		slidesPerView: 2,
		spaceBetween: 20,
  	},
	801: {
		freeMode: false,
		},
    1051: {
        slidesPerView: 3,
        spaceBetween: 20,
		freeMode: false,
    }
  },
});

const swiper = new Swiper('.brand-content__slider', {
  speed: 1400,
  spaceBetween: 30,
  slidesPerView: 1.55,
  modules: [Autoplay, Navigation, Pagination, FreeMode],
  initialSlide: 0,
  freeMode: true,        // Включение свободного режима
	freeModeMomentum: true, // Включение инерции
	freeModeMomentumRatio: 1, // Сила инерции
	freeModeMomentumBounce: true, // Отскок от краев
	freeModeSticky: true,  // Остановка точно на краю слайда
  navigation: {
    prevEl: ".reviews__button-slider-prev",
    nextEl: ".reviews__button-slider-next"
  },
  pagination: {
    el: ".brand-content__pagintion",
    clickable: true,
  },
  breakpoints: {
	466: {
		slidesPerView: 2,
	},
	511: {
		reeMode: false,
	},
    951: {
        slidesPerView: 2,
		reeMode: false
        // spaceBetween: 30,
    }
  },
});

const brandContentLogoSlider = new Swiper('.brand-content__logo-slider', {
  speed: 1400,
  spaceBetween: 16,
  slidesPerView: 3,
  modules: [Autoplay, Navigation, Pagination],
  loop: true,
  initialSlide: 1,

  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },

  breakpoints: {
    500: {
      slidesPerView: 4,
      spaceBetween: 24,
  	},
    1050: {
        slidesPerView: 6,
        spaceBetween: 48,
    }
  },
});

const missionSlider = new Swiper('.mission__slider', {
	speed: 1400,
	spaceBetween: 10,
	slidesPerView: 1.45,
	modules: [Autoplay, Navigation, FreeMode],
	initialSlide: 0,
	freeMode: true,        // Включение свободного режима
	freeModeMomentum: true, // Включение инерции
	freeModeMomentumRatio: 1, // Сила инерции
	freeModeMomentumBounce: true, // Отскок от краев
	freeModeSticky: true,  // Остановка точно на краю слайда
	// autoplay: {
	//   delay: 2500,
	//   stopOnLastSlide: false,
	//   disableOnIteration: false,
	// },
	navigation: {
		prevEl: ".mission__slider-prev",
		nextEl: ".mission__slider-next"
	  },
	breakpoints: {
		521: {
			slidesPerView: 1.8,
			spaceBetween: 16,
			freeMode: true,
			},
		651: {
			freeMode: false,
		},
		769: {
			slidesPerView: 2.5,
			spaceBetween: 16,
			freeMode: false,
			},
		981: {
			slidesPerView: 3,
			spaceBetween: 20,
			freeMode: false,
			},
		1151: {
			freeMode: false,
			slidesPerView: 3.227,
			spaceBetween: 20,
		}
	},
});

// const swiper = new Swiper('.swiper', {
//   speed: 800,
//   spaceBetween: 16,
//   slidesPerView: 1.4,
//   modules: [Autoplay, Navigation, Pagination],
//   loop: true,
//   initialSlide: 1,
//   autoplay: {
//     delay: 2500,
//     stopOnLastSlide: false,
//     disableOnIteration: false,
//   },
//   navigation: {
//     prevEl: ".reviews__button-slider-prev",
//     nextEl: ".reviews__button-slider-next"
//   },
//   pagination: {
//     el: ".card-slider__pagination",
//     dynamicBullets: true,
//     clickable: true,
//   },
//   breakpoints: {
//     1400: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//   	},
//     1650: {
//         slidesPerView: 4,
//         spaceBetween: 48,
//     }
//   },
// });


/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')

//==== валидация ====
// validForm(fromName, popupTranks)

const froms = document.querySelectorAll('form')
froms.forEach(form => {
	validForm(form)
});
//==== отправка ====

//==== валидация ====

//==== валидация ====

//==== валидация ====

//==== валидация ====
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClassParent } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClassParent(elementAll)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)





// Кнопка список/слайдер
const buttonGridSolving = document.querySelector('.solving__button-grid');
const sliderSolvingBlock = document.querySelector('.solving__slider');
const solving = document.querySelector('.solving');
if (buttonGridSolving && sliderSolvingBlock) {
  buttonGridSolving.addEventListener('click', () => {
    // Добавляем/удаляем класс
    sliderSolvingBlock.classList.toggle('column-item');

    // Прокручиваем страницу к верху блока .solving__slider
    solving.scrollIntoView({
      behavior: 'smooth', // Плавная прокрутка
      block: 'start',     // Прокрутка к верхней части элемента
    });
  });
}


// Фильтр solving__slider
const buttonsSolving = document.querySelectorAll('.solving__menu-item');
const slidesSuttonsSolving = document.querySelectorAll('.solving__slide');
const sliderWrapper = document.querySelector('.solving__slider .swiper-wrapper'); // Контейнер слайдов
// Массив для хранения 
let hiddenSlides = [];
// Изначальный порядок слайдов
const initialSlidesOrder = Array.from(slidesSuttonsSolving);
buttonsSolving.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.solving__menu-item').forEach(btn => {
      btn.classList.remove('active');
    });

    // Добавляем класс active на текущую кнопку
    button.classList.add('active');

    // Получаем значение атрибута data-solving-button у текущей кнопки
    const buttonValue = button.getAttribute('data-solving-button');

    // Возвращаем скрытые слайды обратно в DOM
    if (hiddenSlides.length > 0) {
      hiddenSlides.forEach(slide => {
        sliderWrapper.appendChild(slide);
      });
      hiddenSlides = []; // Очищаем массив скрытых слайдов
    }

    // Удаляем класс hidden у всех слайдов
    slidesSuttonsSolving.forEach(slide => {
      slide.classList.remove('hidden');
    });

    // Если у кнопки нет атрибута data-solving-button, показываем все слайды в изначальном порядке
    if (!buttonValue) {
      // Очищаем контейнер слайдов
      sliderWrapper.innerHTML = '';

      // Восстанавливаем слайды в изначальном порядке
      initialSlidesOrder.forEach(slide => {
        sliderWrapper.appendChild(slide);
      });

      // Удаляем класс active-sort, так как сортировка неактивна
      sliderWrapper.classList.remove('active-sort');

      solvingSlide.update(); // Обновляем Swiper
      return;
    }

    // Добавляем класс active-sort, так как сортировка активна
    sliderWrapper.classList.add('active-sort');

    // Скрываем слайды и удаляем их из DOM
    slidesSuttonsSolving.forEach(slide => {
      const slideValue = slide.getAttribute('data-solving-slide');
      if (slideValue !== buttonValue) {
        slide.classList.add('hidden');
        hiddenSlides.push(slide); // Добавляем слайд в массив скрытых
        sliderWrapper.removeChild(slide); // Удаляем слайд из DOM
      }
    });

    // Обновляем Swiper
    solvingSlide.update();
  });
});


//инпут файл
document.addEventListener('DOMContentLoaded', function() {
	let inputs = document.querySelectorAll('.input__file');

	inputs.forEach(function(input) {
	  input.addEventListener('change', function() {
		let wrapper = input.closest('.input__file-label');
	  	let labelVal = wrapper.querySelector('.input__file-text').innerText;
		let countFiles = this.files.length;
		if (countFiles > 0) {
			wrapper.querySelector('.input__file-text').innerText = 'Прикреплено файлов: ' + countFiles;
		} else {
			wrapper.querySelector('.input__file-text').innerText = labelVal;
		}
	  });
	});
});

//закрыть меню при открытии модального окна на кнопку
const bottomMenuButton = document.querySelector('.bottom-menu__button')
if (bottomMenuButton) {
	bottomMenuButton.addEventListener('click', () => {
		setTimeout(() => {
			document.documentElement.classList.remove('menu-open')
		}, 500);
	})
}



    //Функция для настройки скачивания файлов
    function setupFileDownload(downloadButtonsSelector, sendButtonSelector) {
        let currentFilePath = null;

        const downloadButtons = document.querySelectorAll(downloadButtonsSelector);
        const sendButton = document.querySelector(sendButtonSelector);

        if (!downloadButtons.length || !sendButton) {
            return;
        }

        downloadButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                currentFilePath = button.getAttribute('data-file');
            });
        });

        sendButton.addEventListener('click', function(event) {
            event.preventDefault();

            if (currentFilePath) {
                const link = document.createElement('a');
                link.href = currentFilePath;
                link.download = currentFilePath.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }

    //Скачивания для каталога
    setupFileDownload('.catalog__button-download', '.popup-catalog-download__button-send');

    //Скачивания для реквизитов
    setupFileDownload('.contacts-item__button-down', '.popup-requisites-download__button-send');

    //Скачивания для презентации
    setupFileDownload('.about-present-downlod', '.popup-present-dowload__button-send');