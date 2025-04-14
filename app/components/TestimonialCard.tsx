"use client";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const glowStyles = {
  boxShadow: "0 0 15px rgba(80, 200, 255, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 25px rgba(80, 200, 255, 0.5)",
    transform: "translateY(-2px)",
  },
};

const testimonials = [
  {
    quote: "Kylee has been a huge asset to our team, confidently leading the engineering team toward a collaborative open-source approach. She independently shaped her role, improving our developer experience and advocating for our community. In a short time, she built a strong foundation for our open-source community, significantly increasing the development team's capacity. I highly recommend her to future employers.",
    author: "Eleanor Re'em",
    role: "Senior Software Engineer at Chayn"
  },
  {
    quote: "Kylee's exceptional talent for community building and developer education stood out at Nervos Network. She played a pivotal role in educating developers, organizing events, and advocating for our community. Her strategic vision and flawless execution significantly boosted developer engagement and community growth. Any team would be lucky to have her.",
    author: "Anubha Maneshwar",
    role: "Developer Relations Manager at Nervos Network & Founder"
  }
];

export default function TestimonialCard() {
  return (
    <Grid container spacing={3}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              backgroundColor: "rgba(30, 30, 35, 0.6)",
              borderRadius: 4,
              border: "1px solid rgba(255, 130, 255, 0.2)",
              ...glowStyles,
              "&:hover": {
                boxShadow: "0 0 25px rgba(255, 130, 255, 0.5)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontStyle: "italic", color: "#fff" }}
              >
                "{testimonial.quote}"
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#ff82ff" }}
              >
                {testimonial.author}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                {testimonial.role}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
} 