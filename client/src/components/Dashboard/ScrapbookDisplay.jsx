import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import thumbnailImg from "../../assets/thumbnail-placeholder.jpg";
import { useNavigate } from 'react-router-dom';

const ScrapbookDisplay = ({ scrapbooks }) => {
  const navigate = useNavigate();

  const getScrapbook = (id) => {
    navigate(`/scrapbook/${id}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        paddingTop: { xs: '5rem', sm: '7rem', md: '9rem' },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          width: '100%',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          justifyContent: 'center',
        }}
      >
        {scrapbooks.map((scrapbook, index) => (
          <Card
            onClick={() => getScrapbook(scrapbook.id)}
            key={index}
            sx={{
              width: { xs: 200, sm: 250, md: 300 },
              height: { xs: 200, sm: 250, md: 300 },
              padding: 2,
              borderRadius: 5,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                borderRadius: 5,
                height: { xs: 100, sm: 150, md: 200 },
              }}
              image={scrapbook.img || thumbnailImg}
              alt="scrapbook-thumbnail"
            />
            <CardContent sx={{ padding: 1 }}>
              <Typography variant="h6" component="div">
                {scrapbook.title.length > 18
                  ? `${scrapbook.title.slice(0, 18)}...`
                  : scrapbook.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {scrapbook.pages.length} pages
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ScrapbookDisplay;
