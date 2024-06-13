export const movievideos = async (req, res) => {
  try {
    const { movieID } = req.params;

    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieID +
        '/videos?language=en-US',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + process.env.MOVIES,
        },
      }
    );
    const json = await data.json();
    res.status(200).json({ json });
  } catch (error) {
    console.log('Error in moivevideos controller', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const nowplayingmovies = async (req, res) => {
  try {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + process.env.MOVIES,
        },
      }
    );
    const json = await data.json();

    res.status(200).json({ json });
  } catch (error) {
    console.log('Error in moivevideos controller', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
