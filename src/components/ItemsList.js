import React, { useState, useEffect, useRef } from 'react';
import {Transition} from "react-transition-group";


export   const  ItemsList = ({ itemsData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entered: { opacity: 1 },
  };

  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <Transition in={isVisible} timeout={duration} key={item.id} nodeRef={elementRef}>
            {(state) => (
              <div
                ref={elementRef}
                className={`mb-3 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <div className="bg-gray-200 p-4">
                  <img className="img-item" src={item.imgUrl} alt={item.title} />
                  <div className="flex justify-between">
                    <h2 className="item-title">{item.title}</h2>
                    <div className="item-price">{item.price}</div>
                  </div>
                  <p className="py-2 item-description">{item.description}</p>
                </div>
              </div>
            )}
          </Transition>
        ))
      ) : (
        <h3 className="text-center">لا يوجد أصناف</h3>
      )}
    </div>
  );
};
