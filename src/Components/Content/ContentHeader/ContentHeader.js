import React from 'react';
import './ContentHeader.css';
import Link from "../../Links/Link";
import { Icon } from '@iconify/react';
const headerLinks = ["Author", "Label", "Projects", "Milestones", "Assignee", "Sort"];

const TotalCount = ({ stateCount, stateName, styleName, icon }) => {
    return (
        <div className={styleName} >
            <Icon icon={icon} color='grey' />
            <label>{stateCount} {stateName}</label>
        </div>
    )
}

const ContentHeader = ({ openedIssue, closedIssue }) => {
    return (
        <div className='content-header'>
            <div className='left-section'>
                <TotalCount stateCount={openedIssue} stateName="Opened" styleName="opened-issue-count" icon="octicon:issue-opened-16" />
                <TotalCount stateCount={closedIssue} stateName="Closed" icon="octicon:check-16" />
            </div>
            <div className='right-section'>
                {
                    headerLinks.map((linkName) => {
                        return <Link name={linkName} textColor="grey" isVisible={true} />
                    })
                }

            </div>

        </div>
    )
}

export default ContentHeader