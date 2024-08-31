import React, { useEffect, useState } from 'react';

import imac from './assets/imac-24.png';
import ipad from './assets/apple-ipad-pro-11.png';
import iphone from './assets/iphone-14-pro-max.png';
import macbook from './assets/macbook-pro-14.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const App = () => {

    const [url, setUrl] = useState('https://react.dev/');
    const [inputValue, setInputValue] = useState(url);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleButtonClick = (e) => {
        e.stopPropagation();

        const darkOverlay = document.querySelector('.dark-overlay');

        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            if (button !== e.target) {
                button.classList.remove('active');
                button.parentElement.classList.remove('active');
                button.parentElement.parentElement.classList.remove('active');
                button.parentElement.style.transform = '';
            }

        });

        const button = e.target;
        const container = button.parentElement;
        const wrapper = container.parentElement;
        button.classList.toggle('active');
        container.classList.toggle('active');
        wrapper.classList.toggle('active');

        const allContainers = document.querySelectorAll('.device-container');
        allContainers.forEach(cont => {
            if (!cont.classList.contains('active')) {
                cont.classList.add('inactive');
            } else {
                cont.classList.remove('inactive');
            }
        });

        if (container.classList.contains('active')) {
            scaleToFit(container);
            darkOverlay.classList.add('visible');
        } else {
            container.style.transform = '';
            darkOverlay.classList.remove('visible');
        }
    };

    const scaleToFit = (element) => {
        const rect = element.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const scaleX = windowWidth / rect.width;
        const scaleY = windowHeight / rect.height;
        const scale = Math.min(scaleX, scaleY);

        element.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    useEffect(() => {
        const darkOverlay = document.querySelector('.dark-overlay');

        const handleLoad = () => {
        };

        const handleClickOutside = () => {
            const buttons = document.querySelectorAll('.button');
            buttons.forEach(button => {
                button.classList.remove('active');
                button.parentElement.classList.remove('active');
                button.parentElement.parentElement.classList.remove('active');
                button.parentElement.style.transform = '';
                darkOverlay.classList.remove('visible');
            });
            const allContainers = document.querySelectorAll('.device-container');
            allContainers.forEach(cont => {
                cont.classList.remove('inactive');
            });
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('load', handleLoad);
            setIsLoaded(true);
        };

    }, []);

    const handleSubmit = () => {
        setUrl(inputValue);
    };

    return (
        <>
            {/* <div className={isLoaded ? "loading hidden" : "loading"}>
                <div className="loading__spinner">
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                </div>
            </div> */}
            <div className='dark-overlay'></div>

            <div className=''>
                <input
                    className=' w-full h-10 text-center' type="text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button className='w-full h-10 bg-gray-800 text-white' onClick={handleSubmit}>Go</button>
            </div>
            <div className="flex justify-center items-center min-h-screen">
                <div className={'max-w-[62.5em] w-full border-1 relative h-[37.5em]'}>

                    <div className='device-wrapper'>
                        <div id='desktop' className='device-container w-[34.1875em] absolute left-[13.75em] top-[2.5em] z-10'>
                            <button className='button' onClick={handleButtonClick}>
                                <FontAwesomeIcon className='pointer-events-none transition-all duration-400' icon={faPlus} />
                            </button>
                            <img className='relative z-10 w-max h-auto' src={imac} alt="" />
                            <div className='bg-black absolute z-10 top-[2.125em] left-[1.375em] right-[1.40625em] bottom-[9.3125em] overflow-hidden'>
                                <iframe src={url} className=' -z-10 scale-[.226] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[2240px] h-[1210px]' title="W3Schools Free Online Web Tutorials" />
                            </div>
                        </div>
                    </div>

                    <div className='device-wrapper'>
                        <div id='laptop' className='device-container w-[25em] absolute right-[6.25em] bottom-[2.5em] z-10'>
                            <button className='button' onClick={handleButtonClick}>
                                <FontAwesomeIcon className='pointer-events-none transition-all duration-400' icon={faPlus} />
                            </button>
                            <img className='relative z-10 w-max h-auto' src={macbook} alt="" />
                            <div className='bg-black absolute z-10 top-[0.84375em] left-[2.5625em] right-[2.53125em] bottom-[1.78125em] overflow-hidden'>
                                <iframe src={url} className='scale-[.211] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1512px] h-[950px]' title="W3Schools Free Online Web Tutorials" />
                            </div>
                        </div>
                    </div>

                    <div className='device-wrapper'>
                        <div id='tablet' className='device-container w-[11.15625em] absolute bottom-[1.875em] left-[9.375em] z-10'>
                            <button className='button' onClick={handleButtonClick}>
                                <FontAwesomeIcon className='pointer-events-none transition-all duration-400' icon={faPlus} />
                            </button>                        <img className='relative z-10 w-max h-auto' src={ipad} alt="" />
                            <div className='bg-black absolute z-10 top-[0.875em] left-[0.5625em] right-[0.54em] bottom-[0.5625em] rounded-[0.125em] rounded-t-none overflow-hidden'>
                                <iframe src={url} className='scale-[.195] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[834px] h-[1160px]' title="W3Schools Free Online Web Tutorials" />
                            </div>
                        </div>
                    </div>

                    <div className='device-wrapper'>
                        <div id='phone' className='device-container w-[4.8375em] absolute bottom-[1.25em] left-[21.875em] z-10'>
                            <button className='button' onClick={handleButtonClick}>
                                <FontAwesomeIcon className='pointer-events-none transition-all duration-400' icon={faPlus} />
                            </button>
                            <img className='relative z-1 w-max h-auto' src={iphone} alt="" />
                            <div className='bg-black absolute z-10 top-[0.8em] left-[0.20625em] right-[0.21875em] bottom-[0.1875em] rounded-[0.625em] rounded-t-none overflow-hidden'>
                                <iframe src={url} className='scale-[.165] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[430px] h-[870px]' title="W3Schools Free Online Web Tutorials" />
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
};

export default App;
