import React from 'react'
import { Link } from 'gatsby'

import { slide as Menu } from 'react-burger-menu'
import './menu.css'

class ToggleMenu extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return <Menu >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/tags">Category</Link>
            <Link to="/postlist">All Posts</Link>
          </Menu>
    }
}

export default ToggleMenu;