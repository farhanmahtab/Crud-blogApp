import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'

function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const dispath = useDispatch()

  const [value, setValue] = useState()
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          background:
            'linear-gradient(90deg, hsla(258, 80%, 38%, 1) 0%, hsla(126, 61%, 59%, 1) 100%)',
        }}
      >
        <Toolbar>
          <Typography variant="h4"> Blogs</Typography>

          {isLoggedIn && (
            <Box display="flex" marginLeft={'auto'} marginRight="auto">
              <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
                <Tab LinkComponent={Link} to="/profile" label="profile" />
              </Tabs>
            </Box>
          )}

          <Box display="flex" marginLeft="auto">
            {isLoggedIn && (
              <Button
                onClick={() => dispath(authActions.logout())}
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 5 }}
                color="warning"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
