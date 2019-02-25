export const cleanPhotos = (photos) => {
  console.log(photos)
  return photos.map((photo) => {
    const { id, description, photo_tags, user, urls } = photo;
    const { instagram_username, location, name, portfolio_url } = user;

    return {
      id, 
      description, 
      photo_tags,
      url: urls.thumb,
      user: {
        id: user.id,
        instagram_username,
        location,
        name, 
        portfolio_url 
      }
    }
  });
}