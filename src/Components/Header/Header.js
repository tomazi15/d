import React, { useState } from "react";
import './Header.scss';
import { FaRegThumbsUp } from 'react-icons/fa';

import { Navbar, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { connect } from 'react-redux';

export function Header (props) {

    const [list, showList] = useState(false);
    const { liked } = props;

    const handleLikedList = () => {
        list ? showList(false) : showList(true);
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Liked Items</Popover.Title>
          {liked.map(item => {
            return <Popover.Content key={item}>
                    {item}
                </Popover.Content>
          })} 
        </Popover>
    );

    return (
        <div className="Header">
            <Navbar variant="light" bg="light">
                <Navbar.Brand>Depop</Navbar.Brand>

                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <Button 
                        className="Header__likedList"
                        variant="link"
                        onClick={handleLikedList}>
                            <FaRegThumbsUp /> 
                            <span>{ liked.length }</span>
                    </Button>
                </OverlayTrigger>
            </Navbar>
        </div>
      );
}

const mapStateToProps = (state) => {
    return {
        liked: state.liked
    }
}

export default connect(mapStateToProps, null)(Header);