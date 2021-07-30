import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import DeveloperCardImage from '../images/DeveloperCardImage.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const name = 'William Watson';
const bio =
  'Software Engineer from Queens, New York with a passion for front-end mobile and web application development. When William is not coding you might find him working on his golf game or rewatching the X-Files.';
const twitterIcon = <FontAwesomeIcon icon={faTwitter} size='2x' />;
const githubIcon = <FontAwesomeIcon icon={faGithub} size='2x' />;
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size='2x' />;

const Developer = () => {
  return (
    <Container className='developer-container'>
      <h1>Meet the Developer!</h1>
      <div className='border-top border-primary w-50 mx-auto my-3 pb-4'></div>
      <Card style={{ width: '20rem' }} className='card'>
        <Card.Img variant='top' src={DeveloperCardImage} />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>{name}</Card.Title>
          <Card.Text>{bio}</Card.Text>
          <div className='socials'>
            <a
              href='https://twitter.com/concatWill'
              target='_blank'
              rel='noreferrer'
            >
              {twitterIcon}
            </a>
            <a
              href='https://www.linkedin.com/in/williampwatson'
              target='_blank'
              rel='noreferrer'
            >
              {linkedinIcon}
            </a>
            <a
              href='https://github.com/Will-Watson'
              target='_blank'
              rel='noreferrer'
            >
              {githubIcon}
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Developer;
