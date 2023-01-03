import React from 'react';
import './Issue.css';
import { Icon } from '@iconify/react';


const Issue = ({ issue }) => {
    return (
        <div className='issue'>
            <div className='issue-title'>
                <label>{issue.title}</label>
                {
                    issue.labels.map((label) => {
                        return (
                            <>
                                <span key={label.id} style={{
                                    backgroundColor: `#${label.color}`
                                }}
                                    className="batches"
                                >{label.name}</span>
                            </>
                        )
                    })
                }
                
            </div>
            <div className='issue-detail'>
                <span>#{issue.number} {issue.state === "open" ? "opened" : null} by {issue.user.login}</span>
            </div>
        </div>
    )
}

export default Issue