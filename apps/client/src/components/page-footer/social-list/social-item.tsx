import React from 'react';

export default function SocialItem():JSX.Element {
  return(
    <>
    <li className="socials-item"><a className="socials__link" href="https://www.skype.com/" aria-label="Мы в skype">
        <svg className="socials__icon" width="24" height="24" aria-hidden="true">
          <use xlinkHref="#icon-skype"></use>
        </svg></a></li>    
    </>
  );
}