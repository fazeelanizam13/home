import { useEffect } from 'react';
import horizon from '../images/horizon.svg';
import be from '../images/be.png';
import li from '../images/li.png';
import blog from '../images/blog.png';
import gh from '../images/gh.png';
import ReactGA from 'react-ga4';

import { stars } from '../helpers';

export default function Home() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview' });
  }, []);

  // sky
  useEffect(stars, []);

  return (
    <>
      <div id='sky'>
        <div className='star'></div>
        <div className='content'>
          <div className='icons'>
            <a href='https://gist.github.com/fazeelanizam13' target='_blank' rel='noreferrer' title='gists/github'>
              <img src={gh} alt='' />
            </a>
            <a href='https://not-a-tech-blog.web.app/' target='_blank' rel='noreferrer' title='blog'>
              <img src={blog} alt='' />
            </a>
            <a href='https://www.linkedin.com/in/fazeelanizam/' target='_blank' rel='noreferrer' title='linkedin'>
              <img src={li} alt='' />
            </a>
            <a href='https://www.behance.net/fazeelanizam' target='_blank' rel='noreferrer' title='behance'>
              <img src={be} alt='' />
            </a>
          </div>
        </div>
        <img id='horizon' src={horizon} alt='horizon' />
      </div>
    </>
  );
}
