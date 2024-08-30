import React from 'react';

import imac from './assets/imac-24.svg';
import ipad from './assets/apple-ipad-pro-11.svg';
// import iphone from './assets/iphone-14-pro-max.svg';
import iphone from './assets/iphone-14-pro-max.png';
// import macbook from './assets/apple-macbook-pro-13.png';
import macbook from './assets/macbook-pro-14.svg';

const App = () => {

    function mouseHoverHander(status, e) {
        console.log('mouse ' + status);

        const target = e.target;
        const parent = target.parentElement;

        const classesToTogle = ['z-[30]', 'cursor-pointer'];


        if (status === 'enter') {
            parent.classList.add(...classesToTogle);
        } else {
            parent.classList.remove(...classesToTogle);
        }
    }

    function mouseClickHander(e) {
        const target = e.target;
        const parent = target.parentElement;
        const parentID = parent.getAttribute('id');
        const wrapper = parent.parentElement;
        const status = parent.getAttribute('data-status');

        const parentClasses = ['z-[20]', '!cursor-pointer', '!left-[50%]', '!top-[50%]', '!right-auto', '!bottom-auto', 'transform', 'translate-x-[-50%]', 'translate-y-[-50%]'];
        const wrapperClasses = [];

        switch (parentID) {
            case 'desktop':
                wrapperClasses.push('text-[25px]');
                break;
            case 'laptop':
                wrapperClasses.push('text-[40px]');
                break;
            case 'tablet':
                wrapperClasses.push('text-[40px]');
                break;
            case 'phone':
                wrapperClasses.push('text-[50px]');
                break;
            default:
                break;
        }

        if (status !== 'open') {
            // remove from all the elements that have data-status='open'
            const elements = document.querySelectorAll('[data-status="open"]');

            elements.forEach(element => {
                element.classList.remove(...parentClasses);
                element.setAttribute('data-status', '');
                element.parentElement.classList = '';
            });

            parent.classList.add(...parentClasses);
            parent.setAttribute('data-status', 'open');
            wrapper.classList.add(...wrapperClasses);
        } else {
            parent.classList.remove(...parentClasses);
            parent.setAttribute('data-status', '');
            wrapper.classList = '';
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className={'max-w-[62.5em] w-full border-1 relative h-[37.5em]'}>

                <div>
                    <div id='desktop' className='w-[34.1875em] absolute left-[13.75em] top-[2.5em] z-10  bo'>
                        <img className='relative z-10 w-max h-auto' src={imac} alt="" />
                        <div className='bg-green-500 absolute z-10 top-[2.125em] left-[1.375em] right-[1.40625em] bottom-[9.3125em]'
                            // onMouseEnter={(event) => mouseHoverHander('enter', event)}
                            // onMouseLeave={(event) => mouseHoverHander('leave', event)}
                            onMouseDown={(event) => mouseClickHander(event)}
                        ></div>
                    </div>
                </div>

                <div>
                    <div id='laptop' className='w-[25em] absolute right-[6.25em] bottom-[2.5em] z-10'>
                        <img className='relative z-10 w-max h-auto' src={macbook} alt="" />
                        <div className='bg-green-500 absolute z-10 top-[0.84375em] left-[2.5625em] right-[2.53125em] bottom-[1.78125em]'
                            // onMouseEnter={(event) => mouseHoverHander('enter', event)}
                            // onMouseLeave={(event) => mouseHoverHander('leave', event)}
                            onMouseDown={(event) => mouseClickHander(event)}
                        ></div>
                    </div>
                </div>

                <div>
                    <div id='tablet' className='w-[11.15625em] absolute bottom-[1.875em] left-[9.375em] z-10'>
                        <img className='relative z-10 w-max h-auto' src={ipad} alt="" />
                        <div className='bg-green-500 absolute z-10 top-[0.875em] left-[0.5625em] right-[0.5625em] bottom-[0.5625em] rounded-[0.125em] rounded-t-none'
                            // onMouseEnter={(event) => mouseHoverHander('enter', event)}
                            // onMouseLeave={(event) => mouseHoverHander('leave', event)}
                            onMouseDown={(event) => mouseClickHander(event)}
                        ></div>
                    </div>
                </div>

                <div>
                    <div id='phone' className='w-[4.8375em] absolute bottom-[1.25em] left-[21.875em] z-10'>
                        <img className='relative z-1 w-max h-auto' src={iphone} alt="" />
                        <div className='bg-green-500 absolute z-10 top-[0.9375em] left-[0.20625em] right-[0.21875em] bottom-[0.1875em] rounded-[0.625em] rounded-t-none'
                            // onMouseEnter={(event) => mouseHoverHander('enter', event)}
                            // onMouseLeave={(event) => mouseHoverHander('leave', event)}
                            onMouseDown={(event) => mouseClickHander(event)}
                        ></div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default App;
