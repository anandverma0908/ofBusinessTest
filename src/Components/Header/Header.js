import React from 'react';
import Link from '../Links/Link';
import './Header.css';
import { Icon } from '@iconify/react';
import menu from "../../assets/menu.png";

const tabs = [
  {
    name: "Code",
    icon: "octicon:code-16"
  },
  {
    name: "Issues",
    icon: "octicon:issue-opened-16"
  },
  {
    name: "Pull Requests",
    icon: "octicon:git-pull-request-16",
  }, {
    name: "Actions",
    icon: "octicon:play-16"
  },
  {
    name: "Projects",
    icon: "octicon:table-16"
  }, {
    name: "Wiki",
    icon: "octicon:book-16"
  }, {
    name: "Security",
    icon: "octicon:shield-16",
  }, {
    name: "Insights",
    icon: "octicon:shield-16"
  }];

const Header = () => {
  return (
    <div className='header'>
      <div className='header-upper-section'>
        <div className='header-title'>
          <div className='icon'>
            <Icon icon="octicon:repo-16" color='grey' />
          </div>
          <a href='/'>facebook</a>
          <span> / </span>
          <a href='#'><strong>react</strong></a>
        </div>
        <div className='header-buttons'>
          <div>
            <Icon icon="octicon:bell-16" color='black' />
            <button>Notification</button>
          </div>
          <div>
            <Icon icon="octicon:star-16" color='black' />
            <button>Star</button>
            <span>175k</span>
          </div>
          <div>
            <Icon icon="octicon:repo-forked-16" color='black' />
            <button>Fork</button>
            <span>35.3k</span>
          </div>
        </div>
      </div>
      <div className='header-links'>
        {
          tabs.map((tabName) => {
            return (
              <div className='header-menu-links'>
                <Icon icon={tabName.icon} color="gray" />
                <Link name={tabName.name} textColor="darkgrey" />
              </div>)
          })
        }
      </div>
    </div>
  )
}

export default Header