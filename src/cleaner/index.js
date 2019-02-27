export const cleanPhotos = (photos) => photos.map((photo) => {
  const {
    id,
    description,
    photo_tags,
    user,
    urls,
    color,
  } = photo;

  const {
    instagram_username,
    location,
    name,
    portfolio_url,
    profile_image,
  } = user;

  return {
    id,
    color,
    description,
    photo_tags,
    url: urls.small,
    user: {
      id: user.id,
      instagram_username,
      location,
      name,
      portfolio_url,
      profile_image: profile_image.small,
    },
  };
});
