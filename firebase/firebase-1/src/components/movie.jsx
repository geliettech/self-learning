import { useEffect, useState } from "react";
import { db, auth } from '../config/firebase'
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";


function Movie() {
  const [movieList, setMovieList] = useState([])

  // New Movie States
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0);
  const [newMovieReceivedAnOscar, setNewMovieReceivedAnOscar] =
    useState(false);

  //update title state
  const [updatedTitle, setUpdatedTitle] = useState("")

  const moviesCollectionRef = collection(db, "movies")

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovieList()
  })


  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, { title: newMovieTitle, releaseDate: newMovieReleaseDate, receivedAnOscar: newMovieReceivedAnOscar, userId: auth?.currentUser?.uid });
    } catch (err) {
      console.error(err);
    } finally {
      getMovieList()
    }
  }

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id)
    try {
      await deleteDoc(movieDoc)
    } catch (err) {
      console.error(err);
    } finally {
      getMovieList()
    }
  }

  const UpdatedMoveTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);

    try {
      await updateDoc(movieDoc, { title: updatedTitle });
    } catch (err) {
      console.error(err);
    } finally {
      getMovieList();
    }
  }

  return (
    <>
      <div className="movie-form">
        <input
          type="text"
          placeholder="Movie title..." onChange={(e) => setNewMovieTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Release date..." onChange={(e) => setNewMovieReleaseDate(Number(e.target.value))}
        />

        <div className="checkbox-group">
          <input type="checkbox" id="oscar" checked={newMovieReceivedAnOscar} onChange={(e) => setNewMovieReceivedAnOscar(e.target.checked)} />
          <label htmlFor="oscar">Received An Oscar</label>
        </div>

        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
      <div className="movie-list">
        {movieList.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h3>Title: {movie.title}</h3>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Received An Oscar: {movie.receivedAnOscar ? "Yes" : "No"}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            <input type="text" name="" id="" placeholder="new movie title..." onChange={(e) => setUpdatedTitle(e.target.value)} />
            <button onClick={() => UpdatedMoveTitle(movie.id)}>Update Title</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Movie
