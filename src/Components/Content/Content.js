import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import Issue from '../Issue/Issue';
import './Content.css';
import ContentHeader from './ContentHeader/ContentHeader';
import { Icon } from '@iconify/react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Content = () => {
    const [issues, setIssues] = useState([]);
    const [currentIssue, setCurrentIssue] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [openedIssue, setOpenedIssue] = useState(0);
    const [closedIssue, setClosedIssue] = useState(0);
    const dataFetchedRef = useRef(false);
    const issuesPerPage = 5;

    const fetchMoreData = () => {
        if (page === (issues.length / issuesPerPage))
            setHasMore(false);

        const indexOfLastIssue = page * issuesPerPage;
        const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
        let currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);
        currentIssues = currentIssue.concat(currentIssues);
        setCurrentIssue(currentIssues);
        setPage((prev) => prev + 1);
    }

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 800);

        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        (async () => {
            const URL = "https://api.github.com/repos/facebook/react/issues";
            const result = await axios.get(URL);

            let totalOpened = result.data.reduce((prevValue, currentValue) => {
                if (currentValue.state === "open")
                    return prevValue + 1;
            }, 0);

            setOpenedIssue(totalOpened);
            setIssues(result.data);

            const indexOfLastIssue = page * issuesPerPage;
            const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
            const currentIssues = result.data.slice(indexOfFirstIssue, indexOfLastIssue);
            setCurrentIssue(currentIssues);
            setPage((prev) => prev + 1);
        })();

    }, []);

    if (isLoading) {
        return (
            <div>


            </div>
        )
    } else {
        return (
            <div className='content-container'>
                <div className='main-content'>
                    <ContentHeader openedIssue={openedIssue} closedIssue={closedIssue} />

                    <InfiniteScroll
                        dataLength={currentIssue.length} //This is important field to render the next data
                        next={fetchMoreData}
                        hasMore={hasMore}
                    >
                        {
                            currentIssue.map((issue, index) => {
                                return (
                                    <div key={issue.id}>
                                        <div className="issues">

                                            <div className='issues-left'>
                                                <div className='icon'>
                                                    <Icon icon="octicon:issue-opened-16" color="green" />
                                                </div>
                                                <Issue issue={issue} />
                                            </div>

                                            {
                                                (issue.comments > 0) && (
                                                    <div className='comments'>
                                                        <Icon icon="octicon:comment-16" color="gray" />
                                                        <span>{issue.comments}</span>
                                                    </div>
                                                )
                                            }

                                        </div>
                                        {
                                            (index < (currentIssue.length - 1)) && <hr className='divider' />
                                        }
                                    </div>
                                )
                            })
                        }
                    </InfiniteScroll>
                </div>
            </div>
        )
    }

}

export default React.memo(Content);