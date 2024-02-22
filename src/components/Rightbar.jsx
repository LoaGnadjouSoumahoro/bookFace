import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
          />
          <Avatar alt="Cindy Baker" src="g" />
          <Avatar
            alt="/static/images/avatar/3.jpAgnes Walker"
            src="https://cdn.pixabay.com/photo/2019/12/11/21/26/portrait-4689362_1280.jpg"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              loading="lazy"
              src="https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              loading="lazy"
              src="https://media.istockphoto.com/id/1497139818/fr/photo/portrait-dune-famille-heureuse-en-journ%C3%A9e-dautomne-au-parc-%C3%A0-roulottes.jpg?s=2048x2048&w=is&k=20&c=RRFSEa-rZT_b0L8VPmHPMzrX8BSnnESO3uX51E0Uaqk="
            />
          </ImageListItem>
          <ImageListItem>
            <img
              loading="lazy"
              src="https://media.istockphoto.com/id/1443875817/fr/photo/des-gens-daffaires-heureux-prenant-une-pause-caf%C3%A9-au-travail.jpg?s=2048x2048&w=is&k=20&c=jNeawpNugKAGl-I3pp4aCAKcliF9-bzaRpi5twhfO8s="
            />
          </ImageListItem>
          <ImageListItem>
            <img
              loading="lazy"
              src="https://media.istockphoto.com/id/1288226189/fr/photo/bussinessman-asiatique.jpg?s=2048x2048&w=is&k=20&c=_FxaoWwP6FwAzwuiRKzY9CX98n_KLZrgnw2df-frQjg="
            />
          </ImageListItem>
          <ImageListItem>
            <img
              loading="lazy"
              src="https://media.istockphoto.com/id/912592258/fr/photo/surfant-sur-une-vague-de-chien.jpg?s=2048x2048&w=is&k=20&c=TYUpeBWTLhuO3K6gLaCan9yz-kfqKcAIRfTFhW65DSo="
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Last Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.pixabay.com/photo/2019/12/11/21/26/portrait-4689362_1280.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
