import image from '../../images/man.jpg'

export default function Post() {
    return(
        <div className="post">
        <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="texts">
      <h2>New Korean Anime Series, 'The Boy and his Cat'</h2>
      <p className="info">
        <a className="author">Ibrahim Taofeek</a>
        <time>20-09-2023 07:10</time>
      </p>
      <p className='summary'>Anime lovers, a new anime series has hit the town and has trend enough to be the talk of the town. Catch the latest news about this thriller here.</p>
        </div>
    </div>
    );
}