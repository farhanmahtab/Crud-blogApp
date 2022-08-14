import React from 'react'

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Blog = ({ title, description, image, name, isUser, user_id, blog_id }) => {
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate(`/myBlogs/${blog_id}`)
  }
  const deleteRequest = async () => {
    const res = await axios
      .put(`http://localhost:5000/api/news/delete/${blog_id}`, {
        blog_id: blog_id,
      })
      .catch((err) => console.log(err))
    const data = await res.data

    return data
  }
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate('/'))
      .then(() => navigate('/blogs'))
  }
  return (
    <div>
      <Card
        sx={{
          width: '90%',
          margin: 'auto',
          mt: 2,
          padding: 2,
          boxShadow: '5px 5px 10px #ccc',
          ':hover': {
            boxShadow: '10px 10px 20px #ccc',
          },
        }}
      >
        <Box display="flex">
        
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#3083FF'} }aria-label="recipe">
              {name[0]}
            </Avatar>
          }
          title={name}
        />
        {isUser && (
          <Box display="flex" sx={{ flexGrow: 1 }}>
            <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
              <EditIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        </Box>
        <CardMedia component="img" height="300" image={image} alt="image was not provided..." />
        <CardContent>
          <hr />
          <br />
          <Typography sx={{fontSize:16}} variant="body2" color="#1A2675"
          >
            <b className="bold">{title}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Blog
